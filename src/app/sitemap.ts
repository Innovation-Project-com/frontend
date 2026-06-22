import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // TODO: Fetch dynamic solution slugs from API and append here
  const solutionSlugs = [
    "erp-system",
    "transportation-management-system",
    "warehouse-management-system",
    "material-resource-planning",
    "iot-solution",
  ];

  const solutionRoutes: MetadataRoute.Sitemap = solutionSlugs.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...solutionRoutes];
}
