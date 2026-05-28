"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0B0B0B] px-6 pb-8 pt-16 lg:px-14">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-4"
        >
          <h3 className="font-display text-lg uppercase tracking-[0.35em] text-[#F5F1EA]">Serendib Sapphires</h3>
          <p className="max-w-sm text-sm font-light text-[#BFA37A]">
            &quot;The definitive luxury sapphire house of Sri Lanka.&quot;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-4"
        >
          <h4 className="font-display text-xl text-[#F5F1EA]">Navigate</h4>
          <ul className="space-y-3 text-sm font-light text-[#F5F1EA]">
            <li>
              <Link href="/collection">The Collection</Link>
            </li>
            <li>
              <Link href="/house">The House of Serendib</Link>
            </li>
            <li>
              <Link href="/consultation">Private Consultation</Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-4"
        >
          <h4 className="font-display text-xl text-[#F5F1EA]">Connect</h4>
          <ul className="space-y-3 text-sm font-light text-[#F5F1EA]">
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="/consultation">Contact</Link>
            </li>
            <li>
              <Link href="/consultation">Inquire</Link>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="mx-auto mt-14 w-full max-w-[1440px] border-t border-[#2A2A2A] pt-6"
      >
        <p className="text-xs font-light tracking-[0.12em] text-[#F5F1EA]/40">
          © 2025 Serendib Sapphires. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
