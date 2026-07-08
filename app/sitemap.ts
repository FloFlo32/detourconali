import { MetadataRoute } from "next";
import { brand } from "@/brand.config";
import { posts } from "@/app/blog/data";

const base = `https://${brand.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/destinations-tours-puerto-rico`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/custom-guided-tours-puerto-rico`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/group-tour-experiences-puerto-rico`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    { url: `${base}/contact-us`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
