"use client";

import { FadeIn } from "./animations";

const footerLinks = [
  { label: "Book Now", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative">
      {/* Large CTA */}
      <div className="py-32 px-6 text-center">
        <FadeIn>
          <h2
            className="font-extrabold text-white mb-8"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Ready to drive the future?
          </h2>
          <a
            href="#pricing"
            className="inline-block px-10 py-4 bg-accent text-white font-semibold rounded-full text-lg
                       animate-pulse-glow hover:shadow-[0_0_40px_rgba(0,102,255,0.6)] transition-all duration-300"
          >
            Book Now
          </a>
        </FadeIn>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/[0.06] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex flex-col leading-none mb-3">
              <span className="text-base font-bold tracking-[0.25em] text-white">FRONTIER</span>
              <span className="text-[9px] tracking-[0.35em] text-muted-light font-light">TESLA</span>
            </div>
            <p className="text-xs text-muted">A product of redxam</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-light hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-light mb-1">
              <a href="tel:7477773918" className="hover:text-white transition-colors">(747) 777-3918</a>
              {" · "}
              <a href="mailto:support@frontiertesla.com" className="hover:text-white transition-colors">
                support@frontiertesla.com
              </a>
            </p>
            <p className="text-xs text-muted">© 2026 Frontier Tesla. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
