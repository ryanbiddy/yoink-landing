export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://yoink-landing-five.vercel.app"
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

export const siteTitle =
  "Yoink v2 - The YouTube layer for any AI agent";

export const siteDescription =
  "Yoink turns YouTube into prompt-ready context through a Chrome extension, local MCP server, and portable Operator Skill for Claude, ChatGPT, Cursor, OpenClaw, and Hermes.";

export const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "";
