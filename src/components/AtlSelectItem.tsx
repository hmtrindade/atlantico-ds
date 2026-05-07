import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const atlSelectItemVariants = cva(
  "flex items-center gap-2 w-full text-left px-4 transition-colors font-sans",
  {
    variants: {
      state: {
        enabled: "text-on-surface hover:bg-surface-variant cursor-pointer",
        hovered: "bg-surface-variant text-on-surface cursor-pointer",
        selected: "bg-surface-primary text-on-surface-primary font-medium cursor-pointer",
        disabled: "text-disabled cursor-not-allowed opacity-50",
      },
      size: {
        Large: "py-4 text-base leading-7",
        Small: "py-2.5 text-sm leading-6",
      },
    },
    defaultVariants: {
      state: "enabled",
      size: "Large",
    },
  }
);

export interface AtlSelectItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof atlSelectItemVariants> {
  icon?: React.ReactNode;
  label?: string;
}

const AtlSelectItem = React.forwardRef<HTMLButtonElement, AtlSelectItemProps>(
  ({ className, state, size, icon, label, children, disabled, ...props }, ref) => {
    const resolvedState = disabled ? "disabled" : state;

    return (
      <button
        ref={ref}
        type="button"
        className={cn(atlSelectItemVariants({ state: resolvedState, size, className }))}
        disabled={disabled || resolvedState === "disabled"}
        {...props}
      >
        {icon && <span className="shrink-0 w-4 h-4 flex items-center justify-center text-on-surface">{icon}</span>}
        <span>{label ?? children}</span>
      </button>
    );
  }
);
AtlSelectItem.displayName = "AtlSelectItem";

export { AtlSelectItem, atlSelectItemVariants };
