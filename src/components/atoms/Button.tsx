import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-electric-blue text-white hover:bg-deep-tech-blue active:scale-[0.98] shadow-sm",
  secondary:
    "bg-midnight-navy text-white hover:bg-deep-tech-blue active:scale-[0.98]",
  outline:
    "border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white active:scale-[0.98]",
  ghost:
    "text-electric-blue hover:bg-electric-blue/10 active:scale-[0.98]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold",
        "transition-all duration-200 cursor-pointer",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-blue",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading && (
        <span className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
}
