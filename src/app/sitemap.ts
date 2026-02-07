import { getAllAnimationSlugs } from "@/config/animations.config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.deanstavenuiter.nl";

  const animationSlugs = getAllAnimationSlugs();

  return [
    // Main portfolio site
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    //  animations
    {
      url: `${baseUrl}/animations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...animationSlugs.map((slug) => ({
      url: `${baseUrl}/animations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
