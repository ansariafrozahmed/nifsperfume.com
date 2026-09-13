import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NIFS PERFUME makes long-lasting Eau de Parfum in India at an honest price. Seven signature fragrances for him, her and everyone.",
};

const pillars = [
  {
    title: "Long-Lasting",
    copy: "Eau de Parfum made to stay with you for 8–12 hours.",
  },
  {
    title: "Crafted in India",
    copy: "Blended and bottled here, with French-grade perfume oils.",
  },
  {
    title: "Honest Pricing",
    copy: "Luxury-grade fragrance at ₹499 — no middlemen, no markup.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-10 lg:pt-14">
        <nav
          aria-label="Breadcrumb"
          className="text-[10px] uppercase tracking-[0.25em] text-muted"
        >
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <span className="mx-3">/</span>
          <span className="text-ink">About Us</span>
        </nav>

        <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/4] overflow-hidden">
              <Image
                src="https://images.nifsperfume.com/ChatGPT%20Image%20Sep%2013%2C%202026%2C%2005_51_40%20PM.jpeg"
                alt="The NIFS Perfume collection"
                fill
                preload
                sizes="(max-width: 1024px) 95vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow-rule text-[11px] font-medium uppercase tracking-[0.45em] text-gold">
                About Us
              </p>
              <h1 className="mt-5 font-display text-2xl font-semibold uppercase leading-[1.35] tracking-wide md:text-3xl">
                Great perfume
                <br />
                shouldn&apos;t cost a fortune
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-[15px] font-light leading-[1.9] text-muted">
                NIFS started with a simple frustration: the fragrances we loved
                cost ₹8,000, and the ones we could afford faded by lunch. So we
                built our own — sourcing French-grade perfume oils, bottling
                them in India, and cutting out everything between us and you.
              </p>
              <p className="mt-4 text-[15px] font-light leading-[1.9] text-muted">
                Seven signature scents for him, for her and for everyone.
                Honest prices. Fragrance that outlasts your longest day.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-3 lg:mt-24">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="h-full">
              <div className="h-full bg-bg p-8 text-center lg:p-10">
                <span className="font-display text-sm font-semibold text-gold">
                  0{i + 1}
                </span>
                <h2 className="mt-3 text-[12px] font-semibold uppercase tracking-[0.25em]">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                  {p.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center lg:mt-20">
            <h2 className="font-display text-xl font-semibold uppercase tracking-wide md:text-2xl">
              Find the one that smells like you
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/collections"
                className="rounded-lg bg-ink px-10 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:bg-gold"
              >
                Shop Collections
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-ink px-10 py-4 text-[11px] font-medium uppercase tracking-[0.28em] transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
