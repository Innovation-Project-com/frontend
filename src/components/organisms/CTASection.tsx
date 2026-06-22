import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Ready to Transform Your Business Operations?",
  subtitle = "Talk to our team and discover how Innovation Project can help you implement the right IT solution for your business needs.",
  primaryLabel = "Request a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Solutions",
  secondaryHref = "/solutions",
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-deep-tech-blue relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-electric-blue/30 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-innovation-yellow/10 blur-[80px]" />
      </div>

      <Container narrow className="relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Yellow accent line */}
          <div className="w-12 h-1 rounded-full bg-innovation-yellow" />

          <Heading as="h2" size="h2" color="light" className="max-w-2xl">
            {title}
          </Heading>

          <Paragraph size="lg" color="light" className="max-w-xl">
            {subtitle}
          </Paragraph>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link href={primaryHref}>
              <Button
                variant="primary"
                size="lg"
                className="bg-innovation-yellow text-midnight-navy hover:bg-innovation-yellow/90 font-bold"
              >
                {primaryLabel}
              </Button>
            </Link>
            <Link href={secondaryHref}>
              <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                {secondaryLabel}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
