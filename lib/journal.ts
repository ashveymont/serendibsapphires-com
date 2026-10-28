// Journal articles. The data lives in content/journal.json (empty until the first article is written).
//
// Article shape:
// {
//   "slug": "heated-or-unheated",
//   "title": "Heated or Unheated? What Sapphire Treatment Really Means",
//   "description": "Meta description, 155 characters or fewer.",
//   "date": "2026-11-10",
//   "body": [{ "type": "p", "text": "..." }, { "type": "h2", "text": "..." }]
// }

import data from "@/content/journal.json";

export interface ArticleBlock {
  type: "p" | "h2";
  text: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  body: ArticleBlock[];
}

const articles = [...(data as Article[])].sort((a, b) => b.date.localeCompare(a.date));

export function getArticles(): Article[] {
  return articles;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function formatArticleDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
