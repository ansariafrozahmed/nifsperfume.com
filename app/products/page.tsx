import type { Metadata } from "next";
import { ProductsExplorer } from "@/components/products-explorer";
import { collections, type CollectionKey, type Gender } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop All Fragrances",
  description:
    "Shop the complete NIFS PERFUME collection — seven long-lasting Eau de Parfums for him, her and everyone. Starting at ₹749.",
};

const collectionKeys = collections.map((c) => c.key);
const genderKeys: Gender[] = ["him", "her", "unisex"];

export default async function ProductsPage({
  searchParams,
}: PageProps<"/products">) {
  const params = await searchParams;
  const rawCollection = Array.isArray(params.collection)
    ? params.collection[0]
    : params.collection;
  const rawGender = Array.isArray(params.for) ? params.for[0] : params.for;

  const initialCollection = collectionKeys.includes(
    rawCollection as CollectionKey,
  )
    ? (rawCollection as CollectionKey)
    : "all";
  const initialGender = genderKeys.includes(rawGender as Gender)
    ? (rawGender as Gender)
    : "all";

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-10 lg:pt-20">
      <header className="text-center">
        <p className="eyebrow-rule text-[11px] font-medium uppercase tracking-[0.45em] text-gold">
          The Collection
        </p>
        <h1 className="mt-6 font-display text-2xl font-semibold uppercase tracking-[0.18em] md:text-3xl">
          All Fragrances
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] font-light leading-[1.9] text-muted">
          Seven signature Eau de Parfums — all long-lasting, all under ₹900.
          Filter by collection or by who&apos;s wearing it.
        </p>
      </header>

      <div className="mt-12">
        <ProductsExplorer
          key={`${initialCollection}-${initialGender}`}
          initialCollection={initialCollection}
          initialGender={initialGender}
        />
      </div>
    </div>
  );
}
