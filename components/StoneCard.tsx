"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Stone } from "@/lib/stones";

interface StoneCardProps {
  stone: Stone;
}

export default function StoneCard({ stone }: StoneCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="stone-card bg-[#141414]"
    >
      <div className="h-64 w-full" style={{ background: stone.gradient }} />
      <div className="space-y-5 p-8">
        <p className="text-[9px] font-light uppercase tracking-[0.35em] text-[#C6A56B]">
          {stone.type} · {stone.carat} CT · {stone.region.toUpperCase()}
        </p>
        <h3 className="font-display text-4xl font-normal text-[#F5F1EA]">{stone.name}</h3>
        <p className="text-[13px] font-light leading-[1.9] text-[#A09080]">{stone.excerpt}</p>
        <Link
          href={`/collection/${stone.slug}`}
          className="inline-block text-xs font-light uppercase tracking-[0.2em] text-[#C6A56B]"
        >
          View The Stone →
        </Link>
      </div>
    </motion.article>
  );
}
