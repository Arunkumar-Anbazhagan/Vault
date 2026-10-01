# GitHub Actions: A Beginner's Guide

**How to read the citations:** `[Docs-1]` etc. point to the official GitHub documentation listed in the *Sources* section at the end. Statements marked with a source were checked against those pages (paraphrased, not copied). Anything without a marker is my own explanation or common practice; confirm details in the docs before relying on them for production.

---

## 1. What is GitHub Actions?

GitHub Actions is GitHub's built-in **CI/CD platform**. It automates the build, test and deployment pipeline, for example building and testing every pull request, or deploying a merged pull request to production \[Docs-1\].

It is not limited to CI/CD. Workflows can also run on other repository events, such as automatically labelling a newly created issue \[Docs-2\].

**CI vs CD in one line each**

- **Continuous Integration (CI):** every change is automatically built and tested so problems are caught early.
- **Continuous Delivery/Deployment (CD):** tested changes are automatically packaged and released to an environment.

---

## 2. The core building blocks

| Concept | What it is |
| --- | --- |
| **Event** | Something that happens (push, pull request, issue created, a schedule) and triggers a workflow \[Docs-2\] |
| **Workflow** | An automated process defined in a YAML file; contains one or more jobs \[Docs-2\] |
| **Job** | A group of steps that runs on one runner. Jobs run in parallel by default \[Docs-3\] |
| **Step** | A single task inside a job: either a shell command (`run`) or a reusable action (`uses`) \[Docs-4\] |
| **Action** | A reusable unit that reduces repetitive code, e.g. checking out your repo or setting up a language toolchain \[Docs-2\] |
| **Runner** | The machine that executes a job, set with `runs-on` \[Docs-3\] |

Mental model: **Event → Workflow → Jobs → Steps (actions or commands), each job running on a runner.**

Workflow files live in the `.github/workflows/` folder of your repository and are written in YAML.

---

## 3. Anatomy of a workflow file

The standard top-level elements are: `name` (optional but recommended, shown in the GitHub UI), `on` (the triggering events), `jobs`, `runs-on` (which runner), `steps`, `uses` (pull in a predefined action) and `run` (execute a command on the runner) \[Docs-4\].

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Check out code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
```

Line by line:

1. `on:` runs this workflow on pushes to `main` and on any pull request.
2. `runs-on: ubuntu-latest` picks a GitHub-hosted Linux runner.
3. `actions/checkout` downloads your code onto the runner (a runner starts empty).
4. `setup-node` installs Node and caches dependencies.
5. `run` steps execute shell commands. If any step fails, the job fails.

Steps within a job execute on the same runner, so they can share files \[Docs-4\].

---

## 4. Triggers (`on`)

Common triggers:

- `push`, `pull_request`: code changes
- `schedule` with a cron expression: time-based runs
- `workflow_dispatch`: manual "Run workflow" button
- `release`, `issues`, `workflow_call` (reusable workflows) and many more

You can filter by branch, path or event type:

```yaml
on:
  push:
    branches: [main, develop]
    paths-ignore: ["docs/**", "*.md"]
  pull_request:
    types: [opened, synchronize, reopened]
  schedule:
    - cron: "0 2 * * 1"   # Mondays 02:00 UTC
```

(The syntax above matches the example workflow in \[Docs-4\]'s training module; the full list of events is in the workflow-syntax reference.)

---

## 5. Jobs: parallel, sequential, dependent

- A workflow run has one or more jobs, which run **in parallel by default**. To run them **sequentially**, declare dependencies with `needs` \[Docs-3\].
- Every job specifies its environment with `runs-on` \[Docs-3\].
- `needs` accepts a string or an array. If a needed job fails or is skipped, jobs depending on it are skipped too, unless you add a conditional expression that lets them continue \[Docs-3\].
- A job ID must start with a letter or underscore and contain only alphanumeric characters, `-` or `_` \[Docs-3\].

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build

  deploy:
    needs: build          # waits for build to succeed
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying..."
```

---

## 6. Runners

Runners are the machines that execute jobs.

- **GitHub-hosted runners:** managed by GitHub (Ubuntu, Windows, macOS). Easiest to start with.
- **Self-hosted runners:** machines you manage yourself. They can be physical, virtual, in a container, on-premises or in the cloud, running Linux, Windows or macOS \[Docs-2\].

Usage limits and billing differ between the two; see the official page on usage limits and billing for GitHub-hosted runners, which \[Docs-3\] points to.

---

## 7. Secrets, variables and the `GITHUB_TOKEN`

- **Never** put passwords or API keys in workflow files. Store them as encrypted **secrets** in repository/organization settings and read them with `${{ secrets.NAME }}`.
- Non-sensitive config can go in `env:` or repository **variables** (`${{ vars.NAME }}`).
- Each run gets an automatic `GITHUB_TOKEN`, available through the `github.token` context \[Docs-5\].

Official security guidance worth knowing from day one \[Docs-5\]:

