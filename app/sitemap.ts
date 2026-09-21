import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.powerflow-automations.com",
      lastModified: new Date(),
    },
  ];
}