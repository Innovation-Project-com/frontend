import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/atoms/Container";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { SolutionCard } from "@/components/molecules/SolutionCard";
import { CTASection } from "@/components/organisms/CTASection";
import { api } from "@/lib/api";
import type { Solution } from "@/types/solution";

export const metadata: Metadata = buildMetadata(
  {
    title: "Our Solutions — ERP, TMS, WMS, MRP & IoT",
    description:
      "Explore Innovation Project's IT solutions: ERP System, Transportation Management, Warehouse Management, Material Resource Planning, and IoT solutions for businesses.",
  },
  "/solutions"
);

async function getSolutions() {
  try {
    const res = await api.get<{ data: Pick<Solution, "name" | "slug" | "short_description" | "og_image">[] }>(
      "/v1/solutions"
    );
    return res.data ?? [];
  } catch {
    return [];
  }
}

const FALLBACK_SOLUTIONS: Pick<Solution, "name" | "slug" | "short_description" | "og_image">[] = [
  { name: "ERP System", slug: "erp-system", short_description: "Integrate your enterprise processes across finance, accounting, manufacturing, sales, and CRM.", og_image: undefined },
  { name: "Transportation Management System", slug: "transportation-management-system", short_description: "Plan, execute, and monitor the movement of goods with full logistics visibility.", og_image: undefined },
  { name: "Warehouse Management System", slug: "warehouse-management-system", short_description: "Control warehouse operations including receiving, picking, shipping, and inventory management.", og_image: undefined },
  { name: "Material Resource Planning", slug: "material-resource-planning", short_description: "Support production planning, scheduling, purchasing, and inventory control.", og_image: undefined },
  { name: "IoT Solution", slug: "iot-solution", short_description: "Connect physical devices and sensors to improve monitoring, automation, and operational visibility.", og_image: undefined },
];

export default async function SolutionsPage() {
  const solutions = await getSolutions();
  const displaySolutions = solutions.length > 0 ? solutions : FALLBACK_SOLUTIONS;

  return (
    <>
      {/* Hero */}
      <section className="bg-midnight-navy pt-32 pb-20">
        <Container>
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-innovation-yellow bg-innovation-yellow/10 border border-innovation-yellow/30 px-3 py-1 rounded-full">
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Technology Built for{" "}
              <span className="text-innovation-yellow">Real Business Needs</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              From enterprise resource planning to IoT monitoring — our solutions
              are designed to integrate your operations and drive efficiency.
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 md:py-28 bg-light-surface">
        <Container>
          <div className="flex flex-col gap-10">
            <SectionHeader
              badge={`${displaySolutions.length} Solutions Available`}
              title="Find the Right Solution for Your Business"
              subtitle="Each solution is designed to solve specific operational challenges. Click to explore features, benefits, and use cases."
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displaySolutions.map((solution) => (
                <SolutionCard key={solution.slug} solution={solution} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Compare section */}
      <section className="py-16 bg-white">
        <Container narrow>
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-midnight-navy">Not Sure Which Solution Fits?</h2>
            <p className="text-cool-slate">
              Our team will analyze your business processes and recommend the right combination of solutions.
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 bg-electric-blue text-white font-semibold
                         px-6 py-3 rounded-xl hover:bg-deep-tech-blue transition-colors duration-200"
            >
              Talk to an Expert →
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
