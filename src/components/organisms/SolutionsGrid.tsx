import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import type { Solution } from "@/types/solution";

interface SolutionsGridProps {
  solutions: Pick<Solution, "name" | "slug" | "short_description" | "og_image">[];
}

const FALLBACK_SOLUTIONS: Pick<Solution, "name" | "slug" | "short_description" | "og_image">[] = [
  {
    name: "ERP System",
    slug: "erp-system",
    short_description:
      "Integrate finance, sales, manufacturing, service, and customer information in one connected operating system.",
    og_image: undefined,
  },
  {
    name: "Transportation Management System",
    slug: "transportation-management-system",
    short_description:
      "Plan, execute, monitor, and optimize goods movement with better logistics visibility and documentation control.",
    og_image: undefined,
  },
  {
    name: "Warehouse Management System",
    slug: "warehouse-management-system",
    short_description:
      "Control receiving, picking, shipping, stock movement, and warehouse visibility through structured digital workflows.",
    og_image: undefined,
  },
  {
    name: "Material Resource Planning",
    slug: "material-resource-planning",
    short_description:
      "Support production planning, purchasing, scheduling, and inventory control for manufacturing operations.",
    og_image: undefined,
  },
  {
    name: "IoT Solution",
    slug: "iot-solution",
    short_description:
      "Connect sensors, devices, and systems to improve monitoring, automation, and operational visibility.",
    og_image: undefined,
  },
];

const solutionImages: Record<string, string> = {
  "erp-system":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
  "transportation-management-system":
    "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=80",
  "warehouse-management-system":
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  "material-resource-planning":
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  "iot-solution":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
};

const solutionBadges: Record<string, string> = {
  "erp-system": "ERP",
  "transportation-management-system": "TMS",
  "warehouse-management-system": "WMS",
  "material-resource-planning": "MRP",
  "iot-solution": "IoT",
};

function getSolutionImage(solution: Pick<Solution, "slug" | "og_image">) {
  return solution.og_image || solutionImages[solution.slug] || solutionImages["erp-system"];
}

export function SolutionsGrid({ solutions }: SolutionsGridProps) {
  const displaySolutions = solutions.length > 0 ? solutions : FALLBACK_SOLUTIONS;
  const featuredSolutions = displaySolutions.slice(0, 3);

  return (
    <section className="overflow-hidden bg-white py-20 text-midnight-navy md:py-28">
      <Container className="max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-full bg-light-surface px-4 py-2 text-sm font-medium text-midnight-navy shadow-sm">
              <span className="mr-1 text-2xl font-black leading-none text-innovation-yellow">*</span>
              Our Solutions
            </span>
            <h2 className="mt-7 max-w-3xl text-[clamp(2.4rem,4vw,4.4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-[#454550]">
              Technology Solutions for{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Every Business Need</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-4 rounded-full bg-innovation-yellow/70 md:bottom-2 md:h-6" />
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-midnight-navy">
              Build the right system around the way your business operates.
            </h3>
            <p className="mt-4 text-base leading-8 text-midnight-navy/70">
              From enterprise planning to warehouse, logistics, production, and
              IoT monitoring, our solutions help teams connect daily workflows
              without unnecessary complexity.
            </p>
            <Link
              href="/solutions"
              className="mt-8 inline-flex min-h-13 items-center rounded-full bg-innovation-yellow px-7 text-sm font-bold text-midnight-navy shadow-sm shadow-innovation-yellow/30 transition hover:-translate-y-0.5 hover:bg-[#ecea24] hover:shadow-lg"
            >
              All Solutions
              <span className="ml-3">-&gt;</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid items-end gap-7 lg:grid-cols-[1fr_1.08fr_1fr]">
          {featuredSolutions.map((solution, index) => {
            const featured = index === 1;

            return (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className={[
                  "group relative overflow-hidden rounded-[1.9rem] border transition-all duration-500 hover:-translate-y-2",
                  featured
                    ? "bg-white p-4 shadow-2xl shadow-midnight-navy/12 ring-1 ring-midnight-navy/8 lg:min-h-[430px]"
                    : "border-midnight-navy/10 bg-midnight-navy p-4 shadow-xl shadow-midnight-navy/10 lg:min-h-[390px]",
                ].join(" ")}
              >
                <div className="relative h-56 overflow-hidden rounded-[1.35rem] bg-light-surface">
                  <Image
                    src={getSolutionImage(solution)}
                    alt={`${solution.name} solution`}
                    fill
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div
                    className={[
                      "absolute inset-0",
                      featured
                        ? "bg-gradient-to-t from-midnight-navy/55 via-midnight-navy/12 to-transparent"
                        : "bg-midnight-navy/58",
                    ].join(" ")}
                  />
                  <div
                    className={[
                      "absolute left-5 top-5 flex size-14 items-center justify-center rounded-2xl text-sm font-black shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105",
                      featured
                        ? "bg-innovation-yellow text-midnight-navy"
                        : "bg-innovation-yellow text-midnight-navy",
                    ].join(" ")}
                  >
                    {solutionBadges[solution.slug] ?? "IT"}
                  </div>
                  <h3 className="absolute bottom-6 left-6 right-6 text-3xl font-medium leading-tight tracking-[-0.03em] text-white">
                    {solution.name}
                  </h3>
                </div>

                <div
                  className={[
                    "mt-4 rounded-[1.25rem] border p-6",
                    featured
                      ? "border-midnight-navy/10 bg-white text-midnight-navy"
                      : "border-white/12 bg-white/5 text-white",
                  ].join(" ")}
                >
                  <p
                    className={[
                      "min-h-[4.8rem] text-sm font-medium leading-7",
                      featured ? "text-midnight-navy/72" : "text-white/82",
                    ].join(" ")}
                  >
                    {solution.short_description}
                  </p>

                  <span
                    className={[
                      "mt-8 inline-flex min-h-12 items-center rounded-full px-6 text-sm font-bold transition group-hover:translate-x-1",
                      featured
                        ? "bg-innovation-yellow text-midnight-navy"
                        : "bg-innovation-yellow text-midnight-navy",
                    ].join(" ")}
                  >
                    View Solution
                    <span className="ml-3">-&gt;</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {displaySolutions.length > 3 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {displaySolutions.slice(3).map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="rounded-full border border-midnight-navy/10 bg-light-surface px-5 py-3 text-sm font-semibold text-midnight-navy/72 transition hover:-translate-y-0.5 hover:border-innovation-yellow hover:bg-innovation-yellow"
              >
                {solution.name}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
