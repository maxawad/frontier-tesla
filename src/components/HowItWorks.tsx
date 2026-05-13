"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";

const steps = [
  {
    num: "01",
    title: "Pick Your Dates",
    desc: "Select pickup and return on our live calendar.",
  },
  {
    num: "02",
    title: "Digital Waiver",
    desc: "Complete your waiver and upload your license in seconds.",
  },
  {
    num: "03",
    title: "Secure Payment",
    desc: "Pay with any card via Stripe. Transparent, no hidden fees.",
  },
  {
    num: "04",
    title: "Unlock & Drive",
    desc: "Use the Tesla app as your digital key. Start your journey.",
  },
];

export default function HowItWorks() {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] text-accent font-medium mb-4">
            HOW IT WORKS
          </p>
          <h2
            className="font-extrabold text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Four steps. Zero friction.
          </h2>
        </FadeIn>

        <div className="relative" ref={lineRef}>
          {/* Connecting line – desktop */}
          <div className="hidden md:block absolute top-12 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="h-full bg-gradient-to-r from-accent/50 via-accent to-accent/50 origin-left"
            />
          </div>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6"
            staggerDelay={0.2}
          >
            {steps.map((step, i) => (
              <StaggerItem key={i} direction="left">
                <div className="text-center group">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 mx-auto">
                    <div className="absolute inset-0 rounded-full border border-accent/30 group-hover:border-accent/60 transition-colors duration-500" />
                    <div className="absolute inset-1 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
                    <span className="relative text-lg font-bold text-accent">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-light leading-relaxed max-w-[220px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
