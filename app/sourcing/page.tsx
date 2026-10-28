import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Steps, { Block } from "@/components/Steps";
import Todo from "@/components/Todo";
import { pageMetadata } from "@/lib/seo";

// Placeholders on this page: [cost included / cost shared / at your request], [2–6 weeks],
// [refundable], [x%], [Confirm terms.]

export const metadata = pageMetadata({
  title: "Find a Ceylon Sapphire to Order · Serendib",
  description: "Tell us the sapphire you want. We search Sri Lanka's gem trade and present only certified stones.",
  path: "/sourcing",
});

const steps = [
  { title: "Tell us what you want.", body: "Colour, size, shape, budget, and whether it must be unheated." },
  {
    title: "We search.",
    body: "We review stones from our network of licensed dealers and cutters and shortlist only those that fit.",
  },
  {
    title: "You see them first.",
    body: "Video and photos of each shortlisted stone, with honest notes on strengths and weaknesses.",
  },
  {
    title: "Certification to your standard.",
    body: (
      <>
        Every stone carries a laboratory report. For significant stones, we arrange an international report from a laboratory such as
        GRS, Gübelin, SSEF or AGL, at <Todo>[cost included / cost shared / at your request]</Todo>.
      </>
    ),
  },
  { title: "You decide.", body: "No obligation until you approve a stone and its report." },
];

export default function SourcingPage() {
  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <PageHeader heading="Private Sourcing" sub="Tell us the sapphire you want. We will find it in Sri Lanka." />

      <div className="mx-auto mt-16 max-w-[1280px] space-y-20">
        <div className="max-w-3xl">
          <Block>
            <p>
              Many of Sri Lanka&apos;s best stones never appear online. They pass privately between miners, cutters and dealers in
              Ratnapura. As a licensed dealer working in that market, we can search on your behalf for a stone matched to your colour, size
              and budget, including larger and rarer sapphires.
            </p>
          </Block>
        </div>

        <section>
          <Reveal>
            <h2 className="font-display mb-8 text-4xl font-light text-[#F5F1EA] md:text-5xl">How it works</h2>
          </Reveal>
          <Steps steps={steps} />
          <Reveal className="mt-10 max-w-3xl">
            <p className="text-[15px] font-light leading-8 text-[#A09080]">
              Typical search time: <Todo>[2–6 weeks]</Todo>. A <Todo>[refundable]</Todo> deposit of <Todo>[x%]</Todo> may apply for larger
              searches. <Todo>[Confirm terms.]</Todo>
            </p>
          </Reveal>
        </section>

        <Reveal className="text-center">
          <Link href="/inquire?interest=sourcing" className="btn-gold-fill inline-block">
            Inquire
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
