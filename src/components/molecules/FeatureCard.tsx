import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "flex gap-4 p-5 rounded-xl border border-cool-slate/20 bg-white",
      "hover:border-electric-blue/30 hover:shadow-md transition-all duration-200",
      className
    )}>
      {icon && (
        <div className="shrink-0 size-10 rounded-lg bg-electric-blue/10 flex items-center justify-center text-lg">
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h4 className="text-base font-semibold text-midnight-navy">{title}</h4>
        <p className="text-sm text-cool-slate leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
