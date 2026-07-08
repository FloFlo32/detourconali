import { MetadataRoute } from "next";
import { brand } from "@/brand.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `https://${brand.domain}/sitemap.xml`,
  };
}
