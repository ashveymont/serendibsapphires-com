"use client";

export default function InquiryForm() {
  return (
    <section className="mx-auto w-full max-w-5xl border border-[#2A2A2A] bg-[#141414] p-8 md:p-12">
      <h2 className="font-display text-5xl font-light text-[#F5F1EA]">Inquire About This Stone</h2>
      <p className="mt-4 max-w-xl text-sm font-light leading-7 text-[#BFA37A]">
        Complete the form below and a member of the Serendib team will be in contact within 24 hours.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {["Full Name", "Email Address", "Country of Residence"].map((field) => (
          <input
            key={field}
            placeholder={field}
            className="w-full border-b border-[#C6A56B]/70 bg-transparent pb-3 text-sm font-light text-[#F5F1EA] placeholder:text-[#A09080] focus:outline-none"
          />
        ))}
      </div>

      <textarea
        placeholder="Your Inquiry"
        className="mt-8 h-36 w-full border border-[#2A2A2A] bg-transparent p-4 text-sm font-light text-[#F5F1EA] placeholder:text-[#A09080] focus:outline-none"
      />

      <button type="button" className="btn-gold-fill mt-8">
        Submit Inquiry
      </button>
      <p className="mt-5 text-xs italic text-[#A09080]">All inquiries are treated with complete discretion.</p>
    </section>
  );
}
