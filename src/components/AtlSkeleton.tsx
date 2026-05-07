import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const atlSkeletonVariants = cva(
  "animate-pulse bg-bg-variant",
  {
    variants: {
      variant: {
        text: "h-4 w-full rounded-xs",
        circular: "rounded-full h-10 w-10",
        rectangular: "rounded-none",
        rounded: "rounded-sm",
      },
      position: {
        start: "",
        end: "ml-auto",
      },
    },
    defaultVariants: {
      variant: "text",
      position: "start",
    },
  }
);

export interface AtlSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof atlSkeletonVariants> {}

const AtlSkeleton = React.forwardRef<HTMLDivElement, AtlSkeletonProps>(
  ({ className, variant, position, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(atlSkeletonVariants({ variant, position, className }))}
        {...props}
      />
    );
  }
);
AtlSkeleton.displayName = "AtlSkeleton";

export { AtlSkeleton, atlSkeletonVariants };
