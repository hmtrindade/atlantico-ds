import * as React from "react";
import { cn } from "@/lib/utils";
import { AtlSelectItem } from "./AtlSelectItem";

export interface AtlSelectListItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface AtlSelectListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  items: AtlSelectListItem[];
  selectedValue?: string;
  onSelect?: (value: string) => void;
  size?: "Large" | "Small";
}

const AtlSelectList = React.forwardRef<HTMLDivElement, AtlSelectListProps>(
  ({ className, items, selectedValue, onSelect, size = "Large", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-surface border border-border rounded-sm shadow-neutral-md overflow-hidden",
          className
        )}
        {...props}
      >
        {items.map((item) => (
          <AtlSelectItem
            key={item.value}
            label={item.label}
            icon={item.icon}
            size={size}
            state={
              item.disabled
                ? "disabled"
                : item.value === selectedValue
                  ? "selected"
                  : "enabled"
            }
            disabled={item.disabled}
            onClick={() => !item.disabled && onSelect?.(item.value)}
          />
        ))}
      </div>
    );
  }
);
AtlSelectList.displayName = "AtlSelectList";

export { AtlSelectList };
