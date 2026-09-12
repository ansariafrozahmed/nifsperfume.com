"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import {
  collections,
  products,
  type CollectionKey,
  type Gender,
} from "@/lib/products";

type CollectionFilter = CollectionKey | "all";
type GenderFilter = Gender | "all";

const genderTabs: { key: GenderFilter; label: string }[] = [
  { key: "all", label: "Everyone" },
  { key: "her", label: "For Her" },
  { key: "him", label: "For Him" },
  { key: "unisex", label: "Unisex" },
];

export function ProductsExplorer({
  initialCollection = "all",
  initialGender = "all",
}: {
  initialCollection?: CollectionFilter;
  initialGender?: GenderFilter;
}) {
  const [collection, setCollection] =
    useState<CollectionFilter>(initialCollection);
  const [gender, setGender] = useState<GenderFilter>(initialGender);

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const byCollection =
          collection === "all" || p.collections.includes(collection);
        const byGender =
          gender === "all" || p.gender === gender || p.gender === "unisex";
        return byCollection && byGender;
      }),
    [collection, gender],
  );

  return (
    <div>
      <div className="flex flex-col gap-5 border-y border-line py-6 lg:flex-row lg:items-center lg:justify-between">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by collection"
        >
          {[{ key: "all" as const, label: "All" }, ...collections].map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setCollection(c.key)}
              aria-pressed={collection === c.key}
              className={`px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                collection === c.key
                  ? "bg-ink text-white"
                  : "border border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div
          className="flex flex-wrap gap-6"
          role="group"
          aria-label="Filter by wearer"
        >
          {genderTabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setGender(t.key)}
              aria-pressed={gender === t.key}
              className={`link-sweep text-[10px] font-medium uppercase tracking-[0.22em] transition-colors ${
                gender === t.key ? "text-gold" : "text-muted hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
        {filtered.length} {filtered.length === 1 ? "Fragrance" : "Fragrances"}
      </p>

      {filtered.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-muted">
            No Match Found
          </p>
          <p className="mt-3 text-sm font-light text-muted">
            Try a different combination of filters.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-6">
          {filtered.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
