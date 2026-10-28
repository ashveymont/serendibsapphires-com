import Reveal from "@/components/Reveal";

export interface Step {
  title: string;
  body: React.ReactNode;
}

/** Numbered steps (How it works, How to Buy). */
export default function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="border-t border-[#2A2A2A]">
      {steps.map((step, index) => (
        <Reveal as="li" key={step.title} delay={Math.min(index, 4) * 0.05} className="grid gap-3 border-b border-[#2A2A2A] py-8 md:grid-cols-[80px_1fr]">
            <span className="font-display text-4xl font-light text-[#C6A56B]">{index + 1}</span>
            <div>
              <h3 className="font-display text-2xl text-[#F5F1EA] md:text-3xl">{step.title}</h3>
              <p className="mt-3 max-w-2xl text-[15px] font-light leading-8 text-[#A09080]">{step.body}</p>
            </div>
        </Reveal>
      ))}
    </ol>
  );
}

/** A heading plus body block for long-form pages. */
export function Block({ heading, children }: { heading?: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="space-y-5">
      {heading && <h2 className="font-display text-3xl font-light text-[#F5F1EA] md:text-4xl">{heading}</h2>}
      <div className="space-y-5 text-[15px] font-light leading-8 text-[#A09080]">{children}</div>
    </Reveal>
  );
}
