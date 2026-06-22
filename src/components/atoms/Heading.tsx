import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4";
type HeadingColor = "dark" | "light" | "blue";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  color?: HeadingColor;
}

const sizeClasses: Record<HeadingSize, string> = {
  display: "text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight",
  h1:      "text-4xl md:text-5xl font-extrabold leading-tight tracking-tight",
  h2:      "text-3xl md:text-4xl font-bold leading-snug",
  h3:      "text-2xl md:text-3xl font-bold leading-snug",
  h4:      "text-xl md:text-2xl font-semibold leading-snug",
};

const colorClasses: Record<HeadingColor, string> = {
  dark:  "text-midnight-navy",
  light: "text-white",
  blue:  "text-electric-blue",
};

export function Heading({
  as: Tag = "h2",
  size = "h2",
  color = "dark",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(sizeClasses[size], colorClasses[color], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
