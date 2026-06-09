import { Award } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { FEATURED_BADGE_LABEL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FeaturedStoreBadgeProps = {
  className?: string;
  /** For dark CTA panels and other inverted backgrounds */
  inverted?: boolean;
};

export function FeaturedStoreBadge({ className, inverted = false }: FeaturedStoreBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        inverted
          ? "border-background/25 bg-background/10 text-background"
          : "border-ring/35 bg-accent/40 text-foreground",
        className,
      )}
    >
      <Award className={cn("size-3.5 shrink-0", inverted ? "text-background" : "text-ring")} />
      {FEATURED_BADGE_LABEL}
    </Badge>
  );
}
