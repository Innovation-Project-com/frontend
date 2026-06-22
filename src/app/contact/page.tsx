import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ContactFormSection } from "@/components/organisms/ContactFormSection";

export const metadata: Metadata = buildMetadata(
  {
    title: "Contact Us — Request a Consultation",
    description:
      "Talk to the Innovation Project team. Submit your consultation request and our team will review your message and contact you soon.",
  },
  "/contact"
);

export default function ContactPage() {
  return <ContactFormSection />;
}
