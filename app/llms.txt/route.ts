import { agentDocsUrl, githubUrl, operatorSkillUrl, siteUrl } from "../site";

export const dynamic = "force-static";

export function GET() {
  const body = `# Yoink

Yoink v2 is a local-first YouTube-to-AI research tool by ReplayRyan.

Canonical site: ${siteUrl}
GitHub source: ${githubUrl}
Agent docs: ${siteUrl}/agent-docs
GitHub MCP docs: ${agentDocsUrl}
Operator Skill raw file: ${operatorSkillUrl}

## What Yoink Does

Yoink turns YouTube videos, channels, and playlists into structured markdown corpora for Claude, ChatGPT, Cursor, OpenClaw, Hermes, and other AI tools.

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

Core Yoink runs locally. There is no Yoink cloud account or server-side corpus database. Optional AI features use the user's own Anthropic API key and are opt-in.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
