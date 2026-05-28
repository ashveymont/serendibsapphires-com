"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import CollectionGrid from "@/components/CollectionGrid";
import { collectionFilters, stones } from "@/lib/stones";

export default function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof collectionFilters)[number]>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return stones;
    if (activeFilter === "Engagement") return stones.filter((stone) => stone.collection === "Engagement Pieces");
    if (activeFilter === "Heirloom Series") return stones.filter((stone) => stone.collection === "The Heirloom Series");
    if (activeFilter === "Collector Stones") return stones.filter((stone) => stone.collection === "Collector Stones");
    return stones.filter((stone) => stone.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <section className="mx-auto max-w-[1280px] pt-24">
        <p className="eyebrow">The Collection</p>
        <h1 className="font-display mt-6 text-6xl font-light leading-[1.05] text-[#F5F1EA] md:text-8xl">
          Stones Of
          <br />
          Extraordinary Rarity
        </h1>
        <p className="mt-6 text-[13px] font-light tracking-[0.12em] text-[#BFA37A]">
          Each stone is unique. Each acquisition begins with a conversation.
        </p>
      </section>

      <section className="mx-auto mt-12 flex max-w-[1280px] flex-wrap gap-3">
        {collectionFilters.map((filter) => (
          <button
            type="button"
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition ${
              activeFilter === filter ? "border-[#C6A56B] text-[#F5F1EA]" : "border-[#2A2A2A] text-[#A09080]"
            }`}
          >
            {filter}
          </button>
        ))}
      </section>

      <section className="mx-auto mt-12 max-w-[1280px]">
        <CollectionGrid stones={filtered} />
      </section>

      <section className="mx-auto mt-24 max-w-[1280px] border border-[#2A2A2A] bg-[#141414] px-8 py-16 text-center md:px-16">
        <h2 className="font-display text-5xl font-light text-[#F5F1EA]">Don&apos;t See What You&apos;re Looking For?</h2>
        <p className="mx-auto mt-6 max-w-xl text-[13px] font-light leading-8 text-[#BFA37A]">
          We curate stones privately for collectors with specific requirements. Tell us what you seek.
        </p>
        <Link href="/consultation" className="btn-gold mt-8 inline-block">
          Private Inquiry
        </Link>
      </section>
    </div>
  );
}
