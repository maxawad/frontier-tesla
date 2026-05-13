"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StaggerContainer, StaggerItem } from "./animations";
import { FadeIn } from "./animations";

const reviews = [
  {
    stars: 5,
    text: "The Tesla was spotless, FSD was incredible, and the whole booking process took less than 5 minutes.",
    author: "Daniel K.",
    detail: "5-day rental",
    initial: "D",
  },
  {
    stars: 5,
    text: "Amazing car and service. Affordable price. Best Tesla rental experience. Will definitely be using Frontier again.",
    author: "Elena R.",
    detail: "3-day rental",
    initial: "E",
  },
  {
    stars: 5,
    text: "Never experienced a rental so seamless. Full Self-Drive alone made it worth every penny.",
    author: "Priya M.",
    detail: "weekend rental",
    initial: "P",
  },
];

function StarRating({ count, delay }: { count: number; delay: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + i * 0.1, duration: 0.3 }}
          className="text-accent text-sm"
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ translateY: `${index * 8}px` }}
        className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-7 h-full
                   hover:border-white/10 transition-colors duration-500"
      >
        {isInView && <StarRating count={review.stars} delay={0.3 + index * 0.15} />}
        <p className="text-white/90 text-base leading-relaxed mb-6 font-light">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
            <span className="text-accent text-sm font-bold">{review.initial}</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">{review.author}</p>
            <p className="text-xs text-muted-light">{review.detail}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-accent font-medium mb-4">
            REVIEWS
          </p>
          <h2
            className="font-extrabold text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Trusted by drivers across the Bay.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
