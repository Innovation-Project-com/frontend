import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  id: string;
}

export function Textarea({ error, label, id, className, ...props }: TextareaProps) {
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
      <textarea
        id={id}
        rows={props.rows ?? 5}
        className={cn(
          "w-full px-4 py-3 rounded-xl border bg-white text-midnight-navy",
          "placeholder:text-cool-slate text-sm resize-y",
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
