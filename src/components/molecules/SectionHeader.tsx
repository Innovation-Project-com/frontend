import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center", className)}>
      {badge && (
        <span className={cn(
          "inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit",
          light
            ? "text-innovation-yellow bg-innovation-yellow/10 border border-innovation-yellow/30"
            : "text-electric-blue bg-electric-blue/10 border border-electric-blue/20"
        )}>
          {badge}
        </span>
      )}
      <Heading
        as="h2"
        size="h2"
        color={light ? "light" : "dark"}
        className={cn(centered && "max-w-2xl")}
      >
        {title}
      </Heading>
      {subtitle && (
        <Paragraph
          size="lg"
          color={light ? "light" : "slate"}
          className={cn(centered && "max-w-2xl")}
        >
          {subtitle}
        </Paragraph>
      )}
    </div>
  );
}
