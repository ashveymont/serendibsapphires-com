import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/journal";
import { siteConfig } from "@/lib/site-config";
import { getPublishedStones } from "@/lib/stones";

const staticPaths = [
  "/",
  "/sapphires",
  "/sourcing",
  "/certification",
  "/about",
  "/how-to-buy",
  "/inquire",
  "/journal",
  "/contact",
  "/privacy",
  "/terms",
];

// Hidden stones are never listed, even when previewing them in development.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: `${siteConfig.url}${path === "/" ? "" : path}` })),
    ...getPublishedStones().map((stone) => ({ url: `${siteConfig.url}/sapphires/${stone.slug}` })),
    ...getArticles().map((article) => ({ url: `${siteConfig.url}/journal/${article.slug}`, lastModified: article.date })),
  ];
}
