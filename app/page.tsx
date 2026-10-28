import Link from "next/link";
import Reveal from "@/components/Reveal";
import StoneCard from "@/components/StoneCard";
import { StoneGridEmpty } from "@/components/SapphireBrowser";
import Todo, { Fact } from "@/components/Todo";
import WhatsAppButton from "@/components/WhatsAppButton";
import reviews from "@/content/reviews.json";
import { siteConfig } from "@/lib/site-config";
import { getStones } from "@/lib/stones";

// Metadata for "/" is the default in app/layout.tsx.
//
// Placeholders on this page:
// - [licence no.] in the proof bar (siteConfig.licenceNumber)
// - [Founder portrait]
// - WhatsApp [number] on the closing buttons (siteConfig.whatsappNumber)
// - Available Now shows a placeholder while no stones are published.
// The "From Our Clients" section renders only once content/reviews.json has real reviews.

interface Review {
  quote: string;
  name: string;
  location?: string;
}

const whyColumns = [
  {
    title: "Closer to the mine.",
    copy: "Buying from a licensed dealer in Sri Lanka means fewer hands between the earth and you, and a clearer record of where your stone came from.",
  },
  {
    title: "Ceylon colour.",
    copy: "Sri Lankan sapphires are known for a bright, lively blue and for the soft pink-orange padparadscha found almost nowhere else.",
  },
  {
    title: "Nothing hidden.",
    copy: "We publish the lab, the report number and any treatment for every stone, before you ever ask.",
  },
];

