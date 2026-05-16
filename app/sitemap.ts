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
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
