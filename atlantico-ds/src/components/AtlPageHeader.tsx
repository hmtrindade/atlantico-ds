import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { cn } from "@/lib/utils";
import { AtlBreadcrumb, type BreadcrumbItem } from "./AtlBreadcrumb";

export interface AtlPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  title: string;
  description?: string;
  showBreadcrumb?: boolean;
  breadcrumbItems?: BreadcrumbItem[];
  showSearch?: boolean;
  onSearch?: (query: string) => void;
  type?: "action" | "chips" | "stepper" | "text";
  actions?: React.ReactNode;
}

const AtlPageHeader = React.forwardRef<HTMLDivElement, AtlPageHeaderProps>(
  (
    {
      className,
      label,
      title,
      description,
      showBreadcrumb = false,
      breadcrumbItems = [],
      showSearch = false,
      onSearch,
      type = "text",
      actions,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-0", className)} {...props}>
        {/* Breadcrumb */}
        {showBreadcrumb && breadcrumbItems.length > 0 && (
          <AtlBreadcrumb items={breadcrumbItems} showBack />
        )}

        {/* Header content */}
        <div className="flex items-start justify-between gap-4 py-4">
          <div className="flex flex-col gap-1 flex-1">
            {label && (
              <span className="text-xs text-on-background font-medium uppercase tracking-wider">
                {label}
              </span>
            )}
            <h1 className="text-heading-md text-on-background">{title}</h1>
            {description && (
              <p className="text-sm text-on-background leading-6">{description}</p>
            )}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 shrink-0">
            {showSearch && (
              <div className="relative">
                <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 !h-4 !w-4 text-on-surface-variant" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  onChange={(e) => onSearch?.(e.target.value)}
                  className="h-9 pl-8 pr-3 rounded-sm border border-input bg-surface text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            )}
            {actions}
          </div>
        </div>

        {/* Slot for chips, stepper, or custom content */}
        {children}
      </div>
    );
  }
);
AtlPageHeader.displayName = "AtlPageHeader";

export { AtlPageHeader };
