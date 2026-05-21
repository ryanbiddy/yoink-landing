import { agentDocsUrl, githubUrl, operatorSkillUrl, siteUrl } from "../site";

export const dynamic = "force-static";

export function GET() {
  const body = `# Yoink

Yoink v2 is a local-first YouTube-to-AI research tool by ReplayRyan.
Positioning: Your bookmark that extracts everything to your LLMs - on the web or by your agents.

Canonical site: ${siteUrl}
GitHub source: ${githubUrl}
Agent docs: ${siteUrl}/agent-docs
Install docs: ${siteUrl}/install
GitHub MCP docs: ${agentDocsUrl}
Operator Skill raw file: ${operatorSkillUrl}

## What Yoink Does

Yoink turns YouTube videos, channels, and playlists into structured markdown corpora for Claude, ChatGPT, Cursor, OpenClaw, Hermes, and other AI tools.

Yoink is positioned as a structured operator layer, not a transcript-only extension, a cloud notebook, or a bare MCP primitive. It combines one-click capture on the YouTube page, local corpus ownership, 13 MCP tools, and an Operator Skill.

There are three product paths:
1. Browser path: click the Yoink button under a YouTube video and paste the clipboard corpus into Claude, ChatGPT, or another chat AI.
2. Agent path: connect the local Model Context Protocol server so agents can call Yoink tools directly.
3. Operator path: install the portable agentskills.io SKILL.md for citation discipline, hook autopsy mode, and Yoink taxonomy defaults.

Core output includes:
- transcript
- screenshots
- comments
- channel context
- metadata
- citations and timestamp references

## Yoink v2 Interfaces

1. Chrome extension: one-click capture from YouTube pages.
2. Local helper server: runs on the user's machine and writes corpora to local disk.
3. MCP server: exposes 13 local tools that agents can call directly.
4. Operator Skill: portable SKILL.md that teaches agents how to use Yoink workflows.

The Windows helper bundles Python, yt-dlp, ffmpeg, keyring, and the MCP SDK. It is required for extraction, local file writes, Yoink Memory, and MCP.

Supported browser family: Chrome and Chromium-based browsers such as Edge, Brave, Comet, Opera GX, and Vivaldi.
Windows install page: ${siteUrl}/install. Chrome Web Store listing is pending approval; use the GitHub release direct download for now.

## MCP Tools

- yoink_video: extract a single YouTube video
- yoink_playlist: extract up to 10 videos from a playlist
- get_job_status: poll a running yoink job
- cancel_job: cancel a running yoink job
- list_recent_yoinks: latest N yoinks from the library
- search_yoinks: full-text search across the library
- get_yoink_corpus: fetch a specific yoink's full markdown
- analyze_comments: cluster themes, products, disagreements
- classify_hook: classify opening across 9 hook types
- get_taxonomy: return the Hook Type taxonomy
- get_citation_map: slug-to-URL map for citing in agents
- get_yoink_health: helper status and diagnostics
- find_mentions: cross-corpus entity lookup

## Important Pages

- Launch page: ${siteUrl}
- Install page: ${siteUrl}/install
- Agent docs: ${siteUrl}/agent-docs
- Agents page: ${siteUrl}/agents
- Creators page: ${siteUrl}/creators
- Research page: ${siteUrl}/research
- Hook taxonomy: ${siteUrl}/hooks
- Local-first architecture: ${siteUrl}/local-first
- Claude Code setup: ${siteUrl}/getting-started
- 10-video channel audit: ${siteUrl}/channel-audit
- Privacy: ${siteUrl}/privacy

## Hook Type Taxonomy

Yoink classifies YouTube openings into 9 categories:
curiosity_gap, question, contrarian, story_open, promise_list, demo, authority, stakes, other.

## Privacy Model

Core Yoink runs locally. There is no Yoink cloud account, telemetry, analytics, remote logging, or server-side corpus database. Optional AI features use the user's own Anthropic API key, stored by Windows Credential Manager, and are opt-in.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
