"use client";

import { motion } from "framer-motion";

const revealMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] as const },
};

type LetterBlock =
  | { type: "body"; text: string }
  | { type: "emphasisIvory18"; text: string }
  | { type: "emphasisGold20"; text: string }
  | { type: "emphasisIvory20"; text: string };

const letterBlocks: LetterBlock[] = [
  { type: "body", text: "Art is life." },
  { type: "body", text: "Art is breath. Art is poetry. Art is memory." },
  {
    type: "body",
    text: "Art is the quiet human desire to preserve what we are most afraid to lose.",
  },
  {
    type: "body",
    text: "Some preserve their most precious moments through paintings. Some through photographs. Some through music.",
  },
  { type: "body", text: "I write." },
  { type: "body", text: "I have always written." },
  {
    type: "body",
    text: "I store the people I love, the moments that move me, and the emotions that shape me inside words — carefully concealed between sentences as though language itself could protect them from time.",
  },
  { type: "body", text: "Perhaps that is why Serendib was inevitable." },
  {
    type: "body",
    text: "Because long before I understood business, luxury, or craftsmanship, I understood remembrance.",
  },
  { type: "body", text: "I was born into sapphires." },
  {
    type: "body",
    text: "My very first gift from my mother was a blue sapphire given to me at birth — a stone I still carry with me to this day.",
  },
  { type: "body", text: "To the world, it may simply appear beautiful." },
  { type: "body", text: "But to me, it became something infinitely greater." },
  {
    type: "emphasisIvory18",
    text: "A memory.\nA presence.\nA reminder of love so profound that even now, years later, I feel it every time light touches the stone.",
  },
  {
    type: "body",
    text: "And maybe that is what fascinated me most about sapphires from the beginning.",
  },
  {
    type: "body",
    text: "Their ability to hold emotion. To survive time. To outlive us.",
  },
  {
    type: "body",
    text: "There is something deeply sacred about the objects we choose to carry through life.",
  },
  { type: "body", text: "A sapphire is never merely a gemstone." },
  { type: "emphasisIvory18", text: "It becomes a witness." },
  {
    type: "body",
    text: "A silent keeper of devotion, celebration, grief, triumph, love, and legacy.",
  },
  {
    type: "body",
    text: "Long after voices fade and moments disappear, these stones remain — passing quietly from one hand to another, carrying fragments of human history within them.",
  },
  { type: "body", text: "That thought has always stayed with me." },
  {
    type: "body",
    text: "Especially here, on the island once known as Serendib.",
  },
  {
    type: "body",
    text: "For centuries, Sri Lanka has produced some of the world's most extraordinary sapphires — treasures admired by royalty, collectors, and generations of families who understood that true rarity is timeless.",
  },
  { type: "body", text: "But beyond their beauty, what moved me most was what they represented." },
  { type: "emphasisIvory18", text: "Permanence in an impermanent world." },
  {
    type: "body",
    text: "The idea that something so rare could transcend generations. That one day, a grandmother may pass a Serendib Sapphire to her granddaughter with trembling hands and a full heart. That a stone could become part of a family's emotional history. That love itself could take physical form.",
  },
  { type: "body", text: "That is the soul of this house." },
  { type: "body", text: "Serendib was never created to simply sell jewelry." },
  { type: "emphasisGold20", text: "It was created to preserve meaning." },
  {
    type: "body",
    text: "Every sapphire we curate is chosen with reverence — not merely for its rarity or brilliance, but for its character, presence, and story.",
  },
  {
    type: "body",
    text: "Some stones will mark the beginning of marriages. Some will celebrate extraordinary achievements. Some will quietly accompany families through decades we ourselves may never witness.",
  },
  { type: "body", text: "And perhaps that is the true beauty of legacy." },
  {
    type: "emphasisIvory18",
    text: "We do not truly own the things we love most.\nWe merely protect them for a brief moment in time before they become someone else's memory.",
  },
  {
    type: "body",
    text: "This philosophy shapes everything we do. From the stones we select, to the stories we tell, to the emotions we hope each piece carries long after it leaves our hands.",
  },
  { type: "body", text: "Because true luxury is not loud. It does not beg to be seen." },
  {
    type: "emphasisGold20",
    text: "True luxury is emotional. Intentional. Timeless.",
  },
  {
    type: "body",
    text: "It is the feeling of holding something so precious that time itself seems to pause around it.",
  },
  {
    type: "body",
    text: "My hope is that when someone encounters Serendib, they feel more than admiration.",
  },
  { type: "body", text: "I hope they feel remembrance." },
  { type: "body", text: "I hope they feel connection." },
  {
    type: "body",
    text: "I hope they feel the quiet weight of something sacred being entrusted to them.",
  },
  {
    type: "body",
    text: "And perhaps, somewhere far into the future, long after all of us are gone, a Serendib Sapphire will still remain in someone's hands — carrying love, memory, and legacy forward into another generation.",
  },
  { type: "emphasisIvory20", text: "To me, that is immortality." },
];

