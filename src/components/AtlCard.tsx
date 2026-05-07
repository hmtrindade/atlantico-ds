import * as React from "react";
import { cn } from "@/lib/utils";

/* ── Card Root ── */
export interface AtlCardProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "enabled" | "pressed-end" | "hovered";
}

const AtlCard = React.forwardRef<HTMLDivElement, AtlCardProps>(
  ({ className, state = "enabled", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-border bg-surface shadow-neutral-sm overflow-hidden transition-shadow",
        state === "hovered" && "shadow-neutral-md",
        state === "pressed-end" && "shadow-neutral-xs",
        className
      )}
      {...props}
    />
  )
);
AtlCard.displayName = "AtlCard";

/* ── Card Header ── */
export interface AtlCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  headline?: string;
  subheadline?: string;
  tertiaryText?: string;
  action?: React.ReactNode;
}

const AtlCardHeader = React.forwardRef<HTMLDivElement, AtlCardHeaderProps>(
  ({ className, headline, subheadline, tertiaryText, action, children, ...props }, ref) => (
    <div ref={ref} className={cn("px-4 pt-4", className)} {...props}>
      {(tertiaryText || action) && (
        <div className="flex items-center justify-between mb-1">
          {tertiaryText && (
            <span className="text-xs text-on-surface-variant">{tertiaryText}</span>
          )}
          {action}
        </div>
      )}
      <div className="flex flex-col gap-0.5 px-4 pt-0.5 pb-4">
        {headline && (
          <h3 className="text-base font-semibold text-on-surface leading-7">{headline}</h3>
        )}
        {subheadline && (
          <p className="text-sm text-on-surface-variant leading-6">{subheadline}</p>
        )}
      </div>
      {children}
    </div>
  )
);
AtlCardHeader.displayName = "AtlCardHeader";

/* ── Card Content Area ── */
const AtlCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
));
AtlCardContent.displayName = "AtlCardContent";

/* ── Card Full Content Area ── */
const AtlCardFullContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full", className)} {...props} />
));
AtlCardFullContent.displayName = "AtlCardFullContent";

/* ── Card Footer ── */
const AtlCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 p-4", className)}
    {...props}
  />
));
AtlCardFooter.displayName = "AtlCardFooter";

export { AtlCard, AtlCardHeader, AtlCardContent, AtlCardFullContent, AtlCardFooter };
