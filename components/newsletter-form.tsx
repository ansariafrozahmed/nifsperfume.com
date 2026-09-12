"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="text-sm font-light text-gold-light">
        You&apos;re in — check your inbox for your 10% off code.
      </p>
    );
  }

  return (
    <form
      className="flex border-b border-white/30 pb-2.5"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        aria-label="Email address"
        className="w-full bg-transparent text-sm font-light text-white placeholder:text-white/35 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-light transition-colors hover:text-white"
      >
        Join →
      </button>
    </form>
  );
}
