import { NextRequest, NextResponse } from "next/server";
import { executeGitHubAction } from "@/lib/github";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { functionName, args, config } = body;

    const token = config?.token || process.env.GITHUB_PAT;
    const owner = config?.owner || process.env.GITHUB_OWNER;
    const repo = config?.repo || process.env.GITHUB_REPO;
    const defaultBranch = config?.defaultBranch || process.env.GITHUB_DEFAULT_BRANCH || "main";

    if (!token || !owner || !repo) {
      return NextResponse.json(
        { error: "GitHub credentials not fully configured (token, owner, repo required)" },
        { status: 400 }
      );
    }

    const result = await executeGitHubAction(functionName, args, {
      token,
      owner,
      repo,
      defaultBranch,
    });

    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
