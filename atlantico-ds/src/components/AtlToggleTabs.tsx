import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


const containerVariants = cva(
  "inline-flex items-center rounded-full p-1 gap-0",
  {
    variants: {
      toggleType: {
        primary: "bg-surface-primary",
        secundary: "bg-brand-secondary/10",
        tretiary: "bg-brand-tertiary/10",
        standard: "bg-surface-variant",
      },
      behavior: {
        "hug-contents": "w-auto",
        "fill-container": "w-full",
      },
    },
    defaultVariants: {
      toggleType: "primary",
      behavior: "hug-contents",
    },
  }
);

export interface AtlToggleTabItem {
  label: string;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  showLabel?: boolean;
}

export interface AtlToggleTabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof containerVariants> {
  items: AtlToggleTabItem[];
  selected?: string;
  onChange?: (value: string) => void;
  size?: "large" | "small";
}

const AtlToggleTabs = React.forwardRef<HTMLDivElement, AtlToggleTabsProps>(
  (
    {
      className,
      toggleType = "primary",
      behavior,
      items,
      selected,
      onChange,
      size = "large",
      ...props
    },
    ref
  ) => {
    const itemHeight = size === "large" ? "h-9 px-4 text-sm" : "h-7 px-3 text-xs";

    const selectedBgMap = {
      primary: "bg-brand-primary text-brand-primary-foreground",
      secundary: "bg-brand-secondary text-brand-secondary-foreground",
      tretiary: "bg-brand-tertiary text-brand-tertiary-foreground",
      standard: "bg-on-surface text-surface",
    };

    const unselectedTextMap = {
      primary: "text-on-surface-primary",
      secundary: "text-on-surface-primary",
      tretiary: "text-on-surface-primary",
      standard: "text-on-surface-primary",
    };

    const resolvedType = toggleType ?? "primary";

    return (
      <div
        ref={ref}
        className={cn(containerVariants({ toggleType, behavior, className }))}
        role="tablist"
        {...props}
      >
        {items.map((item) => {
          const isSelected = item.label === selected;
          const LeftIcon = item.leftIcon;
          const RightIcon = item.rightIcon;

          return (
            <button
              key={item.label}
              role="tab"
              type="button"
              aria-selected={isSelected}
              onClick={() => onChange?.(item.label)}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors [&_svg]:size-4",
                itemHeight,
                behavior === "fill-container" && "flex-1",
                isSelected
                  ? selectedBgMap[resolvedType]
                  : cn(unselectedTextMap[resolvedType], "hover:bg-black/5")
              )}
            >
              {LeftIcon && <LeftIcon />}
              {(item.showLabel !== false) && <span>{item.label}</span>}
              {RightIcon && <RightIcon />}
            </button>
          );
        })}
      </div>
    );
  }
);
AtlToggleTabs.displayName = "AtlToggleTabs";

export { AtlToggleTabs, containerVariants as atlToggleTabsVariants };
