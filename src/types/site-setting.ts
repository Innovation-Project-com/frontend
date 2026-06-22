export interface SiteSetting {
  company_name: string;
  address?: string;
  phone?: string;
  email?: string;
  logo?: string;
  favicon?: string;
  social_links?: Record<string, string>;
  footer_text?: string;
  default_seo_title?: string;
  default_seo_description?: string;
}
