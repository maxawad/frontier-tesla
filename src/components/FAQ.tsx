"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";

const faqs = [
  {
    q: "What's the minimum rental period?",
    a: "2 days minimum, starting at $130.",
  },
  {
    q: "What's included?",
    a: "Full Self-Drive, Supercharger access, keyless phone entry, 8-camera Sentry Mode, and 24/7 support — all included at no extra cost.",
  },
  {
    q: "What about insurance?",
    a: "You'll need valid auto insurance. If you don't have coverage, we can help you find a policy before your trip.",
  },
  {
    q: "Does the car have Full Self-Drive?",
    a: "Yes! Every rental includes Tesla's latest Full Self-Drive (Supervised) technology.",
  },
  {
    q: "Where do I pick up the car?",
    a: "Presidio, San Francisco. Exact address provided after booking confirmation.",
  },
  {
    q: "Can I cancel my reservation?",
    a: "Yes, free cancellation up to 24 hours before pickup.",
  },
  {
    q: "What verification is required?",
    a: "Valid driver's license and a credit card. Quick digital waiver during booking.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-white group-hover:text-accent transition-colors duration-300 pr-4">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-muted-light"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-light leading-relaxed pr-12">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-accent font-medium mb-4">
            FAQ
          </p>
          <h2
            className="font-extrabold text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Everything you need to know.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl px-6 md:px-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
