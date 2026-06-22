import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeVariant = "blue" | "yellow" | "slate" | "green" | "red";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const badgeVariants: Record<BadgeVariant, string> = {
  blue:   "bg-electric-blue/10 text-electric-blue border-electric-blue/20",
  yellow: "bg-innovation-yellow/20 text-midnight-navy border-innovation-yellow/40",
  slate:  "bg-cool-slate/10 text-cool-slate border-cool-slate/20",
  green:  "bg-green-100 text-green-700 border-green-200",
  red:    "bg-red-100 text-red-600 border-red-200",
};

export function Badge({ variant = "blue", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
