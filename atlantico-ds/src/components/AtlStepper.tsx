import * as React from "react";
import Check from "@mui/icons-material/Check";
import { cn } from "@/lib/utils";

export interface AtlStepperStep {
  label: string;
  helpText?: string;
}

export interface AtlStepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: AtlStepperStep[];
  currentStep: number;
  orientation?: "horizontal" | "vertical";
  size?: "large" | "small";
  showText?: boolean;
  showHelpText?: boolean;
  showLine?: boolean;
}

const AtlStepper = React.forwardRef<HTMLDivElement, AtlStepperProps>(
  (
    {
      className,
      steps,
      currentStep,
      orientation = "horizontal",
      size = "large",
      showText = true,
      showHelpText = true,
      showLine = true,
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === "horizontal";
    const circleSize = size === "large" ? "h-8 w-8 text-sm" : "h-6 w-6 text-xs";

    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          isHorizontal ? "flex-row items-start" : "flex-col items-start",
          className
        )}
        {...props}
      >
        {steps.map((step, index) => {
          const isConcluded = index < currentStep;
          const isCurrent = index === currentStep;
          const isDefault = index > currentStep;

          return (
            <div
              key={index}
              className={cn(
                "flex",
                isHorizontal ? "flex-col items-center flex-1" : "flex-row items-start",
              )}
            >
              <div
                className={cn(
                  "flex items-center",
                  isHorizontal ? "flex-row w-full" : "flex-col h-full",
                )}
              >
                {/* Line before (not for first) */}
                {index > 0 && showLine && (
                  <div
                    className={cn(
                      isHorizontal ? "h-px flex-1" : "w-px flex-1 min-h-[16px]",
                      isConcluded || isCurrent ? "bg-brand-primary" : "bg-disabled"
                    )}
                  />
                )}

                {/* Step circle */}
                <div
                  className={cn(
                    "shrink-0 rounded-full flex items-center justify-center font-bold transition-colors",
                    circleSize,
                    isConcluded && "bg-brand-primary text-brand-primary-foreground",
                    isCurrent && "bg-brand-primary text-brand-primary-foreground",
                    isDefault && "bg-surface-variant text-on-surface"
                  )}
                >
                  {isConcluded ? (
                    <Check className={size === "large" ? "!h-4 !w-4" : "!h-3 !w-3"} />
                  ) : (
                    index + 1
                  )}
                </div>

                {/* Line after (not for last) */}
                {index < steps.length - 1 && showLine && (
                  <div
                    className={cn(
                      isHorizontal ? "h-px flex-1" : "w-px flex-1 min-h-[16px]",
                      isConcluded ? "bg-brand-primary" : "bg-disabled"
                    )}
                  />
                )}
              </div>

              {/* Text */}
              {showText && (
                <div
                  className={cn(
                    "flex flex-col",
                    isHorizontal ? "items-center mt-1" : "items-start ml-2",
                  )}
                >
                  <span
                    className={cn(
                      "font-bold text-on-surface",
                      size === "large" ? "text-sm leading-[24.5px]" : "text-xs leading-[21px]"
                    )}
                  >
                    {step.label}
                  </span>
                  {showHelpText && step.helpText && (
                    <span
                      className={cn(
                        "text-on-surface font-normal",
                        size === "large" ? "text-xs leading-[21px]" : "text-[10px] leading-4"
                      )}
                    >
                      {step.helpText}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);
AtlStepper.displayName = "AtlStepper";

export { AtlStepper };
