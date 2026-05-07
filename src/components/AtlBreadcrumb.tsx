import * as React from "react";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface AtlBreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  showBack?: boolean;
  onBack?: () => void;
  maxVisible?: number;
}

const AtlBreadcrumb = React.forwardRef<HTMLElement, AtlBreadcrumbProps>(
  ({ className, items, showBack = false, onBack, maxVisible, ...props }, ref) => {
    const shouldTruncate = maxVisible && items.length > maxVisible;
    const visibleItems = shouldTruncate
      ? [...items.slice(0, 1), { label: "..." }, ...items.slice(items.length - (maxVisible - 2))]
      : items;

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn("flex flex-col gap-0", className)}
        {...props}
      >
        {showBack && (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1 text-brand-primary text-sm font-normal py-2 hover:underline"
          >
            <ArrowBack className="!h-4 !w-4" />
            <span>Voltar</span>
          </button>
        )}
        <div className="border-t border-border" />
        <ol className="flex items-center gap-1 py-1">
          {visibleItems.map((item, index) => {
            const isLast = index === visibleItems.length - 1;
            const isFirst = index === 0;

            return (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight className="!h-4 !w-4 text-on-surface-variant shrink-0" />
                )}
                {item.label === "..." ? (
                  <span className="text-xs text-on-surface-variant">...</span>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 text-xs leading-[21px] font-normal",
                      isFirst
                        ? "text-brand-primary"
                        : isLast
                          ? "text-brand-secondary font-medium"
                          : "text-brand-secondary"
                    )}
                  >
                    {item.icon && <span className="shrink-0">{item.icon}</span>}
                    <span>{item.label}</span>
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);
AtlBreadcrumb.displayName = "AtlBreadcrumb";

export { AtlBreadcrumb };
