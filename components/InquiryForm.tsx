"use client";

import { useState } from "react";
import { MaybeLink } from "@/components/Todo";
import { budgetOptions, interestOptions, submitInquiry, type Inquiry, type Interest } from "@/lib/inquiry";
import { whatsappDisplay, whatsappHref } from "@/lib/site-config";

const inputClass =
  "w-full border-b border-[#C6A56B]/70 bg-transparent pb-3 text-sm font-light text-[#F5F1EA] placeholder:text-[#A09080] focus:border-[#C6A56B] focus:outline-none";
const labelClass = "block text-[11px] uppercase tracking-[0.2em] text-[#BFA37A]";

export default function InquiryForm({ initialStone = "", initialInterest = "" }: { initialStone?: string; initialInterest?: Interest | "" }) {
  const [inquiry, setInquiry] = useState<Inquiry>({
    name: "",
    email: "",
    country: "",
    whatsapp: "",
    interest: initialStone ? "A listed stone" : initialInterest,
    stone: initialStone,
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const set = <K extends keyof Inquiry>(key: K, value: Inquiry[K]) => setInquiry((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);
    try {
      await submitInquiry(inquiry);
      setSent(true);
    } catch {
      setError(true);
    }
  };

  if (sent) {
    return (
      <section className="mx-auto w-full max-w-3xl border border-[#2A2A2A] bg-[#141414] p-8 md:p-12" aria-live="polite">
        <p className="font-display text-4xl font-light text-[#F5F1EA]">Thank you. I&apos;ll reply within 24 hours.</p>
        <p className="font-display mt-4 text-2xl italic text-[#C6A56B]">— Ashan</p>
      </section>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-3xl border border-[#2A2A2A] bg-[#141414] p-8 md:p-12">
      <div className="grid gap-8 md:grid-cols-2">
        <label className="space-y-3">
          <span className={labelClass}>Name</span>
          <input required autoComplete="name" value={inquiry.name} onChange={(e) => set("name", e.target.value)} className={inputClass} />
        </label>
        <label className="space-y-3">
          <span className={labelClass}>Email</span>
          <input
            required
            type="email"
            autoComplete="email"
            value={inquiry.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="space-y-3">
          <span className={labelClass}>Country</span>
          <input
            required
            autoComplete="country-name"
            value={inquiry.country}
            onChange={(e) => set("country", e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="space-y-3">
          <span className={labelClass}>WhatsApp (optional)</span>
          <input type="tel" autoComplete="tel" value={inquiry.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} className={inputClass} />
        </label>
      </div>

      <fieldset className="mt-10">
        <legend className={labelClass}>What you&apos;re interested in</legend>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {interestOptions.map((option) => {
            const active = inquiry.interest === option;
            return (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition ${
                  active ? "border-[#C6A56B] text-[#F5F1EA]" : "border-[#2A2A2A] text-[#A09080]"
                }`}
              >
                <input
                  type="radio"
                  name="interest"
                  required
                  value={option}
                  checked={active}
                  onChange={() => set("interest", option)}
                  className="accent-[#C6A56B]"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      {inquiry.interest === "A listed stone" && (
        <label className="mt-8 block space-y-3">
          <span className={labelClass}>Stone</span>
          <input value={inquiry.stone} onChange={(e) => set("stone", e.target.value)} className={inputClass} />
        </label>
      )}

      <label className="mt-8 block space-y-3">
        <span className={labelClass}>Approximate budget (optional)</span>
        <select
          value={inquiry.budget}
          onChange={(e) => set("budget", e.target.value)}
          className="w-full border border-[#2A2A2A] bg-[#0B0B0B] p-4 text-sm font-light text-[#F5F1EA] focus:border-[#C6A56B] focus:outline-none"
        >
          <option value="">—</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-8 block space-y-3">
        <span className={labelClass}>Message</span>
        <textarea
          required
          value={inquiry.message}
          onChange={(e) => set("message", e.target.value)}
          className="h-36 w-full border border-[#2A2A2A] bg-transparent p-4 text-sm font-light text-[#F5F1EA] focus:border-[#C6A56B] focus:outline-none"
        />
      </label>

      <button type="submit" className="btn-gold-fill mt-8">
        Send
      </button>
      {error && (
        <p className="mt-4 text-sm text-[#F5F1EA]" role="alert">
          Something went wrong. Please email us directly.
        </p>
      )}
      <p className="mt-6 text-sm font-light leading-7 text-[#A09080]">
        We use your details only to reply to you. Prefer to chat now?{" "}
        <MaybeLink href={whatsappHref()} placeholder="[number]" className="text-[#C6A56B] underline underline-offset-4">
          WhatsApp {whatsappDisplay() ?? ""}
        </MaybeLink>
      </p>
    </form>
  );
}
