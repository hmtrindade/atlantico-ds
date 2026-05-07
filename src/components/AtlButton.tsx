import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


const atlButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      typeButton: {
        primary: "",
        secondary: "",
        tretiary: "",
        critical: "",
        disabled: "opacity-100 cursor-not-allowed",
        standard: "",
      },
      size: {
        large: "h-11 px-4 py-2 text-base leading-7 [&_svg]:size-6",
        small: "h-9 px-3 py-1.5 text-sm leading-6 [&_svg]:size-5",
      },
      shape: {
        "square-radius": "rounded-[8px]",
        "full-radius": "rounded-full",
      },
      style: {
        filled: "",
        outline: "bg-transparent border",
        text: "bg-transparent",
      },
    },
    compoundVariants: [
      // Primary filled
      { typeButton: "primary", style: "filled", className: "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover active:bg-brand-primary-press" },
      // Primary outline
      { typeButton: "primary", style: "outline", className: "border-brand-primary text-brand-primary hover:bg-brand-primary/10 active:bg-brand-primary/20" },
      // Primary text
      { typeButton: "primary", style: "text", className: "text-brand-primary hover:bg-brand-primary/10 active:bg-brand-primary/20" },

      // Secondary filled
      { typeButton: "secondary", style: "filled", className: "bg-brand-secondary text-brand-secondary-foreground hover:bg-brand-secondary-hover active:bg-brand-secondary-press" },
      // Secondary outline
      { typeButton: "secondary", style: "outline", className: "border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10 active:bg-brand-secondary/20" },
      // Secondary text
      { typeButton: "secondary", style: "text", className: "text-brand-secondary hover:bg-brand-secondary/10 active:bg-brand-secondary/20" },

      // Tretiary filled
      { typeButton: "tretiary", style: "filled", className: "bg-brand-tertiary text-brand-tertiary-foreground hover:bg-brand-tertiary-hover active:bg-brand-tertiary-press" },
      // Tretiary outline
      { typeButton: "tretiary", style: "outline", className: "border-brand-tertiary text-brand-tertiary hover:bg-brand-tertiary/10 active:bg-brand-tertiary/20" },
      // Tretiary text
      { typeButton: "tretiary", style: "text", className: "text-brand-tertiary hover:bg-brand-tertiary/10 active:bg-brand-tertiary/20" },

      // Critical filled
      { typeButton: "critical", style: "filled", className: "bg-critical text-critical-foreground hover:bg-critical-hover active:bg-critical-press" },
      // Critical outline
      { typeButton: "critical", style: "outline", className: "border-critical text-critical hover:bg-critical/10 active:bg-critical/20" },
      // Critical text
      { typeButton: "critical", style: "text", className: "text-critical hover:bg-critical/10 active:bg-critical/20" },

      // Disabled filled
      { typeButton: "disabled", style: "filled", className: "bg-disabled text-disabled-foreground" },
      // Disabled outline
      { typeButton: "disabled", style: "outline", className: "border-disabled text-disabled" },
      // Disabled text
      { typeButton: "disabled", style: "text", className: "text-disabled" },

      // Standard filled
      { typeButton: "standard", style: "filled", className: "bg-surface-variant text-on-surface hover:bg-surface-variant/80 active:bg-surface-variant/60" },
      // Standard outline
      { typeButton: "standard", style: "outline", className: "border-on-surface-variant text-on-surface hover:bg-on-surface/5 active:bg-on-surface/10" },
      // Standard text
      { typeButton: "standard", style: "text", className: "text-on-surface hover:bg-on-surface/5 active:bg-on-surface/10" },
    ],
    defaultVariants: {
      typeButton: "primary",
      size: "large",
      shape: "square-radius",
      style: "filled",
    },
  }
);

export interface AtlButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style">,
    VariantProps<typeof atlButtonVariants> {
  asChild?: boolean;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  showText?: boolean;
}

const AtlButton = React.forwardRef<HTMLButtonElement, AtlButtonProps>(
  (
    {
      className,
      typeButton,
      size,
      shape,
      style,
      asChild = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      showText = true,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const resolvedType = disabled ? "disabled" : typeButton;

    return (
      <Comp
        className={cn(atlButtonVariants({ typeButton: resolvedType, size, shape, style, className }))}
        ref={ref}
        disabled={disabled || resolvedType === "disabled"}
        {...props}
      >
        {LeftIcon && <LeftIcon />}
        {showText && children}
        {RightIcon && <RightIcon />}
      </Comp>
    );
  }
);
AtlButton.displayName = "AtlButton";

export { AtlButton, atlButtonVariants };
