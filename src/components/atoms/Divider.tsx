import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  color?: "light" | "dark";
}

export function Divider({ color = "light", className, ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 h-px",
        color === "light" ? "bg-cool-slate/20" : "bg-cool-slate/40",
        className
      )}
      {...props}
    />
  );
}
