import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


const atlChipVariants = cva(
  "inline-flex items-center font-sans font-bold transition-colors",
  {
    variants: {
      chipType: {
        standart: "",
        critical: "",
        disabled: "cursor-not-allowed",
        neutral: "",
      },
      chipStyle: {
        outline: "bg-transparent border",
        filed: "",
      },
      size: {
        large: "h-8 px-3 gap-1.5 text-xs leading-[21px] rounded-full [&_svg]:size-4",
        small: "h-6 px-2 gap-1 text-xs leading-[21px] rounded-full [&_svg]:size-3.5",
      },
      state: {
        enabled: "",
        hovered: "",
        pressed: "",
        selected: "",
        disabled: "cursor-not-allowed",
      },
    },
    compoundVariants: [
      // Standart filled
      { chipType: "standart", chipStyle: "filed", state: "enabled", className: "bg-brand-primary text-brand-primary-foreground" },
      { chipType: "standart", chipStyle: "filed", state: "hovered", className: "bg-brand-primary-hover text-brand-primary-foreground" },
      { chipType: "standart", chipStyle: "filed", state: "pressed", className: "bg-brand-primary-press text-brand-primary-foreground" },
      { chipType: "standart", chipStyle: "filed", state: "selected", className: "bg-brand-primary text-brand-primary-foreground ring-2 ring-ring" },
      // Standart outline
      { chipType: "standart", chipStyle: "outline", state: "enabled", className: "border-brand-primary text-brand-primary" },
      { chipType: "standart", chipStyle: "outline", state: "hovered", className: "border-brand-primary-hover text-brand-primary-hover bg-brand-primary/5" },
      { chipType: "standart", chipStyle: "outline", state: "pressed", className: "border-brand-primary-press text-brand-primary-press bg-brand-primary/10" },
      { chipType: "standart", chipStyle: "outline", state: "selected", className: "border-brand-primary text-brand-primary bg-brand-primary/10 ring-2 ring-ring" },
      // Critical filled
      { chipType: "critical", chipStyle: "filed", state: "enabled", className: "bg-critical text-critical-foreground" },
      { chipType: "critical", chipStyle: "filed", state: "hovered", className: "bg-critical-hover text-critical-foreground" },
      { chipType: "critical", chipStyle: "filed", state: "pressed", className: "bg-critical-press text-critical-foreground" },
      { chipType: "critical", chipStyle: "filed", state: "selected", className: "bg-critical text-critical-foreground ring-2 ring-ring" },
      // Critical outline
      { chipType: "critical", chipStyle: "outline", state: "enabled", className: "border-critical text-critical" },
      { chipType: "critical", chipStyle: "outline", state: "hovered", className: "border-critical-hover text-critical-hover bg-critical/5" },
      { chipType: "critical", chipStyle: "outline", state: "pressed", className: "border-critical-press text-critical-press bg-critical/10" },
      { chipType: "critical", chipStyle: "outline", state: "selected", className: "border-critical text-critical bg-critical/10 ring-2 ring-ring" },
      // Neutral filled
      { chipType: "neutral", chipStyle: "filed", state: "enabled", className: "bg-on-surface text-surface" },
      { chipType: "neutral", chipStyle: "filed", state: "hovered", className: "bg-on-surface/80 text-surface" },
      { chipType: "neutral", chipStyle: "filed", state: "pressed", className: "bg-on-surface/60 text-surface" },
      { chipType: "neutral", chipStyle: "filed", state: "selected", className: "bg-on-surface text-surface ring-2 ring-ring" },
      // Neutral outline
      { chipType: "neutral", chipStyle: "outline", state: "enabled", className: "border-on-surface text-on-surface" },
      { chipType: "neutral", chipStyle: "outline", state: "hovered", className: "border-on-surface text-on-surface bg-on-surface/5" },
      { chipType: "neutral", chipStyle: "outline", state: "pressed", className: "border-on-surface text-on-surface bg-on-surface/10" },
      { chipType: "neutral", chipStyle: "outline", state: "selected", className: "border-on-surface text-on-surface bg-on-surface/10 ring-2 ring-ring" },
      // Disabled — all states use the same disabled tokens (no opacity)
      { chipType: "disabled", chipStyle: "filed", state: "enabled", className: "bg-disabled text-disabled-foreground" },
      { chipType: "disabled", chipStyle: "filed", state: "disabled", className: "bg-disabled text-disabled-foreground" },
      { chipType: "disabled", chipStyle: "filed", state: "hovered", className: "bg-disabled text-disabled-foreground" },
      { chipType: "disabled", chipStyle: "filed", state: "pressed", className: "bg-disabled text-disabled-foreground" },
      { chipType: "disabled", chipStyle: "filed", state: "selected", className: "bg-disabled text-disabled-foreground" },
      { chipType: "disabled", chipStyle: "outline", state: "enabled", className: "border-disabled text-disabled" },
      { chipType: "disabled", chipStyle: "outline", state: "disabled", className: "border-disabled text-disabled" },
      { chipType: "disabled", chipStyle: "outline", state: "hovered", className: "border-disabled text-disabled" },
      { chipType: "disabled", chipStyle: "outline", state: "pressed", className: "border-disabled text-disabled" },
      { chipType: "disabled", chipStyle: "outline", state: "selected", className: "border-disabled text-disabled" },
    ],
    defaultVariants: {
      chipType: "standart",
      chipStyle: "filed",
      size: "large",
      state: "enabled",
    },
  }
);

