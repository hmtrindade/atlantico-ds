import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const atlBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-sans font-medium",
  {
    variants: {
      type: {
        standard: "bg-brand-primary-foreground text-brand-primary",
        processing: "bg-brand-primary text-brand-primary-foreground",
        success: "bg-success text-success-foreground",
        caution: "bg-alert text-alert-foreground",
        alert: "bg-critical text-critical-foreground",
      },
      size: {
        small: "h-2 w-2",
        medium: "h-5 min-w-5 px-1.5 text-xs",
      },
    },
    defaultVariants: {
      type: "standard",
      size: "medium",
    },
  }
);

export interface AtlBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof atlBadgeVariants> {
  badgeContent?: string | number;
  showText?: boolean;
}

const AtlBadge = React.forwardRef<HTMLSpanElement, AtlBadgeProps>(
  ({ className, type, size, badgeContent, showText = true, ...props }, ref) => {
    return (
      <span
        className={cn(atlBadgeVariants({ type, size, className }))}
        ref={ref}
        {...props}
      >
        {size === "medium" && showText && (badgeContent ?? "")}
      </span>
    );
  }
);
AtlBadge.displayName = "AtlBadge";

export { AtlBadge, atlBadgeVariants };
