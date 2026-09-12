"use client";

import { useState } from "react";

const inputClass =
  "w-full border border-line bg-white px-4 py-3.5 text-sm font-light placeholder:text-muted/60 focus:border-gold focus:outline-none transition-colors";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-gold-light bg-cream/70 p-10 text-center">
        <p className="font-display text-lg font-semibold uppercase tracking-[0.2em]">
          Thank You
        </p>
        <p className="mt-3 text-sm font-light text-muted">
          Your message is with our team. Expect a reply within 24 hours.
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
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          className={inputClass}
        />
      </div>
      <input
        type="tel"
        placeholder="Phone / WhatsApp (optional)"
        aria-label="Phone"
        className={inputClass}
      />
      <select aria-label="Subject" className={inputClass} defaultValue="">
        <option value="" disabled>
          What is this about?
        </option>
        <option>Product enquiry</option>
        <option>Bulk order / gifting</option>
        <option>Wholesale &amp; partnerships</option>
        <option>Something else</option>
      </select>
      <textarea
        required
        rows={5}
        placeholder="Your message…"
        aria-label="Message"
        className={inputClass}
      />
      <button
        type="submit"
        className="w-full bg-ink py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:bg-gold"
      >
        Send Message
      </button>
    </form>
  );
}
