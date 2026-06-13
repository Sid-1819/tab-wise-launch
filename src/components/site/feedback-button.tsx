import { MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { showFeedbackForm } from "@/lib/encatch";
import { cn } from "@/lib/utils";

type FeedbackButtonProps = {
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  showLabel?: boolean;
  className?: string;
  onClick?: () => void;
};

export function FeedbackButton({
  variant = "outline",
  size = "default",
  showLabel = true,
  className,
  onClick,
}: FeedbackButtonProps) {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn(className)}
      aria-label="Feedback and support"
      onClick={() => {
        showFeedbackForm();
        onClick?.();
      }}
    >
      <MessageSquare className="size-4" />
      {showLabel ? "Feedback & Support" : null}
    </Button>
  );
}
