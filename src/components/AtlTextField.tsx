import * as React from "react";
import { cn } from "@/lib/utils";
import { AtlTooltip } from "./AtlTooltip";

export interface AtlTextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helpText?: string;
  showOptional?: boolean;
  showTooltip?: boolean;
  tooltipText?: string;
  isRequired?: boolean;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  state?: "enable" | "hovered" | "focused" | "disabled" | "error" | "no-editable";
  fieldSize?: "large" | "small";
}

const AtlTextField = React.forwardRef<HTMLInputElement, AtlTextFieldProps>(
  (
    {
      className,
      label,
      helpText,
      showOptional = false,
      showTooltip = false,
      tooltipText,
      isRequired = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      state = "enable",
      fieldSize = "large",
      disabled,
      placeholder = "Placeholder",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || state === "disabled";
    const isReadonly = state === "no-editable";
    const [isFocused, setIsFocused] = React.useState(false);

    const inputHeight = fieldSize === "large" ? "h-11" : "h-9";
    const fontSize = fieldSize === "large" ? "text-base leading-7" : "text-sm leading-6";
    const iconSize = fieldSize === "large" ? "h-4 w-4" : "h-3.5 w-3.5";

    const effectiveState = state === "enable" && isFocused ? "focused" : state;

    const borderColor =
      effectiveState === "error"
        ? "border-critical"
        : effectiveState === "focused"
          ? "border-brand-primary"
          : effectiveState === "hovered"
            ? "border-brand-primary"
            : "border-input";

    const isFocusedStyle = effectiveState === "focused";

    return (
      <div className={cn("flex flex-col gap-1", className)}>
        {label && (
          <div className="flex items-center gap-1">
            <label
              className={cn(
                "text-xs font-medium leading-[21px]",
                isFocusedStyle ? "text-brand-primary" : "text-on-surface-primary"
              )}
            >
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

        <div
          className={cn(
            "flex items-center gap-2 rounded-sm px-2 border transition-colors",
            borderColor,
            inputHeight,
            isFocusedStyle ? "bg-surface-variant" : "bg-surface",
            isDisabled && "opacity-50 cursor-not-allowed",
            isReadonly && "bg-background-variant"
          )}
        >
          {LeftIcon && <LeftIcon className={cn(iconSize, "text-on-surface-primary shrink-0")} />}
          <input
            ref={ref}
            placeholder={placeholder}
            disabled={isDisabled}
            readOnly={isReadonly}
            className={cn(
              "flex-1 bg-transparent outline-none text-on-surface-primary placeholder:text-on-surface-variant",
              fontSize
            )}
            {...props}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
          />
          {RightIcon && <RightIcon className={cn(iconSize, "text-on-surface-primary shrink-0")} />}
        </div>

        {helpText && (
          <span className={cn(
            "text-xs leading-[21px]",
            state === "error" ? "text-critical" : "text-on-surface-primary"
          )}>
            {helpText}
          </span>
        )}
      </div>
    );
  }
);
AtlTextField.displayName = "AtlTextField";

export { AtlTextField };
