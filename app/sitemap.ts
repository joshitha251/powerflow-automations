import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://powerflow-automations.com",
      lastModified: new Date(),
    },
  ];
}