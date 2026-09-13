import Image from "next/image";
import Link from "next/link";
import { collections, products } from "@/lib/products";
import { contact, telHref } from "@/lib/site";

const socials = [
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 2.2a4 4 0 110 8 4 4 0 010-8zm6.4-3.8a1.4 1.4 0 100 2.9 1.4 1.4 0 000-2.9z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.6c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V21h3.4z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 00-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z",
  },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 lg:px-10">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.5fr]">
          <div>
            <Image
              src="https://images.nifsperfume.com/logo-white.png"
              alt="NIFS PERFUME"
              width={500}
              height={350}
              className="h-14 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm font-light leading-[1.9] text-white/55">
              Long-lasting, honest-luxury fragrances crafted in India. Seven
              signature Eau de Parfums — find the one that smells like you.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-white/20 transition-colors duration-300 hover:border-gold hover:bg-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Fragrances">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold-light">
              Fragrances
            </p>
            <ul className="mt-6 space-y-3.5 text-sm font-light text-white/60">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Collections">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold-light">
              Collections
            </p>
            <ul className="mt-6 space-y-3.5 text-sm font-light text-white/60">
              {collections.map((c) => (
                <li key={c.handle}>
                  <Link
                    href={`/collections/${c.handle}`}
                    className="transition-colors hover:text-white"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/collections" className="transition-colors hover:text-white">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold-light">
              Need Help?
            </p>
            <ul className="mt-6 space-y-4 text-sm font-light text-white/60">
              <li>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-white/35">
                  WhatsApp
                </span>
                <a href={telHref} className="mt-1 inline-block transition-colors hover:text-white">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-white/35">
                  Email
                </span>
                <a href={`mailto:${contact.email}`} className="mt-1 inline-block transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 text-[11px] font-light uppercase tracking-[0.2em] text-white/35 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} NIFS Perfume. All rights reserved.</p>
          <p>Made with ♥ in India</p>
        </div>
      </div>
    </footer>
  );
}
