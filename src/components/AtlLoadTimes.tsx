import * as React from "react";
import { cn } from "@/lib/utils";

export interface AtlLoadTimesProps extends React.HTMLAttributes<HTMLDivElement> {}

const AtlLoadTimes = React.forwardRef<HTMLDivElement, AtlLoadTimesProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("inline-flex items-end gap-1", className)}
        role="status"
        aria-label="Carregando"
        {...props}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-[5px] h-1 rounded-full bg-brand-primary animate-bounce"
            style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.6s" }}
          />
        ))}
      </div>
    );
  }
);
AtlLoadTimes.displayName = "AtlLoadTimes";

export { AtlLoadTimes };
