import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Todo, { Fact, MaybeLink } from "@/components/Todo";
import { pageMetadata } from "@/lib/seo";
import { siteConfig, whatsappDisplay, whatsappHref } from "@/lib/site-config";

// Placeholders on this page: [Address, Sri Lanka], [Phone], WhatsApp [number], [Dubai: by appointment],
// [days, times, time zone], [number] (NGJA licence).
//
// SEO title and description are not in the spec's SEO table; they are written plainly from the page's content.

export const metadata = pageMetadata({
  title: "Contact · Serendib Sapphires",
  description: "Contact Serendib Sapphires in Sri Lanka by email, phone or WhatsApp.",
  path: "/contact",
});

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-[#2A2A2A] py-5 sm:grid-cols-[180px_1fr]">
      <dt className="text-xs uppercase tracking-[0.2em] text-[#C6A56B]">{label}</dt>
      <dd className="text-[15px] font-light text-[#F5F1EA]">{children}</dd>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <PageHeader heading="Contact" />

      <Reveal className="mx-auto mt-12 max-w-3xl">
        <dl className="border-t border-[#2A2A2A]">
          <Row label="Address">
            <Fact value={siteConfig.address} placeholder="[Address, Sri Lanka]" />
          </Row>
          <Row label="Phone">
            {siteConfig.phone ? (
              <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.phone}</a>
            ) : (
              <Todo>[Phone]</Todo>
            )}
          </Row>
          <Row label="WhatsApp">
            <MaybeLink href={whatsappHref()} placeholder="[number]">
              {whatsappDisplay() ?? ""}
            </MaybeLink>
          </Row>
          <Row label="Email">
            <a href={`mailto:${siteConfig.email}`} className="break-all">
              {siteConfig.email}
            </a>
          </Row>
          <Row label="Dubai">
            <Todo>[Dubai: by appointment]</Todo>
          </Row>
          <Row label="Hours">
            <Todo>[days, times, time zone]</Todo>
          </Row>
        </dl>
        <p className="mt-8 text-sm font-light text-[#A09080]">
          NGJA gem trading licence no. <Fact value={siteConfig.licenceNumber} placeholder="[number]" />
        </p>
        <Link href="/inquire" className="btn-gold-fill mt-12 inline-block">
          Inquire
        </Link>
      </Reveal>
    </div>
  );
}
