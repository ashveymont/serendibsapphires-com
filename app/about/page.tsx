import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Block } from "@/components/Steps";
import Todo, { Fact } from "@/components/Todo";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

// Placeholders on this page: [year], [Ratnapura / Colombo, with clients served from Dubai],
// the gemologist / gemmology-study sentence, [Founder photo], second team member ([Photo], [Name],
// [Gemologist / Sourcing partner, Ratnapura], [Credential or years in the trade]),
// [number] (NGJA licence), [Registered business name and number], [Address].

export const metadata = pageMetadata({
  title: "About Serendib Sapphires · Founder Ashan Veymont",
  description: "A licensed Sri Lankan sapphire dealer founded by Ashan Veymont, offering certified Ceylon sapphires worldwide.",
  path: "/about",
});

function Person({ name, role, line }: { name: React.ReactNode; role: React.ReactNode; line: React.ReactNode }) {
  return (
    <Reveal className="grid grid-cols-[96px_1fr] items-center gap-6 border border-[#2A2A2A] bg-[#141414] p-6">
      <div className="flex aspect-square w-24 items-center justify-center border border-dashed border-[#2A2A2A] text-center text-xs">
        <Todo>[Photo]</Todo>
      </div>
      <div className="space-y-1">
        <p className="font-display text-2xl text-[#F5F1EA]">{name}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-[#C6A56B]">{role}</p>
        <p className="text-sm font-light leading-7 text-[#A09080]">{line}</p>
      </div>
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <PageHeader heading="About Serendib Sapphires" />

      <div className="mx-auto mt-10 max-w-3xl space-y-20">
        {/* 1. Opening */}
        <Block>
          <p className="text-[17px] leading-9 text-[#BFA37A]">
            Serendib is the old name Arab traders gave Sri Lanka, an island famous for its sapphires for more than two thousand years. We
            are a licensed gem dealer, founded in <Todo>[year]</Todo> and based in <Todo>[Ratnapura / Colombo, with clients served from Dubai]</Todo>.
            We offer natural, certified Ceylon sapphires, and we help clients find specific stones through our network in Sri Lanka&apos;s
            gem trade.
          </p>
        </Block>

        {/* 2. Founder's note */}
        <Reveal as="section" className="border-l border-[#C6A56B]/50 pl-6 md:pl-10">
          <div className="space-y-6 text-[15px] font-light leading-8 text-[#F5F1EA]/90">
            <p>
              My first gift from my mother was a blue sapphire, given to me the day I was born. I still carry it. It is the reason I started
              Serendib.
            </p>
            <p>
              Before this, I built businesses in Dubai. What I learned there is that people buy from those they trust, and in the gem trade,
              trust is hard to come by. Too many buyers pay for a stone without really knowing what it is.
            </p>
            <p>
              So we work differently. Every sapphire we offer is certified by an independent laboratory, and we publish the report and any
              treatment before you ask. We are licensed by Sri Lanka&apos;s National Gem &amp; Jewellery Authority, and we work{" "}
              <Todo>
                [alongside (name), a gemologist with (x) years in Ratnapura / while I complete my gemmology studies with (institution)]
              </Todo>
              .
            </p>
            <p>We are a young house, and we would rather earn your trust one honest stone at a time than claim it.</p>
          </div>
          <p className="font-display mt-8 text-2xl italic text-[#C6A56B]">Ashan Veymont, Founder</p>
        </Reveal>

        {/* 3. Who you'll deal with */}
        <section className="space-y-6">
          <Reveal>
            <h2 className="font-display text-3xl font-light text-[#F5F1EA] md:text-4xl">Who you&apos;ll deal with</h2>
          </Reveal>
          <Person name="Ashan Veymont" role="Founder" line="Handles every client personally." />
          <Person
            name={<Todo>[Name]</Todo>}
            role={<Todo>[Gemologist / Sourcing partner, Ratnapura]</Todo>}
            line={<Todo>[Credential or years in the trade]</Todo>}
          />
        </section>

        {/* 4. Licence and company details */}
        <Reveal as="section" className="border-t border-[#2A2A2A] pt-8 text-sm font-light leading-7 text-[#A09080]">
          NGJA gem trading licence no. <Fact value={siteConfig.licenceNumber} placeholder="[number]" /> ·{" "}
          <Fact value={siteConfig.businessName} placeholder="[Registered business name and number]" /> ·{" "}
          <Fact value={siteConfig.address} placeholder="[Address]" />
        </Reveal>
      </div>
    </div>
  );
}
