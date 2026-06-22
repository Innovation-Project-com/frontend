"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

const reasons = [
  {
    title: "Consultative Process First",
    description:
      "We analyze your operations before recommending ERP, TMS, WMS, MRP, or IoT modules, so the solution fits the way your business actually works.",
    outcome: "Business process mapped before build",
    metric: "01",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    preview:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "End-to-End Implementation",
    description:
      "From requirements and process mapping to deployment and post-go-live support, our team stays involved across the full project lifecycle.",
    outcome: "One team from planning to support",
    metric: "360",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
    preview:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Cost-Effective Delivery",
    description:
      "We prioritize practical implementation plans, modular rollouts, and affordable approaches that reduce unnecessary complexity.",
    outcome: "Modular rollout, lower implementation risk",
    metric: "ROI",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    preview:
      "https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Clear Business Communication",
    description:
      "We explain technical decisions in business terms, keep stakeholders aligned, and focus on measurable operational improvement.",
    outcome: "Clear updates for technical and business teams",
    metric: "24/7",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
    preview:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80",
  },
];

export function WhyUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = reasons[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white py-20 text-midnight-navy md:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-innovation-yellow/18 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="inline-flex w-fit items-center rounded-full bg-light-surface px-4 py-2 text-sm font-medium text-midnight-navy shadow-sm"
            >
              <motion.span
                className="mr-1 text-2xl font-black leading-none text-innovation-yellow"
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                *
              </motion.span>
              Why choose us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-7 max-w-xl text-[clamp(2.5rem,4.25vw,4.4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-[#454550]"
            >
              A Technology Partner That{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Understands Your Business</span>
                <motion.span
                  className="absolute inset-x-0 bottom-1 z-0 h-4 origin-left rounded-full bg-innovation-yellow/75 md:bottom-2 md:h-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.35 }}
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-7 max-w-2xl text-base leading-8 text-midnight-navy/74"
            >
              We don&apos;t just implement software. We understand your
              operations and help you achieve sustainable improvement through
              practical, integrated technology.
            </motion.p>

            <motion.div
              layout
              className="relative mt-20 h-[330px] overflow-hidden rounded-[2rem] bg-light-surface shadow-sm lg:mt-auto"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.image}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                >
                  <Image
                    src={active.image}
                    alt={`${active.title} at Innovation Project`}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/64 via-midnight-navy/8 to-transparent" />

              <motion.div
                className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/88 p-5 text-midnight-navy shadow-xl shadow-midnight-navy/14 backdrop-blur-md"
                layout
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-innovation-yellow text-sm font-black"
                    animate={{ boxShadow: ["0 0 0 0 rgba(250,248,85,0.42)", "0 0 0 14px rgba(250,248,85,0)", "0 0 0 0 rgba(250,248,85,0)"] }}
                    transition={{ duration: 2.6, repeat: Infinity }}
                  >
                    {active.metric}
                  </motion.div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.outcome}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-xs font-bold uppercase tracking-wide text-midnight-navy/45">
                        Current focus
                      </p>
                      <p className="mt-1 text-base font-semibold leading-snug">
                        {active.outcome}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="divide-y divide-midnight-navy/12 border-y border-midnight-navy/12">
            {reasons.map((reason, index) => {
              const selected = activeIndex === index;
              const number = `${String(index + 1).padStart(2, "0")}.`;

              return (
                <motion.article
                  key={reason.title}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveIndex(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={cn(
                    "group grid w-full gap-6 py-8 text-left transition-all duration-300 md:grid-cols-[4rem_1fr_auto] md:items-start md:gap-8",
                    selected && "bg-light-surface/50 px-4 md:px-5"
                  )}
                >
                  <p
                    className={cn(
                      "text-xl font-medium tracking-[-0.02em] transition-colors duration-300",
                      selected ? "text-midnight-navy" : "text-midnight-navy/58"
                    )}
                  >
                    {number}
                  </p>

                  <div>
                    <h3
                      className={cn(
                        "text-2xl font-medium leading-tight tracking-[-0.025em] transition-colors duration-300",
                        selected ? "text-midnight-navy" : "text-[#454550]"
                      )}
                    >
                      {reason.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-4 max-w-xl text-base leading-7 transition-colors duration-300",
                        selected ? "text-midnight-navy/78" : "text-midnight-navy/62"
                      )}
                    >
                      {reason.description}
                    </p>

                    <AnimatePresence>
                      {selected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <Link
                            href="/contact"
                            className="mt-7 inline-flex min-h-12 items-center rounded-full bg-innovation-yellow px-7 text-sm font-bold text-midnight-navy shadow-sm shadow-innovation-yellow/30 transition hover:-translate-y-0.5 hover:bg-[#ecea24] hover:shadow-lg"
                          >
                            Start Discussion
                            <span className="ml-3">-&gt;</span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative hidden md:block">
                    <AnimatePresence mode="wait">
                      {selected ? (
                        <motion.div
                          key="image"
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.92 }}
                          transition={{ duration: 0.25 }}
                          className="relative h-44 w-72 overflow-hidden rounded-[1.7rem] bg-light-surface"
                        >
                          <Image
                            src={reason.preview}
                            alt={`${reason.title} preview`}
                            fill
                            sizes="(min-width: 1024px) 18vw, 100vw"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-midnight-navy/10" />
                        </motion.div>
                      ) : (
                        <motion.span
                          key="arrow"
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.92 }}
                          className="flex size-12 items-center justify-center rounded-xl bg-light-surface text-2xl text-midnight-navy transition group-hover:-translate-y-0.5 group-hover:bg-innovation-yellow"
                        >
                          -
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
