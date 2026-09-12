import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { CategoryGrid } from "@/components/category-grid";
import { ProductGrid } from "@/components/product-grid";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  // Art direction: a landscape hero on desktop, a portrait crop on mobile.
  // <picture> lets the browser download only the one that matches.
  const heroCommon = {
    alt: "The NIFS Perfume collection",
    sizes: "100vw",
    quality: 100,
  };
  const {
    props: { srcSet: heroDesktop },
  } = getImageProps({
    ...heroCommon,
    src: "/wanderlust.png",
    width: 1586,
    height: 992,
  });
  const {
    props: { srcSet: heroMobile, ...heroImgProps },
  } = getImageProps({
    ...heroCommon,
    src: "/wanderlustmobile.png",
    width: 1024,
    height: 1536,
  });

  return (
    <>
      {/* ————— HERO: the photograph speaks ————— */}
      <section className="relative h-[70vh] lg:h-svh overflow-hidden bg-cream">
        <div className="animate-hero-zoom absolute inset-0">
          <picture className="block h-full w-full">
            <source media="(min-width: 1024px)" srcSet={heroDesktop} />
            {/* eslint-disable-next-line @next/next/no-img-element -- getImageProps art direction, per next/image docs */}
            <img
              {...heroImgProps}
              srcSet={heroMobile}
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover object-top"
            />
          </picture>
        </div>

              </section>

      {/* ————— SHOP BY CATEGORY ————— */}
      <CategoryGrid />

      {/* ————— ALL PRODUCTS ————— */}
      <ProductGrid />

      {/* ————— ABOUT US ————— */}
      <section className="bg-charcoal text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
          <Reveal>
            <div className="relative">
              <div className="absolute -right-4 -top-4 hidden h-full w-full border border-gold/40 lg:block" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="NIFS Perfume bottles"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow-rule text-[11px] font-medium uppercase tracking-[0.45em] text-gold-light">
                About Us
              </p>
              <h2 className="mt-6 font-display text-2xl uppercase font-normal tracking-wide  leading-[1.4] md:text-3xl">
                Great perfume
                <br />
                shouldn&apos;t cost a fortune
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-7 text-[15px] font-light leading-[1.9] text-white/65">
                NIFS started with a simple frustration: the fragrances we loved
                cost ₹8,000, and the ones we could afford faded by lunch. So we
                built our own — sourcing the same French-grade perfume oils the
                luxury houses use, bottling them in India, and cutting out
                everything between us and you.
              </p>
              <p className="mt-4 text-[15px] font-light leading-[1.9] text-white/65">
                Seven scents. Honest prices. Fragrance that outlasts your
                longest day.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <dl className="mt-10 grid grid-cols-3 gap-8 border-t border-white/15 pt-8">
                {[
                  ["7", "Signature scents"],
                  ["12h", "Lasting power"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd className="font-display text-3xl font-semibold text-gold-light">
                      {value}
                    </dd>
                    <dd className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— CTA ————— */}
      <section className="bg-cream/60">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:py-28">
          <Reveal>
            <p className="eyebrow-rule text-[11px] font-medium uppercase tracking-[0.45em] text-gold">
              Find Your Match
            </p>
            <h2 className="mt-6 font-display text-2xl font-semibold uppercase leading-[1.4] tracking-wide md:text-3xl">
              Not sure which one
              <br />
              is you?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] font-light leading-[1.9] text-muted">
              Tell us what you like sweet, fresh, bold and we&apos;ll
              recommend your perfect NIFS match on WhatsApp. Free, fast, no
              pressure.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-ink px-10 py-4 text-[11px] font-medium rounded-lg uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:bg-gold"
              >
                Get a Recommendation
              </Link>
              <Link
                href="/products"
                className="border border-ink px-10 py-4 text-[11px] rounded-lg font-medium uppercase tracking-[0.28em] transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                Browse All Seven
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
