import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Block } from "@/components/Steps";
import { Fact } from "@/components/Todo";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

// Placeholders on this page: [number] (NGJA licence), [lab name(s)], [lab website or contact].
// All come from lib/site-config.ts.

export const metadata = pageMetadata({
  title: "Licensed & Certified · Serendib Sapphires",
  description: "NGJA-licensed gem dealer. How we certify, disclose treatment and help you verify every stone.",
  path: "/certification",
});

function LabLookup() {
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

export default function CertificationPage() {
  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <PageHeader
        heading="Certification & Provenance"
        sub="You should never have to take a gem dealer's word for anything. Here is how we work, and how to check us."
      />

      <div className="mx-auto mt-16 max-w-3xl space-y-16">
        <Block heading="Licensed in Sri Lanka">
          <p>
            Sri Lanka&apos;s gem trade is regulated by the National Gem &amp; Jewellery Authority (NGJA), a government body. Serendib
            Sapphires holds an NGJA gem trading licence, no. <Fact value={siteConfig.licenceNumber} placeholder="[number]" />. Every stone
            we export leaves Sri Lanka through the official NGJA export process, with the documentation that comes with it.
          </p>
        </Block>

        <Block heading="Independently certified">
          <p>
            Every stone we sell is tested by an independent gemmological laboratory, which confirms that it is a natural sapphire and
            records any treatment. We currently use{" "}
            <Fact
              value={siteConfig.labName}
              placeholder="[lab name(s), e.g. the NGJA's own testing laboratory or a named Colombo lab]"
            />
            . For significant stones, we arrange an additional report from an internationally recognised laboratory on request.
          </p>
        </Block>

        <Block heading="Always disclosed">
          <p>
            Each stone&apos;s page states the laboratory, report number and treatment status exactly as the report records it. Many fine
            sapphires are gently heated to improve colour, an accepted, permanent practice. Unheated stones are rarer and priced
            accordingly. Either way, we tell you. We do not sell glass-filled, diffused or synthetic stones.
          </p>
        </Block>

        <Block heading="How to check a stone">
          <ol className="list-decimal space-y-3 pl-5 marker:text-[#C6A56B]">
            <li>Find the report number on the stone&apos;s page.</li>
            <li>
              Contact or look up the laboratory: <LabLookup />.
            </li>
            <li>
              Confirm the weight, measurements and findings match our listing. If anything doesn&apos;t match, we will refund you in full.
            </li>
          </ol>
        </Block>

        <Reveal className="border border-[#C6A56B]/40 bg-[#141414] p-8">
          <p className="text-[15px] font-light leading-8 text-[#F5F1EA]">
            <span className="text-[#C6A56B]">What you receive:</span> the original laboratory report, a Serendib record of origin (district
            and purchase date), NGJA export documents for international orders, and insured, tracked delivery.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
