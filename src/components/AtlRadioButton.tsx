import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const atlRadioVariants = cva(
  "peer shrink-0 rounded-full border-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      size: {
        small: "h-3 w-3",
        medium: "h-4 w-4",
        large: "h-5 w-5",
      },
      stateStyle: {
        enabled: "border-on-surface-variant data-[state=checked]:border-brand-primary",
        hovered: "border-brand-primary bg-brand-primary/10",
        error: "border-critical data-[state=checked]:border-critical",
        disabled: "border-disabled cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "medium",
      stateStyle: "enabled",
    },
  }
);

const dotSizeMap = { small: 5, medium: 6, large: 8 } as const;

export interface AtlRadioButtonProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof atlRadioVariants> {}

const AtlRadioButton = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  AtlRadioButtonProps
>(({ className, size = "medium", stateStyle, disabled, ...props }, ref) => {
  const resolvedState = disabled ? "disabled" : stateStyle;
  const dotSize = dotSizeMap[size ?? "medium"];

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(atlRadioVariants({ size, stateStyle: resolvedState, className }))}
      disabled={disabled || resolvedState === "disabled"}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <span
          className={cn(
            "rounded-full",
            resolvedState === "error" ? "bg-critical" : "bg-brand-primary",
            resolvedState === "disabled" && "bg-disabled"
          )}
          style={{ width: dotSize, height: dotSize }}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
AtlRadioButton.displayName = "AtlRadioButton";

const AtlRadioGroup = RadioGroupPrimitive.Root;

export { AtlRadioButton, AtlRadioGroup, atlRadioVariants };
