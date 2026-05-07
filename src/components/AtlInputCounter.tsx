import * as React from "react";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { cn } from "@/lib/utils";
import { AtlTooltip } from "./AtlTooltip";

export interface AtlInputCounterProps {
  label?: string;
  helpText?: string;
  showOptional?: boolean;
  showTooltip?: boolean;
  tooltipText?: string;
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  state?: "enable" | "hovered" | "focused" | "disabled";
  size?: "large" | "small";
  className?: string;
}

const AtlInputCounter = React.forwardRef<HTMLDivElement, AtlInputCounterProps>(
  (
    {
      label,
      helpText,
      showOptional = false,
      showTooltip = false,
      tooltipText,
      value = 0,
      onChange,
      min = 0,
      max = Infinity,
      step = 1,
      state = "enable",
      size = "large",
      className,
    },
    ref
  ) => {
    const isDisabled = state === "disabled";
    const inputHeight = size === "large" ? "h-11" : "h-9";
    const iconSize = size === "large" ? "h-4 w-4" : "h-3.5 w-3.5";

    const decrement = () => {
      if (!isDisabled && value > min) onChange?.(value - step);
    };
    const increment = () => {
      if (!isDisabled && value < max) onChange?.(value + step);
    };

    return (
      <div ref={ref} className={cn("flex flex-col gap-1", className)}>
        {label && (
          <div className="flex items-center gap-1">
            <label className="text-xs text-on-surface-primary font-medium leading-[21px]">
              {label}
            </label>
            {showOptional && (
              <span className="text-on-surface-variant text-xs">(Opcional)</span>
            )}
            {showTooltip && tooltipText && (
              <AtlTooltip text={tooltipText} />
            )}
          </div>
        )}

        <div
          className={cn(
            "inline-flex items-center gap-4 rounded-sm bg-surface border border-input px-2",
            inputHeight,
            isDisabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <button
            type="button"
            onClick={decrement}
            disabled={isDisabled || value <= min}
            className="text-on-surface-primary disabled:text-disabled shrink-0"
          >
            <RemoveCircleOutline className={iconSize} />
          </button>
          <span className="text-base leading-7 text-on-surface-primary font-medium min-w-[2ch] text-center tabular-nums">
            {value}
          </span>
          <button
            type="button"
            onClick={increment}
            disabled={isDisabled || value >= max}
            className="text-on-surface-primary disabled:text-disabled shrink-0"
          >
            <AddCircleOutline className={iconSize} />
          </button>
        </div>

        {helpText && (
          <span className="text-xs text-on-surface-primary leading-[21px]">{helpText}</span>
        )}
      </div>
    );
  }
);
AtlInputCounter.displayName = "AtlInputCounter";

export { AtlInputCounter };
