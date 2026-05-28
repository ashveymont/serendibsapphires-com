"use client";

import { motion } from "framer-motion";
import type { Stone } from "@/lib/stones";
import StoneCard from "./StoneCard";

interface CollectionGridProps {
  stones: Stone[];
}

export default function CollectionGrid({ stones }: CollectionGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
      className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
    >
      {stones.map((stone) => (
        <StoneCard key={stone.slug} stone={stone} />
      ))}
    </motion.div>
  );
}
