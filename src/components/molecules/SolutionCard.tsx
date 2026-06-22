import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Solution } from "@/types/solution";

interface SolutionCardProps {
  solution: Pick<Solution, "name" | "slug" | "short_description" | "og_image">;
  className?: string;
}

const solutionIcons: Record<string, string> = {
  "erp-system": "🏢",
  "transportation-management-system": "🚚",
  "warehouse-management-system": "🏭",
  "material-resource-planning": "⚙️",
  "iot-solution": "📡",
};

export function SolutionCard({ solution, className }: SolutionCardProps) {
  const icon = solutionIcons[solution.slug] ?? "💡";

  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className={cn(
        "group flex flex-col gap-4 p-6 rounded-2xl border border-cool-slate/20 bg-white",
        "hover:border-electric-blue/40 hover:shadow-lg hover:shadow-electric-blue/10",
        "transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {/* Icon */}
      <div className="size-12 rounded-xl bg-electric-blue/10 flex items-center justify-center text-2xl
                      group-hover:bg-electric-blue/20 transition-colors duration-200">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-bold text-midnight-navy group-hover:text-electric-blue transition-colors duration-200">
          {solution.name}
        </h3>
        <p className="text-sm text-cool-slate leading-relaxed line-clamp-3">
          {solution.short_description}
        </p>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-1 text-sm font-semibold text-electric-blue mt-auto">
        View Solution Details
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
