import * as React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { cn } from "@/lib/utils";
import { AtlTooltip } from "./AtlTooltip";

export interface AtlSelectOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface AtlSelectProps {
  label?: string;
  helpText?: string;
  placeholder?: string;
  isRequired?: boolean;
  showOptional?: boolean;
  showTooltip?: boolean;
  tooltipText?: string;
  options?: AtlSelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  state?: "enable" | "hovered" | "focused" | "disabled" | "error";
  size?: "large" | "small";
  className?: string;
}

const AtlSelect = React.forwardRef<HTMLDivElement, AtlSelectProps>(
  (
    {
      label,
      helpText,
      placeholder = "Placeholder",
      isRequired = false,
      showOptional = false,
      showTooltip = false,
      tooltipText,
      options = [],
      value,
      onChange,
      state = "enable",
      size = "large",
      className,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const isDisabled = state === "disabled";
    const selected = options.find((o) => o.value === value);

    const inputHeight = size === "large" ? "h-11" : "h-9";
    const fontSize = size === "large" ? "text-base leading-7" : "text-sm leading-6";

    const borderColor =
      state === "error"
        ? "border-critical"
        : state === "focused"
          ? "border-brand-primary ring-2 ring-ring"
          : state === "hovered"
            ? "border-brand-primary"
            : "border-input";

    return (
      <div ref={ref} className={cn("flex flex-col gap-1", className)}>
        {label && (
          <div className="flex items-center gap-1">
            <label className="text-xs text-on-surface-primary font-medium leading-[21px]">
              {label}
            </label>
            {isRequired && <span className="text-critical text-xs">*</span>}
            {showOptional && (
              <span className="text-on-surface-variant text-xs">(Opcional)</span>
            )}
            {showTooltip && tooltipText && (
              <AtlTooltip text={tooltipText} />
            )}
          </div>
        )}

        {helpText && (
          <span className="text-xs text-on-surface-primary leading-[21px]">
            {helpText}
          </span>
        )}

        <div className="relative">
          <button
            type="button"
            onClick={() => !isDisabled && setIsOpen(!isOpen)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            disabled={isDisabled}
            className={cn(
              "flex items-center justify-between gap-2 w-full rounded-sm bg-surface px-2 border",
              borderColor,
              inputHeight,
              fontSize,
              isDisabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <span
              className={cn(
                selected
                  ? "text-on-surface-primary"
                  : "text-on-surface-variant"
              )}
            >
              {selected ? selected.label : placeholder}
            </span>
            <KeyboardArrowDown className="!h-4 !w-4 text-on-surface-primary shrink-0" />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-surface border border-border rounded-sm shadow-neutral-md z-20 max-h-60 overflow-y-auto">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  disabled={opt.disabled}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    onChange?.(opt.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 w-full text-left px-4 py-4 text-base leading-7 text-on-surface transition-colors",
                    opt.value === value && "bg-surface-primary text-on-surface-primary font-medium",
                    opt.disabled && "opacity-50 cursor-not-allowed",
                    !opt.disabled && "hover:bg-surface-variant"
                  )}
                >
                  {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
AtlSelect.displayName = "AtlSelect";

export { AtlSelect };
