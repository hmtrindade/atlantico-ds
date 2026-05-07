import * as React from "react";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import WarningAmber from "@mui/icons-material/WarningAmber";
import Cancel from "@mui/icons-material/Cancel";
import GppMaybe from "@mui/icons-material/GppMaybe";
import Close from "@mui/icons-material/Close";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const atlToastBannerVariants = cva(
  "flex items-start gap-4 rounded-sm font-sans w-full",
  {
    variants: {
      toastType: {
        info: "bg-brand-primary",
        success: "bg-success",
        alert: "bg-alert",
        critical: "bg-critical",
        error: "bg-surface-error",
      },
      size: {
        large: "px-6 py-4",
        small: "px-4 py-3",
        mobile: "px-4 py-3",
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
  critical: GppMaybe,
  error: Cancel,
};

const iconBgMap: Record<string, string> = {
  info: "bg-brand-primary-foreground",
  success: "bg-on-surface-success",
  alert: "bg-alert-foreground",
  critical: "bg-critical-foreground",
  error: "bg-on-surface-error",
};

export interface AtlToastBannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof atlToastBannerVariants> {
  title?: string;
  text?: string;
  showText?: boolean;
  showButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
  showClose?: boolean;
  onClose?: () => void;
}

const AtlToastBanner = React.forwardRef<HTMLDivElement, AtlToastBannerProps>(
  (
    {
      className,
      toastType = "info",
      size,
      title = "Título",
      text = "Texto",
      showText = true,
      showButton = false,
      buttonLabel = "button",
      onButtonClick,
      showClose = true,
      onClose,
      ...props
    },
    ref
  ) => {
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
    const buttonColorMap: Record<string, string> = {
      info: "text-brand-primary-foreground",
      success: "text-success-foreground",
      alert: "text-alert-foreground",
      error: "text-on-surface-error",
      critical: "text-critical-foreground",
    };
    const textColor = textColorMap[toastType ?? "info"];
    const iconColor = iconColorMap[toastType ?? "info"];
    const circleSize = size === "large" ? "h-12 w-12" : "h-10 w-10";
    const iconSize = size === "large" ? "!h-6 !w-6" : "!h-5 !w-5";
    const circleBg = iconBgMap[toastType ?? "info"];
    const isMobile = size === "mobile";

    return (
      <div
        ref={ref}
        className={cn(atlToastBannerVariants({ toastType, size, className }))}
        role="alert"
        {...props}
      >
        <div className="shrink-0 pt-0.5">
          <div className={cn("rounded-full flex items-center justify-center", circleSize, circleBg)}>
            <Icon className={cn(iconSize, iconColor)} />
          </div>
        </div>
        <div className={cn("flex-1", isMobile ? "flex flex-col gap-2" : "flex items-center gap-4")}>
          <div className={cn("flex flex-col gap-0.5", isMobile ? "flex-1" : "flex-1")}>
            <span className={cn("font-semibold", textColor, size === "large" ? "text-xl leading-[35px]" : "text-sm leading-6")}>
              {title}
            </span>
            {showText && text && (
              <span className={cn("font-normal", textColor, size === "large" ? "text-sm leading-[24.5px]" : "text-xs leading-[21px]")}>
                {text}
              </span>
            )}
          </div>
          {showButton && (
            <button
              type="button"
              onClick={onButtonClick}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-base font-normal transition-colors",
                "border border-current/30 hover:bg-white/10",
                buttonColorMap[toastType ?? "info"]
              )}
            >
              {buttonLabel}
            </button>
          )}
        </div>
        {showClose && (
          <button
            type="button"
            onClick={onClose}
            className={cn("shrink-0", textColor, "hover:opacity-70")}
          >
            <Close className={iconSize} />
          </button>
        )}
      </div>
    );
  }
);
AtlToastBanner.displayName = "AtlToastBanner";

export { AtlToastBanner, atlToastBannerVariants };