export interface AtlChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style">,
    VariantProps<typeof atlChipVariants> {
  label?: string;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  showBadge?: boolean;
  badgeContent?: string | number;
  showImage?: boolean;
  imageUrl?: string;
  clickable?: boolean;
}

const AtlChip = React.forwardRef<HTMLButtonElement, AtlChipProps>(
  (
    {
      className,
      chipType,
      chipStyle,
      size,
      state,
      label = "Chips",
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      showBadge = false,
      badgeContent,
      showImage = false,
      imageUrl,
      clickable = true,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabledVisual = disabled || state === "disabled" || chipType === "disabled";
    const resolvedType = isDisabledVisual ? "disabled" : chipType;
    const resolvedState = isDisabledVisual ? "disabled" : state;
    const Comp = clickable ? "button" : "span";
    const isLarge = size !== "small";

    /* Figma specs: image circle 21×21 (large) / 18×18 (small) */
    const imgSize = isLarge ? "h-[21px] w-[21px]" : "h-[18px] w-[18px]";

    /* Figma specs: badge 12×12 with cornerRadius 24 */
    const badgeSizeClass = "h-3 w-3";

    return (
      <Comp
        ref={ref as any}
        className={cn(atlChipVariants({ chipType: resolvedType, chipStyle, size, state: resolvedState, className }))}
        disabled={clickable ? (disabled || resolvedState === "disabled") : undefined}
        type={clickable ? "button" : undefined}
        {...(props as any)}
      >
        {showImage && imageUrl && (
          <img
            src={imageUrl}
            alt=""
            className={cn("rounded-full object-cover shrink-0", imgSize)}
          />
        )}
        {LeftIcon && <LeftIcon />}
        <span>{label}</span>
        {RightIcon && <RightIcon />}
        {showBadge && badgeContent !== undefined && (
          <span
            className={cn(
              "inline-flex items-center justify-center rounded-full shrink-0 text-[8px] font-bold leading-none",
              badgeSizeClass,
              /* Badge inherits chip foreground as bg, chip bg as text */
              resolvedType === "disabled"
                ? "bg-disabled-foreground text-disabled"
                : chipStyle === "outline"
                  ? "bg-current text-surface"
                  : "bg-current/20"
            )}
          >
            {badgeContent}
          </span>
        )}
      </Comp>
    );
  }
);
AtlChip.displayName = "AtlChip";

export { AtlChip, atlChipVariants };
