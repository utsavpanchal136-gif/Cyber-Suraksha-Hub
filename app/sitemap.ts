import type { MetadataRoute } from "next";
import { awarenessCategories } from "@/data/awareness-topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cybersurakshahub.in";

  const staticPages = ["", "/awareness", "/news", "/emergency", "/resources", "/check-hacked", "/about"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const categoryPages = awarenessCategories.map((cat) => ({
    url: `${baseUrl}/awareness/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const topicPages = awarenessCategories.flatMap((cat) =>
    cat.topics.map((topic) => ({
      url: `${baseUrl}/awareness/${cat.slug}/${topic.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...categoryPages, ...topicPages];
}
