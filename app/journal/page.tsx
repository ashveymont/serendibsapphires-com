import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Todo from "@/components/Todo";
import { formatArticleDate, getArticles } from "@/lib/journal";
import { pageMetadata } from "@/lib/seo";

// Articles come from content/journal.json. While it is empty the page shows a placeholder.
// SEO title and description are not in the spec's SEO table; they are built from the page heading and sub.

export const metadata = pageMetadata({
  title: "The Journal · Serendib Sapphires",
  description: "Honest, practical guides to Ceylon sapphires.",
  path: "/journal",
});

export default function JournalPage() {
  const articles = getArticles();

  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <PageHeader heading="The Journal" sub="Honest, practical guides to Ceylon sapphires." />

      <section className="mx-auto mt-16 max-w-[1280px]">
        {articles.length === 0 ? (
          <div className="border border-dashed border-[#2A2A2A] px-6 py-16 text-center">
            <Todo>[No articles published yet: add the first article to content/journal.json]</Todo>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <Reveal key={article.slug} className="stone-card relative bg-[#141414] p-8">
                <p className="text-[10px] font-light uppercase tracking-[0.35em] text-[#C6A56B]">{formatArticleDate(article.date)}</p>
                <h2 className="font-display mt-4 text-3xl font-light text-[#F5F1EA]">
                  <Link href={`/journal/${article.slug}`} className="after:absolute after:inset-0">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-4 text-sm font-light leading-7 text-[#A09080]">{article.description}</p>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
