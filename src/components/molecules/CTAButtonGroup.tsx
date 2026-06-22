import { Button } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";

interface CTAButtonGroupProps {
  primaryLabel: string;
  primaryHref?: string;
  primaryOnClick?: () => void;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryOnClick?: () => void;
  className?: string;
  stacked?: boolean;
}

export function CTAButtonGroup({
  primaryLabel,
  primaryHref,
  primaryOnClick,
  secondaryLabel,
  secondaryHref,
  secondaryOnClick,
  className,
  stacked = false,
}: CTAButtonGroupProps) {
  return (
    <div className={cn(
      "flex gap-3",
      stacked ? "flex-col" : "flex-col sm:flex-row",
      className
    )}>
      {primaryHref ? (
        <a href={primaryHref}>
          <Button variant="primary" size="lg" fullWidth={stacked}>
            {primaryLabel}
          </Button>
        </a>
      ) : (
        <Button variant="primary" size="lg" onClick={primaryOnClick} fullWidth={stacked}>
          {primaryLabel}
        </Button>
      )}

      {secondaryLabel && (
        secondaryHref ? (
          <a href={secondaryHref}>
            <Button variant="outline" size="lg" fullWidth={stacked}>
              {secondaryLabel}
            </Button>
          </a>
        ) : (
          <Button variant="outline" size="lg" onClick={secondaryOnClick} fullWidth={stacked}>
            {secondaryLabel}
          </Button>
        )
      )}
    </div>
  );
}
