"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { stones } from "@/lib/stones";
import StoneCard from "@/components/StoneCard";

export default function Home() {
  return (
    <div className="bg-[#0B0B0B]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0F2145_0%,_#0B0B0B_70%)]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }} className="eyebrow">
            Est. Ratnapura, Sri Lanka
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }} className="font-display mt-8 text-5xl font-light leading-[1.1] text-[#F5F1EA] md:text-8xl">
            The Epitome Of
            <br />
            Ceylon Sapphire Excellence
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.9 }} className="mx-auto mt-8 max-w-xl text-sm font-light uppercase tracking-[0.15em] text-[#BFA37A]">
            Curating rare heirloom sapphires and extraordinary jewelry pieces inspired by the legendary gemstone heritage of Sri Lanka.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.9 }} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/collection" className="btn-gold">
              Explore The Collection
            </Link>
            <Link href="/consultation" className="text-xs uppercase tracking-[0.2em] text-[#F5F1EA] underline-offset-8 hover:underline">
              Acquire A Serendib Sapphire
            </Link>
          </motion.div>
        </div>
        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C6A56B]">
          ↓
        </motion.div>
      </section>

      <section className="px-6 py-28 md:py-40 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }} className="space-y-8">
            <h2 className="font-display text-5xl font-light leading-[1.05] text-[#F5F1EA] md:text-6xl">
              The Island
              <br />
              The Ancient
              <br />
              Traders Called
              <br />
              Serendib.
            </h2>
            <p className="max-w-xl text-[15px] font-light leading-[2] text-[#A09080]">
              For centuries, the island now known as Sri Lanka was home to some of the world&apos;s most extraordinary sapphires.
              <br />
              <br />
              Treasured by royalty. Coveted by collectors. Worn by the great houses of Europe and the courts of the East.
              <br />
              <br />
              Ceylon sapphires have long stood as the pinnacle of gemstone rarity - prized for their vivid royal blue, their extraordinary brilliance, and their undeniable emotional resonance.
              <br />
              <br />
              Serendib Sapphires was created to honor that legacy. To curate stones of exceptional rarity. To create heirlooms that transcend generations.
            </p>
          </motion.div>
          <motion.aside initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }} className="flex items-center justify-center">
            <div className="max-w-sm space-y-6">
              <div className="h-28 w-px bg-[#C6A56B]" />
              <p className="font-display text-3xl italic leading-[1.6] text-[#C6A56B]">
                &quot;A Serendib Sapphire is not purchased. It is acquired.&quot;
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p className="eyebrow">The Collection</p>
            <h2 className="font-display mt-5 text-5xl font-light text-[#F5F1EA] md:text-7xl">Stones Of Legend</h2>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">{stones.slice(0, 3).map((stone) => <StoneCard key={stone.slug} stone={stone} />)}</div>
          <div className="mt-12 text-center">
            <Link href="/collection" className="btn-gold">
              View The Full Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D0D] px-6 py-28 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p className="eyebrow">The Ceylon Difference</p>
            <h2 className="font-display mt-5 text-5xl font-light leading-tight text-[#F5F1EA] md:text-6xl">
              Why The World Covets
              <br />
              Ceylon Sapphires
            </h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              ["◇", "Extraordinary Colour", "Ceylon sapphires are renowned for a vivid, velvety royal blue found nowhere else on earth - a color that holds its depth under every light."],
              ["✦", "Rare Natural Beauty", "Among the world's most sought-after untreated gemstones. The finest Ceylon sapphires require no enhancement - their beauty is entirely their own."],
              ["♛", "Legendary Heritage", "Worn by monarchs. Set in royal jewelry. Documented in the great auction houses of the world. Ceylon sapphires carry a provenance that elevates everything they touch."],
            ].map(([icon, title, copy]) => (
              <motion.div key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }} className="px-4 text-center md:border-r md:border-[#C6A56B]/30 last:md:border-r-0">
                <div className="mx-auto text-3xl text-[#C6A56B]">{icon}</div>
                <h3 className="font-display mt-5 text-3xl text-[#F5F1EA]">{title}</h3>
                <p className="mt-4 text-sm font-light leading-8 text-[#A09080]">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="bg-[#0B0B0B] px-6 py-24 lg:px-14">
          <p className="eyebrow">The Philosophy</p>
          <h2 className="font-display mt-6 text-5xl font-light leading-tight text-[#F5F1EA] md:text-7xl">
            Built To Outlast
            <br />
            The Moment.
            <br />
            Designed To Define
            <br />A Legacy.
          </h2>
          <p className="mt-8 max-w-lg text-sm font-light leading-[2] text-[#A09080]">
            A Serendib Sapphire is not an object.
            <br />
            <br />
            It is a declaration.
            <br />
            <br />A piece gifted at a proposal. A stone passed from mother to daughter. A jewel that carries the memory of an extraordinary moment forward through time.
            <br />
            <br />
            We do not create jewelry for seasons. We create heirlooms for generations.
          </p>
          <Link href="/house" className="btn-gold mt-10 inline-block">
            Discover The Philosophy
          </Link>
        </div>
        <div className="flex items-center justify-center bg-[linear-gradient(135deg,_#0F2145,_#0B0B0B)] px-6 py-24 text-center lg:px-14">
          <p className="font-display max-w-md text-4xl italic leading-[1.5] text-[#F5F1EA]">
            &quot;Every stone we curate is designed to be remembered.&quot;
          </p>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <p className="eyebrow text-center">Curated For Collectors</p>
          <h2 className="font-display mt-5 text-center text-5xl font-light text-[#F5F1EA] md:text-6xl">
            The Signature Collections
          </h2>
          <div className="mt-14 grid snap-x gap-6 overflow-x-auto md:grid-cols-3">
            {[
              ["Blue Sapphire Collection", "The Foundation of Serendib", "linear-gradient(135deg,#0F2145,#1a3a6e)"],
              ["Collector Stones", "For the Serious Connoisseur", "linear-gradient(135deg,#0B0B0B,#3c2f1b)"],
              ["Engagement Pieces", "A Promise Made in Rarity", "linear-gradient(135deg,#1A1A1A,#3a3328)"],
              ["Rare Acquisitions", "Stones That Change Hands Once", "linear-gradient(135deg,#131f3a,#0B0B0B)"],
              ["The Heirloom Series", "Designed for Generations", "linear-gradient(135deg,#0B0B0B,#4a3a24)"],
            ].map(([title, subtitle, gradient]) => (
              <motion.article key={title} whileHover={{ y: -8 }} className="stone-card h-[400px] min-w-[280px] snap-start p-8" style={{ background: gradient }}>
                <div className="flex h-full flex-col justify-end">
                  <h3 className="font-display text-4xl font-light text-[#F5F1EA]">{title}</h3>
                  <p className="mt-4 text-sm font-light text-[#BFA37A]">{subtitle}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D0D] px-6 py-24 lg:px-14">
        <div className="mx-auto max-w-[1280px] text-center">
          <p className="eyebrow">Our Commitment</p>
          <h2 className="font-display mt-5 text-5xl font-light text-[#F5F1EA] md:text-6xl">Acquired With Confidence</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              ["Certified Authenticity", "Every stone arrives with independent gemological certification from internationally recognized laboratories."],
              ["Ethically Sourced", "Responsibly mined from Sri Lanka's Ratnapura and Elahera regions, with complete transparency of origin."],
              ["Worldwide Delivery", "Secure, insured delivery to collectors and connoisseurs across the globe."],
              ["Private Consultation", "Every acquisition begins with a private consultation. We do not rush extraordinary decisions."],
            ].map(([title, copy]) => (
              <div key={title} className="border border-[#2A2A2A] bg-[#141414] p-6">
                <h3 className="font-display text-3xl text-[#F5F1EA]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#A09080]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(ellipse_at_center,_#0F2145_0%,_#0B0B0B_65%)] px-6 py-28 text-center lg:px-14">
        <p className="eyebrow">Begin Your Acquisition</p>
        <h2 className="font-display mt-6 text-5xl font-light leading-tight text-[#F5F1EA] md:text-8xl">
          Acquire A Piece Of
          <br />
          Sri Lanka&apos;s Finest Legacy.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#BFA37A]">
          Every extraordinary acquisition begins with a conversation. We invite you to inquire about our current collection or schedule a private consultation.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/consultation" className="btn-gold-fill">
            Schedule Private Consultation
          </Link>
          <Link href="/consultation" className="btn-gold">
            Inquire About A Sapphire
          </Link>
        </div>
      </section>
    </div>
  );
}
