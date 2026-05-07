import * as React from "react";
import { cn } from "@/lib/utils";
import { AtlTooltip } from "./AtlTooltip";

export interface AtlTextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  helpText?: string;
  showOptional?: boolean;
  showTooltip?: boolean;
  tooltipText?: string;
  isRequired?: boolean;
  showCount?: boolean;
  maxLength?: number;
  state?: "enabled" | "hovered" | "focused" | "error" | "disabled";
}

const AtlTextArea = React.forwardRef<HTMLTextAreaElement, AtlTextAreaProps>(
  (
    {
      className,
      label,
      helpText,
      showOptional = false,
      showTooltip = false,
      tooltipText,
      isRequired = false,
      showCount = false,
      maxLength,
      state = "enabled",
      disabled,
      value,
      onChange,
      placeholder = "Placeholder",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || state === "disabled";
    const charCount = typeof value === "string" ? value.length : 0;

    const borderColor =
      state === "error"
        ? "border-critical"
        : state === "focused"
          ? "border-brand-primary ring-2 ring-ring"
          : state === "hovered"
            ? "border-brand-primary"
            : "border-input";

    return (
      <div className={cn("flex flex-col gap-1", className)}>
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

        <textarea
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
          maxLength={maxLength}
          className={cn(
            "w-full min-h-[88px] rounded-sm bg-surface border px-2 py-2 text-base leading-7 text-on-surface-primary placeholder:text-on-surface-variant resize-y transition-colors",
            "focus:outline-none",
            borderColor,
            isDisabled && "opacity-50 cursor-not-allowed bg-disabled-foreground"
          )}
          {...props}
        />

        <div className="flex items-center justify-between">
          {helpText ? (
            <span className={cn(
              "text-xs leading-[21px]",
              state === "error" ? "text-critical" : isDisabled ? "text-disabled" : "text-on-surface-primary"
            )}>
              {helpText}
            </span>
          ) : <span />}
          {showCount && (
            <span className={cn(
              "text-xs leading-[21px] text-right",
              isDisabled ? "text-disabled" : "text-on-surface-variant"
            )}>
              {charCount}{maxLength ? `/${maxLength}` : ""}
            </span>
          )}
        </div>
      </div>
    );
  }
);
AtlTextArea.displayName = "AtlTextArea";

export { AtlTextArea };
