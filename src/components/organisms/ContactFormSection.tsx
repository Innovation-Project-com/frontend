"use client";

import { useState } from "react";
import { Container } from "@/components/atoms/Container";
import { Input } from "@/components/atoms/Input";
import { Textarea } from "@/components/atoms/Textarea";
import { Button } from "@/components/atoms/Button";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { api } from "@/lib/api";
import type { LeadFormData } from "@/types/lead";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const SOLUTION_OPTIONS = [
  "ERP System",
  "Transportation Management System (TMS)",
  "Warehouse Management System (WMS)",
  "Material Resource Planning (MRP)",
  "IoT Solution",
  "Other / Not Sure",
];

export function ContactFormSection() {
  const [form, setForm] = useState<LeadFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    interested_solution: "",
    message: "",
    source_page: "/contact",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) newErrors.email = "Please enter a valid email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Please enter a valid email address.";
    if (!form.message.trim()) newErrors.message = "Please enter your message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    setLoading(true);
    try {
      await api.post("/v1/leads", form);
      setSuccess(true);
      setForm({ name: "", company: "", email: "", phone: "", interested_solution: "", message: "", source_page: "/contact" });
    } catch {
      setServerError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="py-20 md:py-28 bg-light-surface">
        <Container narrow>
          <div className="text-center flex flex-col items-center gap-6 py-16">
            <div className="size-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">✅</div>
            <h2 className="text-2xl font-bold text-midnight-navy">Message Sent Successfully!</h2>
            <p className="text-cool-slate max-w-md">
              Thank you for reaching out. Our team will review your message and contact you within 1-2 business days.
            </p>
            <Button variant="outline" onClick={() => setSuccess(false)}>Send Another Message</Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-light-surface">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Info */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              badge="Contact Us"
              title="Let's Discuss Your Business Needs"
              subtitle="Fill in the form and our team will get back to you within 1-2 business days. No commitment required."
            />

            <div className="flex flex-col gap-5">
              {[
                { icon: "📧", label: "Email", value: "info@innovationproject.id" },
                { icon: "📍", label: "Location", value: "Indonesia" },
                { icon: "⏰", label: "Response Time", value: "Within 1–2 business days" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="size-10 rounded-lg bg-electric-blue/10 flex items-center justify-center text-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-cool-slate font-medium">{item.label}</p>
                    <p className="text-sm text-midnight-navy font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl border border-cool-slate/20 shadow-sm p-8">
            <form id="contact-form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  id="name"
                  label="Full Name"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  error={errors.name}
                />
                <Input
                  id="company"
                  label="Company (Optional)"
                  placeholder="PT Acme Corp"
                  value={form.company ?? ""}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  error={errors.email}
                />
                <Input
                  id="phone"
                  label="Phone (Optional)"
                  type="tel"
                  placeholder="+62 812 xxxx xxxx"
                  value={form.phone ?? ""}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="interested_solution" className="text-sm font-medium text-midnight-navy">
                  Interested Solution (Optional)
                </label>
                <select
                  id="interested_solution"
                  value={form.interested_solution ?? ""}
                  onChange={(e) => setForm({ ...form, interested_solution: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-cool-slate/40 bg-white text-sm
                             text-midnight-navy focus:outline-none focus:ring-2 focus:ring-electric-blue/40
                             focus:border-electric-blue transition-colors duration-150"
                >
                  <option value="">Select a solution...</option>
                  {SOLUTION_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <Textarea
                id="message"
                label="Message"
                placeholder="Tell us about your business needs or the challenges you're facing..."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                error={errors.message}
              />

              {serverError && (
                <p role="alert" className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3 border border-red-100">
                  {serverError}
                </p>
              )}

              <Button type="submit" variant="primary" size="lg" loading={loading} fullWidth>
                {loading ? "Sending..." : "Send Consultation Request"}
              </Button>

              <p className="text-xs text-cool-slate text-center">
                By submitting this form you agree to our privacy policy. We never share your data.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
