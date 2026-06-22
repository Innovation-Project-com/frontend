import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  id: string;
}

export function Input({ error, label, id, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-midnight-navy"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-xl border bg-white text-midnight-navy",
          "placeholder:text-cool-slate text-sm",
          "transition-colors duration-150",
          "focus:outline-none focus:ring-2 focus:ring-electric-blue/40 focus:border-electric-blue",
          error
            ? "border-red-400 focus:ring-red-300/40 focus:border-red-400"
            : "border-cool-slate/40 hover:border-cool-slate",
          className
        )}
        {...props}
      />
      {error && (
        <p role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
