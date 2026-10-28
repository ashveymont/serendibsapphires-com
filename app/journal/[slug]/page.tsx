import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { formatArticleDate, getArticle, getArticles } from "@/lib/journal";
import { pageMetadata } from "@/lib/seo";

// Journal article template. Articles come from content/journal.json; unknown slugs 404.

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({ title: `${article.title} · Serendib`, description: article.description, path: `/journal/${article.slug}` });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <Reveal className="mx-auto max-w-3xl pt-24">
        <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-[#C6A56B]">
          ← The Journal
        </Link>
        <p className="eyebrow mt-10">{formatArticleDate(article.date)}</p>
        <h1 className="font-display mt-6 text-5xl font-light leading-[1.1] text-[#F5F1EA] md:text-6xl">{article.title}</h1>
      </Reveal>
      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-[16px] font-light leading-9 text-[#A09080]">
        {article.body.map((block, index) =>
          block.type === "h2" ? (
            <h2 key={index} className="font-display pt-6 text-3xl font-light text-[#F5F1EA]">
              {block.text}
            </h2>
          ) : (
            <p key={index}>{block.text}</p>
          ),
        )}
      </div>
    </article>
  );
}
