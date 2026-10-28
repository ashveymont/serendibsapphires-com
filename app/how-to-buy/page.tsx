import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Steps from "@/components/Steps";
import Todo, { Fact } from "@/components/Todo";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

// Placeholders on this page: [Bank transfer to our business account / card payment / escrow for larger
// amounts], [carrier], [7] (return days), [Lab name], [number] (NGJA licence).
// Carrier, return days, lab and licence come from lib/site-config.ts.
//
// SEO title and description are not in the spec's SEO table; they are built from the page heading and sub.

export const metadata = pageMetadata({
  title: "How to Buy · Serendib Sapphires",
  description: "Simple, safe and transparent, wherever you are in the world.",
  path: "/how-to-buy",
});

const { shippingCarrier, returnPeriodDays, labName, licenceNumber } = siteConfig;

const steps = [
  { title: "Ask.", body: "Inquire about a stone by form, email or WhatsApp. You'll hear back personally within 24 hours." },
  { title: "See it live.", body: "We'll show you the stone on a video call in natural light and answer every question." },
  { title: "Check it.", body: "We send the full laboratory report so you can verify it yourself." },
  { title: "Get it in writing.", body: "A written invoice confirms the stone, report number, price, delivery and return terms." },
  {
    title: "Pay safely.",
    body: (
      <>
        <Todo>[Bank transfer to our business account / card payment / escrow for larger amounts]</Todo>. We never ask for payment to a
        personal account.
      </>
    ),
  },
  {
    title: "Receive it.",
    body: (
      <>
        Insured, tracked delivery via <Fact value={shippingCarrier} placeholder="[carrier]" />, with NGJA export documents.
      </>
    ),
  },
  {
    title: "Take your time.",
    body: (
      <>
        You have <Fact value={returnPeriodDays} placeholder="[7]" /> days from delivery to return the stone, unaltered and with its report,
        for a full refund.
      </>
    ),
  },
];

interface FaqItem {
  question: string;
  answer: React.ReactNode;
  /** Plain-text answer for FAQPage structured data; null while the answer still contains a placeholder. */
  text: string | null;
}

const faqs: FaqItem[] = [
  {
    question: "Are your sapphires natural?",
    answer: "Yes. Every stone is laboratory-tested and confirmed natural.",
    text: "Yes. Every stone is laboratory-tested and confirmed natural.",
  },
  {
    question: "Are they treated?",
    answer:
      "Some are gently heated, an accepted, permanent practice; some are unheated. Each listing states the treatment exactly as the lab report records it.",
    text: "Some are gently heated, an accepted, permanent practice; some are unheated. Each listing states the treatment exactly as the lab report records it.",
  },
  {
    question: "Which laboratory certifies your stones?",
    answer: (
      <>
        <Fact value={labName} placeholder="[Lab name]" />. For significant stones we can arrange an international report from a lab such as
        GRS, Gübelin, SSEF or AGL.
      </>
    ),
    text: labName
      ? `${labName}. For significant stones we can arrange an international report from a lab such as GRS, Gübelin, SSEF or AGL.`
      : null,
  },
  {
    question: "Are you licensed?",
    answer: (
      <>
        Yes, by Sri Lanka&apos;s National Gem &amp; Jewellery Authority, licence no. <Fact value={licenceNumber} placeholder="[number]" />.
      </>
    ),
    text: licenceNumber ? `Yes, by Sri Lanka's National Gem & Jewellery Authority, licence no. ${licenceNumber}.` : null,
  },
  {
    question: "Can you find a stone that isn't listed?",
    answer: (
      <>
        Yes, through our{" "}
        <Link href="/sourcing" className="text-[#C6A56B] underline underline-offset-4">
          Private Sourcing
        </Link>{" "}
        service.
      </>
    ),
    text: "Yes, through our Private Sourcing service.",
  },
  {
    question: "How is my stone shipped?",
    answer: (
      <>
        Insured and tracked via <Fact value={shippingCarrier} placeholder="[carrier]" />, with official export documents.
      </>
    ),
    text: shippingCarrier ? `Insured and tracked via ${shippingCarrier}, with official export documents.` : null,
  },
  {
    question: "Can I return it?",
    answer: (
      <>
        Yes, within <Fact value={returnPeriodDays} placeholder="[7]" /> days, unaltered and with its report.
      </>
    ),
    text: returnPeriodDays ? `Yes, within ${returnPeriodDays} days, unaltered and with its report.` : null,
  },
  {
    question: "Do you sell to jewellers?",
    answer: "Yes. Contact us for trade terms.",
    text: "Yes. Contact us for trade terms.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs
    .filter((faq) => faq.text !== null)
    .map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.text },
    })),
};

export default function HowToBuyPage() {
  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <JsonLd data={faqJsonLd} />
      <PageHeader heading="How to Buy" sub="Simple, safe and transparent, wherever you are in the world." />

      <div className="mx-auto mt-16 max-w-[1280px] space-y-24">
        <Steps steps={steps} />

        <section className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-4xl font-light text-[#F5F1EA] md:text-5xl">FAQ</h2>
          </Reveal>
          <dl className="mt-8 border-t border-[#2A2A2A]">
            {faqs.map((faq) => (
              <Reveal key={faq.question} className="border-b border-[#2A2A2A] py-6">
                <dt className="font-display text-2xl text-[#F5F1EA]">{faq.question}</dt>
                <dd className="mt-3 text-[15px] font-light leading-8 text-[#A09080]">{faq.answer}</dd>
              </Reveal>
            ))}
          </dl>
        </section>

        <Reveal className="text-center">
          <Link href="/inquire" className="btn-gold-fill inline-block">
            Inquire
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
