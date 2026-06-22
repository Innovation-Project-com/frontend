import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { SeoMeta } from "@/types/seo";

export function buildMetadata(seo?: Partial<SeoMeta>, path = "/"): Metadata {
  const title = seo?.title ?? siteConfig.name;
  const description = seo?.description ?? siteConfig.description;
  const ogImage = seo?.ogImage ?? siteConfig.ogImage;
  const canonical = seo?.canonical ?? `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [{ url: ogImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
