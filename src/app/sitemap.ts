import type { MetadataRoute } from "next";
import { featuredEstates, contactDetails } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = contactDetails.website.replace(/\/+$/, "");
  const currentDate = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic property catalog routes
  const propertyRoutes: MetadataRoute.Sitemap = featuredEstates.map((estate) => ({
    url: `${baseUrl}/properties/${estate.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...propertyRoutes];
}