- Automatic redaction of secrets in logs is not guaranteed, since values can be transformed.
- Anyone with write access to a repository can read its secrets, so use credentials with the least privileges necessary.
- Give `GITHUB_TOKEN` minimum permissions. Good practice is defaulting it to read-only for repository contents, then raising permissions per job only when needed.

```yaml
permissions:
  contents: read

jobs:
  release:
    permissions:
      contents: write   # only this job can write
    runs-on: ubuntu-latest
    steps:
      - run: echo "..."
```

---

## 8. Using third-party actions safely

A compromised action can access all secrets configured on your repository and may use the `GITHUB_TOKEN` to write to it, so pulling actions from third-party repositories carries real risk \[Docs-5\]. The docs recommend:

1. **Pin to a full-length commit SHA.** This is currently the only way to use an action as an immutable release, and it helps guard against a backdoor being added later. Verify the SHA comes from the action's own repository, not a fork \[Docs-5\].
2. **Audit the action's source** to check it handles your code and secrets as expected (e.g. doesn't send secrets to unintended hosts) \[Docs-5\].
3. **Pin to a tag only if you trust the creator** (tags are more convenient but less secure than SHAs) \[Docs-5\].

GitHub also offers repository- and organization-level policies to require SHA pinning \[Docs-5\].

---

## 9. A simple CI → CD pipeline

```yaml
name: CI-CD
on:
  push:
    branches: [main]

permissions:
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        env:
          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
        run: ./scripts/deploy.sh
```

Flow: push to `main` → tests run → only if they pass, `deploy` runs (because of `needs`).

---

## 10. Learning path for beginners

1. **Read the overview** of GitHub Actions and its concepts \[Docs-1\] \[Docs-2\].
2. **Do the Quickstart**, which the docs describe as a way to try the core features in minutes \[Docs-1\].
3. **Build a CI workflow** for a small project (install, lint, test).
4. **Add matrix builds** (`strategy.matrix`) to test multiple versions, and **caching** to speed up runs.
5. **Add CD**: deploy to a test environment using secrets, then explore **environments** with approvals.
6. **Learn security**: least-privilege permissions, SHA pinning, secret handling \[Docs-5\].
7. **Go further**: reusable workflows, composite actions, custom actions, self-hosted runners.

The Get started area of the docs also has dedicated sections for continuous integration, continuous deployment, and a comparison of GitHub Actions with GitHub Apps \[Docs-1\].

**Debugging tips:** open the run in the **Actions** tab and expand the failing step; re-run failed jobs; validate YAML indentation first (the most common beginner error).

---

## 11. Quick cheat sheet

| Keyword | Purpose |
| --- | --- |
| `name` | Label shown in the UI |
| `on` | Events that trigger the workflow |
| `jobs.<id>` | A job definition |
| `runs-on` | Runner to use |
| `needs` | Job dependencies (sequencing) |
| `steps` | Ordered tasks in a job |
| `uses` | Run a reusable action |
| `run` | Run a shell command |
| `with` | Inputs to an action |
| `env` | Environment variables |
| `permissions` | Scope of the `GITHUB_TOKEN` |
| `if` | Conditional execution |

---

## Sources (official documentation)

- **\[Docs-1\]** GitHub Docs, *Get started with GitHub Actions* (overview, quickstart, CI, CD): [https://docs.github.com/en/actions/concepts/overview](https://docs.github.com/en/actions/concepts/overview)
- **\[Docs-2\]** GitHub Docs, *Understanding GitHub Actions* (components, events, runners): [https://docs.github.com/en/enterprise-server@3.5/actions/learn-github-actions/understanding-github-actions](https://docs.github.com/en/enterprise-server@3.5/actions/learn-github-actions/understanding-github-actions). This is an archived version; the current equivalent lives under the Concepts section: [https://docs.github.com/pt/enterprise-cloud@latest/actions/concepts](https://docs.github.com/pt/enterprise-cloud@latest/actions/concepts)
- **\[Docs-3\]** GitHub Docs, *Using jobs in a workflow*: [https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow](https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow)
- **\[Docs-4\]** Microsoft Learn, *Describe standard workflow syntax elements* (GitHub Actions training module; not GitHub's own docs, but it points to GitHub's *Workflow syntax for GitHub Actions* reference): [https://learn.microsoft.com/en-us/training/modules/introduction-to-github-actions/5-describe-standard-workflow-syntax-elements](https://learn.microsoft.com/en-us/training/modules/introduction-to-github-actions/5-describe-standard-workflow-syntax-elements)
- **\[Docs-5\]** GitHub Docs, *Secure use reference*: [https://docs.github.com/en/actions/reference/security/secure-use](https://docs.github.com/en/actions/reference/security/secure-use)

**Note:** GitHub reorganizes its docs URLs from time to time. If a link redirects, search the title on docs.github.com.![[Github-Actions-Complete-Beginner.html]]