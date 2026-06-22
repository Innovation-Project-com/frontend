import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { FAQItem } from "@/components/molecules/FAQItem";
import { CTASection } from "@/components/organisms/CTASection";
import { api } from "@/lib/api";
import type { Solution } from "@/types/solution";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getSolution(slug: string): Promise<Solution | null> {
  try {
    const res = await api.get<{ data: Solution }>(`/v1/solutions/${slug}`);
    return res.data ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = await getSolution(slug);
  if (!solution) return { title: "Solution Not Found" };

  return {
    title: solution.seo_title ?? solution.name,
    description: solution.seo_description ?? solution.short_description,
    openGraph: {
      title: solution.seo_title ?? solution.name,
      description: solution.seo_description ?? solution.short_description,
      images: solution.og_image ? [{ url: solution.og_image }] : [],
    },
  };
}

// Static params for known solutions (ISR fallback)
export async function generateStaticParams() {
  return [
    { slug: "erp-system" },
    { slug: "transportation-management-system" },
    { slug: "warehouse-management-system" },
    { slug: "material-resource-planning" },
    { slug: "iot-solution" },
  ];
}

const solutionIcons: Record<string, string> = {
  "erp-system": "🏢",
  "transportation-management-system": "🚚",
  "warehouse-management-system": "🏭",
  "material-resource-planning": "⚙️",
  "iot-solution": "📡",
};

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = await getSolution(slug);

  if (!solution) notFound();

  const icon = solutionIcons[slug] ?? "💡";
  const benefits: string[] = solution.benefits ?? [];
  const features: { title: string; description: string; icon?: string }[] = solution.features ?? [];
  const useCases: string[] = solution.use_cases ?? [];
  const faqItems: { question: string; answer: string }[] = solution.faq_items ?? [];

  return (
    <>
      {/* Hero */}
      <section className="bg-midnight-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-electric-blue/10 blur-[100px]" />
        </div>
        <Container className="relative z-10">
          <div className="flex flex-col gap-3 mb-6">
            <Link href="/solutions" className="text-sm text-cool-slate hover:text-white transition-colors">
              ← Back to All Solutions
            </Link>
            <Badge variant="blue">Solution</Badge>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6">
              <div className="text-5xl">{icon}</div>
              <Heading as="h1" size="h1" color="light">{solution.name}</Heading>
              <Paragraph size="lg" color="light">{solution.short_description}</Paragraph>
              <div className="flex gap-3">
                <Link href="/contact">
                  <Button variant="primary" size="md" className="bg-innovation-yellow text-midnight-navy font-bold hover:bg-innovation-yellow/90">
                    Request a Consultation
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10">
                    Other Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="py-16 bg-light-surface">
          <Container>
            <h2 className="text-2xl font-bold text-midnight-navy mb-8">Key Benefits</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-cool-slate/20">
                  <span className="size-5 rounded-full bg-electric-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="size-2 rounded-full bg-electric-blue" />
                  </span>
                  <span className="text-sm text-midnight-navy leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Features */}
      {features.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-2xl font-bold text-midnight-navy mb-8">Core Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <FeatureCard
                  key={i}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Use Cases */}
      {useCases.length > 0 && (
        <section className="py-16 bg-midnight-navy">
          <Container>
            <h2 className="text-2xl font-bold text-white mb-8">Use Cases</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((uc, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-sm text-cool-slate leading-relaxed">{uc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="py-16 bg-light-surface">
          <Container narrow>
            <h2 className="text-2xl font-bold text-midnight-navy mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <FAQItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title={`Ready to Implement ${solution.name}?`}
        subtitle="Our consultants will guide you through the entire implementation process, from requirements to go-live."
      />
    </>
  );
}
