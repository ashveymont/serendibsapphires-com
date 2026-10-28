"use client";

import { useMemo, useState } from "react";
import StoneCard from "@/components/StoneCard";
import Todo from "@/components/Todo";
import type { ColourGroup, Stone } from "@/lib/stones";

const colourFilters: { value: ColourGroup; label: string }[] = [
  { value: "blue", label: "Blue" },
  { value: "padparadscha", label: "Padparadscha" },
  { value: "pink", label: "Pink" },
  { value: "yellow", label: "Yellow" },
  { value: "other", label: "Other" },
];

type CaratRange = "under-1" | "1-3" | "over-3";
const caratFilters: { value: CaratRange; label: string; test: (carat: number) => boolean }[] = [
  { value: "under-1", label: "Under 1 ct", test: (carat) => carat < 1 },
  { value: "1-3", label: "1–3 ct", test: (carat) => carat >= 1 && carat <= 3 },
  { value: "over-3", label: "Over 3 ct", test: (carat) => carat > 3 },
];

type Treatment = "heated" | "unheated";
const treatmentFilters: { value: Treatment; label: string }[] = [
  { value: "heated", label: "Heated" },
  { value: "unheated", label: "Unheated" },
];

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition ${
        active ? "border-[#C6A56B] bg-[#C6A56B] text-[#0B0B0B]" : "border-[#2A2A2A] text-[#A09080] hover:border-[#C6A56B]/60"
      }`}
    >
      {children}
    </button>
  );
}

// Within a group, filters combine with OR (Blue or Pink); across groups, with AND.
export default function SapphireBrowser({ stones }: { stones: Stone[] }) {
  const [colours, setColours] = useState<ColourGroup[]>([]);
  const [carats, setCarats] = useState<CaratRange[]>([]);
  const [treatments, setTreatments] = useState<Treatment[]>([]);

  const filtered = useMemo(
    () =>
      stones.filter((stone) => {
        if (colours.length && !colours.includes(stone.colourGroup)) return false;
        if (carats.length && !caratFilters.some((range) => carats.includes(range.value) && range.test(stone.carat))) return false;
        if (treatments.length) {
          if (stone.heated === null) return false;
          if (!treatments.includes(stone.heated ? "heated" : "unheated")) return false;
        }
        return true;
      }),
    [stones, colours, carats, treatments],
  );

  const anyActive = colours.length + carats.length + treatments.length > 0;

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter sapphires">
        {colourFilters.map((filter) => (
          <FilterChip key={filter.value} active={colours.includes(filter.value)} onClick={() => setColours((prev) => toggle(prev, filter.value))}>
            {filter.label}
          </FilterChip>
        ))}
        <span className="hidden w-px bg-[#2A2A2A] sm:block" aria-hidden="true" />
        {caratFilters.map((filter) => (
          <FilterChip key={filter.value} active={carats.includes(filter.value)} onClick={() => setCarats((prev) => toggle(prev, filter.value))}>
            {filter.label}
          </FilterChip>
        ))}
        <span className="hidden w-px bg-[#2A2A2A] sm:block" aria-hidden="true" />
        {treatmentFilters.map((filter) => (
          <FilterChip
            key={filter.value}
            active={treatments.includes(filter.value)}
            onClick={() => setTreatments((prev) => toggle(prev, filter.value))}
          >
            {filter.label}
          </FilterChip>
        ))}
        {anyActive && (
          <button
            type="button"
            onClick={() => {
              setColours([]);
              setCarats([]);
              setTreatments([]);
            }}
            className="px-2 text-[11px] uppercase tracking-[0.18em] text-[#C6A56B] underline-offset-4 hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      <div className="mt-12">
        {stones.length === 0 ? (
          <StoneGridEmpty />
        ) : filtered.length === 0 ? (
          <p className="text-sm font-light text-[#A09080]">No stones match these filters.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((stone) => (
              <StoneCard key={stone.slug} stone={stone} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function StoneGridEmpty() {
  return (
    <div className="border border-dashed border-[#2A2A2A] px-6 py-16 text-center">
      <Todo>[No stones published yet: add stones to content/stones.json and set &quot;hidden&quot;: false]</Todo>
    </div>
  );
}
