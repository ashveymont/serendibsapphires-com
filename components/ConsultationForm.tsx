"use client";

import { useState } from "react";

const options = [
  "A specific stone from the collection",
  "A bespoke jewelry commission",
  "An engagement piece",
  "A collector acquisition",
  "Investment guidance",
  "Other",
];

export default function ConsultationForm() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (option: string) => {
    setSelected((prev) => (prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]));
  };

  return (
    <section className="mx-auto w-full max-w-5xl border border-[#2A2A2A] bg-[#141414] p-8 md:p-12">
      <h2 className="font-display text-5xl font-light text-[#F5F1EA]">Schedule Your Private Consultation</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {["Full Name *", "Email Address *", "Country *", "Phone (Optional)"].map((field) => (
          <input
            key={field}
            placeholder={field}
            className="w-full border-b border-[#C6A56B]/70 bg-transparent pb-3 text-sm font-light text-[#F5F1EA] placeholder:text-[#A09080] focus:outline-none"
          />
        ))}
      </div>

      <p className="mt-10 text-sm font-light tracking-[0.16em] text-[#C6A56B]">Are you interested in:</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <button
              type="button"
              key={option}
              onClick={() => toggle(option)}
              className={`flex items-center gap-3 border px-4 py-3 text-left text-sm transition ${
                active ? "border-[#C6A56B] text-[#F5F1EA]" : "border-[#2A2A2A] text-[#A09080]"
              }`}
            >
              <span
                className={`inline-flex h-4 w-4 items-center justify-center border ${
                  active ? "border-[#C6A56B] bg-[#C6A56B] text-[#0B0B0B]" : "border-[#C6A56B]"
                }`}
              >
                {active ? "✓" : ""}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      <textarea
        placeholder="Tell us more about what you're seeking:"
        className="mt-8 h-32 w-full border border-[#2A2A2A] bg-transparent p-4 text-sm font-light text-[#F5F1EA] placeholder:text-[#A09080] focus:outline-none"
      />
      <select className="mt-6 w-full border border-[#2A2A2A] bg-[#0B0B0B] p-4 text-sm font-light text-[#F5F1EA] focus:outline-none">
        <option>How did you hear about Serendib Sapphires?</option>
        <option>Search</option>
        <option>Referral</option>
        <option>Social Media</option>
        <option>Event</option>
      </select>

      <button type="button" className="btn-gold-fill mt-8">
        Request Consultation
      </button>
      <p className="mt-6 text-sm italic text-[#A09080]">
        We respond to all inquiries within 24 hours. All communications are treated with complete discretion.
      </p>
    </section>
  );
}
