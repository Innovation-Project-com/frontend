"use client";

import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export function ScrollExperience() {
  const { scrollY, scrollYProgress } = useScroll();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollVelocity = useVelocity(scrollY);
  const rawPressure = useTransform(scrollVelocity, [-2200, 0, 2200], [1.9, 1, 1.9]);
  const pressure = useSpring(rawPressure, {
    stiffness: 180,
    damping: 24,
    mass: 0.35,
  });

  const progressHeight = useTransform(pressure, [1, 1.9], [4, 9]);
  const progressGlow = useTransform(pressure, [1, 1.9], [0.35, 0.95]);
  const progressShadow = useTransform(
    progressGlow,
    (value) => `0 0 ${Math.round(value * 34)}px rgba(250,248,85,${value})`
  );
  const sideWidth = useTransform(pressure, [1, 1.9], [4, 9]);
  const pressureOverlay = useTransform(pressure, [1, 1.9], [0, 1]);
  const backToTopPull = useTransform(scrollVelocity, [-1800, 0, 1800], [-8, 0, 8]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowBackToTop(latest > 640);
  });

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[80] origin-left bg-innovation-yellow"
        style={{
          scaleX: scrollYProgress,
          height: progressHeight,
          boxShadow: progressShadow,
        }}
      />

      <motion.div
        className="pointer-events-none fixed right-5 top-1/2 z-[70] hidden h-40 -translate-y-1/2 overflow-hidden rounded-full bg-midnight-navy/10 lg:block"
        style={{ width: sideWidth }}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: showBackToTop ? 1 : 0, x: showBackToTop ? 0 : 12 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-x-0 top-0 origin-top rounded-full bg-midnight-navy"
          style={{ scaleY: scrollYProgress, height: "100%" }}
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[65] h-20 bg-gradient-to-b from-innovation-yellow/18 to-transparent"
        style={{ opacity: pressureOverlay }}
      />

      <motion.button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-[75] flex size-12 items-center justify-center rounded-full border border-midnight-navy/10 bg-white text-xl font-bold text-midnight-navy shadow-xl shadow-midnight-navy/15 transition hover:-translate-y-1 hover:bg-innovation-yellow"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.9,
          pointerEvents: showBackToTop ? "auto" : "none",
        }}
        style={{ y: showBackToTop ? backToTopPull : 20 }}
        transition={{ duration: 0.28 }}
      >
        ↑
      </motion.button>
    </>
  );
}
