import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import Check from "@mui/icons-material/Check";
import Remove from "@mui/icons-material/Remove";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const atlCheckboxVariants = cva(
  "peer shrink-0 border-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      size: {
        small: "h-3 w-3 rounded-[2px]",
        medium: "h-4 w-4 rounded-[3px]",
        large: "h-5 w-5 rounded-[4px]",
      },
      stateStyle: {
        enabled: "border-on-surface-variant data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary data-[state=indeterminate]:bg-brand-primary data-[state=indeterminate]:border-brand-primary",
        hovered: "border-brand-primary bg-brand-primary/10 data-[state=checked]:bg-brand-primary-hover data-[state=checked]:border-brand-primary-hover data-[state=indeterminate]:bg-brand-primary-hover data-[state=indeterminate]:border-brand-primary-hover",
        error: "border-critical data-[state=checked]:bg-critical data-[state=checked]:border-critical data-[state=indeterminate]:bg-critical data-[state=indeterminate]:border-critical",
        disabled: "border-disabled cursor-not-allowed data-[state=checked]:bg-disabled data-[state=checked]:border-disabled data-[state=indeterminate]:bg-disabled data-[state=indeterminate]:border-disabled",
      },
    },
    defaultVariants: {
      size: "medium",
      stateStyle: "enabled",
    },
  }
);

const iconSizeMap = { small: 8, medium: 10, large: 14 } as const;

export interface AtlCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof atlCheckboxVariants> {}

const AtlCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  AtlCheckboxProps
>(({ className, size = "medium", stateStyle, disabled, ...props }, ref) => {
  const resolvedState = disabled ? "disabled" : stateStyle;
  const iconSize = iconSizeMap[size ?? "medium"];

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(atlCheckboxVariants({ size, stateStyle: resolvedState, className }))}
      disabled={disabled || resolvedState === "disabled"}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-surface">
        {props.checked === "indeterminate" ? (
          <Remove style={{ width: iconSize, height: iconSize }} />
        ) : (
          <Check style={{ width: iconSize, height: iconSize }} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
AtlCheckbox.displayName = "AtlCheckbox";

export { AtlCheckbox, atlCheckboxVariants };
