import Reveal from "@/components/Reveal";

export default function PageHeader({ heading, sub, eyebrow }: { heading: string; sub?: React.ReactNode; eyebrow?: string }) {
  return (
    <Reveal as="section" className="mx-auto max-w-[1280px] pt-24">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className={`font-display ${eyebrow ? "mt-6" : ""} text-5xl font-light leading-[1.05] text-[#F5F1EA] md:text-7xl`}>{heading}</h1>
      {sub && <p className="mt-6 max-w-2xl text-[15px] font-light leading-8 text-[#BFA37A]">{sub}</p>}
    </Reveal>
  );
}
