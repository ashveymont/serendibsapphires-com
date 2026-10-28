// Stone inventory. The data lives in content/stones.json; this file types it and decides what is visible.
//
// Adding a stone: copy an entry in content/stones.json, give it a unique slug and set "hidden": false.
// Unknown values should be null: the stone page shows them as highlighted placeholders.
//
// Field notes:
// - colourGroup and heated drive the filters on /sapphires.
// - price is null for "price on request"; otherwise { "amount": 4200, "currency": "USD" }.
// - media kinds: "photo", "video" (mp4 path or URL) and "certificate" (photo of the lab report).
// - notes is internal and never rendered.

import data from "@/content/stones.json";

export type ColourGroup = "blue" | "padparadscha" | "pink" | "yellow" | "other";
export type StoneStatus = "available" | "sold";

export interface StoneMedia {
  kind: "photo" | "video" | "certificate";
  src: string;
  alt: string;
}

export interface Stone {
  slug: string;
  name: string;
  variety: string;
  colour: string;
  colourGroup: ColourGroup;
  carat: number;
  dimensions: string | null;
  shape: string;
  cut: string | null;
  clarity: string | null;
  treatment: string | null;
  heated: boolean | null;
  origin: string;
  lab: string | null;
  reportNumber: string | null;
  reportDate: string | null;
  reportVerifyUrl: string | null;
  price: { amount: number; currency: string } | null;
  status: StoneStatus;
  hidden: boolean;
  media: StoneMedia[];
  shortDescription: string | null;
  notes?: string;
}

const allStones = data as Stone[];

/** Hidden stones are previewable in `npm run dev` only; they never appear in a production build. */
export const showHiddenStones = process.env.NODE_ENV === "development";

export function getStones(): Stone[] {
  return allStones.filter((stone) => !stone.hidden || showHiddenStones);
}

/** Stones that are public in production. Used for the sitemap and structured data. */
export function getPublishedStones(): Stone[] {
  return allStones.filter((stone) => !stone.hidden);
}

export function getStone(slug: string): Stone | undefined {
  return getStones().find((stone) => stone.slug === slug);
}

export function formatCarat(carat: number): string {
  return carat.toFixed(2);
}

export function formatPrice(price: Stone["price"]): string {
  if (!price) return "Price on request";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: price.currency, maximumFractionDigits: 0 }).format(
    price.amount,
  );
}

export function treatmentLabel(heated: boolean | null): string | null {
  if (heated === null) return null;
  return heated ? "Heated" : "Unheated";
}
