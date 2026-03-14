# MCP (Model Context Protocol) – Notes

## 1. Core idea
- MCP is an open-source standard (by Anthropic) for connecting AI applications to external systems (tools, data sources, workflows).[attached_file:1][page:1]  
- It solves the “LLM in a box” problem: models can reason well but cannot directly access your files, databases, or APIs without a standardized integration layer.[attached_file:1][page:1]  
- MCP is “write once, use anywhere”: build an MCP server once and any MCP-compatible host (ChatGPT, Claude, IDEs) can use it.[attached_file:1][page:1]

## 2. Why MCP is needed
- LLMs cannot natively access calendars, run SQL, send emails, or work with real-time data; they only know what’s in their training set.[attached_file:1][page:1]  
- Naive integrations cause the MxN problem: M models × N tools leads to custom glue code for each combination.[attached_file:1][page:1]  
- Vendor-specific function calling (e.g., OpenAI tools) creates lock-in; MCP offers a model- and vendor-agnostic protocol.[attached_file:1][page:1]

## 3. High-level analogy
- MCP is like a “USB-C port” for AI: a standard connector between AI apps and external systems (local files, databases, APIs, search, calculators, etc.).[attached_file:1][page:1]  
- Any host that implements MCP can plug into any MCP server that exposes tools/resources/prompts.[attached_file:1][page:1]

## 4. Architecture overview
MCP uses a client–server model with three main pieces.[attached_file:1][page:1]

### 4.1 MCP Host
- User-facing AI application where the LLM “lives” and user interacts (e.g., ChatGPT UI, Claude Desktop, AI IDEs like Cursor/Windsurf).[attached_file:1][page:1]  
- Responsibilities: Manage discovery of servers, handle permissions & user confirmation, route communication between MCP clients and MCP servers.[attached_file:1][page:1]

### 4.2 MCP Client
- Component inside the host that talks to a specific MCP server.[attached_file:1][page:1]  
- Each client manages one direct connection to one server and handles the low-level protocol details.[attached_file:1][page:1]

### 4.3 MCP Server
- External program/service that exposes capabilities (tools, resources, prompts) in a standard format.[attached_file:1][page:1]  
- Wraps underlying functionality: DBs, APIs, file systems, SaaS services; runs locally or remotely.[attached_file:1][page:1]

## 5. MCP server capabilities
- **Tools**: Actions like `send_email`, `database_query` (LLM-triggered).[attached_file:1][page:1]  
- **Resources**: Read-only data (DB records, knowledge bases).[attached_file:1][page:1]  
- **Prompts**: Predefined templates/workflows.[attached_file:1][page:1]

## 6. Transport layer
- **stdio**: For local, fast/synchronous.[attached_file:1][page:1]  
- **SSE**: For remote, real-time streaming (JSON-RPC 2.0).[attached_file:1][page:1]

## 7. Example workflow
1. Tool discovery: Client lists available tools.[attached_file:1][page:1]  
2. LLM plans sequence (e.g., query DB → send email).[attached_file:1][page:1]  
3. User approves each action → servers execute → natural response.[attached_file:1][page:1]

## 8. Comparisons
| Aspect | MCP | RAG | A2A |
|--------|-----|-----|-----|
| Purpose | Agent-to-tool (actions) | Knowledge retrieval | Agent-to-agent |
| Use case | DB queries, emails | Q&A from docs | Multi-agent collab |[attached_file:1][page:1]

## 9. Resources
- Official: modelcontextprotocol.io[attached_file:1]  
- Awesome servers: github.com/punkpeye/awesome-mcp-servers[attached_file:1]  
- Build course: huggingface.co/mcp-course[attached_file:1]