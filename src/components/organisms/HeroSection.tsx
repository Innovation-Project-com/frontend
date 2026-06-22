"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/atoms/Container";

const logoMarks = ["Altura", "Iovasis", "Jobsagi"];
const tags = ["Solution", "Service"];
const serviceChips = ["ERP", "WMS", "IoT"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-32 text-midnight-navy md:pt-40 lg:min-h-[760px]">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-innovation-yellow/20 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.34, 0.58, 0.34] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container as="section" className="relative max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-9 flex flex-wrap gap-4"
            >
              {tags.map((label, index) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 * index }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="inline-flex items-center rounded-full bg-light-surface px-4 py-2 text-sm font-medium text-midnight-navy shadow-sm"
                >
                  <motion.span
                    className="mr-1 text-2xl font-black leading-none text-innovation-yellow"
                    animate={{ rotate: [0, 12, -12, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                  >
                    *
                  </motion.span>
                  {label}
                </motion.span>
              ))}
            </motion.div>

            <h1 className="max-w-[780px] text-[clamp(3.25rem,5.35vw,5.25rem)] font-medium leading-[1.06] tracking-[-0.025em] text-[#454550]">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                Smarter IT Systems for
              </motion.span>
              <motion.span
                className="relative mt-1 inline-block"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
              >
                <span className="relative z-10">Integrated Business Operations</span>
                <motion.span
                  className="absolute inset-x-0 bottom-2 z-0 h-6 origin-left rounded-full bg-innovation-yellow/75 md:bottom-3 md:h-8"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
                />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-8 max-w-2xl text-base font-normal leading-7 text-midnight-navy/75"
            >
              Innovation Project helps businesses connect ERP, TMS, WMS, MRP,
              and IoT workflows through a consultative, cost-effective
              implementation approach tailored to real operational needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center rounded-2xl bg-innovation-yellow px-8 text-sm font-bold text-midnight-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ecea24] hover:shadow-lg hover:shadow-innovation-yellow/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-innovation-yellow"
              >
                Request Support
                <span className="ml-3 text-lg leading-none transition-transform duration-300 group-hover:rotate-45">
                  *
                </span>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#E9EDF4] px-8 text-sm font-medium text-midnight-navy transition hover:-translate-y-0.5 hover:bg-[#dde3ec] hover:shadow-lg hover:shadow-midnight-navy/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight-navy"
              >
                Discover Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="mt-24 grid w-full grid-cols-[1fr_2fr] items-center gap-8"
            >
              <p className="max-w-36 text-sm leading-5 text-midnight-navy">
                Trusted by business teams.
              </p>
              <div className="flex flex-wrap items-center gap-x-12 gap-y-4 text-xl font-semibold text-midnight-navy/20">
                {logoMarks.map((mark, index) => (
                  <motion.span
                    key={mark}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.58 + index * 0.08 }}
                    whileHover={{ color: "rgba(11,16,32,0.55)", y: -2 }}
                  >
                    {mark}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: "easeOut" }}
            className="relative min-h-[680px] lg:-mr-2"
          >
            <motion.div
              className="absolute left-5 top-3 z-20 flex size-20 items-center justify-center rounded-2xl bg-midnight-navy shadow-xl shadow-midnight-navy/15"
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-4xl text-innovation-yellow">*</span>
            </motion.div>

            <motion.div
              className="absolute right-0 top-0 h-[500px] w-[88%] overflow-hidden rounded-[1.8rem] bg-light-surface"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.35 }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.035, 1], x: [0, -6, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                  alt="Business technology team reviewing an operational system"
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover grayscale-[10%]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-tr from-midnight-navy/10 via-transparent to-white/10" />
            </motion.div>

            <motion.button
              type="button"
              aria-label="Play company overview"
              className="absolute left-0 top-[268px] z-30 flex size-20 items-center justify-center rounded-full bg-innovation-yellow text-midnight-navy shadow-xl shadow-midnight-navy/20"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              animate={{ boxShadow: ["0 18px 42px rgba(11,16,32,0.18)", "0 0 0 16px rgba(250,248,85,0)", "0 18px 42px rgba(11,16,32,0.18)"] }}
              transition={{ duration: 2.7, repeat: Infinity }}
            >
              <motion.span
                className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-midnight-navy"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.button>

            <div className="absolute bottom-0 left-[12%] grid w-[88%] grid-cols-2 gap-6">
              <motion.div
                className="min-h-52 rounded-[1.8rem] bg-light-surface p-8 shadow-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -12, boxShadow: "0 24px 60px rgba(11,16,32,0.13)" }}
              >
                <div className="flex items-end justify-between">
                  <p className="text-7xl font-medium leading-none tracking-[-0.04em] text-[#454550]">4.9</p>
                  <div className="mb-2 flex gap-1 text-xl text-innovation-yellow">
                    {["1", "2", "3", "4", "5"].map((star, index) => (
                      <motion.span
                        key={star}
                        animate={{ scale: [1, 1.28, 1], rotate: [0, 8, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.12 }}
                      >
                        *
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex items-end justify-between gap-4">
                  <p className="max-w-28 text-base font-medium leading-5 text-midnight-navy">
                    Happy Clients
                  </p>
                  <div className="flex items-center">
                    {serviceChips.map((item, index) => (
                      <motion.span
                        key={item}
                        className="-ml-2 flex size-12 first:ml-0 items-center justify-center rounded-full border-2 border-white bg-midnight-navy text-[10px] font-bold text-white"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.18 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                    <motion.span
                      className="-ml-2 flex size-14 items-center justify-center rounded-full border-2 border-white bg-midnight-navy text-2xl text-white"
                      animate={{ rotate: [0, 90, 180, 270, 360] }}
                      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                    >
                      +
                    </motion.span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative min-h-52 overflow-hidden rounded-[1.8rem] bg-midnight-navy p-8 text-white shadow-sm"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -10, boxShadow: "0 24px 60px rgba(11,16,32,0.16)" }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                    alt="Technology consultants discussing system integration"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover opacity-45"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-midnight-navy/45" />
                <motion.button
                  type="button"
                  aria-label="Open service details"
                  className="absolute right-6 top-6 flex size-12 items-center justify-center rounded-xl bg-white text-2xl text-midnight-navy"
                  whileHover={{ rotate: 45, scale: 1.06 }}
                >
                  -
                </motion.button>
                <div className="relative z-10 mt-20">
                  <p className="text-2xl font-semibold leading-tight">Experts On Call</p>
                  <motion.p
                    className="mt-1 text-2xl font-semibold leading-tight text-innovation-yellow"
                    animate={{ opacity: [1, 0.55, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    24/7
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
