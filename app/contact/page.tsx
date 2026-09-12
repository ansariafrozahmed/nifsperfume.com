import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NIFS PERFUME — product enquiries, bulk orders, gifting and partnerships. We reply within 24 hours.",
};

const details = [
  {
    label: "Visit Us",
    lines: ["NIFS Perfume HQ", "Andheri East, Mumbai 400069"],
  },
  {
    label: "Talk to Us",
    lines: ["hello@nifsperfume.com", "+91 98000 00000 (WhatsApp)"],
  },
  {
    label: "Hours",
    lines: ["Mon – Sat · 10 AM – 7 PM IST", "We reply within 24 hours"],
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-10 lg:pt-20">
      <header className="text-center">
        <p className="eyebrow-rule text-[11px] font-medium uppercase tracking-[0.45em] text-gold">
          Correspondence
        </p>
        <h1 className="mt-6 font-display text-2xl font-semibold uppercase tracking-[0.18em] md:text-3xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] font-light leading-[1.9] text-muted">
          Questions about a fragrance, bulk and gifting orders, partnerships —
          or just need a scent recommendation? Write to us.
        </p>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="space-y-10">
          {details.map((d, i) => (
            <Reveal key={d.label} delay={i * 90}>
              <div className="border-l border-gold/50 pl-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                  {d.label}
                </p>
                {d.lines.map((line) => (
                  <p key={line} className="mt-2 text-[15px] font-light text-ink">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div className="bg-charcoal p-8 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light">
                Fastest Way to Reach Us
              </p>
              <p className="mt-4 text-sm font-light leading-[1.9] text-white/65">
                WhatsApp us for scent recommendations, order help and bulk
                pricing — average reply time under 2 hours.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="border border-line p-7 lg:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
