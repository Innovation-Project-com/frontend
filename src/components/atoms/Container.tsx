import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  narrow?: boolean;
  as?: "div" | "section" | "main" | "article" | "aside";
}

export function Container({
  narrow = false,
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-3xl" : "max-w-6xl",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
