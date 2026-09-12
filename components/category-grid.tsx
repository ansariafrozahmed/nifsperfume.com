import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const tiles = [
  {
    href: "/products?for=him",
    label: "Men",
    sub: "Woody, spicy & bold",
    image: "/category/forhim.png",
  },
  {
    href: "/products?for=her",
    label: "Women",
    sub: "Florals & gourmands",
    image: "/category/forher.png",
  },
  {
    href: "/products?for=unisex",
    label: "Unisex",
    sub: "Fresh, for everyone",
    image: "/category/unisex.png",
  },
];

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

      <div className="mt-8 lg:mt-12 grid gap-5 sm:grid-cols-3 lg:gap-6">
        {tiles.map((tile) => (
            <Link
              key={tile.label}
              href={tile.href}
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <Image
                src={tile.image}
                alt={`Shop ${tile.label} fragrances`}
                fill
                sizes="(max-width: 640px) 90vw, 33vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
              />
              
            </Link>
        ))}
      </div>
    </section>
  );
}
