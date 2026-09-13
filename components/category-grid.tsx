import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { collections } from "@/lib/products";

export function CollectionTiles() {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:gap-6">
      {collections.map((c,index) => (
        <Link
          key={c.handle}
          href={`/collections/${c.handle}`}
          className={`group relative block aspect-[3/4] overflow-hidden ${index === 2 ? "col-span-2 sm:col-span-1" : ""}`}
        >
          <Image
            src={c.image}
            alt={`Shop ${c.title} fragrances`}
            fill
            sizes="(max-width: 640px) 90vw, 33vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
          />
        </Link>
      ))}
    </div>
  );
}

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-20">
      <Reveal className="text-center">
        <p className="eyebrow-rule text-[11px] font-medium uppercase tracking-[0.45em] text-gold">
          Collections
        </p>
        <h2 className="mt-3 lg:mt-4 font-display text-2xl font-semibold uppercase leading-[1.4] tracking-wide md:text-3xl">
          Shop by Category
        </h2>
      </Reveal>

      <div className="mt-8 lg:mt-12">
        <CollectionTiles />
      </div>
    </section>
  );
}
