"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Todo, { Fact } from "@/components/Todo";
import { formatCarat, formatPrice, treatmentLabel, type Stone } from "@/lib/stones";

interface StoneCardProps {
  stone: Stone;
}

// Card content per the spec: photo or short video, colour, carat, shape, origin, treatment, lab,
// price or "price on request". No story on the card.
export default function StoneCard({ stone }: StoneCardProps) {
  const photo = stone.media.find((item) => item.kind === "photo");
  const video = stone.media.find((item) => item.kind === "video");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="stone-card group relative bg-[#141414]"
    >
      <div className="relative h-64 w-full overflow-hidden bg-[#0D0D0D]">
        {video && !photo ? (
          <video src={video.src} muted loop playsInline autoPlay className="h-full w-full object-cover" aria-label={video.alt} />
        ) : photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Todo>[Photo or video]</Todo>
          </div>
        )}
        {stone.status === "sold" && (
          <span className="absolute left-4 top-4 bg-[#0B0B0B]/85 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#F5F1EA]">
            Sold
          </span>
        )}
        {stone.hidden && (
          <span className="absolute right-4 top-4">
            <Todo>Hidden: dev preview only</Todo>
          </span>
        )}
      </div>
      <div className="space-y-5 p-8">
        <h3 className="font-display text-3xl font-normal text-[#F5F1EA]">
          <Link href={`/sapphires/${stone.slug}`} className="after:absolute after:inset-0">
            {stone.name}
          </Link>
        </h3>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-[12px] font-light text-[#A09080]">
          <dt className="sr-only">Colour</dt>
          <dd>{stone.colour}</dd>
          <dt className="sr-only">Weight</dt>
          <dd>{formatCarat(stone.carat)} ct</dd>
          <dt className="sr-only">Shape</dt>
          <dd>{stone.shape}</dd>
          <dt className="sr-only">Origin</dt>
          <dd>{stone.origin}</dd>
          <dt className="sr-only">Treatment</dt>
          <dd>
            <Fact value={treatmentLabel(stone.heated)} placeholder="[Heated / Unheated]" />
          </dd>
          <dt className="sr-only">Laboratory</dt>
          <dd>
            <Fact value={stone.lab} placeholder="[Lab]" />
          </dd>
        </dl>
        <p className="text-sm tracking-[0.08em] text-[#F5F1EA]">{formatPrice(stone.price)}</p>
      </div>
    </motion.article>
  );
}
