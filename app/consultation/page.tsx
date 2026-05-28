"use client";

import { motion } from "framer-motion";
import ConsultationForm from "@/components/ConsultationForm";

export default function ConsultationPage() {
  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto max-w-4xl pt-24 text-center"
      >
        <p className="eyebrow">Private Consultation</p>
        <h1 className="font-display mt-6 text-6xl font-light leading-[1.08] text-[#F5F1EA] md:text-8xl">
          Every Extraordinary
          <br />
          Acquisition Begins
          <br />
          With A Conversation.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-[15px] font-light leading-[2] text-[#BFA37A]">
          We do not believe in rushed decisions.
          <br />
          <br />
          The acquisition of a rare sapphire of this calibre is a considered, personal, and significant moment.
          <br />
          <br />
          We are here to guide it with expertise, discretion, and complete patience.
        </p>
      </motion.section>

      <section className="mx-auto mt-16 grid max-w-[1280px] gap-6 md:grid-cols-3">
        {[
          ["Step 1: Inquiry", "Submit your initial inquiry. Tell us what you seek, or let us guide you to what we believe you'll love."],
          ["Step 2: Consultation", "A private conversation with our team - by email, video call, or in person - to understand your vision."],
          ["Step 3: Acquisition", "We present our recommendation. You acquire with complete confidence, certification, and care."],
        ].map(([title, body]) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="border border-[#2A2A2A] bg-[#141414] p-8"
          >
            <h2 className="font-display text-4xl font-light text-[#F5F1EA]">{title}</h2>
            <p className="mt-4 text-sm font-light leading-8 text-[#A09080]">{body}</p>
          </motion.article>
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-20"
      >
        <ConsultationForm />
      </motion.section>
    </div>
  );
}
