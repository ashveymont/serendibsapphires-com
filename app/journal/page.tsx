import JournalCard from "@/components/JournalCard";

export default function JournalPage() {
  const articles = [
    {
      category: "EDUCATION",
      title: "The Difference Between Heated and Unheated Sapphires",
      excerpt: "Understanding treatment is essential when evaluating rarity and long-term collector value.",
      gradient: "linear-gradient(135deg, #17294a, #0B0B0B)",
    },
    {
      category: "HERITAGE",
      title: "The History of Sri Lankan Gemstones",
      excerpt: "From ancient trade routes to modern collector circles, Sri Lanka has remained a gemstone epicenter.",
      gradient: "linear-gradient(135deg, #2f1f16, #0B0B0B)",
    },
    {
      category: "EDUCATION",
      title: "How Sapphire Rarity Is Determined",
      excerpt: "Colour, treatment, origin, cut, and market provenance shape how rarity is understood.",
      gradient: "linear-gradient(135deg, #112039, #241a33)",
    },
    {
      category: "HISTORY",
      title: "The World's Most Famous Sapphires",
      excerpt: "A study of the stones that became legends and the houses that preserved their stories.",
      gradient: "linear-gradient(135deg, #0B0B0B, #23304f)",
    },
    {
      category: "COLLECTING",
      title: "Sapphires as Investments: A Collector's Perspective",
      excerpt: "How connoisseurs evaluate long-horizon gemstone holdings with discipline and taste.",
      gradient: "linear-gradient(135deg, #2d240f, #0B0B0B)",
    },
  ];

  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <section className="mx-auto max-w-[1280px] pt-24">
        <p className="eyebrow">The Journal</p>
        <h1 className="font-display mt-6 text-6xl font-light leading-[1.1] text-[#F5F1EA] md:text-8xl">
          Knowledge, Heritage,
          <br />
          And The Art Of Rarity.
        </h1>
        <p className="mt-6 max-w-3xl text-sm font-light text-[#BFA37A]">
          Essays on Ceylon sapphires, gemstone collecting, and the legacy of extraordinary stones.
        </p>
      </section>

      <section className="mx-auto mt-14 grid max-w-[1280px] gap-8 border border-[#2A2A2A] bg-[#141414] p-8 lg:grid-cols-2">
        <div className="h-80 bg-[linear-gradient(135deg,_#0F2145,_#0B0B0B)]" />
        <div className="self-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#C6A56B]">HERITAGE</p>
          <h2 className="font-display mt-5 text-5xl font-light text-[#F5F1EA]">
            Why Ceylon Sapphires Remain The World&apos;s Most Coveted Gemstones
          </h2>
          <p className="mt-5 text-sm leading-8 text-[#A09080]">
            For three thousand years, the island once known as Serendib has produced sapphires unlike any other on earth. Here is why.
          </p>
          <a href="#" className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-[#C6A56B]">
            Read The Essay →
          </a>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-[1280px] gap-8 md:grid-cols-2">
        {articles.map((article) => (
          <JournalCard key={article.title} {...article} />
        ))}
      </section>
    </div>
  );
}