const letterGroups = Array.from({ length: Math.ceil(letterBlocks.length / 3) }, (_, index) =>
  letterBlocks.slice(index * 3, index * 3 + 3),
);

function LetterParagraph({ block }: { block: LetterBlock }) {
  if (block.type === "emphasisIvory18") {
    return (
      <p className="whitespace-pre-line text-center font-display text-lg italic leading-[1.7] text-[#F5F1EA] md:text-[18px]">
        {block.text}
      </p>
    );
  }

  if (block.type === "emphasisGold20") {
    return (
      <p className="whitespace-pre-line text-center font-display text-xl italic leading-[1.7] text-[#C6A56B]">
        {block.text}
      </p>
    );
  }

  if (block.type === "emphasisIvory20") {
    return (
      <p className="whitespace-pre-line text-center font-display text-xl italic leading-[1.7] text-[#F5F1EA]">
        {block.text}
      </p>
    );
  }

  return <p className="text-center text-[15px] font-light leading-[2.2] text-[#A09080]">{block.text}</p>;
}

export default function HousePage() {
  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="border border-[#2A2A2A] bg-[#141414] px-6 py-24 text-center md:py-32"
      >
        <p className="eyebrow">Est. Ratnapura, Sri Lanka</p>
        <h1 className="font-display mt-6 text-6xl font-light text-[#F5F1EA] md:text-8xl">The House Of Serendib</h1>
      </motion.section>

      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-[780px] text-center">
          <motion.p {...revealMotion} className="eyebrow">
            A Letter From The Founder
          </motion.p>

          <motion.div {...revealMotion} className="mt-16">
            <div className="mx-auto h-px w-[60px] bg-[#C6A56B]" />
            <div className="mx-auto mt-8 max-w-[620px] space-y-6">
              <p className="font-display text-[22px] italic leading-[1.9] text-[#C6A56B]">
                &quot;I&apos;d set fire to libraries, burn them to the ground, a thousand if I have to,
                <br />
                so no one reads my poetry, my poetry of your beauty,
                <br />
                because you live in my words, just my words.
                <br />
                I&apos;d be jealous if the angels read them,
                <br />
                they&apos;d never know how beautiful you are.&quot;
              </p>
              <p className="text-right text-[11px] font-light italic tracking-[0.2em] text-[#BFA37A]">
                — Paragraph 2, &quot;I No Longer Believe&quot; by Ashan Veymont
              </p>
            </div>
            <div className="mx-auto mt-8 h-px w-[60px] bg-[#C6A56B]" />
          </motion.div>

          <div className="mx-auto mt-16 max-w-[680px] space-y-8">
            {letterGroups.map((group, groupIndex) => (
              <motion.div
                key={`letter-group-${groupIndex}`}
                {...revealMotion}
                className="space-y-8"
              >
                {group.map((block, blockIndex) => (
                  <LetterParagraph key={`${groupIndex}-${blockIndex}`} block={block} />
                ))}
              </motion.div>
            ))}
          </div>

          <motion.div {...revealMotion} className="mt-16">
            <div className="mx-auto mb-8 h-px w-[60px] bg-[#C6A56B]" />
            <p className="font-display text-2xl tracking-[0.05em] text-[#F5F1EA]">Ashan Veymont</p>
            <p className="mt-4 text-[11px] font-light uppercase tracking-[0.3em] text-[#BFA37A]">
              Founder, The House Of Serendib
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-28 grid max-w-[1280px] gap-12 lg:grid-cols-2">
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-3xl italic leading-[1.8] text-[#C6A56B]"
        >
          &quot;Serendib. The name the ancient Arab traders gave to an island of impossible beauty. The island the world now calls Sri Lanka.&quot;
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-sm font-light leading-[2] text-[#A09080]"
        >
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
        </motion.p>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto mt-28 max-w-4xl text-center"
      >
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
      </motion.section>

      <section className="mx-auto mt-28 max-w-[1280px]">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["01", "SOURCE", "We source from Sri Lanka's most storied mining regions - Ratnapura, Elahera, and Okkampitiya."],
            ["02", "SELECT", "Less than 1% of stones reviewed enter the Serendib collection. Only the extraordinary passes."],
            ["03", "CERTIFY", "Every stone receives independent certification from internationally recognized gemological laboratories."],
            ["04", "ACQUIRE", "Every acquisition begins with a private consultation and is guided with complete care."],
          ].map(([number, title, body]) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="border border-[#2A2A2A] bg-[#141414] p-8"
            >
              <p className="font-display text-4xl text-[#C6A56B]">{number}</p>
              <h3 className="mt-4 font-display text-3xl text-[#F5F1EA]">{title}</h3>
              <p className="mt-4 text-sm font-light leading-8 text-[#A09080]">{body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 grid max-w-[1280px] gap-12 lg:grid-cols-2">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-6xl font-light text-[#F5F1EA]"
        >
          A Commitment
          <br />
          To Transparency.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-sm font-light leading-[2] text-[#A09080]"
        >
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
        </motion.p>
      </section>
    </div>
  );
}
