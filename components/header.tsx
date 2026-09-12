"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchOverlay } from "@/components/search-overlay";
import { useWishlist } from "@/components/wishlist";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop All" },
  { href: "/products?for=him", label: "For Him" },
  { href: "/products?for=her", label: "For Her" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { slugs } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // transparent only while resting on top of the home hero
  const glass = isHome && !scrolled && !open;
  const iconColor = glass
    ? "text-ink/75 hover:text-ink"
    : "text-ink hover:text-gold";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          glass
            ? "bg-transparent"
            : " bg-bg"
        }`}
      >
        {/* row 1 — search · logo · wishlist */}
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 lg:h-22 lg:px-10">
          <div className="flex items-center gap-2 justify-self-start">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className={`flex h-10 w-10 items-center justify-center transition-colors duration-300 ${iconColor}`}
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.8-3.8" />
              </svg>
            </button>
            <span
              className={`hidden text-[10px] font-light uppercase tracking-[0.3em] lg:block ${
                glass ? "text-ink/50" : "text-muted"
              }`}
            >
              Search
            </span>
          </div>

          <Link
            href="/"
            aria-label="NIFS Perfume — Home"
            className="justify-self-center"
          >
            <Image
              src="/logo-dark.png"
              alt="NIFS PERFUME"
              width={500}
              height={350}
              preload
              className="h-12 w-auto lg:h-14"
            />
          </Link>

          <div className="flex items-center gap-1 justify-self-end lg:gap-2">
            <Link
              href="/wishlist"
              aria-label={`Wishlist — ${slugs.length} saved`}
              className={`relative flex h-10 w-10 items-center justify-center transition-colors duration-300 ${iconColor}`}
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 20.5C6.8 16.6 3.5 13.4 3.5 9.9A4.4 4.4 0 0112 7.2a4.4 4.4 0 018.5 2.7c0 3.5-3.3 6.7-8.5 10.6z" />
              </svg>
              {slugs.length > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center bg-gold text-[9px] font-semibold text-white">
                  {slugs.length}
                </span>
              )}
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span
                className={`h-px w-6 transition-all duration-300 ${
                  "bg-ink"
                } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-6 transition-all duration-300 ${
                  "bg-ink"
                } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* row 2 — centered menu */}
        <nav
          className={`hidden h-11 items-center justify-center gap-10 border-t md:flex ${
            glass ? "border-ink/10" : "border-line"
          }`}
        >
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={
                pathname === item.href && !item.href.includes("?")
                  ? "page"
                  : undefined
              }
              className={`link-sweep text-[11px] font-medium uppercase tracking-[0.3em] transition-colors duration-300 ${
                glass
                  ? "text-ink/80 hover:text-ink"
                  : "text-ink hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {open && (
          <nav className="border-t border-line bg-bg px-6 py-6 md:hidden">
            <ul className="flex flex-col gap-5">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-xs font-medium uppercase tracking-[0.28em] text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/wishlist"
                  onClick={() => setOpen(false)}
                  className="text-xs font-medium uppercase tracking-[0.28em] text-gold"
                >
                  Wishlist ({slugs.length})
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* pages without a full-bleed hero start below the fixed header */}
      {!isHome && <div className="h-20 md:h-31 lg:h-[8.25rem]" />}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
