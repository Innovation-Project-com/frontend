import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { CTASection } from "@/components/organisms/CTASection";

export const metadata: Metadata = buildMetadata(
  {
    title: "About Us — Innovation Project",
    description:
      "Learn about Innovation Project — who we are, our mission, and our commitment to delivering cost-effective, end-to-end IT solutions for businesses.",
  },
  "/about"
);

const values = [
  { icon: "🎯", title: "Consultative", description: "We understand your business first, then recommend the right solution." },
  { icon: "🔄", title: "End-to-End", description: "We cover the full project lifecycle from requirements to post-go-live support." },
  { icon: "💡", title: "Innovative", description: "We continuously explore emerging technologies to solve real business problems." },
  { icon: "🤝", title: "Partnership", description: "We build long-term relationships, not just one-time implementations." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight-navy pt-32 pb-20">
        <Container narrow>
          <div className="flex flex-col items-center text-center gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-innovation-yellow bg-innovation-yellow/10 border border-innovation-yellow/30 px-3 py-1 rounded-full">
              About Us
            </span>
            <Heading as="h1" size="h1" color="light">
              We Help Businesses Operate Smarter
            </Heading>
            <Paragraph size="lg" color="light" className="max-w-xl">
              Innovation Project is an IT solutions company specializing in business
              process integration through ERP, TMS, WMS, MRP, and IoT technologies.
            </Paragraph>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-electric-blue">Our Mission</span>
              <Heading as="h2" size="h2" color="dark">
                Making Enterprise Technology Accessible
              </Heading>
              <Paragraph color="slate">
                Our mission is to help businesses of all sizes implement the right IT solutions —
                without the complexity or excessive cost often associated with enterprise software.
              </Paragraph>
              <Paragraph color="slate">
                We believe every business deserves access to the tools that help them operate
                more efficiently, make better decisions, and compete in a modern market.
              </Paragraph>
              <Link href="/solutions" className="text-electric-blue font-semibold hover:underline text-sm">
                Explore Our Solutions →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Solutions Offered", value: "5+" },
                { label: "Industries Served", value: "Multiple" },
                { label: "Approach", value: "Consultative" },
                { label: "Commitment", value: "End-to-End" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl border border-cool-slate/20 bg-light-surface text-center flex flex-col gap-1"
                >
                  <p className="text-3xl font-extrabold text-electric-blue">{stat.value}</p>
                  <p className="text-xs text-cool-slate font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-light-surface">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-midnight-navy mb-3">Our Values</h2>
              <p className="text-cool-slate max-w-xl mx-auto text-base">
                These principles guide how we work with our clients and build our solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-cool-slate/20
                             hover:border-electric-blue/30 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl">{val.icon}</span>
                  <h3 className="font-bold text-midnight-navy">{val.title}</h3>
                  <p className="text-sm text-cool-slate leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        subtitle="Let's start with a conversation about your business needs. No commitment required."
      />
    </>
  );
}
