/** Data submitted via the contact form */
export interface LeadFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  interested_solution?: string;
  message: string;
  source_page?: string;
}

/** Full Lead entity as returned by the backend */
export interface Lead extends LeadFormData {
  id: number;
  status: "new" | "contacted" | "qualified" | "proposal_sent" | "closed" | "archived";
  follow_up_notes?: string;
  created_at: string;
}

