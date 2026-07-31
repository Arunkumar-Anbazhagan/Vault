import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VAULT_DIR = __dirname;
const IGNORE_DIRS = ['.git', '.obsidian', '.stfolder', '.stversions', '.openclaw', '.trash', '00_System', 'Templates'];

function getMarkdownFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (IGNORE_DIRS.includes(file)) continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getMarkdownFiles(filePath, filesList);
    } else if (file.endsWith('.md')) {
      filesList.push(filePath);
    }
  }
  return filesList;
}

const server = new Server(
  {
    name: "obsidian-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "search_vault",
        description: "Search note titles, content, or tags in the Obsidian vault using a keyword query.",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search keyword, tag (e.g., '#tag'), or phrase."
            }
          },
          required: ["query"]
        }
      },
      {
        name: "read_note",
        description: "Read the full contents of a specific markdown note in the vault.",
        inputSchema: {
          type: "object",
          properties: {
            relativePath: {
              type: "string",
              description: "The relative path of the markdown file within the vault (e.g., '10_Career/Development/Javascript/Arrow functions.md')."
            }
          },
          required: ["relativePath"]
        }
      }
    ]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === "search_vault") {
      const query = args.query.toLowerCase();
      const allFiles = getMarkdownFiles(VAULT_DIR);
      const results = [];

      for (const filePath of allFiles) {
        const relativePath = path.relative(VAULT_DIR, filePath);
        const content = fs.readFileSync(filePath, 'utf-8');
        const fileName = path.basename(filePath, '.md');
        
        const matchedInTitle = fileName.toLowerCase().includes(query);
        const matchedInContent = content.toLowerCase().includes(query);

        if (matchedInTitle || matchedInContent) {
          let snippet = "";
          if (matchedInContent) {
            const idx = content.toLowerCase().indexOf(query);
            const start = Math.max(0, idx - 60);
            const end = Math.min(content.length, idx + query.length + 60);
            snippet = content.substring(start, end).replace(/\r?\n/g, ' ');
            if (start > 0) snippet = "..." + snippet;
            if (end < content.length) snippet = snippet + "...";
          } else {
            snippet = content.substring(0, 120).replace(/\r?\n/g, ' ') + "...";
          }
          
          results.push({
            title: fileName,
            path: relativePath,
            matchedIn: matchedInTitle ? "title" : "content",
            snippet: snippet.trim()
          });
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(results, null, 2)
          }
        ]
      };
    } else if (name === "read_note") {
      const relPath = args.relativePath;
      const targetPath = path.join(VAULT_DIR, relPath);
      
      const resolvedTarget = path.resolve(targetPath);
      const resolvedVault = path.resolve(VAULT_DIR);
      if (!resolvedTarget.startsWith(resolvedVault)) {
        throw new Error("Access denied: Path is outside the Obsidian vault.");
      }

      if (!fs.existsSync(targetPath)) {
        throw new Error(`File not found: ${relPath}`);
      }

      const content = fs.readFileSync(targetPath, 'utf-8');
      return {
        content: [
          {
            type: "text",
            text: content
          }
        ]
      };
    } else {
      throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error.message}`
        }
      ],
      isError: true
    };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Obsidian MCP Server running on stdio");
