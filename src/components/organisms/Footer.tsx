import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { navLinks } from "@/config/navigation";

const solutions = [
  { label: "ERP System", href: "/solutions/erp-system" },
  { label: "TMS", href: "/solutions/transportation-management-system" },
  { label: "WMS", href: "/solutions/warehouse-management-system" },
  { label: "MRP", href: "/solutions/material-resource-planning" },
  { label: "IoT Solution", href: "/solutions/iot-solution" },
];

const supportLinks = [
  { label: "Contact Team", href: "/contact" },
  { label: "Explore Solutions", href: "/solutions" },
  { label: "Discuss Project", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-midnight-navy">
      <Container className="max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(115deg,#FAF855_0%,#F2E83A_48%,#D3B40D_100%)] px-6 py-16 text-center shadow-2xl shadow-midnight-navy/10 md:px-12 md:py-20">
          <div className="mx-auto inline-flex rounded-full bg-white/58 px-5 py-2 text-sm font-bold text-midnight-navy shadow-sm">
            Start Your Digital Transformation
          </div>
          <h2 className="mx-auto mt-7 max-w-4xl text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-midnight-navy">
            Ready to Improve Your Business Operations?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-midnight-navy/72">
            Talk to Innovation Project and discover the right ERP, TMS, WMS,
            MRP, or IoT solution for your operational needs.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-midnight-navy shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Request a Consultation
          </Link>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.8fr_0.8fr_1.25fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-midnight-navy px-4 py-2"
              aria-label="Innovation Project home"
            >
              <Image
                src="/logo/ip-logo-yewhite.png"
                alt="Innovation Project"
                width={160}
                height={46}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-midnight-navy/62">
              End-to-end IT solutions for companies that need better process
              integration, visibility, and operational control.
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic leading-6 text-midnight-navy/62">
              <p>
                Palma One Building Suite 709
                <br />
                Jl. HR Rasuna Said X-2 Kav.4
                <br />
                Jakarta, Indonesia 12950
              </p>
              <div className="space-y-1">
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+62215228410"
                    className="font-semibold text-midnight-navy transition hover:text-deep-tech-blue"
                  >
                    +62 21 522 8410
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:marketing@innovation-project.com"
                    className="font-semibold text-midnight-navy transition hover:text-deep-tech-blue"
                  >
                    marketing@innovation-project.com
                  </a>
                </p>
              </div>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-bold text-midnight-navy">Company</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-midnight-navy/58 transition hover:text-midnight-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-midnight-navy">Solutions</h3>
            <ul className="mt-4 space-y-3">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link
                    href={solution.href}
                    className="text-sm text-midnight-navy/58 transition hover:text-midnight-navy"
                  >
                    {solution.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-midnight-navy">Support</h3>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-midnight-navy/58 transition hover:text-midnight-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-midnight-navy">Subscribe for Updates</h3>
            <p className="mt-4 max-w-xs text-sm leading-6 text-midnight-navy/58">
              Get practical business technology insights directly in your inbox.
            </p>
            <form className="mt-6 flex min-h-12 overflow-hidden rounded-full border border-midnight-navy/10 bg-white shadow-sm">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-5 text-sm text-midnight-navy outline-none placeholder:text-midnight-navy/38"
              />
              <button
                type="button"
                className="m-1 rounded-full bg-midnight-navy px-5 text-sm font-bold text-white transition hover:bg-deep-tech-blue"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-midnight-navy/10 pt-8">
          <p className="text-sm text-midnight-navy/50">
            (c) {year} Innovation Project. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
