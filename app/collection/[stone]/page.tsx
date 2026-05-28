"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import { stones } from "@/lib/stones";

export default function StonePage() {
  const params = useParams<{ stone: string }>();
  const stone = stones.find((item) => item.slug === params.stone);

  if (!stone) {
    return (
      <div className="bg-[#0B0B0B] px-6 pb-28 pt-36 text-center lg:px-14">
        <h1 className="font-display text-5xl font-light text-[#F5F1EA]">Stone Not Found</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#BFA37A]">
          This stone is no longer available in the current collection.
        </p>
        <Link href="/collection" className="btn-gold mt-8 inline-block">
          Return To Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0B0B]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0F2145_0%,_#0B0B0B_70%)]" />
        <div className="sapphire-shimmer absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,33,69,0.55)_0%,_transparent_55%)]" />
        <div className="relative z-10 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="eyebrow"
          >
            {stone.type.toUpperCase()} · {stone.carat} CT · {stone.origin.toUpperCase()}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display mt-7 text-6xl font-light leading-[1.05] text-[#F5F1EA] md:text-8xl"
          >
            {stone.name}
          </motion.h1>
        </div>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], y: [0, 5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C6A56B]"
        >
          ↓
        </motion.div>
      </section>

      <section className="px-6 py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-3"
          >
            <p className="eyebrow">The Story</p>
            <h2 className="font-display mt-6 text-5xl italic text-[#F5F1EA]">
              &quot;{stone.subtitle}&quot;
            </h2>
            <div className="mt-8 space-y-8">
              {stone.story.split("\n\n").map((paragraph, index) => (
                <p key={`${stone.slug}-story-${index}`} className="text-[15px] font-light leading-[2.1] text-[#A09080]">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-2"
          >
            <div className="border border-[#C6A56B]/40 bg-[#141414] p-8">
              <p className="eyebrow">Details</p>
              <div className="mt-6 space-y-3 text-sm text-[#F5F1EA]">
                <p>Origin: {stone.origin}</p>
                <p>Weight: {stone.carat} Carats</p>
                <p>Colour: {stone.details.colour}</p>
                <p>Clarity: {stone.details.clarity}</p>
                <p>Treatment: {stone.details.treatment}</p>
                <p>Cut: {stone.details.cut}</p>
                <p>Certification: {stone.details.certification}</p>
              </div>
              <div className="my-8 h-px bg-[#C6A56B]/50" />
              <Link href="#inquiry" className="btn-gold inline-block">
                Acquire This Stone
              </Link>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-14">
        <div className="mx-auto max-w-[1280px] border border-[#C6A56B]/35 bg-[#141414] p-8 md:p-12">
          <div className="grid gap-5 md:grid-cols-2">
            {stone.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between border-b border-[#2A2A2A] py-3 text-sm">
                <span className="text-[#BFA37A]">{spec.label}</span>
                <span className="text-[#F5F1EA]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="px-6 pb-24 text-center lg:px-14"
      >
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">The Legacy</p>
          <h2 className="font-display mt-6 text-6xl font-light leading-tight text-[#F5F1EA]">
            A Stone Worthy
            <br />
            Of Remembrance.
          </h2>
          <p className="mt-8 text-[15px] font-light leading-[2] text-[#A09080]">{stone.legacy}</p>
          <Link href="#inquiry" className="btn-gold-fill mt-10 inline-block">
            Begin Your Acquisition
          </Link>
        </div>
      </motion.section>

      <div id="inquiry" className="px-6 pb-28 lg:px-14">
        <InquiryForm />
      </div>
    </div>
  );
}
