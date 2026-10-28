"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Fact, MaybeLink } from "@/components/Todo";
import { siteConfig, whatsappHref } from "@/lib/site-config";

// Placeholders on this component: [number] (NGJA licence), [Business name], [Address], [Phone],
// Instagram URL, WhatsApp number. All come from lib/site-config.ts.

const footerLinks = [
  { href: "/sapphires", label: "Sapphires" },
  { href: "/sourcing", label: "Private Sourcing" },
  { href: "/certification", label: "Certification" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/how-to-buy", label: "How to Buy" },
  { href: "/contact", label: "Contact" },
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0B0B0B] px-6 pb-8 pt-16 lg:px-14">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 md:grid-cols-3">
        <motion.div {...reveal} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="space-y-4">
          <h3 className="font-display text-lg uppercase tracking-[0.35em] text-[#F5F1EA]">Serendib Sapphires</h3>
          <p className="max-w-sm text-sm font-light text-[#BFA37A]">Certified Ceylon sapphires, direct from Sri Lanka.</p>
          <div className="space-y-2 pt-2 text-xs font-light leading-6 text-[#A09080]">
            <p>
              NGJA licence no. <Fact value={siteConfig.licenceNumber} placeholder="[number]" />
            </p>
            <p>
              <Fact value={siteConfig.businessName} placeholder="[Business name]" />
            </p>
            <p>
              <Fact value={siteConfig.address} placeholder="[Address]" />
            </p>
          </div>
        </motion.div>

        <motion.div {...reveal} transition={{ duration: 0.8, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }} className="space-y-4">
          <h4 className="font-display text-xl text-[#F5F1EA]">Navigate</h4>
          <ul className="grid grid-cols-2 gap-3 text-sm font-light text-[#F5F1EA]">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...reveal} transition={{ duration: 0.8, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }} className="space-y-4">
          <h4 className="font-display text-xl text-[#F5F1EA]">Connect</h4>
          <ul className="space-y-3 text-sm font-light text-[#F5F1EA]">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="break-all">
                {siteConfig.email}
              </a>
            </li>
            <li>
              {siteConfig.phone ? (
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.phone}</a>
              ) : (
                <Fact value={null} placeholder="[Phone]" />
              )}
            </li>
            <li>
              <MaybeLink href={siteConfig.instagramUrl} placeholder="[Instagram URL]">
                Instagram
              </MaybeLink>
            </li>
            <li>
              <MaybeLink href={whatsappHref()} placeholder="[number]">
                WhatsApp
              </MaybeLink>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Sale</Link>
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
        <p className="text-xs font-light tracking-[0.12em] text-[#F5F1EA]/40">© 2026 Serendib Sapphires</p>
      </motion.div>
    </footer>
  );
}
