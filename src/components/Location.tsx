"use client";

import { FadeIn } from "./animations";

export default function Location() {
  return (
    <section id="location" className="relative py-32 px-6 overflow-hidden">
      {/* Background – geometric SF-like skyline */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1200 300"
          className="absolute bottom-0 left-0 w-full opacity-[0.04]"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1"
        >
          <rect x="50" y="120" width="60" height="180" />
          <rect x="130" y="80" width="45" height="220" />
          <rect x="200" y="150" width="55" height="150" />
          <rect x="280" y="60" width="40" height="240" />
          <rect x="340" y="100" width="70" height="200" />
          <rect x="440" y="40" width="50" height="260" />
          <rect x="510" y="130" width="65" height="170" />
          <rect x="600" y="70" width="45" height="230" />
          <rect x="670" y="110" width="55" height="190" />
          <rect x="750" y="50" width="60" height="250" />
          <rect x="840" y="90" width="40" height="210" />
          <rect x="900" y="140" width="70" height="160" />
          <rect x="1000" y="80" width="50" height="220" />
          <rect x="1070" y="120" width="65" height="180" />
          {/* Bridge cable hint */}
          <path d="M0,100 Q300,20 600,100 Q900,20 1200,100" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] text-accent font-medium mb-4">
            PICKUP LOCATION
          </p>
          <h2
            className="font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Presidio, San Francisco
          </h2>
          <p className="text-lg text-muted-light font-light mb-12 max-w-xl mx-auto">
            One convenient spot for seamless pickup and return.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Keyless Pickup</h3>
            </div>
            <p className="text-muted-light leading-relaxed">
              Exact address provided after payment. Walk up, unlock with the Tesla app, and drive.
              No counter. No waiting. Just you and the open road.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
