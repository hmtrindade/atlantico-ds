import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";


/* ── Tabs Root ── */
const AtlTabs = TabsPrimitive.Root;

/* ── Tabs List ── */
const AtlTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-end border-b border-border w-full",
      className
    )}
    {...props}
  />
));
AtlTabsList.displayName = "AtlTabsList";

/* ── Tab Trigger ── */
export interface AtlTabTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  icon?: React.ElementType;
}

const AtlTabTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  AtlTabTriggerProps
>(({ className, icon: Icon, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "group inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors rounded-t-[8px] rounded-b-none",
      "text-on-surface border-b-2 border-transparent",
      "data-[state=active]:border-brand-primary data-[state=active]:text-brand-primary-foreground data-[state=active]:bg-brand-primary",
      "hover:text-brand-primary hover:bg-brand-primary/5 data-[state=active]:hover:bg-brand-primary data-[state=active]:hover:text-brand-primary-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {Icon && <Icon className="h-4 w-4" />}
    {children}
  </TabsPrimitive.Trigger>
));
AtlTabTrigger.displayName = "AtlTabTrigger";

/* ── Tab Content ── */
const AtlTabContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("p-5 focus-visible:outline-none", className)}
    {...props}
  />
));
AtlTabContent.displayName = "AtlTabContent";

export { AtlTabs, AtlTabsList, AtlTabTrigger, AtlTabContent };
