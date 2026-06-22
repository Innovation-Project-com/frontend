"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn(
      "border border-cool-slate/20 rounded-xl overflow-hidden transition-all duration-200",
      open && "border-electric-blue/30"
    )}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left
                   hover:bg-light-surface transition-colors duration-150 cursor-pointer"
      >
        <span className="font-semibold text-midnight-navy text-base">{question}</span>
        <span className={cn(
          "shrink-0 size-5 flex items-center justify-center text-electric-blue",
          "transition-transform duration-300",
          open && "rotate-45"
        )}>
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
          </svg>
        </span>
      </button>

      <div className={cn(
        "grid transition-all duration-300",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-cool-slate leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