export default function Home() {
  const stones = getStones().slice(0, 6);
  const clientReviews = reviews as Review[];

  return (
    <div className="bg-[#0B0B0B]">
      {/* 1. Hero */}
      <section className="relative flex min-h-[calc(100svh-6rem)] items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0F2145_0%,_#0B0B0B_70%)]" />
        <Reveal className="relative z-10 mx-auto max-w-4xl">
          <p className="eyebrow">Serendib Sapphires · Ratnapura, Sri Lanka</p>
          <h1 className="font-display mt-8 text-5xl font-light leading-[1.1] text-[#F5F1EA] md:text-7xl">
            Certified Ceylon sapphires, direct from the source.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-[15px] font-light leading-8 text-[#BFA37A]">
            We are a licensed gem dealer in Sri Lanka, the island that has supplied the world&apos;s sapphires for two thousand years.
            Every stone we offer is laboratory-certified, with its report published so you know exactly what you are buying.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/sapphires" className="btn-gold-fill">
              View Sapphires
            </Link>
            <Link href="/sourcing" className="btn-gold">
              Find a Specific Stone
            </Link>
          </div>
        </Reveal>
      </section>

      {/* 2. Proof bar */}
      <section className="border-y border-[#2A2A2A] bg-[#0D0D0D] px-6 py-8 lg:px-14">
        <ul className="mx-auto grid max-w-[1280px] gap-6 text-center text-[12px] font-light uppercase leading-6 tracking-[0.14em] text-[#F5F1EA] md:grid-cols-4">
          <li>
            Licensed by Sri Lanka&apos;s National Gem &amp; Jewellery Authority{" "}
            <Fact value={siteConfig.licenceNumber} placeholder="[licence no.]" />
          </li>
          <li>Every stone laboratory-certified</li>
          <li>Treatment always disclosed</li>
          <li>Insured worldwide delivery</li>
        </ul>
      </section>

      {/* 3. Available sapphires */}
      <section className="px-6 py-28 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="text-center">
            <h2 className="font-display text-5xl font-light text-[#F5F1EA] md:text-6xl">Available Now</h2>
            <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-7 text-[#BFA37A]">
              Each stone is one of one, photographed as it is and certified by an independent laboratory.
            </p>
          </Reveal>
          <div className="mt-16">
            {stones.length === 0 ? (
              <StoneGridEmpty />
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {stones.map((stone) => (
                  <StoneCard key={stone.slug} stone={stone} />
                ))}
              </div>
            )}
          </div>
          <div className="mt-12 text-center">
            <Link href="/sapphires" className="text-xs uppercase tracking-[0.2em] text-[#C6A56B] underline-offset-8 hover:underline">
              View all sapphires →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why buy from Sri Lanka */}
      <section className="bg-[#0D0D0D] px-6 py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-3">
          {whyColumns.map((column, index) => (
            <Reveal key={column.title} delay={index * 0.08} className="px-4 text-center md:border-r md:border-[#C6A56B]/30 last:md:border-r-0">
              <h3 className="font-display text-3xl text-[#F5F1EA]">{column.title}</h3>
              <p className="mt-4 text-sm font-light leading-8 text-[#A09080]">{column.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Find a specific stone */}
      <Reveal as="section" className="px-6 py-28 lg:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-light leading-tight text-[#F5F1EA] md:text-6xl">Looking for something you don&apos;t see?</h2>
          <p className="mx-auto mt-8 max-w-2xl text-[15px] font-light leading-8 text-[#A09080]">
            Through our network of licensed dealers and cutters in Ratnapura, we can search for a stone to your colour, size and budget,
            including larger and rarer sapphires, and present only those with proper certification.
          </p>
          <Link href="/sourcing" className="mt-10 inline-block text-xs uppercase tracking-[0.2em] text-[#C6A56B] underline-offset-8 hover:underline">
            How private sourcing works →
          </Link>
        </div>
      </Reveal>

      {/* 6. Founder */}
      <section className="bg-[linear-gradient(135deg,_#0F2145,_#0B0B0B)] px-6 py-28 lg:px-14">
        <Reveal className="mx-auto grid max-w-[1100px] items-center gap-12 md:grid-cols-[280px_1fr]">
          <div className="flex aspect-[4/5] w-full max-w-[280px] items-center justify-center border border-[#C6A56B]/40 bg-[#0B0B0B]/40">
            <Todo>[Founder portrait]</Todo>
          </div>
          <figure>
            <blockquote className="font-display text-3xl italic leading-[1.5] text-[#F5F1EA] md:text-4xl">
              &ldquo;My first gift from my mother was a blue sapphire, given to me at birth. I still carry it. I started Serendib so that
              anyone buying a sapphire can know exactly what they are getting, the way I always have.&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-xs uppercase tracking-[0.2em] text-[#BFA37A]">
              Ashan Veymont, Founder ·{" "}
              <Link href="/about" className="text-[#C6A56B] underline-offset-8 hover:underline">
                About us →
              </Link>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* 7. Reviews: shown only when real reviews exist */}
      {clientReviews.length > 0 && (
        <section className="px-6 py-28 lg:px-14">
          <div className="mx-auto max-w-[1280px]">
            <Reveal className="text-center">
              <h2 className="font-display text-5xl font-light text-[#F5F1EA] md:text-6xl">From Our Clients</h2>
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {clientReviews.map((review) => (
                <Reveal key={review.name} className="border border-[#2A2A2A] bg-[#141414] p-8">
                  <blockquote className="text-sm font-light leading-8 text-[#F5F1EA]">&ldquo;{review.quote}&rdquo;</blockquote>
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#BFA37A]">
                    {review.name}
                    {review.location ? ` · ${review.location}` : ""}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Closing call to action */}
      <Reveal
        as="section"
        className="bg-[radial-gradient(ellipse_at_center,_#0F2145_0%,_#0B0B0B_65%)] px-6 py-28 text-center lg:px-14"
      >
        <h2 className="font-display text-4xl font-light leading-tight text-[#F5F1EA] md:text-6xl">Have a question about a stone?</h2>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#BFA37A]">
          Message us and you&apos;ll hear back personally within 24 hours, by email, WhatsApp or video call.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/inquire" className="btn-gold-fill">
            Inquire
          </Link>
          <WhatsAppButton />
        </div>
      </Reveal>
    </div>
  );
}
