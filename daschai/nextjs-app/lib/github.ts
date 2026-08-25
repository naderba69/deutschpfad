/**
 * GitHub API Client for Autonomous Agent Actions
 */

export interface GitHubConfig {
  token: string;
  owner: string;
  repo: string;
  defaultBranch?: string;
}

export const GITHUB_TOOLS_DEFINITIONS = [
  {
    type: "function",
    function: {
      name: "get_tree",
      description: "Get repository directory structure tree recursively.",
      parameters: {
        type: "object",
        properties: {
          branch: { type: "string", description: "Target branch name (optional, defaults to repo default)" }
        }
      }
    }
  },
  {
    type: "function",
    function: {
      name: "get_file_content",
      description: "Fetch file contents from repository.",
      parameters: {
        type: "object",
        properties: {
          path: { type: "string", description: "File path in repo (e.g. src/index.ts)" },
          branch: { type: "string", description: "Branch name" }
        },
        required: ["path"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "write_file",
      description: "Write or update a file in the GitHub repository.",
      parameters: {
        type: "object",
        properties: {
          path: { type: "string", description: "File path in repo" },
          content: { type: "string", description: "Full new file content string" },
          message: { type: "string", description: "Commit message" },
          branch: { type: "string", description: "Target branch" }
        },
        required: ["path", "content"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "create_branch",
      description: "Create a new branch in repository.",
      parameters: {
        type: "object",
        properties: {
          branch_name: { type: "string", description: "New branch name" },
          from_branch: { type: "string", description: "Source branch name" }
        },
        required: ["branch_name"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "create_pull_request",
      description: "Open a pull request on GitHub.",
      parameters: {
        type: "object",
        properties: {
          title: { type: "string", description: "PR title" },
          body: { type: "string", description: "PR description/body" },
          head: { type: "string", description: "Branch containing changes" },
          base: { type: "string", description: "Branch to merge into (e.g. main)" }
        },
        required: ["title", "head"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "get_diff",
      description: "Compare two branches or commits to get the diff.",
      parameters: {
        type: "object",
        properties: {
          base: { type: "string", description: "Base branch/commit" },
          head: { type: "string", description: "Head branch/commit" }
        },
        required: ["head"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "read_multiple_files",
      description: "Read contents of multiple files in one operation.",
      parameters: {
        type: "object",
        properties: {
          paths: {
            type: "array",
            items: { type: "string" },
            description: "List of file paths"
          }
        },
        required: ["paths"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "list_branches",
      description: "List all branches in the repository.",
      parameters: {
        type: "object",
        properties: {}
      }
    }
  }
];

export async function executeGitHubAction(
  fnName: string,
  args: Record<string, any>,
  config: GitHubConfig
): Promise<any> {
  const { token, owner, repo, defaultBranch = "main" } = config;

  if (!token || !owner || !repo) {
    return {
      error: "GitHub credentials not configured. Please supply GitHub Token, Owner, and Repo.",
    };
  }

  const headers = {
    Authorization: `token ${token}`,
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
  };

  try {
    switch (fnName) {
      case "get_tree": {
        const branch = args.branch || defaultBranch;
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`, { headers });
        if (!res.ok) throw new Error(`GitHub API Error: ${res.statusText}`);
        const data = await res.json();
        return {
          branch: branch,
          tree: (data.tree || []).map((item: any) => ({
            path: item.path,
            type: item.type,
            size: item.size,
            sha: item.sha,
          })),
        };
      }
      case "get_file_content": {
        const path = args.path;
        const branch = args.branch || defaultBranch;
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, { headers });
        if (!res.ok) throw new Error(`GitHub API Error: ${res.statusText}`);
        const data = await res.json();
        const decoded = Buffer.from(data.content.replace(/\s/g, ""), "base64").toString("utf-8");
        return {
          path: data.path,
          size: data.size,
          sha: data.sha,
          content: decoded,
        };
      }
      case "write_file": {
        const path = args.path;
        const content = args.content;
        const message = args.message || `Update ${path} via OX-Alpha Agent`;
        const branch = args.branch || defaultBranch;

        let sha: string | null = null;
        try {
          const checkRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, { headers });
          if (checkRes.ok) {
            const checkData = await checkRes.json();
            sha = checkData.sha;
          }
        } catch (e) {}

        const payload: Record<string, any> = {
          message: message,
          content: Buffer.from(content).toString("base64"),
          branch: branch,
        };
        if (sha) payload.sha = sha;

        const putRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
          method: "PUT",
          headers: headers,
          body: JSON.stringify(payload),
        });
        if (!putRes.ok) throw new Error(`GitHub API Error: ${putRes.statusText}`);
        const putData = await putRes.json();
        return {
          success: true,
          path: path,
          commit_sha: putData.commit?.sha,
          html_url: putData.content?.html_url,
        };
      }
      case "create_branch": {
        const branchName = args.branch_name;
        const fromBranch = args.from_branch || defaultBranch;

        const refRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${fromBranch}`, { headers });
        if (!refRes.ok) throw new Error(`Could not find branch ${fromBranch}`);
        const refData = await refRes.json();
        const baseSha = refData.object.sha;

        const createRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs`, {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            ref: `refs/heads/${branchName}`,
            sha: baseSha,
          }),
        });
        if (!createRes.ok) throw new Error(`Create branch error: ${createRes.statusText}`);
        return {
          success: true,
          branch: branchName,
          from_sha: baseSha,
        };
      }
      case "create_pull_request": {
        const title = args.title;
        const body = args.body || "Created automatically via OX-Alpha Workbench Pro.";
        const head = args.head;
        const base = args.base || defaultBranch;

        const prRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/pulls`, {
          method: "POST",
          headers: headers,
          body: JSON.stringify({ title, body, head, base }),
        });
        if (!prRes.ok) throw new Error(`Create PR error: ${prRes.statusText}`);
        const prData = await prRes.json();
        return {
          success: true,
          pr_number: prData.number,
          html_url: prData.html_url,
          state: prData.state,
        };
      }
      case "get_diff": {
        const base = args.base || defaultBranch;
        const head = args.head;
        const diffRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/compare/${base}...${head}`, { headers });
        if (!diffRes.ok) throw new Error(`Compare error: ${diffRes.statusText}`);
        const diffData = await diffRes.json();
        return {
          total_commits: diffData.total_commits,
          files: (diffData.files || []).map((f: any) => ({
            filename: f.filename,
            status: f.status,
            additions: f.additions,
            deletions: f.deletions,
            patch: f.patch,
          })),
        };
      }
      case "read_multiple_files": {
        const paths = args.paths || [];
        const results = [];
        for (const p of paths) {
          try {
            const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${p}?ref=${defaultBranch}`, { headers });
            if (res.ok) {
              const data = await res.json();
              const content = Buffer.from(data.content.replace(/\s/g, ""), "base64").toString("utf-8");
              results.push({ path: p, content: content, success: true });
            } else {
              results.push({ path: p, error: res.statusText, success: false });
            }
          } catch (err: any) {
            results.push({ path: p, error: err.message, success: false });
          }
        }
        return { files: results };
      }
      case "list_branches": {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches`, { headers });
        if (!res.ok) throw new Error(`List branches error: ${res.statusText}`);
        const data = await res.json();
        return {
          branches: (data || []).map((b: any) => ({ name: b.name, commit_sha: b.commit.sha })),
        };
      }
      default:
        return { error: `Unknown GitHub tool: ${fnName}` };
    }
  } catch (err: any) {
    return { error: err.message };
  }
}
