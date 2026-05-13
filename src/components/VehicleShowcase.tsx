"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";

const features = [
  {
    title: "Full Self-Drive",
    desc: "Tesla's most advanced autonomous driving technology, supervised for your safety.",
  },
  {
    title: "Premium Interior",
    desc: "Vegan leather seats, 15.4\" cinematic display, and immersive sound system.",
  },
  {
    title: "Supercharger Access",
    desc: "Tap into Tesla's vast Supercharger network for rapid, convenient charging.",
  },
  {
    title: "8-Camera Sentry Mode",
    desc: "360° surveillance keeps your vehicle protected with continuous recording.",
  },
  {
    title: "Keyless Phone Access",
    desc: "Your phone is your key. Walk up, unlock, and drive — no fobs needed.",
  },
  {
    title: "363-Mile Range",
    desc: "Go farther on a single charge. Enough range for any Bay Area adventure.",
  },
];

export default function VehicleShowcase() {
  const carRef = useRef(null);
  const carInView = useInView(carRef, { once: true, margin: "-100px" });

  return (
    <section id="vehicle" className="relative py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-accent font-medium mb-4">
            THE VEHICLE
          </p>
          <h2
            className="font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            2025 Tesla Model 3
          </h2>
          <p className="text-lg text-muted-light font-light">
            Stealth Grey. Full Self-Drive. 8 Cameras. Ready for anything.
          </p>
        </FadeIn>

        {/* Car visual placeholder */}
        <motion.div
          ref={carRef}
          initial={{ opacity: 0, x: 80 }}
          animate={carInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative mb-20 mx-auto max-w-4xl"
        >
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0A0A0A 0%, #111 30%, #0066FF10 60%, #111 80%, #0A0A0A 100%)",
              }}
            />
            <div className="absolute inset-0 border border-white/[0.06] rounded-3xl" />
            {/* Stylized car silhouette using SVG */}
            <svg
              viewBox="0 0 800 250"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] max-w-[650px] opacity-30"
              fill="none"
              stroke="rgba(0,102,255,0.6)"
              strokeWidth="1.5"
            >
              <path d="M100,180 Q120,180 160,175 L260,170 Q300,100 340,80 L500,75 Q540,75 570,90 L620,120 Q660,155 700,170 L720,175 Q740,178 740,180" />
              <ellipse cx="230" cy="185" rx="35" ry="35" strokeWidth="2" />
              <ellipse cx="230" cy="185" rx="18" ry="18" />
              <ellipse cx="620" cy="185" rx="35" ry="35" strokeWidth="2" />
              <ellipse cx="620" cy="185" rx="18" ry="18" />
              <path d="M310,85 L350,82 Q380,80 400,80 L480,78" strokeWidth="1" opacity="0.5" />
              <line x1="100" y1="182" x2="185" y2="182" strokeWidth="1" opacity="0.3" />
              <line x1="265" y1="178" x2="580" y2="178" strokeWidth="1" opacity="0.3" />
              <line x1="660" y1="178" x2="740" y2="178" strokeWidth="1" opacity="0.3" />
            </svg>
            {/* Gradient glow underneath */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-20"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0,102,255,0.15) 0%, transparent 70%)",
              }}
            />
          </div>
        </motion.div>

        {/* Feature grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.1}
        >
          {features.map((feature, i) => (
            <StaggerItem key={i}>
              <div
                className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6
                           hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,102,255,0.1)]
                           transition-all duration-500"
              >
                <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-light leading-relaxed">{feature.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
