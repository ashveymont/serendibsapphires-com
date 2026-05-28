import Link from "next/link";
import { notFound } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import { stones } from "@/lib/stones";

export default function StonePage({ params }: { params: { stone: string } }) {
  const stone = stones.find((item) => item.slug === params.stone);
  if (!stone) notFound();

  return (
    <div className="bg-[#0B0B0B]">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0F2145_0%,_#0B0B0B_70%)]" />
        <div className="sapphire-shimmer absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,33,69,0.55)_0%,_transparent_55%)]" />
        <div className="relative z-10 max-w-4xl">
          <p className="eyebrow">
            {stone.type.toUpperCase()} · {stone.carat} CT · {stone.origin.toUpperCase()}
          </p>
          <h1 className="font-display mt-7 text-6xl font-light leading-[1.05] text-[#F5F1EA] md:text-8xl">{stone.name}</h1>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C6A56B] animate-pulse">
          ↓
        </div>
      </section>

      <section className="px-6 py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="eyebrow">The Story</p>
            <h2 className="font-display mt-6 text-5xl italic text-[#F5F1EA]">
              &quot;Inspired by the timeless elegance of the Indian Ocean.&quot;
            </h2>
            <p className="mt-8 text-[15px] font-light leading-[2.1] text-[#A09080]">
              There are sapphires that exist as commodities.
              <br />
              <br />
              And there are sapphires that exist as declarations.
              <br />
              <br />
              {stone.name} belongs to the latter.
              <br />
              <br />
              Sourced from the ancient alluvial deposits of Ratnapura - the City of Gems - this exceptional stone carries within it the colour of deep ocean water seen from above: vivid, saturated, impossibly pure.
              <br />
              <br />
              Under natural light, it reveals a depth that is difficult to describe and impossible to ignore.
            </p>
          </div>
          <aside className="lg:col-span-2">
            <div className="border border-[#C6A56B]/40 bg-[#141414] p-8">
              <p className="eyebrow">Details</p>
              <div className="mt-6 space-y-3 text-sm text-[#F5F1EA]">
                <p>Origin: {stone.origin}</p>
                <p>Weight: {stone.carat} Carats</p>
                <p>Colour: {stone.details.colour}</p>
                <p>Clarity: {stone.details.clarity}</p>
                <p>Treatment: {stone.details.treatment}</p>
                <p>Cut: {stone.details.cut}</p>
                <p>Certification: {stone.details.certification}</p>
              </div>
              <div className="my-8 h-px bg-[#C6A56B]/50" />
              <Link href="#inquiry" className="btn-gold inline-block">
                Acquire This Stone
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-14">
        <div className="mx-auto max-w-[1280px] border border-[#C6A56B]/35 bg-[#141414] p-8 md:p-12">
          <div className="grid gap-5 md:grid-cols-2">
            {stone.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between border-b border-[#2A2A2A] py-3 text-sm">
                <span className="text-[#BFA37A]">{spec.label}</span>
                <span className="text-[#F5F1EA]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 text-center lg:px-14">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">The Legacy</p>
          <h2 className="font-display mt-6 text-6xl font-light leading-tight text-[#F5F1EA]">
            A Stone Worthy
            <br />
            Of Remembrance.
          </h2>
          <p className="mt-8 text-[15px] font-light leading-[2] text-[#A09080]">
            The greatest sapphires in the world have one thing in common: they are remembered.
            <br />
            <br />
            They carry names. They carry stories. They carry the memory of the moment they changed hands.
            <br />
            <br />
            {stone.name} was named for the ocean that has carried Ceylon sapphires to the courts of the world for three thousand years.
          </p>
          <Link href="#inquiry" className="btn-gold-fill mt-10 inline-block">
            Begin Your Acquisition
          </Link>
        </div>
      </section>

      <div id="inquiry" className="px-6 pb-28 lg:px-14">
        <InquiryForm />
      </div>
    </div>
  );
}
