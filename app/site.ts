export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://ryanbiddy.com/yoink"
).replace(/\/$/, "");

export const githubUrl = "https://github.com/ryanbiddy/yoink";

export const chromeInstallUrl =
  process.env.NEXT_PUBLIC_CHROME_WEB_STORE_URL ||
  // TODO(Ryan): swap this for the approved Chrome Web Store URL once live.
  "https://github.com/ryanbiddy/yoink/releases/latest";

export const windowsDownloadUrl =
  process.env.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL ||
  "https://github.com/ryanbiddy/yoink/releases/latest";

export const operatorSkillUrl =
  "https://raw.githubusercontent.com/ryanbiddy/yoink/main/skills/yoink/SKILL.md";

export const agentDocsUrl =
  "https://github.com/ryanbiddy/yoink/blob/main/docs/v2-mcp.md";

export const siteTitle =
  "Yoink v2 - Your YouTube bookmark for LLMs and agents";

export const siteDescription =
  "Yoink is your bookmark that extracts everything to your LLMs - on the web or by your agents. One-click YouTube corpora, 13 local MCP tools, and an Operator Skill.";

export const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "";
