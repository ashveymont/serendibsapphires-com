import InquiryForm from "@/components/InquiryForm";
import PageHeader from "@/components/PageHeader";
import type { Interest } from "@/lib/inquiry";
import { pageMetadata } from "@/lib/seo";
import { formatCarat, getStone } from "@/lib/stones";

// Opened from a stone page as /inquire?stone=<slug> (pre-fills the stone) or from Private Sourcing as
// /inquire?interest=sourcing. Placeholder on this page: WhatsApp [number] under the button.
//
// SEO title and description are not in the spec's SEO table; they are built from the page heading and sub.

export const metadata = pageMetadata({
  title: "Inquire · Serendib Sapphires",
  description: "Ask about a stone, or tell us what you're looking for. Ashan replies personally within 24 hours.",
  path: "/inquire",
});

export default async function InquirePage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { stone: stoneSlug, interest } = await searchParams;
  const stone = typeof stoneSlug === "string" ? getStone(stoneSlug) : undefined;
  const initialStone = stone ? `${stone.name} (${formatCarat(stone.carat)} ct)` : "";
  const initialInterest: Interest | "" = interest === "sourcing" ? "Finding a specific stone" : "";

  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <PageHeader
        heading="Inquire"
        sub="Ask about a stone, or tell us what you're looking for. Ashan replies personally within 24 hours."
      />
      <div className="mt-12">
        <InquiryForm key={initialStone + initialInterest} initialStone={initialStone} initialInterest={initialInterest} />
      </div>
    </div>
  );
}
