"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-50 text-midnight-navy transition-all duration-500 ease-out",
        scrolled ? "top-3 px-4 sm:px-6 lg:px-8" : "top-0 px-0"
      )}
    >
      <div
        className={cn(
          "mx-auto transition-all duration-500 ease-out",
          scrolled
            ? "max-w-[1120px] rounded-full border border-midnight-navy/10 bg-white/94 px-4 shadow-xl shadow-midnight-navy/12 backdrop-blur-xl sm:px-5 lg:px-6"
            : "max-w-[1440px] rounded-none border-b border-midnight-navy/8 bg-white px-5 shadow-none sm:px-8 lg:px-10"
        )}
      >
        <div className={cn("flex items-center justify-between transition-all duration-500", scrolled ? "h-16" : "h-18")}>
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-full bg-midnight-navy px-4 py-2 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
            aria-label="Innovation Project home"
          >
            <Image
              src="/logo/ip-logo-yewhite.png"
              alt="Innovation Project"
              width={160}
              height={46}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center rounded-full bg-light-surface/80 p-1 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:text-midnight-navy",
                  pathname === link.href
                    ? "bg-white text-midnight-navy shadow-sm"
                    : "text-midnight-navy/62 hover:bg-white/70"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden min-h-12 items-center justify-center rounded-full bg-innovation-yellow px-7 text-sm font-bold text-midnight-navy shadow-sm shadow-innovation-yellow/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ecea24] hover:shadow-lg hover:shadow-innovation-yellow/35 md:inline-flex"
          >
            Book Consultation
          </Link>

          <button
            id="mobile-menu-button"
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 rounded-full bg-light-surface p-3 text-midnight-navy transition-colors duration-150 hover:bg-innovation-yellow md:hidden"
          >
            <span className={cn("block h-0.5 w-5 bg-current transition-all duration-300", menuOpen && "translate-y-2 rotate-45")} />
            <span className={cn("block h-0.5 w-5 bg-current transition-all duration-300", menuOpen && "opacity-0")} />
            <span className={cn("block h-0.5 w-5 bg-current transition-all duration-300", menuOpen && "-translate-y-2 -rotate-45")} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "mx-auto mt-2 max-w-[1240px] overflow-hidden rounded-3xl border border-midnight-navy/10 bg-white/94 shadow-lg shadow-midnight-navy/10 backdrop-blur-xl transition-all duration-300 md:hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150",
                pathname === link.href
                  ? "bg-innovation-yellow text-midnight-navy"
                  : "text-midnight-navy/75 hover:bg-light-surface hover:text-midnight-navy"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded-2xl bg-innovation-yellow px-6 text-sm font-bold text-midnight-navy"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
