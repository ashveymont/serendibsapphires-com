"use client";

import { motion } from "framer-motion";

export default function HousePage() {
  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <section className="border border-[#2A2A2A] bg-[#141414] px-6 py-24 text-center md:py-32">
        <div className="mx-auto mb-8 h-24 w-full max-w-4xl bg-[linear-gradient(90deg,_#0B0B0B,_#1A1A1A,_#0B0B0B)]" />
        <p className="eyebrow">Est. Ratnapura, Sri Lanka</p>
        <h1 className="font-display mt-6 text-6xl font-light text-[#F5F1EA] md:text-8xl">The House Of Serendib</h1>
      </section>

      <section className="mx-auto mt-24 grid max-w-[1280px] gap-12 lg:grid-cols-2">
        <p className="font-display text-3xl italic leading-[1.8] text-[#C6A56B]">
          &quot;Serendib. The name the ancient Arab traders gave to an island of impossible beauty. The island the world now calls Sri Lanka.&quot;
        </p>
        <p className="text-sm font-light leading-[2] text-[#A09080]">
          Long before modern geography named it, the island at the southern tip of the Indian subcontinent was known across the trade routes of Arabia, Persia, and China as Serendib.
          <br />
          <br />
          It was famed for three things: spices, elephants, and sapphires.
          <br />
          <br />
          The sapphires of Serendib - what the trade world would come to call Ceylon sapphires - were among the most coveted gemstones in human history. Set in the crowns of emperors. Gifted between royal houses. Worn by the great families of every civilization that encountered them.
          <br />
          <br />
          We carry that name as both heritage and responsibility.
        </p>
      </section>

      <section className="mx-auto mt-28 max-w-4xl text-center">
        <p className="eyebrow">The Vision</p>
        <h2 className="font-display mt-6 text-6xl font-light text-[#F5F1EA]">A Modern House. An Ancient Legacy.</h2>
        <p className="mt-8 text-[15px] font-light leading-[2] text-[#A09080]">
          Serendib Sapphires was founded with a singular conviction:
          <br />
          <br />
          That the extraordinary sapphire heritage of Sri Lanka deserved a house worthy of its legacy.
          <br />
          <br />
          Not a commodity marketplace. Not an e-commerce catalog.
          <br />
          <br />A house. A curator. A guardian of stones that deserve to be remembered.
        </p>
      </section>

      <section className="mx-auto mt-28 max-w-[1280px]">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["01", "SOURCE", "We source from Sri Lanka's most storied mining regions - Ratnapura, Elahera, and Okkampitiya."],
            ["02", "SELECT", "Less than 1% of stones reviewed enter the Serendib collection. Only the extraordinary passes."],
            ["03", "CERTIFY", "Every stone receives independent certification from internationally recognized gemological laboratories."],
            ["04", "ACQUIRE", "Every acquisition begins with a private consultation and is guided with complete care."],
          ].map(([number, title, body]) => (
            <motion.article key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9 }} className="border border-[#2A2A2A] bg-[#141414] p-8">
              <p className="font-display text-4xl text-[#C6A56B]">{number}</p>
              <h3 className="mt-4 font-display text-3xl text-[#F5F1EA]">{title}</h3>
              <p className="mt-4 text-sm font-light leading-8 text-[#A09080]">{body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 grid max-w-[1280px] gap-12 lg:grid-cols-2">
        <h2 className="font-display text-6xl font-light text-[#F5F1EA]">
          A Commitment
          <br />
          To Transparency.
        </h2>
        <p className="text-sm font-light leading-[2] text-[#A09080]">
          Sri Lanka&apos;s gemstone heritage belongs to its people.
          <br />
          <br />
          We are committed to responsible sourcing - working exclusively with mining operations that uphold the welfare of their communities and the integrity of their craft.
          <br />
          <br />
          Every stone we offer comes with full documentation of origin, treatment status, and certification.
          <br />
          <br />
          We do not deal in ambiguity. In luxury, transparency is not a feature. It is a foundation.
        </p>
      </section>
    </div>
  );
}
