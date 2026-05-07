import * as React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Close from "@mui/icons-material/Close";
import { cn } from "@/lib/utils";
import { AtlTooltip } from "./AtlTooltip";

export interface AtlAutoCompleteOption {
  label: string;
  value: string;
}

export interface AtlAutoCompleteProps {
  label?: string;
  helpText?: string;
  placeholder?: string;
  isRequired?: boolean;
  showOptional?: boolean;
  showTooltip?: boolean;
  tooltipText?: string;
  options?: AtlAutoCompleteOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  onInputChange?: (text: string) => void;
  state?: "enable" | "hovered" | "focused" | "error" | "disabled";
  size?: "large" | "small";
  className?: string;
}

const AtlAutoComplete = React.forwardRef<HTMLDivElement, AtlAutoCompleteProps>(
  (
    {
      label,
      helpText,
      placeholder = "Selecione ou digite",
      isRequired = false,
      showOptional = false,
      showTooltip = false,
      tooltipText,
      options = [],
      value = [],
      onChange,
      onInputChange,
      state = "enable",
      size = "large",
      className,
    },
    ref
  ) => {
    const [inputText, setInputText] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(false);
    const isDisabled = state === "disabled";

    const filteredOptions = options.filter(
      (opt) =>
        opt.label.toLowerCase().includes(inputText.toLowerCase()) &&
        !value.includes(opt.value)
    );

    const handleSelect = (optValue: string) => {
      onChange?.([...value, optValue]);
      setInputText("");
      setIsOpen(false);
    };

    const handleRemove = (optValue: string) => {
      onChange?.(value.filter((v) => v !== optValue));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
      onInputChange?.(e.target.value);
      setIsOpen(true);
    };

    const inputHeight = size === "large" ? "h-11" : "h-9";
    const fontSize = size === "large" ? "text-base" : "text-sm";

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
        {/* Title area */}
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

        {/* Help text */}
        {helpText && (
          <span className="text-xs text-on-surface-primary leading-[21px]">
            {helpText}
          </span>
        )}

        {/* Input */}
        <div className="relative">
          <div
            className={cn(
              "flex items-center gap-2 rounded-sm bg-surface px-2",
              borderColor,
              "border",
              inputHeight,
              isDisabled && "opacity-50 cursor-not-allowed"
            )}
          >
            {/* Selected tags */}
            {value.map((v) => {
              const opt = options.find((o) => o.value === v);
              return (
                <span
                  key={v}
                  className="inline-flex items-center gap-1 bg-surface-primary text-on-surface-primary text-xs rounded-sm px-2 py-0.5"
                >
                  {opt?.label ?? v}
                  {!isDisabled && (
                    <button
                      onClick={() => handleRemove(v)}
                      className="hover:text-critical"
                    >
                      <Close className="!h-3 !w-3" />
                    </button>
                  )}
                </span>
              );
            })}

            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setTimeout(() => setIsOpen(false), 200)}
              placeholder={value.length === 0 ? placeholder : ""}
              disabled={isDisabled}
              className={cn(
                "flex-1 bg-transparent outline-none text-on-surface-primary placeholder:text-on-surface-variant",
                fontSize
              )}
            />
            <KeyboardArrowDown className="!h-4 !w-4 text-on-surface-primary shrink-0" />
          </div>

          {/* Dropdown */}
          {isOpen && filteredOptions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-surface border border-border rounded-sm shadow-neutral-md z-20 max-h-48 overflow-y-auto">
              {filteredOptions.map((opt) => (
                <button
                  key={opt.value}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSelect(opt.value)}
                  className="w-full text-left px-3 py-2 text-sm text-on-surface hover:bg-surface-variant transition-colors"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
AtlAutoComplete.displayName = "AtlAutoComplete";

export { AtlAutoComplete };
