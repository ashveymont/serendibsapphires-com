"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CollectionGrid from "@/components/CollectionGrid";
import { stones } from "@/lib/stones";

export default function CollectionPage() {
  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto max-w-[1280px] pt-24"
      >
        <p className="eyebrow">The Collection</p>
        <h1 className="font-display mt-6 text-6xl font-light leading-[1.05] text-[#F5F1EA] md:text-8xl">
          Stones Of
          <br />
          Extraordinary Rarity
        </h1>
        <p className="mt-6 text-[13px] font-light tracking-[0.12em] text-[#BFA37A]">
          Each stone is unique. Each acquisition begins with a conversation.
        </p>
      </motion.section>

      <section className="mx-auto mt-12 max-w-[1280px]">
        <CollectionGrid stones={stones} />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto mt-24 max-w-[1280px] border border-[#2A2A2A] bg-[#141414] px-8 py-16 text-center md:px-16"
      >
        <h2 className="font-display text-5xl font-light text-[#F5F1EA]">Don&apos;t See What You&apos;re Looking For?</h2>
        <p className="mx-auto mt-6 max-w-xl text-[13px] font-light leading-8 text-[#BFA37A]">
          We curate stones privately for collectors with specific requirements. Tell us what you seek.
        </p>
        <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
          <Link href="/consultation" className="btn-gold mt-8 inline-block">
            Private Inquiry
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
