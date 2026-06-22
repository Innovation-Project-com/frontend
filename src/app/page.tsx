import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HeroSection } from "@/components/organisms/HeroSection";
import { ProblemSection } from "@/components/organisms/ProblemSection";
import { SolutionsGrid } from "@/components/organisms/SolutionsGrid";
import { WhyUsSection } from "@/components/organisms/WhyUsSection";
import { ProcessSection } from "@/components/organisms/ProcessSection";
import { api } from "@/lib/api";
import type { Solution } from "@/types/solution";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Cost-Effective IT Solutions for Your Business`,
  description:
    "Innovation Project helps businesses implement ERP, TMS, WMS, MRP, and IoT solutions through a consultative, end-to-end approach. Request a consultation today.",
  openGraph: {
    title: `${siteConfig.name} — Cost-Effective IT Solutions`,
    description: "End-to-end IT solutions — ERP, TMS, WMS, MRP, and IoT — tailored to your business needs.",
    images: [{ url: siteConfig.ogImage }],
  },
};

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

export default async function HomePage() {
  const solutions = await getSolutions();

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionsGrid solutions={solutions} />
      <WhyUsSection />
      <ProcessSection />
    </>
  );
}
