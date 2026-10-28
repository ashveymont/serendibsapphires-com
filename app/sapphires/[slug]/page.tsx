import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Todo, { Fact } from "@/components/Todo";
import WhatsAppButton from "@/components/WhatsAppButton";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { formatCarat, formatPrice, getStone, getStones, treatmentLabel, type Stone } from "@/lib/stones";

// Stone page template. Every value comes from content/stones.json; a null field renders as a placeholder.
// Placeholders that can appear here: any null stone field (lab, report number/date, dimensions, video,
// certificate photo, description), [lab website or contact], [7] (siteConfig.returnPeriodDays),
// WhatsApp [number].

export const dynamicParams = false;

export function generateStaticParams() {
  return getStones().map((stone) => ({ slug: stone.slug }));
}

function capitalise(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function titleCase(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

function stoneDescription(stone: Stone): string {
  const parts = [`${formatCarat(stone.carat)} ct natural ${stone.colour.toLowerCase()} sapphire from Sri Lanka.`];
  if (stone.lab && stone.reportNumber) parts.push(`${stone.lab} report ${stone.reportNumber}.`);
  const hasVideo = stone.media.some((item) => item.kind === "video");
  parts.push(hasVideo ? "Video, full specification and certificate." : "Full specification and certificate.");
  return parts.join(" ");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const stone = getStone(slug);
  if (!stone) return {};
  return {
    ...pageMetadata({
      title: `${titleCase(stone.colour)} ${stone.shape} Sapphire ${formatCarat(stone.carat)} ct · Serendib`,
      description: stoneDescription(stone),
      path: `/sapphires/${stone.slug}`,
    }),
    ...(stone.hidden && { robots: { index: false, follow: false } }),
  };
}

function productJsonLd(stone: Stone) {
  const images = stone.media.filter((item) => item.kind === "photo").map((item) => `${siteConfig.url}${encodeURI(item.src)}`);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: stone.name,
    sku: stone.slug,
    description: stone.shortDescription ?? stoneDescription(stone),
    ...(images.length && { image: images }),
    brand: { "@type": "Brand", name: siteConfig.name },
    category: "Gemstones > Sapphires",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Weight", value: `${formatCarat(stone.carat)} ct` },
      { "@type": "PropertyValue", name: "Colour", value: stone.colour },
      { "@type": "PropertyValue", name: "Shape", value: stone.shape },
      { "@type": "PropertyValue", name: "Origin", value: stone.origin },
      ...(stone.treatment ? [{ "@type": "PropertyValue", name: "Treatment", value: stone.treatment }] : []),
      ...(stone.lab && stone.reportNumber
        ? [{ "@type": "PropertyValue", name: "Certificate", value: `${stone.lab} report ${stone.reportNumber}` }]
        : []),
    ],
    // An Offer needs a price; "price on request" stones are listed without one.
    ...(stone.price && {
      offers: {
        "@type": "Offer",
        price: stone.price.amount,
        priceCurrency: stone.price.currency,
        availability: stone.status === "sold" ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
        url: `${siteConfig.url}/sapphires/${stone.slug}`,
        seller: { "@type": "Organization", name: siteConfig.name },
      },
    }),
  };
}

function SpecRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-[#2A2A2A] py-4 text-sm sm:flex-row sm:justify-between sm:gap-6">
      <dt className="text-[#BFA37A]">{label}</dt>
      <dd className="text-[#F5F1EA] sm:text-right">{children}</dd>
    </div>
  );
}

function LabLookup({ stone }: { stone: Stone }) {
  if (stone.reportVerifyUrl) {
    return (
      <a href={stone.reportVerifyUrl} target="_blank" rel="noopener noreferrer" className="text-[#C6A56B] underline underline-offset-4">
        {stone.reportVerifyUrl}
      </a>
    );
  }
  const lookup = siteConfig.labLookup;
  if (lookup && /^https?:\/\//.test(lookup)) {
    return (
      <a href={lookup} target="_blank" rel="noopener noreferrer" className="text-[#C6A56B] underline underline-offset-4">
        {lookup}
      </a>
    );
  }
  return <Fact value={lookup} placeholder="[lab website or contact]" />;
}

