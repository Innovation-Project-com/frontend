"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

const problems = [
  {
    code: "01",
    title: "Disconnected Systems",
    short: "ERP, WMS, TMS, and finance tools run separately.",
    description:
      "Data sits in separate tools across finance, warehouse, logistics, and production, making decisions slower than they should be.",
    solution: "Unify workflows into one connected operational source.",
    metric: "5 systems connected",
    progress: 86,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  },
  {
    code: "02",
    title: "Manual Reporting",
    short: "Teams lose hours validating spreadsheets.",
    description:
      "Teams spend too much time compiling spreadsheets and validating numbers instead of acting on accurate operational insight.",
    solution: "Automate daily reporting from live business data.",
    metric: "12 hours saved weekly",
    progress: 74,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    code: "03",
    title: "Limited Visibility",
    short: "Managers cannot see stock, shipment, and production clearly.",
    description:
      "Managers cannot see inventory, shipments, production schedules, or daily performance clearly from one reliable source.",
    solution: "Give teams real-time visibility across operations.",
    metric: "94% workflow visibility",
    progress: 94,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  },
  {
    code: "04",
    title: "Costly Implementation",
    short: "Enterprise systems feel expensive and difficult to adapt.",
    description:
      "Enterprise systems often feel expensive, complex, and difficult to adapt to the way your business actually operates.",
    solution: "Implement practical modules around real business priorities.",
    metric: "Lower upfront risk",
    progress: 68,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
];

export function ProblemSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = problems[activeIndex];

  return (
    <section className="relative overflow-hidden bg-innovation-yellow py-20 text-midnight-navy md:py-28">
      <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-16 h-80 w-80 rounded-full bg-white/25 blur-3xl" />

      <Container className="relative max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="inline-flex rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-midnight-navy shadow-sm"
            >
              The Challenge
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-7 max-w-2xl text-[clamp(2.35rem,4vw,4rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-midnight-navy"
            >
              Business Problems We{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Understand</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-full bg-white/80 md:h-4" />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 max-w-2xl text-base leading-8 text-midnight-navy/75"
            >
              Most businesses struggle with the same operational challenges. We
              build ERP, TMS, WMS, MRP, and IoT solutions specifically to connect
              the work, improve visibility, and keep implementation practical.
            </motion.p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {problems.map((problem, index) => {
                const selected = activeIndex === index;

                return (
                  <motion.button
                    key={problem.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.42, delay: index * 0.06 }}
                    whileHover={{ y: -6 }}
                    className={cn(
                      "group relative overflow-hidden rounded-[1.5rem] border p-5 text-left transition-all duration-300",
                      selected
                        ? "border-midnight-navy bg-midnight-navy text-white shadow-2xl shadow-midnight-navy/20"
                        : "border-midnight-navy/10 bg-white/55 text-midnight-navy shadow-sm hover:bg-white/75"
                    )}
                  >
                    <span
                      className={cn(
                        "mb-5 flex size-12 items-center justify-center rounded-xl text-sm font-bold transition-colors duration-300",
                        selected
                          ? "bg-innovation-yellow text-midnight-navy"
                          : "bg-midnight-navy text-innovation-yellow"
                      )}
                    >
                      {problem.code}
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.01em]">
                      {problem.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-7 transition-colors duration-300",
                        selected ? "text-white/74" : "text-midnight-navy/65"
                      )}
                    >
                      {problem.short}
                    </p>
                    {selected && (
                      <motion.span
                        layoutId="problem-active-line"
                        className="absolute inset-x-5 bottom-0 h-1 rounded-t-full bg-innovation-yellow"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[620px]">
            <motion.div
              className="absolute -left-6 top-8 z-20 flex size-20 items-center justify-center rounded-3xl bg-midnight-navy text-4xl font-black text-innovation-yellow shadow-xl shadow-midnight-navy/25"
              animate={{ rotate: [0, 6, -6, 0], y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              *
            </motion.div>

            <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-midnight-navy shadow-2xl shadow-midnight-navy/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={`${active.title} operational challenge`}
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/86 via-midnight-navy/34 to-transparent" />
            </div>

            <motion.div
              className="absolute right-8 top-8 z-20 rounded-3xl bg-white/90 p-5 text-midnight-navy shadow-2xl shadow-midnight-navy/20 backdrop-blur-md"
              layout
            >
              <p className="text-xs font-bold uppercase tracking-wide text-midnight-navy/50">
                Active diagnosis
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.metric}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-2 text-2xl font-semibold tracking-[-0.03em]"
                >
                  {active.metric}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <div className="absolute inset-x-8 bottom-8 rounded-[1.7rem] bg-midnight-navy/80 p-7 text-white shadow-2xl shadow-midnight-navy/20 backdrop-blur-md">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <motion.div
                  className="relative flex size-20 shrink-0 items-center justify-center rounded-3xl bg-innovation-yellow text-2xl font-black text-midnight-navy"
                  animate={{ boxShadow: ["0 0 0 0 rgba(250,248,85,0.38)", "0 0 0 16px rgba(250,248,85,0)", "0 0 0 0 rgba(250,248,85,0)"] }}
                  transition={{ duration: 2.6, repeat: Infinity }}
                >
                  IP
                </motion.div>
                <div className="min-w-0 flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs font-bold uppercase tracking-wide text-innovation-yellow">
                        {active.title}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em]">
                        {active.solution}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-7 text-white/78">
                        {active.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/15">
                    <motion.div
                      key={active.progress}
                      initial={{ width: 0 }}
                      animate={{ width: `${active.progress}%` }}
                      transition={{ duration: 0.75, ease: "easeOut" }}
                      className="h-full rounded-full bg-innovation-yellow"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-8 top-40 hidden w-44 rounded-3xl bg-white/82 p-4 shadow-2xl shadow-midnight-navy/15 backdrop-blur-md sm:block">
              <div className="flex items-center justify-between text-xs font-bold text-midnight-navy/60">
                <span>ERP</span>
                <span>WMS</span>
                <span>TMS</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((item) => (
                  <motion.span
                    key={item}
                    className="h-16 rounded-2xl bg-midnight-navy"
                    animate={{ opacity: [0.35, 1, 0.35], y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: item * 0.22 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
