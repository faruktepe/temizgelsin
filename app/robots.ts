import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/", "/profil", "/siparislerim", "/auth"],
      },
    ],
    sitemap: "https://temizgelsin.com.tr/sitemap.xml",
  };
}
