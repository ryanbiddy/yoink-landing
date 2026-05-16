export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://yoink-landing-five.vercel.app"
).replace(/\/$/, "");

export const githubUrl = "https://github.com/ryanbiddy/yoink";

export const windowsDownloadUrl =
  "https://chromewebstore.google.com/detail/yoink/placeholder";

export const siteTitle =
  "Yoink - The missing layer between YouTube and your AI";

export const siteDescription =
  "Yoink any YouTube video into Claude and ChatGPT with the full transcript, screenshots, comments, channel context, and metadata in one structured doc.";
