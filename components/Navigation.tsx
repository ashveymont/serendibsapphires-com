"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/collection", label: "The Collection" },
  { href: "/house", label: "The House" },
  { href: "/journal", label: "The Journal" },
  { href: "/consultation", label: "Private Consultation" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        isScrolled ? "bg-[#0B0B0B]/95 border-[#2A2A2A]" : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between px-6 lg:px-14">
        <Link href="/" className="font-display text-sm uppercase tracking-[0.35em] text-[#F5F1EA]">
          Serendib Sapphires
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link text-[12px] tracking-[0.2em] text-[#F5F1EA]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/consultation" className="btn-gold rounded-full">
            Inquire
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="h-px w-6 bg-[#C6A56B]" />
          <span className="h-px w-6 bg-[#C6A56B]" />
          <span className="h-px w-6 bg-[#C6A56B]" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#0B0B0B] px-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-4xl text-[#F5F1EA]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/consultation" className="btn-gold mt-4 rounded-full" onClick={() => setIsOpen(false)}>
              Inquire
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
