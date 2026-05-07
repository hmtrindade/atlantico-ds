import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


const atlIconButtonVariants = cva(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "",
        standard: "",
      },
      shape: {
        none: "rounded-none",
        radius: "rounded-sm",
        circle: "rounded-full",
      },
      state: {
        enabled: "",
        hovered: "",
        disabled: "opacity-50 cursor-not-allowed",
        pressed: "",
      },
      size: {
        large: "h-11 w-11 [&_svg]:size-7",
        small: "h-9 w-9 [&_svg]:size-5",
      },
    },
    compoundVariants: [
      // Primary with background (radius, circle)
      { variant: "primary", state: "enabled", className: "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover active:bg-brand-primary-press" },
      { variant: "primary", state: "hovered", className: "bg-brand-primary-hover text-brand-primary-foreground" },
      { variant: "primary", state: "pressed", className: "bg-brand-primary-press text-brand-primary-foreground" },
      { variant: "primary", state: "disabled", className: "bg-disabled text-disabled-foreground" },

      // Primary shape=none (no bg, icon color changes)
      { variant: "primary", shape: "none", state: "enabled", className: "bg-transparent hover:bg-transparent active:bg-transparent text-brand-primary hover:text-brand-primary-hover active:text-brand-primary-press" },
      { variant: "primary", shape: "none", state: "hovered", className: "bg-transparent text-brand-primary-hover" },
      { variant: "primary", shape: "none", state: "pressed", className: "bg-transparent text-brand-primary-press" },
      { variant: "primary", shape: "none", state: "disabled", className: "bg-transparent text-disabled" },

      // Standard with background (radius, circle)
      { variant: "standard", state: "enabled", className: "bg-surface text-on-surface hover:bg-surface-primary active:bg-surface-primary-variant" },
      { variant: "standard", state: "hovered", className: "bg-surface-primary text-on-surface" },
      { variant: "standard", state: "pressed", className: "bg-surface-primary-variant text-on-surface" },
      { variant: "standard", state: "disabled", className: "bg-transparent text-disabled" },

      // Standard shape=none (no bg, icon color changes)
      { variant: "standard", shape: "none", state: "enabled", className: "bg-transparent hover:bg-transparent active:bg-transparent text-on-surface hover:text-on-surface-variant active:text-on-surface-primary" },
      { variant: "standard", shape: "none", state: "hovered", className: "bg-transparent text-on-surface-variant" },
      { variant: "standard", shape: "none", state: "pressed", className: "bg-transparent text-on-surface-primary" },
      { variant: "standard", shape: "none", state: "disabled", className: "bg-transparent text-disabled" },
    ],
    defaultVariants: {
      variant: "primary",
      shape: "radius",
      state: "enabled",
      size: "large",
    },
  }
);

export interface AtlIconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof atlIconButtonVariants> {
  icon: React.ElementType;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const AtlIconButton = React.forwardRef<HTMLButtonElement, AtlIconButtonProps>(
  ({ className, variant, shape, state, size, icon: Icon, disabled, htmlType = "button", ...props }, ref) => {
    const resolvedState = disabled ? "disabled" : state;

    return (
      <button
        type={htmlType}
        className={cn(atlIconButtonVariants({ variant, shape, state: resolvedState, size, className }))}
        ref={ref}
        disabled={disabled || resolvedState === "disabled"}
        {...props}
      >
        <Icon />
      </button>
    );
  }
);
AtlIconButton.displayName = "AtlIconButton";

export { AtlIconButton, atlIconButtonVariants };
