import * as React from "react";
import { cn } from "@/lib/utils";

export interface AtlSwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "large" | "small";
  state?: "enabled" | "hovered" | "disabled";
}

const AtlSwitch = React.forwardRef<HTMLButtonElement, AtlSwitchProps>(
  ({ className, checked = false, onChange, size = "large", state = "enabled", disabled, ...props }, ref) => {
    const isDisabled = disabled || state === "disabled";

    const trackW = size === "large" ? "w-12" : "w-9";
    const trackH = size === "large" ? "h-6" : "h-5";
    const thumbSize = size === "large" ? "h-5 w-5" : "h-4 w-4";
    const thumbTranslate = checked
      ? size === "large" ? "translate-x-6" : "translate-x-4"
      : "translate-x-0";

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={isDisabled}
        onClick={() => !isDisabled && onChange?.(!checked)}
        className={cn(
          "inline-flex items-center rounded-full p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          trackW,
          trackH,
          checked
            ? "bg-brand-primary"
            : "bg-on-surface-variant",
          isDisabled && "opacity-50 cursor-not-allowed",
          state === "hovered" && !isDisabled && (checked ? "bg-brand-primary-hover" : "bg-on-surface-variant/80"),
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "block rounded-full bg-surface shadow-neutral-xs transition-transform",
            thumbSize,
            thumbTranslate
          )}
        />
      </button>
    );
  }
);
AtlSwitch.displayName = "AtlSwitch";

export { AtlSwitch };
