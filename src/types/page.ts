import type { SeoMeta } from "./seo";

export interface Page {
  id: number;
  title: string;
  slug: string;
  page_type: string;
  hero_title?: string;
  hero_subtitle?: string;
  content_blocks?: Record<string, unknown>[];
  og_image?: string;
  seo: SeoMeta;
  status: "published" | "draft" | "archived";
  published_at?: string;
}
