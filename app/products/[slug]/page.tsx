import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/enquiry-form";
import { ProductCard } from "@/components/product-card";
import { Rating } from "@/components/rating";
import { Reveal } from "@/components/reveal";
import {
  discountPercent,
  formatPrice,
  getProduct,
  getRelated,
  products,
} from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Fragrance not found" };
  return {
    title: `${product.name} Eau de Parfum`,
    description: product.description,
  };
}

const genderLabel = { him: "For Him", her: "For Her", unisex: "Unisex" };

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelated(product);
  const off = discountPercent(product);

  return (
    <div className="pt-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="text-[10px] uppercase tracking-[0.25em] text-muted"
        >
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <span className="mx-3">/</span>
          <Link href="/products" className="transition-colors hover:text-ink">
            Fragrances
          </Link>
          <span className="mx-3">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ————— image ————— */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={product.image}
                alt={`${product.name} Eau de Parfum bottle`}
                fill
                preload
                sizes="(max-width: 1024px) 95vw, 48vw"
                className="object-cover"
              />
              {product.badge && (
                <span className="absolute left-0 top-5 bg-white px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-ink">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="grid grid-cols-3 border border-t-0 border-line text-center">
              {[
                ["Lasts", product.wear],
                ["Wearer", genderLabel[product.gender]],
                ["Type", "Eau de Parfum"],
              ].map(([label, value], i) => (
                <div
                  key={label}
                  className={`py-4 ${i > 0 ? "border-l border-line" : ""}`}
                >
                  <p className="text-[9px] uppercase tracking-[0.25em] text-muted">
                    {label}
                  </p>
                  <p className="mt-1.5 text-[13px] font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ————— details ————— */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
              {product.family} · {product.sizes[0]}
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[0.14em] md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-[15px] font-light text-muted">
              {product.tagline}
            </p>

            <div className="mt-5">
              <Rating rating={product.rating} reviews={product.reviews} />
            </div>

            <div className="mt-7 flex flex-wrap items-baseline gap-3 border-y border-line py-5">
              <span className="text-3xl font-semibold tracking-wide">
                {formatPrice(product.price)}
              </span>
              <span className="text-base font-light text-muted line-through">
                {formatPrice(product.mrp)}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                {off}% Off
              </span>
              <span className="ml-auto text-[11px] font-light text-muted">
                Inclusive of all taxes
              </span>
            </div>

            <p className="mt-7 text-[15px] font-light leading-[1.9] text-ink">
              {product.description}
            </p>

            {/* notes */}
            <div className="mt-10">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em]">
                Fragrance Notes
              </h2>
              <div className="mt-5 grid sm:grid-cols-3">
                {(
                  [
                    ["Top", product.notes.top],
                    ["Heart", product.notes.heart],
                    ["Base", product.notes.base],
                  ] as const
                ).map(([tier, notes], i) => (
                  <div
                    key={tier}
                    className={`border border-line p-5 ${
                      i > 0 ? "-mt-px sm:-ml-px sm:mt-0" : ""
                    }`}
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">
                      {tier}
                    </p>
                    <p className="mt-3 text-sm font-light leading-relaxed">
                      {notes.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* enquiry */}
            <div id="enquire" className="mt-12 scroll-mt-36">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em]">
                Enquire About {product.name}
              </h2>
              <p className="mb-6 mt-3 text-sm font-light leading-relaxed text-muted">
                Fill this in and we&apos;ll get back to you within 24 hours
                with availability and offers.
              </p>
              <EnquiryForm product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* ————— related ————— */}
      <section className="mt-24 border-t border-line bg-cream/60">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-xl font-semibold uppercase tracking-[0.18em] md:text-2xl">
                You May Also Like
              </h2>
              <Link
                href="/products"
                className="link-sweep hidden text-[10px] font-medium uppercase tracking-[0.3em] sm:block"
              >
                View All
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-6">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
