"use client";

import { FadeIn, ScaleIn, CountUp, StaggerContainer, StaggerItem } from "./animations";

const lineItems = [
  { label: "Weekday (Mon–Thu)", value: "$65/day" },
  { label: "Weekend (Fri–Sun)", value: "$85/day" },
  { label: "Security Deposit", value: "$500 (refundable)" },
  { label: "Insurance", value: "Required (own or purchase)" },
  { label: "Full Self-Drive", value: "Included ✓", highlight: true },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-accent font-medium mb-4">
            TRANSPARENT PRICING
          </p>
          <h2
            className="font-extrabold text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Simple. Honest. No surprises.
          </h2>
        </FadeIn>

        <ScaleIn>
          <div
            className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-12
                       shadow-[0_0_60px_rgba(0,102,255,0.05)]"
          >
            {/* Price hero */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-2xl text-muted-light font-light">$</span>
                <span className="text-7xl md:text-8xl font-extrabold text-white" style={{ letterSpacing: "-0.04em" }}>
                  <CountUp target={65} duration={1.5} />
                </span>
                <span className="text-xl text-muted-light font-light">/day</span>
              </div>
              <p className="text-muted-light text-sm">
                Starting at $130 · 2-day minimum
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

            {/* Line items */}
            <StaggerContainer className="space-y-4 mb-10" staggerDelay={0.08}>
              {lineItems.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-light">{item.label}</span>
                    <span className={`text-sm font-medium ${item.highlight ? "text-accent" : "text-white"}`}>
                      {item.value}
                    </span>
                  </div>
                  {i < lineItems.length - 1 && (
                    <div className="h-px bg-white/[0.04]" />
                  )}
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTA */}
            <div className="text-center">
              <a
                href="#pricing"
                className="inline-block px-10 py-4 bg-accent text-white font-semibold rounded-full text-base
                           hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] transition-all duration-300"
              >
                Book Your Tesla →
              </a>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
