export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://ryanbiddy.com/yoink"
).replace(/\/$/, "");

export const githubUrl = "https://github.com/ryanbiddy/yoink";

export const chromeInstallUrl =
  process.env.NEXT_PUBLIC_CHROME_WEB_STORE_URL ||
  "https://chromewebstore.google.com/detail/yoink/placeholder";

export const windowsDownloadUrl =
  process.env.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL ||
  "https://github.com/ryanbiddy/yoink/releases/latest";

export const operatorSkillUrl =
  "https://raw.githubusercontent.com/ryanbiddy/yoink/main/skills/yoink/SKILL.md";

export const agentDocsUrl =
  "https://github.com/ryanbiddy/yoink/blob/main/docs/v2-mcp.md";

export const siteTitle =
  "Yoink v2 - Local-first YouTube context for AI agents";

export const siteDescription =
  "Yoink is the local-first YouTube research layer: a Chrome extension, local MCP server, and Operator Skill that turn videos into structured corpora for Claude, ChatGPT, Cursor, and agents.";

export const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "";
