import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/products";

export function ProductGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-20">
      <Reveal className="text-center">
        <p className="eyebrow-rule text-[11px] font-medium uppercase tracking-[0.45em] text-gold">
          The Collection
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold uppercase leading-[1.4] tracking-wide md:text-3xl lg:mt-4">
          Our Fragrances
        </h2>
        {/* <p className="mx-auto mt-4 max-w-xl text-[15px] font-light leading-[1.9] text-muted">
          Seven long-lasting Eau de Parfums, crafted in India with
          French-grade perfume oils — starting at ₹749.
        </p> */}
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:mt-12 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 4) * 80}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