export default async function StonePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stone = getStone(slug);
  if (!stone) notFound();

  const gallery = stone.media.filter((item) => item.kind !== "certificate");
  const hasVideo = gallery.some((item) => item.kind === "video");
  const certificate = stone.media.find((item) => item.kind === "certificate");
  const returnDays = siteConfig.returnPeriodDays;

  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      {!stone.hidden && <JsonLd data={productJsonLd(stone)} />}

      {stone.hidden && (
        <div className="mx-auto max-w-[1280px] pt-6">
          <Todo>Hidden stone: visible in dev preview only. Set &quot;hidden&quot;: false in content/stones.json to publish.</Todo>
        </div>
      )}

      {/* 1. Header */}
      <Reveal as="section" className="mx-auto max-w-[1280px] pt-16">
        <Link href="/sapphires" className="text-xs uppercase tracking-[0.2em] text-[#C6A56B]">
          ← Sapphires
        </Link>
        <h1 className="font-display mt-8 text-5xl font-light leading-[1.05] text-[#F5F1EA] md:text-7xl">{stone.name}</h1>
        <p className="eyebrow mt-6">
          {formatCarat(stone.carat)} ct · {stone.origin} · <Fact value={treatmentLabel(stone.heated)} placeholder="[Unheated / Heated]" />
          {stone.status === "sold" && " · Sold"}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-[1280px] gap-12 lg:grid-cols-5">
        {/* 2. Media */}
        <Reveal className="space-y-6 lg:col-span-3">
          {gallery.map((item) =>
            item.kind === "video" ? (
              <video key={item.src} src={item.src} controls playsInline className="w-full bg-[#141414]" aria-label={item.alt} />
            ) : (
              <div key={item.src} className="relative aspect-[4/3] w-full overflow-hidden bg-[#141414]">
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" priority />
              </div>
            ),
          )}
          {!hasVideo && (
            <div className="flex aspect-video w-full items-center justify-center border border-dashed border-[#2A2A2A] px-6 text-center">
              <Todo>[Video in daylight and indoor light; photo beside a ruler or on the hand for scale]</Todo>
            </div>
          )}
        </Reveal>

        <div className="space-y-12 lg:col-span-2">
          {/* 3. Specification */}
          <Reveal>
            <dl className="border-t border-[#2A2A2A]">
              <SpecRow label="Variety">{stone.variety}</SpecRow>
              <SpecRow label="Weight">{formatCarat(stone.carat)} ct</SpecRow>
              <SpecRow label="Dimensions">
                <Fact value={stone.dimensions} placeholder="[L × W × D] mm" />
              </SpecRow>
              <SpecRow label="Shape and cut">
                {stone.shape}
                {stone.cut ? `, ${stone.cut.toLowerCase()}` : ""}
              </SpecRow>
              <SpecRow label="Colour">{capitalise(stone.colour)}</SpecRow>
              <SpecRow label="Clarity">
                <Fact value={stone.clarity} placeholder="[Clarity]" />
              </SpecRow>
              <SpecRow label="Treatment">
                <Fact value={stone.treatment} placeholder="[As stated on the report]" />
              </SpecRow>
              <SpecRow label="Origin">{stone.origin}</SpecRow>
              <SpecRow label="Certificate">
                <Fact value={stone.lab} placeholder="[Lab name]" />, report no. <Fact value={stone.reportNumber} placeholder="[number]" />,{" "}
                <Fact value={stone.reportDate} placeholder="[date]" />
              </SpecRow>
              <SpecRow label="Price">{formatPrice(stone.price)}</SpecRow>
            </dl>
          </Reveal>

          {/* 7. Inquiry */}
          <Reveal className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <Link href={`/inquire?stone=${stone.slug}`} className="btn-gold-fill text-center">
              Inquire
            </Link>
            <WhatsAppButton message={`${stone.name} (${formatCarat(stone.carat)} ct)`} className="btn-gold text-center" />
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-[1280px] gap-12 md:grid-cols-3">
        {/* 4. Certificate */}
        <Reveal className="space-y-5">
          <h2 className="font-display text-3xl font-light text-[#F5F1EA]">Certificate</h2>
          {certificate ? (
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#141414]">
              <Image src={certificate.src} alt={certificate.alt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ) : (
            <div className="flex aspect-[3/4] w-full items-center justify-center border border-dashed border-[#2A2A2A] px-6 text-center">
              <Todo>[Photo of the lab report]</Todo>
            </div>
          )}
          <p className="text-sm font-light leading-7 text-[#A09080]">
            Contact or look up the laboratory: <LabLookup stone={stone} />
          </p>
        </Reveal>

        {/* 5. About this stone */}
        <Reveal className="space-y-5" delay={0.08}>
          <h2 className="font-display text-3xl font-light text-[#F5F1EA]">About this stone</h2>
          <p className="text-sm font-light leading-8 text-[#A09080]">
            <Fact value={stone.shortDescription} placeholder="[Two or three factual sentences on colour, brightness and cutting]" />
          </p>
        </Reveal>

        {/* 6. Included */}
        <Reveal className="space-y-5" delay={0.16}>
          <h2 className="font-display text-3xl font-light text-[#F5F1EA]">Included</h2>
          <ul className="space-y-3 text-sm font-light leading-7 text-[#A09080]">
            <li>Original lab report</li>
            <li>Serendib record of origin</li>
            <li>Insured delivery</li>
            <li>
              <Fact value={returnDays} placeholder="[7]" />
              -day inspection period
            </li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
