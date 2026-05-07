import * as React from "react";
import { cn } from "@/lib/utils";

export interface AtlCircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "large" | "small";
  showText?: boolean;
  text?: string;
}

const AtlCircularProgress = React.forwardRef<HTMLDivElement, AtlCircularProgressProps>(
  ({ className, size = "large", showText = true, text = "Carregando...", ...props }, ref) => {
    const dimension = size === "large" ? 32 : 20;
    const strokeWidth = size === "large" ? 3 : 2;
    const radius = (dimension - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
      <div
        ref={ref}
        className={cn("inline-flex flex-col items-center gap-2", className)}
        role="status"
        aria-label={text}
        {...props}
      >
        <svg
          width={dimension}
          height={dimension}
          viewBox={`0 0 ${dimension} ${dimension}`}
          className="animate-spin"
        >
          <circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--brand-primary) / 0.2)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--brand-primary))"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * 0.75}
          />
        </svg>
        {showText && (
          <span
            className={cn(
              "font-sans text-brand-primary",
              size === "large" ? "text-xl leading-[35px]" : "text-sm leading-6"
            )}
          >
            {text}
          </span>
        )}
      </div>
    );
  }
);
AtlCircularProgress.displayName = "AtlCircularProgress";

export { AtlCircularProgress };
