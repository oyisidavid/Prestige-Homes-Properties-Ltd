import type { MetadataRoute } from "next";
import { contactDetails } from "@/data/properties";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = contactDetails.website.replace(/\/+$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
