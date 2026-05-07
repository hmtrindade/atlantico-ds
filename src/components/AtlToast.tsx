import * as React from "react";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import WarningAmber from "@mui/icons-material/WarningAmber";
import Cancel from "@mui/icons-material/Cancel";
import GppMaybe from "@mui/icons-material/GppMaybe";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const atlToastVariants = cva(
  "flex items-center gap-4 rounded-sm font-sans",
  {
    variants: {
      toastType: {
        info: "bg-brand-primary",
        success: "bg-success",
        alert: "bg-alert",
        error: "bg-surface-error",
        critical: "bg-critical",
      },
      size: {
        large: "px-6 py-3",
        small: "px-4 py-2",
      },
    },
    defaultVariants: {
      toastType: "info",
      size: "large",
    },
  }
);

const iconMap = {
  info: InfoOutlined,
  success: CheckCircleOutlined,
  alert: WarningAmber,
  error: Cancel,
  critical: GppMaybe,
};

const iconBgMap: Record<string, string> = {
  info: "bg-brand-primary",
  success: "bg-on-surface-success",
  alert: "bg-on-surface-error",
  error: "bg-on-surface-error",
  critical: "bg-on-surface-error",
};

export interface AtlToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof atlToastVariants> {
  title?: string;
  text?: string;
  showText?: boolean;
}

const AtlToast = React.forwardRef<HTMLDivElement, AtlToastProps>(
  ({ className, toastType = "info", size, title = "Título", text = "Texto", showText = true, ...props }, ref) => {
    const Icon = iconMap[toastType ?? "info"];
    const textColorMap: Record<string, string> = {
      info: "text-brand-primary-foreground",
      success: "text-success-foreground",
      alert: "text-alert-foreground",
      error: "text-on-surface-error",
      critical: "text-critical-foreground",
    };
    const iconColorMap: Record<string, string> = {
      info: "text-brand-primary",
      success: "text-success",
      alert: "text-alert",
      error: "text-surface-error",
      critical: "text-critical",
    };
    const circleBgMap: Record<string, string> = {
      info: "bg-brand-primary-foreground",
      success: "bg-on-surface-success",
      alert: "bg-alert-foreground",
      error: "bg-on-surface-error",
      critical: "bg-critical-foreground",
    };
    const textColor = textColorMap[toastType ?? "info"];
    const iconColor = iconColorMap[toastType ?? "info"];
    const circleSize = size === "large" ? "h-12 w-12" : "h-10 w-10";
    const iconSize = size === "large" ? "!h-6 !w-6" : "!h-5 !w-5";
    const circleBg = circleBgMap[toastType ?? "info"];

    return (
      <div
        ref={ref}
        className={cn(atlToastVariants({ toastType, size, className }))}
        role="alert"
        {...props}
      >
        <div className={cn("shrink-0 rounded-full flex items-center justify-center", circleSize, circleBg)}>
          <Icon className={cn(iconSize, iconColor)} />
        </div>
        <div className="flex flex-col">
          <span className={cn("font-semibold", textColor, size === "large" ? "text-xl leading-[35px]" : "text-sm leading-6")}>
            {title}
          </span>
          {showText && text && (
            <span className={cn("font-normal", textColor, size === "large" ? "text-sm leading-[24.5px]" : "text-xs leading-[21px]")}>
              {text}
            </span>
          )}
        </div>
      </div>
    );
  }
);
AtlToast.displayName = "AtlToast";

export { AtlToast, atlToastVariants };
