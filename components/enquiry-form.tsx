"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

const inputClass =
  "w-full border border-line bg-white px-4 py-3.5 text-sm font-light placeholder:text-muted/60 focus:border-gold focus:outline-none transition-colors";

export function EnquiryForm({ product }: { product: Product }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-gold-light bg-cream/70 p-9 text-center">
        <p className="font-display text-lg font-semibold uppercase tracking-[0.2em]">
          Thank You
        </p>
        <p className="mt-3 text-sm font-light leading-relaxed text-muted">
          Your enquiry about{" "}
          <span className="font-medium text-ink">{product.name}</span> has been
          received. Our team will reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-3.5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-3.5 sm:grid-cols-2">
        <input required placeholder="Full name" aria-label="Full name" className={inputClass} />
        <input
          required
          type="tel"
          placeholder="Phone / WhatsApp"
          aria-label="Phone"
          className={inputClass}
        />
      </div>
      <input
        type="email"
        placeholder="Email (optional)"
        aria-label="Email address"
        className={inputClass}
      />
      <textarea
        rows={3}
        placeholder={`Any questions about ${product.name}? Quantity, delivery, gifting…`}
        aria-label="Message"
        className={inputClass}
      />
      <button
        type="submit"
        className="w-full bg-ink py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:bg-gold"
      >
        Send Enquiry
      </button>
      <p className="text-center text-[11px] font-light text-muted">
        No obligation — we reply on WhatsApp or email within 24 hours.
      </p>
    </form>
  );
}
