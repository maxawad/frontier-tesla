"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CountUp, StaggerContainer, StaggerItem } from "./animations";

const stats = [
  { value: 4.0, suffix: "s", label: "0–60 mph", decimal: true },
  { value: 363, suffix: "", label: "Range (mi)", decimal: false },
  { value: 5, suffix: "★", label: "NHTSA Safety", decimal: false },
  { value: 0, suffix: "", label: "Included", decimal: false, text: "FSD" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const words = "The Future of Driving, On Your Terms.".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background gradient orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full animate-gradient-shift"
          style={{
            background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cursor glow */}
      <div
        className="absolute pointer-events-none w-[400px] h-[400px] rounded-full opacity-20 transition-opacity duration-1000"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          background: "radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xs tracking-[0.3em] text-accent font-medium mb-8"
        >
          SAN FRANCISCO&apos;S PREMIER TESLA EXPERIENCE
        </motion.p>

        {/* Headline */}
        <h1 className="mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 800 }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-lg md:text-xl text-muted-light max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Subscribe to a 2025 Tesla Model 3 with Full Self-Drive. No lines. No paperwork. Just drive.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#pricing"
            className="px-8 py-4 bg-accent text-white font-semibold rounded-full text-base
                       hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] transition-all duration-300"
          >
            Start Driving →
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full text-base
                       hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto" staggerDelay={0.15} delay={2.4}>
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-2xl px-5 py-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.text ? (
                    stat.text
                  ) : (
                    <CountUp
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  )}
                </div>
                <div className="text-xs text-muted-light tracking-wider">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
