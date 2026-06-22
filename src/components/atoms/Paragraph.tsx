import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type ParagraphSize = "lg" | "base" | "sm";
type ParagraphColor = "dark" | "slate" | "light";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize;
  color?: ParagraphColor;
}

const sizeClasses: Record<ParagraphSize, string> = {
  lg:   "text-lg md:text-xl leading-relaxed",
  base: "text-base leading-relaxed",
  sm:   "text-sm leading-relaxed",
};

const colorClasses: Record<ParagraphColor, string> = {
  dark:  "text-midnight-navy",
  slate: "text-cool-slate",
  light: "text-white/80",
};

export function Paragraph({
  size = "base",
  color = "slate",
  className,
  children,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(sizeClasses[size], colorClasses[color], className)}
      {...props}
    >
      {children}
    </p>
  );
}
