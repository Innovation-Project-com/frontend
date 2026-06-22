export interface Solution {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  benefits?: string[];
  features?: { title: string; description: string; icon?: string }[];
  use_cases?: string[];
  faq_items?: { question: string; answer: string }[];
  og_image?: string;
  seo_title?: string;
  seo_description?: string;
  status: "published" | "draft" | "archived";
}

