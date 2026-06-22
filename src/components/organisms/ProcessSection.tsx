"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Container } from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We start by understanding your operations, pain points, goals, and the systems your team already uses.",
    icon: "C",
  },
  {
    step: "02",
    title: "Process Analysis",
    description:
      "We map workflows, identify bottlenecks, and define which ERP, TMS, WMS, MRP, or IoT modules matter most.",
    icon: "A",
  },
  {
    step: "03",
    title: "Solution Design",
    description:
      "We prepare a practical implementation plan with scope, timeline, integration points, and investment clarity.",
    icon: "D",
  },
  {
    step: "04",
    title: "Implementation",
    description:
      "We configure, customize, test, and deploy the solution with your team involved at every important checkpoint.",
    icon: "I",
  },
  {
    step: "05",
    title: "Go-Live & Support",
    description:
      "We train users, support go-live, and continue improving the system after launch so adoption stays strong.",
    icon: "S",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(latest * steps.length))
    );
    setActiveIndex(nextIndex);
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(115deg,#FAF855_0%,#F6E93A_42%,#D4B40D_100%)] py-20 text-midnight-navy md:py-28"
    >
      <Container className="max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center rounded-full bg-white/86 px-4 py-2 text-sm font-bold text-midnight-navy shadow-sm"
            >
              <span className="mr-1 text-2xl font-black leading-none text-midnight-navy">*</span>
              Our Process
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-7 max-w-2xl text-[clamp(2.5rem,4.4vw,4.7rem)] font-semibold leading-[1.08] tracking-[-0.035em]"
            >
              How We Work With You
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-8 max-w-2xl text-lg font-medium leading-8 text-midnight-navy/76"
            >
              A structured, collaborative process designed to minimize risk and
              maximize the success of your IT implementation, from first
              discussion to long-term system improvement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-12 grid max-w-lg grid-cols-2 gap-4"
            >
              {["Clear Scope", "Lower Risk", "Guided Rollout", "Post-Go-Live"].map((item) => (
                <div key={item} className="rounded-2xl border border-midnight-navy/10 bg-white/42 px-5 py-4 shadow-sm backdrop-blur">
                  <span className="text-sm font-semibold text-midnight-navy/78">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-7 top-4 hidden h-[calc(100%-2rem)] w-[3px] rounded-full bg-midnight-navy/22 md:block" />
            <motion.div
              className="absolute left-7 top-4 hidden w-[3px] origin-top rounded-full bg-midnight-navy md:block"
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ height: "calc(100% - 2rem)", scaleY: scrollYProgress }}
            />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const isCurrent = activeIndex === index;
                const isPassed = activeIndex > index;
                const isFuture = activeIndex < index;

                return (
                  <motion.article
                    key={step.step}
                    initial={{ opacity: 0, y: -28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: index * 0.12 }}
                    className="relative grid gap-5 md:grid-cols-[4rem_1fr]"
                  >
                    <motion.div
                      className={cn(
                        "relative z-10 flex size-14 items-center justify-center rounded-full text-lg font-black shadow-lg md:mx-auto",
                        isCurrent
                          ? "bg-midnight-navy text-innovation-yellow shadow-midnight-navy/26"
                          : isPassed
                            ? "bg-white text-midnight-navy shadow-midnight-navy/16"
                            : "bg-white/60 text-midnight-navy/42 shadow-midnight-navy/8"
                      )}
                      animate={{
                        scale: isCurrent ? 1.15 : 1,
                        y: isCurrent ? [0, -6, 0] : 0,
                      }}
                      transition={{
                        scale: { duration: 0.25 },
                        y: { duration: 2.6, repeat: isCurrent ? Infinity : 0, ease: "easeInOut" },
                      }}
                    >
                      <span className="relative">{step.icon}</span>
                    </motion.div>

                    <motion.div
                      className="group pb-2"
                      animate={{
                        opacity: isFuture ? 0.42 : 1,
                        y: isCurrent ? -4 : 0,
                      }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <h3
                          className={cn(
                            "text-3xl font-semibold tracking-[-0.03em] transition-colors duration-300",
                            isFuture ? "text-midnight-navy/58" : "text-midnight-navy"
                          )}
                        >
                          {step.title}
                        </h3>
                        <span
                          className={cn(
                            "rounded-full border px-3 py-1 text-xs font-bold transition-colors duration-300",
                            isCurrent
                              ? "border-midnight-navy bg-midnight-navy text-innovation-yellow"
                              : "border-midnight-navy/16 text-midnight-navy/52"
                          )}
                        >
                          {step.step}
                        </span>
                      </div>
                      <p
                        className={cn(
                          "mt-4 max-w-2xl text-lg font-semibold leading-8 transition-colors duration-300",
                          isFuture ? "text-midnight-navy/46" : "text-midnight-navy/74"
                        )}
                      >
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
