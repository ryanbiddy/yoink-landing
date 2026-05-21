import type { MetadataRoute } from "next";
import { siteUrl } from "./site";

const routes = [
  {
    path: "",
    priority: 1,
  },
  {
    path: "/privacy",
    priority: 0.5,
  },
  {
    path: "/creators",
    priority: 0.8,
  },
  {
    path: "/agents",
    priority: 0.8,
  },
  {
    path: "/agent-docs",
    priority: 0.8,
  },
  {
    path: "/install",
    priority: 0.8,
  },
  {
    path: "/research",
    priority: 0.8,
  },
  {
    path: "/hooks",
    priority: 0.7,
  },
  {
    path: "/local-first",
    priority: 0.7,
  },
  {
    path: "/getting-started",
    priority: 0.7,
  },
  {
    path: "/channel-audit",
    priority: 0.7,
  },
  {
    path: "/llms.txt",
    priority: 0.6,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
