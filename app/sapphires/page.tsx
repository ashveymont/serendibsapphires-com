import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SapphireBrowser from "@/components/SapphireBrowser";
import { pageMetadata } from "@/lib/seo";
import { getStones } from "@/lib/stones";

export const metadata = pageMetadata({
  title: "Ceylon Sapphires for Sale · Serendib Sapphires",
  description: "Natural blue, padparadscha and fancy sapphires from Sri Lanka, each with an independent laboratory report.",
  path: "/sapphires",
});

export default function SapphiresPage() {
  return (
    <div className="bg-[#0B0B0B] px-6 pb-28 lg:px-14">
      <PageHeader
        heading="Available Sapphires"
        sub="Natural Ceylon sapphires, each certified by an independent laboratory, with treatment always disclosed."
      />

      <section className="mx-auto mt-12 max-w-[1280px]">
        <SapphireBrowser stones={getStones()} />
      </section>

      <Reveal
        as="section"
        className="mx-auto mt-24 max-w-[1280px] border border-[#2A2A2A] bg-[#141414] px-8 py-14 text-center md:px-16"
      >
        <p className="font-display text-3xl font-light text-[#F5F1EA] md:text-4xl">Don&apos;t see what you need? We can source to order.</p>
        <Link href="/sourcing" className="btn-gold mt-8 inline-block">
          Private Sourcing →
        </Link>
      </Reveal>
    </div>
  );
}
