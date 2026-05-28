import Link from "next/link";

interface JournalCardProps {
  category: string;
  title: string;
  excerpt: string;
  gradient: string;
}

export default function JournalCard({ category, title, excerpt, gradient }: JournalCardProps) {
  return (
    <article className="stone-card bg-[#141414]">
      <div className="h-56 w-full" style={{ background: gradient }} />
      <div className="space-y-4 p-8">
        <p className="text-[10px] font-light uppercase tracking-[0.35em] text-[#C6A56B]">{category}</p>
        <h3 className="font-display text-3xl font-light text-[#F5F1EA]">{title}</h3>
        <p className="text-sm font-light leading-8 text-[#A09080]">{excerpt}</p>
        <Link href="#" className="text-xs uppercase tracking-[0.2em] text-[#C6A56B]">
          Read →
        </Link>
      </div>
    </article>
  );
}
