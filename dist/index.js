import {
  tailwind_preset_default
} from "./chunk-JCCPW4RN.js";

// src/components/AtlButton.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/AtlButton.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var atlButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      typeButton: {
        primary: "",
        secondary: "",
        tretiary: "",
        critical: "",
        disabled: "opacity-100 cursor-not-allowed",
        standard: ""
      },
      size: {
        large: "h-11 px-4 py-2 text-base leading-7 [&_svg]:size-6",
        small: "h-9 px-3 py-1.5 text-sm leading-6 [&_svg]:size-5"
      },
      shape: {
        "square-radius": "rounded-[8px]",
        "full-radius": "rounded-full"
      },
      style: {
        filled: "",
        outline: "bg-transparent border",
        text: "bg-transparent"
      }
    },
    compoundVariants: [
      // Primary filled
      { typeButton: "primary", style: "filled", className: "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover active:bg-brand-primary-press" },
      // Primary outline
      { typeButton: "primary", style: "outline", className: "border-brand-primary text-brand-primary hover:bg-brand-primary/10 active:bg-brand-primary/20" },
      // Primary text
      { typeButton: "primary", style: "text", className: "text-brand-primary hover:bg-brand-primary/10 active:bg-brand-primary/20" },
      // Secondary filled
      { typeButton: "secondary", style: "filled", className: "bg-brand-secondary text-brand-secondary-foreground hover:bg-brand-secondary-hover active:bg-brand-secondary-press" },
      // Secondary outline
      { typeButton: "secondary", style: "outline", className: "border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10 active:bg-brand-secondary/20" },
      // Secondary text
      { typeButton: "secondary", style: "text", className: "text-brand-secondary hover:bg-brand-secondary/10 active:bg-brand-secondary/20" },
      // Tretiary filled
      { typeButton: "tretiary", style: "filled", className: "bg-brand-tertiary text-brand-tertiary-foreground hover:bg-brand-tertiary-hover active:bg-brand-tertiary-press" },
      // Tretiary outline
      { typeButton: "tretiary", style: "outline", className: "border-brand-tertiary text-brand-tertiary hover:bg-brand-tertiary/10 active:bg-brand-tertiary/20" },
      // Tretiary text
      { typeButton: "tretiary", style: "text", className: "text-brand-tertiary hover:bg-brand-tertiary/10 active:bg-brand-tertiary/20" },
      // Critical filled
      { typeButton: "critical", style: "filled", className: "bg-critical text-critical-foreground hover:bg-critical-hover active:bg-critical-press" },
      // Critical outline
      { typeButton: "critical", style: "outline", className: "border-critical text-critical hover:bg-critical/10 active:bg-critical/20" },
      // Critical text
      { typeButton: "critical", style: "text", className: "text-critical hover:bg-critical/10 active:bg-critical/20" },
      // Disabled filled
      { typeButton: "disabled", style: "filled", className: "bg-disabled text-disabled-foreground" },
      // Disabled outline
      { typeButton: "disabled", style: "outline", className: "border-disabled text-disabled" },
      // Disabled text
      { typeButton: "disabled", style: "text", className: "text-disabled" },
      // Standard filled
      { typeButton: "standard", style: "filled", className: "bg-surface-variant text-on-surface hover:bg-surface-variant/80 active:bg-surface-variant/60" },
      // Standard outline
      { typeButton: "standard", style: "outline", className: "border-on-surface-variant text-on-surface hover:bg-on-surface/5 active:bg-on-surface/10" },
      // Standard text
      { typeButton: "standard", style: "text", className: "text-on-surface hover:bg-on-surface/5 active:bg-on-surface/10" }
    ],
    defaultVariants: {
      typeButton: "primary",
      size: "large",
      shape: "square-radius",
      style: "filled"
    }
  }
);
var AtlButton = React.forwardRef(
  ({
    className,
    typeButton,
    size,
    shape,
    style,
    asChild = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    showText = true,
    children,
    disabled,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const resolvedType = disabled ? "disabled" : typeButton;
    return /* @__PURE__ */ jsxs(
      Comp,
      {
        className: cn(atlButtonVariants({ typeButton: resolvedType, size, shape, style, className })),
        ref,
        disabled: disabled || resolvedType === "disabled",
        ...props,
        children: [
          LeftIcon && /* @__PURE__ */ jsx(LeftIcon, {}),
          showText && children,
          RightIcon && /* @__PURE__ */ jsx(RightIcon, {})
        ]
      }
    );
  }
);
AtlButton.displayName = "AtlButton";

// src/components/AtlIconButton.tsx
import * as React2 from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var atlIconButtonVariants = cva2(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "",
        standard: ""
      },
      shape: {
        none: "rounded-none",
        radius: "rounded-sm",
        circle: "rounded-full"
      },
      state: {
        enabled: "",
        hovered: "",
        disabled: "opacity-50 cursor-not-allowed",
        pressed: ""
      },
      size: {
        large: "h-11 w-11 [&_svg]:size-7",
        small: "h-9 w-9 [&_svg]:size-5"
      }
    },
    compoundVariants: [
      // Primary with background (radius, circle)
      { variant: "primary", state: "enabled", className: "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover active:bg-brand-primary-press" },
      { variant: "primary", state: "hovered", className: "bg-brand-primary-hover text-brand-primary-foreground" },
      { variant: "primary", state: "pressed", className: "bg-brand-primary-press text-brand-primary-foreground" },
      { variant: "primary", state: "disabled", className: "bg-disabled text-disabled-foreground" },
      // Primary shape=none (no bg, icon color changes)
      { variant: "primary", shape: "none", state: "enabled", className: "bg-transparent hover:bg-transparent active:bg-transparent text-brand-primary hover:text-brand-primary-hover active:text-brand-primary-press" },
      { variant: "primary", shape: "none", state: "hovered", className: "bg-transparent text-brand-primary-hover" },
      { variant: "primary", shape: "none", state: "pressed", className: "bg-transparent text-brand-primary-press" },
      { variant: "primary", shape: "none", state: "disabled", className: "bg-transparent text-disabled" },
      // Standard with background (radius, circle)
      { variant: "standard", state: "enabled", className: "bg-surface text-on-surface hover:bg-surface-primary active:bg-surface-primary-variant" },
      { variant: "standard", state: "hovered", className: "bg-surface-primary text-on-surface" },
      { variant: "standard", state: "pressed", className: "bg-surface-primary-variant text-on-surface" },
      { variant: "standard", state: "disabled", className: "bg-transparent text-disabled" },
      // Standard shape=none (no bg, icon color changes)
      { variant: "standard", shape: "none", state: "enabled", className: "bg-transparent hover:bg-transparent active:bg-transparent text-on-surface hover:text-on-surface-variant active:text-on-surface-primary" },
      { variant: "standard", shape: "none", state: "hovered", className: "bg-transparent text-on-surface-variant" },
      { variant: "standard", shape: "none", state: "pressed", className: "bg-transparent text-on-surface-primary" },
      { variant: "standard", shape: "none", state: "disabled", className: "bg-transparent text-disabled" }
    ],
    defaultVariants: {
      variant: "primary",
      shape: "radius",
      state: "enabled",
      size: "large"
    }
  }
);
var AtlIconButton = React2.forwardRef(
  ({ className, variant, shape, state, size, icon: Icon, disabled, htmlType = "button", ...props }, ref) => {
    const resolvedState = disabled ? "disabled" : state;
    return /* @__PURE__ */ jsx2(
      "button",
      {
        type: htmlType,
        className: cn(atlIconButtonVariants({ variant, shape, state: resolvedState, size, className })),
        ref,
        disabled: disabled || resolvedState === "disabled",
        ...props,
        children: /* @__PURE__ */ jsx2(Icon, {})
      }
    );
  }
);
AtlIconButton.displayName = "AtlIconButton";

// src/components/AtlBadge.tsx
import * as React3 from "react";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var atlBadgeVariants = cva3(
  "inline-flex items-center justify-center rounded-full font-sans font-medium",
  {
    variants: {
      type: {
        standard: "bg-brand-primary-foreground text-brand-primary",
        processing: "bg-brand-primary text-brand-primary-foreground",
        success: "bg-success text-success-foreground",
        caution: "bg-alert text-alert-foreground",
        alert: "bg-critical text-critical-foreground"
      },
      size: {
        small: "h-2 w-2",
        medium: "h-5 min-w-5 px-1.5 text-xs"
      }
    },
    defaultVariants: {
      type: "standard",
      size: "medium"
    }
  }
);
var AtlBadge = React3.forwardRef(
  ({ className, type, size, badgeContent, showText = true, ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
      "span",
      {
        className: cn(atlBadgeVariants({ type, size, className })),
        ref,
        ...props,
        children: size === "medium" && showText && (badgeContent ?? "")
      }
    );
  }
);
AtlBadge.displayName = "AtlBadge";

// src/components/AtlCheckbox.tsx
import * as React4 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import Check from "@mui/icons-material/Check";
import Remove from "@mui/icons-material/Remove";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var atlCheckboxVariants = cva4(
  "peer shrink-0 border-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      size: {
        small: "h-3 w-3 rounded-[2px]",
        medium: "h-4 w-4 rounded-[3px]",
        large: "h-5 w-5 rounded-[4px]"
      },
      stateStyle: {
        enabled: "border-on-surface-variant data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary data-[state=indeterminate]:bg-brand-primary data-[state=indeterminate]:border-brand-primary",
        hovered: "border-brand-primary bg-brand-primary/10 data-[state=checked]:bg-brand-primary-hover data-[state=checked]:border-brand-primary-hover data-[state=indeterminate]:bg-brand-primary-hover data-[state=indeterminate]:border-brand-primary-hover",
        error: "border-critical data-[state=checked]:bg-critical data-[state=checked]:border-critical data-[state=indeterminate]:bg-critical data-[state=indeterminate]:border-critical",
        disabled: "border-disabled cursor-not-allowed data-[state=checked]:bg-disabled data-[state=checked]:border-disabled data-[state=indeterminate]:bg-disabled data-[state=indeterminate]:border-disabled"
      }
    },
    defaultVariants: {
      size: "medium",
      stateStyle: "enabled"
    }
  }
);
var iconSizeMap = { small: 8, medium: 10, large: 14 };
var AtlCheckbox = React4.forwardRef(({ className, size = "medium", stateStyle, disabled, ...props }, ref) => {
  const resolvedState = disabled ? "disabled" : stateStyle;
  const iconSize = iconSizeMap[size ?? "medium"];
  return /* @__PURE__ */ jsx4(
    CheckboxPrimitive.Root,
    {
      ref,
      className: cn(atlCheckboxVariants({ size, stateStyle: resolvedState, className })),
      disabled: disabled || resolvedState === "disabled",
      ...props,
      children: /* @__PURE__ */ jsx4(CheckboxPrimitive.Indicator, { className: "flex items-center justify-center text-surface", children: props.checked === "indeterminate" ? /* @__PURE__ */ jsx4(Remove, { style: { width: iconSize, height: iconSize } }) : /* @__PURE__ */ jsx4(Check, { style: { width: iconSize, height: iconSize } }) })
    }
  );
});
AtlCheckbox.displayName = "AtlCheckbox";

// src/components/AtlBreadcrumb.tsx
import * as React5 from "react";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var AtlBreadcrumb = React5.forwardRef(
  ({ className, items, showBack = false, onBack, maxVisible, ...props }, ref) => {
    const shouldTruncate = maxVisible && items.length > maxVisible;
    const visibleItems = shouldTruncate ? [...items.slice(0, 1), { label: "..." }, ...items.slice(items.length - (maxVisible - 2))] : items;
    return /* @__PURE__ */ jsxs2(
      "nav",
      {
        ref,
        "aria-label": "Breadcrumb",
        className: cn("flex flex-col gap-0", className),
        ...props,
        children: [
          showBack && /* @__PURE__ */ jsxs2(
            "button",
            {
              onClick: onBack,
              className: "inline-flex items-center gap-1 text-brand-primary text-sm font-normal py-2 hover:underline",
              children: [
                /* @__PURE__ */ jsx5(ArrowBack, { className: "!h-4 !w-4" }),
                /* @__PURE__ */ jsx5("span", { children: "Voltar" })
              ]
            }
          ),
          /* @__PURE__ */ jsx5("div", { className: "border-t border-border" }),
          /* @__PURE__ */ jsx5("ol", { className: "flex items-center gap-1 py-1", children: visibleItems.map((item, index) => {
            const isLast = index === visibleItems.length - 1;
            const isFirst = index === 0;
            return /* @__PURE__ */ jsxs2("li", { className: "flex items-center gap-1", children: [
              index > 0 && /* @__PURE__ */ jsx5(ChevronRight, { className: "!h-4 !w-4 text-on-surface-variant shrink-0" }),
              item.label === "..." ? /* @__PURE__ */ jsx5("span", { className: "text-xs text-on-surface-variant", children: "..." }) : /* @__PURE__ */ jsxs2(
                "a",
                {
                  href: item.href,
                  className: cn(
                    "inline-flex items-center gap-1 text-xs leading-[21px] font-normal",
                    isFirst ? "text-brand-primary" : isLast ? "text-brand-secondary font-medium" : "text-brand-secondary"
                  ),
                  children: [
                    item.icon && /* @__PURE__ */ jsx5("span", { className: "shrink-0", children: item.icon }),
                    /* @__PURE__ */ jsx5("span", { children: item.label })
                  ]
                }
              )
            ] }, index);
          }) })
        ]
      }
    );
  }
);
AtlBreadcrumb.displayName = "AtlBreadcrumb";

// src/components/AtlCard.tsx
import * as React6 from "react";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var AtlCard = React6.forwardRef(
  ({ className, state = "enabled", ...props }, ref) => /* @__PURE__ */ jsx6(
    "div",
    {
      ref,
      className: cn(
        "rounded-lg border border-border bg-surface shadow-neutral-sm overflow-hidden transition-shadow",
        state === "hovered" && "shadow-neutral-md",
        state === "pressed-end" && "shadow-neutral-xs",
        className
      ),
      ...props
    }
  )
);
AtlCard.displayName = "AtlCard";
var AtlCardHeader = React6.forwardRef(
  ({ className, headline, subheadline, tertiaryText, action, children, ...props }, ref) => /* @__PURE__ */ jsxs3("div", { ref, className: cn("px-4 pt-4", className), ...props, children: [
    (tertiaryText || action) && /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between mb-1", children: [
      tertiaryText && /* @__PURE__ */ jsx6("span", { className: "text-xs text-on-surface-variant", children: tertiaryText }),
      action
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-0.5 px-4 pt-0.5 pb-4", children: [
      headline && /* @__PURE__ */ jsx6("h3", { className: "text-base font-semibold text-on-surface leading-7", children: headline }),
      subheadline && /* @__PURE__ */ jsx6("p", { className: "text-sm text-on-surface-variant leading-6", children: subheadline })
    ] }),
    children
  ] })
);
AtlCardHeader.displayName = "AtlCardHeader";
var AtlCardContent = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx6("div", { ref, className: cn("p-4", className), ...props }));
AtlCardContent.displayName = "AtlCardContent";
var AtlCardFullContent = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx6("div", { ref, className: cn("w-full", className), ...props }));
AtlCardFullContent.displayName = "AtlCardFullContent";
var AtlCardFooter = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  "div",
  {
    ref,
    className: cn("flex items-center gap-2 p-4", className),
    ...props
  }
));
AtlCardFooter.displayName = "AtlCardFooter";

// src/components/AtlAutoComplete.tsx
import * as React8 from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Close from "@mui/icons-material/Close";

// src/components/AtlTooltip.tsx
import * as React7 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import Info from "@mui/icons-material/Info";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var AtlTooltip = ({ text, className }) => {
  const [open, setOpen] = React7.useState(false);
  return /* @__PURE__ */ jsx7(TooltipPrimitive.Provider, { delayDuration: 200, children: /* @__PURE__ */ jsxs4(TooltipPrimitive.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx7(TooltipPrimitive.Trigger, { asChild: true, children: /* @__PURE__ */ jsx7("button", { type: "button", className: "inline-flex", children: open ? /* @__PURE__ */ jsx7(Info, { className: "!h-4 !w-4 text-on-surface-primary" }) : /* @__PURE__ */ jsx7(InfoOutlined, { className: "!h-4 !w-4 text-on-surface-primary" }) }) }),
    /* @__PURE__ */ jsx7(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs4(
      TooltipPrimitive.Content,
      {
        sideOffset: 4,
        className: cn(
          "z-50 bg-surface-primary text-on-surface-primary text-xs leading-[21px] font-normal px-4 py-4 rounded-lg shadow-neutral-md max-w-[200px]",
          className
        ),
        children: [
          text,
          /* @__PURE__ */ jsx7(TooltipPrimitive.Arrow, { className: "fill-surface-primary" })
        ]
      }
    ) })
  ] }) });
};
AtlTooltip.displayName = "AtlTooltip";

// src/components/AtlAutoComplete.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var AtlAutoComplete = React8.forwardRef(
  ({
    label,
    helpText,
    placeholder = "Selecione ou digite",
    isRequired = false,
    showOptional = false,
    showTooltip = false,
    tooltipText,
    options = [],
    value = [],
    onChange,
    onInputChange,
    state = "enable",
    size = "large",
    className
  }, ref) => {
    const [inputText, setInputText] = React8.useState("");
    const [isOpen, setIsOpen] = React8.useState(false);
    const isDisabled = state === "disabled";
    const filteredOptions = options.filter(
      (opt) => opt.label.toLowerCase().includes(inputText.toLowerCase()) && !value.includes(opt.value)
    );
    const handleSelect = (optValue) => {
      onChange?.([...value, optValue]);
      setInputText("");
      setIsOpen(false);
    };
    const handleRemove = (optValue) => {
      onChange?.(value.filter((v) => v !== optValue));
    };
    const handleInputChange = (e) => {
      setInputText(e.target.value);
      onInputChange?.(e.target.value);
      setIsOpen(true);
    };
    const inputHeight = size === "large" ? "h-11" : "h-9";
    const fontSize = size === "large" ? "text-base" : "text-sm";
    const borderColor = state === "error" ? "border-critical" : state === "focused" ? "border-brand-primary ring-2 ring-ring" : state === "hovered" ? "border-brand-primary" : "border-input";
    return /* @__PURE__ */ jsxs5("div", { ref, className: cn("flex flex-col gap-1", className), children: [
      label && /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx8("label", { className: "text-xs text-on-surface-primary font-medium leading-[21px]", children: label }),
        isRequired && /* @__PURE__ */ jsx8("span", { className: "text-critical text-xs", children: "*" }),
        showOptional && /* @__PURE__ */ jsx8("span", { className: "text-on-surface-variant text-xs", children: "(Opcional)" }),
        showTooltip && tooltipText && /* @__PURE__ */ jsx8(AtlTooltip, { text: tooltipText })
      ] }),
      helpText && /* @__PURE__ */ jsx8("span", { className: "text-xs text-on-surface-primary leading-[21px]", children: helpText }),
      /* @__PURE__ */ jsxs5("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs5(
          "div",
          {
            className: cn(
              "flex items-center gap-2 rounded-sm bg-surface px-2",
              borderColor,
              "border",
              inputHeight,
              isDisabled && "opacity-50 cursor-not-allowed"
            ),
            children: [
              value.map((v) => {
                const opt = options.find((o) => o.value === v);
                return /* @__PURE__ */ jsxs5(
                  "span",
                  {
                    className: "inline-flex items-center gap-1 bg-surface-primary text-on-surface-primary text-xs rounded-sm px-2 py-0.5",
                    children: [
                      opt?.label ?? v,
                      !isDisabled && /* @__PURE__ */ jsx8(
                        "button",
                        {
                          onClick: () => handleRemove(v),
                          className: "hover:text-critical",
                          children: /* @__PURE__ */ jsx8(Close, { className: "!h-3 !w-3" })
                        }
                      )
                    ]
                  },
                  v
                );
              }),
              /* @__PURE__ */ jsx8(
                "input",
                {
                  type: "text",
                  value: inputText,
                  onChange: handleInputChange,
                  onFocus: () => setIsOpen(true),
                  onBlur: () => setTimeout(() => setIsOpen(false), 200),
                  placeholder: value.length === 0 ? placeholder : "",
                  disabled: isDisabled,
                  className: cn(
                    "flex-1 bg-transparent outline-none text-on-surface-primary placeholder:text-on-surface-variant",
                    fontSize
                  )
                }
              ),
              /* @__PURE__ */ jsx8(KeyboardArrowDown, { className: "!h-4 !w-4 text-on-surface-primary shrink-0" })
            ]
          }
        ),
        isOpen && filteredOptions.length > 0 && /* @__PURE__ */ jsx8("div", { className: "absolute top-full left-0 right-0 mt-1 bg-surface border border-border rounded-sm shadow-neutral-md z-20 max-h-48 overflow-y-auto", children: filteredOptions.map((opt) => /* @__PURE__ */ jsx8(
          "button",
          {
            onMouseDown: (e) => e.preventDefault(),
            onClick: () => handleSelect(opt.value),
            className: "w-full text-left px-3 py-2 text-sm text-on-surface hover:bg-surface-variant transition-colors",
            children: opt.label
          },
          opt.value
        )) })
      ] })
    ] });
  }
);
AtlAutoComplete.displayName = "AtlAutoComplete";

// src/components/AtlDatePicker.tsx
import * as React9 from "react";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight2 from "@mui/icons-material/ChevronRight";
import { Fragment, jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var DAYS_PT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xE1b"];
var MONTHS_PT = [
  "Janeiro",
  "Fevereiro",
  "Mar\xE7o",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
var AtlDatePicker = React9.forwardRef(
  ({ value, onChange, mode = "single", rangeStart, rangeEnd, onRangeChange, className }, ref) => {
    const today = /* @__PURE__ */ new Date();
    const [viewDate, setViewDate] = React9.useState(value ?? rangeStart ?? today);
    const [view, setView] = React9.useState("days");
    const [rStart, setRStart] = React9.useState(rangeStart);
    const [rEnd, setREnd] = React9.useState(rangeEnd);
    const [hovered, setHovered] = React9.useState(void 0);
    React9.useEffect(() => {
      setRStart(rangeStart);
    }, [rangeStart]);
    React9.useEffect(() => {
      setREnd(rangeEnd);
    }, [rangeEnd]);
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
    const nextMonth = () => setViewDate(new Date(year, month + 1, 1));
    const sameDay = (a, b) => a && b && a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    const selectDay = (day) => {
      const selected = new Date(year, month, day);
      if (mode === "single") {
        onChange?.(selected);
      } else {
        if (!rStart || rStart && rEnd) {
          setRStart(selected);
          setREnd(void 0);
          onRangeChange?.(selected, void 0);
        } else {
          if (selected < rStart) {
            setREnd(rStart);
            setRStart(selected);
            onRangeChange?.(selected, rStart);
          } else {
            setREnd(selected);
            onRangeChange?.(rStart, selected);
          }
        }
      }
    };
    const selectMonth = (m) => {
      setViewDate(new Date(year, m, 1));
      setView("days");
    };
    const selectYear = (y) => {
      setViewDate(new Date(y, month, 1));
      setView("months");
    };
    const decadeStart = Math.floor(year / 10) * 10;
    const centuryStart = Math.floor(year / 100) * 100;
    const selectDecade = (startYear) => {
      setViewDate(new Date(startYear, month, 1));
      setView("years");
    };
    const isSelected = (day) => {
      const d = new Date(year, month, day);
      if (mode === "single") return sameDay(value, d);
      return sameDay(rStart, d) || sameDay(rEnd, d);
    };
    const isInRange = (day) => {
      if (mode !== "range") return false;
      const d = new Date(year, month, day);
      const end = rEnd ?? hovered;
      if (!rStart || !end) return false;
      const lo = rStart < end ? rStart : end;
      const hi = rStart < end ? end : rStart;
      return d > lo && d < hi;
    };
    const isToday = (day) => today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    return /* @__PURE__ */ jsxs6(
      "div",
      {
        ref,
        className: cn(
          "w-[325px] bg-surface border border-border rounded-sm shadow-neutral-md p-3",
          className
        ),
        children: [
          /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsx9(
              AtlIconButton,
              {
                icon: ChevronLeft,
                variant: "standard",
                shape: "none",
                size: "small",
                onClick: () => {
                  if (view === "days") prevMonth();
                  else if (view === "months") setViewDate(new Date(year - 1, month, 1));
                  else if (view === "years") setViewDate(new Date(decadeStart - 10, month, 1));
                  else setViewDate(new Date(centuryStart - 100, month, 1));
                }
              }
            ),
            /* @__PURE__ */ jsxs6("div", { className: "flex gap-1", children: [
              view === "days" && /* @__PURE__ */ jsxs6(Fragment, { children: [
                /* @__PURE__ */ jsx9(
                  "button",
                  {
                    onClick: () => setView("months"),
                    className: "text-sm font-medium text-on-surface-primary hover:text-brand-primary",
                    children: MONTHS_PT[month]
                  }
                ),
                /* @__PURE__ */ jsx9(
                  "button",
                  {
                    onClick: () => setView("years"),
                    className: "text-sm text-on-surface hover:text-brand-primary",
                    children: year
                  }
                )
              ] }),
              view === "months" && /* @__PURE__ */ jsx9(
                "button",
                {
                  onClick: () => setView("years"),
                  className: "text-sm font-medium text-on-surface-primary hover:text-brand-primary",
                  children: year
                }
              ),
              view === "years" && /* @__PURE__ */ jsxs6(
                "button",
                {
                  onClick: () => setView("decades"),
                  className: "text-sm font-medium text-on-surface-primary hover:text-brand-primary",
                  children: [
                    decadeStart,
                    " - ",
                    decadeStart + 9
                  ]
                }
              ),
              view === "decades" && /* @__PURE__ */ jsxs6("span", { className: "text-sm font-medium text-on-surface-primary", children: [
                centuryStart,
                " - ",
                centuryStart + 99
              ] })
            ] }),
            /* @__PURE__ */ jsx9(
              AtlIconButton,
              {
                icon: ChevronRight2,
                variant: "standard",
                shape: "none",
                size: "small",
                onClick: () => {
                  if (view === "days") nextMonth();
                  else if (view === "months") setViewDate(new Date(year + 1, month, 1));
                  else if (view === "years") setViewDate(new Date(decadeStart + 10, month, 1));
                  else setViewDate(new Date(centuryStart + 100, month, 1));
                }
              }
            )
          ] }),
          view === "days" && /* @__PURE__ */ jsxs6(Fragment, { children: [
            /* @__PURE__ */ jsx9("div", { className: "grid grid-cols-7 mb-1", children: DAYS_PT.map((d, i) => /* @__PURE__ */ jsx9(
              "span",
              {
                className: cn(
                  "text-center text-xs text-on-surface-variant py-1",
                  i === 0 && "text-on-surface-error"
                ),
                children: d
              },
              d
            )) }),
            /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-7", children: [
              Array.from({ length: firstDay }).map((_, i) => /* @__PURE__ */ jsx9("span", {}, `empty-${i}`)),
              Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const selected = isSelected(day);
                const inRange = isInRange(day);
                return /* @__PURE__ */ jsx9(
                  "button",
                  {
                    onClick: () => selectDay(day),
                    onMouseEnter: () => mode === "range" && rStart && !rEnd && setHovered(new Date(year, month, day)),
                    onMouseLeave: () => mode === "range" && setHovered(void 0),
                    className: cn(
                      "h-8 text-sm text-center rounded-sm transition-colors text-on-surface hover:bg-surface-variant",
                      selected && "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
                      inRange && "bg-surface-primary",
                      isToday(day) && !selected && "font-bold text-brand-primary"
                    ),
                    children: day
                  },
                  day
                );
              })
            ] })
          ] }),
          view === "months" && /* @__PURE__ */ jsx9("div", { className: "grid grid-cols-3 gap-2", children: MONTHS_PT.map((m, i) => /* @__PURE__ */ jsx9(
            "button",
            {
              onClick: () => selectMonth(i),
              className: cn(
                "py-2 text-sm rounded-sm text-on-surface hover:bg-surface-variant transition-colors",
                month === i && "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover"
              ),
              children: m.slice(0, 3)
            },
            m
          )) }),
          view === "years" && /* @__PURE__ */ jsx9("div", { className: "grid grid-cols-3 gap-2", children: Array.from({ length: 12 }).map((_, i) => {
            const y = decadeStart - 1 + i;
            return /* @__PURE__ */ jsx9(
              "button",
              {
                onClick: () => selectYear(y),
                className: cn(
                  "py-2 text-sm rounded-sm text-on-surface hover:bg-surface-variant transition-colors",
                  year === y && "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
                  (i === 0 || i === 11) && "text-on-surface-variant"
                ),
                children: y
              },
              y
            );
          }) }),
          view === "decades" && /* @__PURE__ */ jsx9("div", { className: "grid grid-cols-3 gap-2", children: Array.from({ length: 12 }).map((_, i) => {
            const dStart = centuryStart - 10 + i * 10;
            const isCurrentDecade = year >= dStart && year < dStart + 10;
            return /* @__PURE__ */ jsxs6(
              "button",
              {
                onClick: () => selectDecade(dStart),
                className: cn(
                  "py-2 text-xs rounded-sm text-on-surface hover:bg-surface-variant transition-colors",
                  isCurrentDecade && "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
                  (i === 0 || i === 11) && "text-on-surface-variant"
                ),
                children: [
                  dStart,
                  "-",
                  dStart + 9
                ]
              },
              dStart
            );
          }) })
        ]
      }
    );
  }
);
AtlDatePicker.displayName = "AtlDatePicker";

// src/components/AtlCircularProgress.tsx
import * as React10 from "react";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
var AtlCircularProgress = React10.forwardRef(
  ({ className, size = "large", showText = true, text = "Carregando...", ...props }, ref) => {
    const dimension = size === "large" ? 32 : 20;
    const strokeWidth = size === "large" ? 3 : 2;
    const radius = (dimension - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    return /* @__PURE__ */ jsxs7(
      "div",
      {
        ref,
        className: cn("inline-flex flex-col items-center gap-2", className),
        role: "status",
        "aria-label": text,
        ...props,
        children: [
          /* @__PURE__ */ jsxs7(
            "svg",
            {
              width: dimension,
              height: dimension,
              viewBox: `0 0 ${dimension} ${dimension}`,
              className: "animate-spin",
              children: [
                /* @__PURE__ */ jsx10(
                  "circle",
                  {
                    cx: dimension / 2,
                    cy: dimension / 2,
                    r: radius,
                    fill: "none",
                    stroke: "hsl(var(--brand-primary) / 0.2)",
                    strokeWidth
                  }
                ),
                /* @__PURE__ */ jsx10(
                  "circle",
                  {
                    cx: dimension / 2,
                    cy: dimension / 2,
                    r: radius,
                    fill: "none",
                    stroke: "hsl(var(--brand-primary))",
                    strokeWidth,
                    strokeLinecap: "round",
                    strokeDasharray: circumference,
                    strokeDashoffset: circumference * 0.75
                  }
                )
              ]
            }
          ),
          showText && /* @__PURE__ */ jsx10(
            "span",
            {
              className: cn(
                "font-sans text-brand-primary",
                size === "large" ? "text-xl leading-[35px]" : "text-sm leading-6"
              ),
              children: text
            }
          )
        ]
      }
    );
  }
);
AtlCircularProgress.displayName = "AtlCircularProgress";

// src/components/AtlLoadTimes.tsx
import * as React11 from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var AtlLoadTimes = React11.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx11(
      "div",
      {
        ref,
        className: cn("inline-flex items-end gap-1", className),
        role: "status",
        "aria-label": "Carregando",
        ...props,
        children: [0, 1, 2].map((i) => /* @__PURE__ */ jsx11(
          "span",
          {
            className: "block w-[5px] h-1 rounded-full bg-brand-primary animate-bounce",
            style: { animationDelay: `${i * 0.15}s`, animationDuration: "0.6s" }
          },
          i
        ))
      }
    );
  }
);
AtlLoadTimes.displayName = "AtlLoadTimes";

// src/components/AtlRadioButton.tsx
import * as React12 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx12 } from "react/jsx-runtime";
var atlRadioVariants = cva5(
  "peer shrink-0 rounded-full border-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      size: {
        small: "h-3 w-3",
        medium: "h-4 w-4",
        large: "h-5 w-5"
      },
      stateStyle: {
        enabled: "border-on-surface-variant data-[state=checked]:border-brand-primary",
        hovered: "border-brand-primary bg-brand-primary/10",
        error: "border-critical data-[state=checked]:border-critical",
        disabled: "border-disabled cursor-not-allowed"
      }
    },
    defaultVariants: {
      size: "medium",
      stateStyle: "enabled"
    }
  }
);
var dotSizeMap = { small: 5, medium: 6, large: 8 };
var AtlRadioButton = React12.forwardRef(({ className, size = "medium", stateStyle, disabled, ...props }, ref) => {
  const resolvedState = disabled ? "disabled" : stateStyle;
  const dotSize = dotSizeMap[size ?? "medium"];
  return /* @__PURE__ */ jsx12(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(atlRadioVariants({ size, stateStyle: resolvedState, className })),
      disabled: disabled || resolvedState === "disabled",
      ...props,
      children: /* @__PURE__ */ jsx12(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx12(
        "span",
        {
          className: cn(
            "rounded-full",
            resolvedState === "error" ? "bg-critical" : "bg-brand-primary",
            resolvedState === "disabled" && "bg-disabled"
          ),
          style: { width: dotSize, height: dotSize }
        }
      ) })
    }
  );
});
AtlRadioButton.displayName = "AtlRadioButton";
var AtlRadioGroup = RadioGroupPrimitive.Root;

// src/components/AtlSelect.tsx
import * as React13 from "react";
import KeyboardArrowDown2 from "@mui/icons-material/KeyboardArrowDown";
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
var AtlSelect = React13.forwardRef(
  ({
    label,
    helpText,
    placeholder = "Placeholder",
    isRequired = false,
    showOptional = false,
    showTooltip = false,
    tooltipText,
    options = [],
    value,
    onChange,
    state = "enable",
    size = "large",
    className
  }, ref) => {
    const [isOpen, setIsOpen] = React13.useState(false);
    const isDisabled = state === "disabled";
    const selected = options.find((o) => o.value === value);
    const inputHeight = size === "large" ? "h-11" : "h-9";
    const fontSize = size === "large" ? "text-base leading-7" : "text-sm leading-6";
    const borderColor = state === "error" ? "border-critical" : state === "focused" ? "border-brand-primary ring-2 ring-ring" : state === "hovered" ? "border-brand-primary" : "border-input";
    return /* @__PURE__ */ jsxs8("div", { ref, className: cn("flex flex-col gap-1", className), children: [
      label && /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx13("label", { className: "text-xs text-on-surface-primary font-medium leading-[21px]", children: label }),
        isRequired && /* @__PURE__ */ jsx13("span", { className: "text-critical text-xs", children: "*" }),
        showOptional && /* @__PURE__ */ jsx13("span", { className: "text-on-surface-variant text-xs", children: "(Opcional)" }),
        showTooltip && tooltipText && /* @__PURE__ */ jsx13(AtlTooltip, { text: tooltipText })
      ] }),
      helpText && /* @__PURE__ */ jsx13("span", { className: "text-xs text-on-surface-primary leading-[21px]", children: helpText }),
      /* @__PURE__ */ jsxs8("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs8(
          "button",
          {
            type: "button",
            onClick: () => !isDisabled && setIsOpen(!isOpen),
            onBlur: () => setTimeout(() => setIsOpen(false), 200),
            disabled: isDisabled,
            className: cn(
              "flex items-center justify-between gap-2 w-full rounded-sm bg-surface px-2 border",
              borderColor,
              inputHeight,
              fontSize,
              isDisabled && "opacity-50 cursor-not-allowed"
            ),
            children: [
              /* @__PURE__ */ jsx13(
                "span",
                {
                  className: cn(
                    selected ? "text-on-surface-primary" : "text-on-surface-variant"
                  ),
                  children: selected ? selected.label : placeholder
                }
              ),
              /* @__PURE__ */ jsx13(KeyboardArrowDown2, { className: "!h-4 !w-4 text-on-surface-primary shrink-0" })
            ]
          }
        ),
        isOpen && /* @__PURE__ */ jsx13("div", { className: "absolute top-full left-0 right-0 mt-1 bg-surface border border-border rounded-sm shadow-neutral-md z-20 max-h-60 overflow-y-auto", children: options.map((opt) => /* @__PURE__ */ jsxs8(
          "button",
          {
            type: "button",
            disabled: opt.disabled,
            onMouseDown: (e) => e.preventDefault(),
            onClick: () => {
              onChange?.(opt.value);
              setIsOpen(false);
            },
            className: cn(
              "flex items-center gap-2 w-full text-left px-4 py-4 text-base leading-7 text-on-surface transition-colors",
              opt.value === value && "bg-surface-primary text-on-surface-primary font-medium",
              opt.disabled && "opacity-50 cursor-not-allowed",
              !opt.disabled && "hover:bg-surface-variant"
            ),
            children: [
              opt.icon && /* @__PURE__ */ jsx13("span", { className: "shrink-0", children: opt.icon }),
              /* @__PURE__ */ jsx13("span", { children: opt.label })
            ]
          },
          opt.value
        )) })
      ] })
    ] });
  }
);
AtlSelect.displayName = "AtlSelect";

// src/components/AtlSelectItem.tsx
import * as React14 from "react";
import { cva as cva6 } from "class-variance-authority";
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
var atlSelectItemVariants = cva6(
  "flex items-center gap-2 w-full text-left px-4 transition-colors font-sans",
  {
    variants: {
      state: {
        enabled: "text-on-surface hover:bg-surface-variant cursor-pointer",
        hovered: "bg-surface-variant text-on-surface cursor-pointer",
        selected: "bg-surface-primary text-on-surface-primary font-medium cursor-pointer",
        disabled: "text-disabled cursor-not-allowed opacity-50"
      },
      size: {
        Large: "py-4 text-base leading-7",
        Small: "py-2.5 text-sm leading-6"
      }
    },
    defaultVariants: {
      state: "enabled",
      size: "Large"
    }
  }
);
var AtlSelectItem = React14.forwardRef(
  ({ className, state, size, icon, label, children, disabled, ...props }, ref) => {
    const resolvedState = disabled ? "disabled" : state;
    return /* @__PURE__ */ jsxs9(
      "button",
      {
        ref,
        type: "button",
        className: cn(atlSelectItemVariants({ state: resolvedState, size, className })),
        disabled: disabled || resolvedState === "disabled",
        ...props,
        children: [
          icon && /* @__PURE__ */ jsx14("span", { className: "shrink-0 w-4 h-4 flex items-center justify-center text-on-surface", children: icon }),
          /* @__PURE__ */ jsx14("span", { children: label ?? children })
        ]
      }
    );
  }
);
AtlSelectItem.displayName = "AtlSelectItem";

// src/components/AtlSelectList.tsx
import * as React15 from "react";
import { jsx as jsx15 } from "react/jsx-runtime";
var AtlSelectList = React15.forwardRef(
  ({ className, items, selectedValue, onSelect, size = "Large", ...props }, ref) => {
    return /* @__PURE__ */ jsx15(
      "div",
      {
        ref,
        className: cn(
          "bg-surface border border-border rounded-sm shadow-neutral-md overflow-hidden",
          className
        ),
        ...props,
        children: items.map((item) => /* @__PURE__ */ jsx15(
          AtlSelectItem,
          {
            label: item.label,
            icon: item.icon,
            size,
            state: item.disabled ? "disabled" : item.value === selectedValue ? "selected" : "enabled",
            disabled: item.disabled,
            onClick: () => !item.disabled && onSelect?.(item.value)
          },
          item.value
        ))
      }
    );
  }
);
AtlSelectList.displayName = "AtlSelectList";

// src/components/AtlSwitch.tsx
import * as React16 from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var AtlSwitch = React16.forwardRef(
  ({ className, checked = false, onChange, size = "large", state = "enabled", disabled, ...props }, ref) => {
    const isDisabled = disabled || state === "disabled";
    const trackW = size === "large" ? "w-12" : "w-9";
    const trackH = size === "large" ? "h-6" : "h-5";
    const thumbSize = size === "large" ? "h-5 w-5" : "h-4 w-4";
    const thumbTranslate = checked ? size === "large" ? "translate-x-6" : "translate-x-4" : "translate-x-0";
    return /* @__PURE__ */ jsx16(
      "button",
      {
        ref,
        type: "button",
        role: "switch",
        "aria-checked": checked,
        disabled: isDisabled,
        onClick: () => !isDisabled && onChange?.(!checked),
        className: cn(
          "inline-flex items-center rounded-full p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          trackW,
          trackH,
          checked ? "bg-brand-primary" : "bg-on-surface-variant",
          isDisabled && "opacity-50 cursor-not-allowed",
          state === "hovered" && !isDisabled && (checked ? "bg-brand-primary-hover" : "bg-on-surface-variant/80"),
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx16(
          "span",
          {
            className: cn(
              "block rounded-full bg-surface shadow-neutral-xs transition-transform",
              thumbSize,
              thumbTranslate
            )
          }
        )
      }
    );
  }
);
AtlSwitch.displayName = "AtlSwitch";

// src/components/AtlStepper.tsx
import * as React17 from "react";
import Check2 from "@mui/icons-material/Check";
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
var AtlStepper = React17.forwardRef(
  ({
    className,
    steps,
    currentStep,
    orientation = "horizontal",
    size = "large",
    showText = true,
    showHelpText = true,
    showLine = true,
    ...props
  }, ref) => {
    const isHorizontal = orientation === "horizontal";
    const circleSize = size === "large" ? "h-8 w-8 text-sm" : "h-6 w-6 text-xs";
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn(
          "flex",
          isHorizontal ? "flex-row items-start" : "flex-col items-start",
          className
        ),
        ...props,
        children: steps.map((step, index) => {
          const isConcluded = index < currentStep;
          const isCurrent = index === currentStep;
          const isDefault = index > currentStep;
          return /* @__PURE__ */ jsxs10(
            "div",
            {
              className: cn(
                "flex",
                isHorizontal ? "flex-col items-center flex-1" : "flex-row items-start"
              ),
              children: [
                /* @__PURE__ */ jsxs10(
                  "div",
                  {
                    className: cn(
                      "flex items-center",
                      isHorizontal ? "flex-row w-full" : "flex-col h-full"
                    ),
                    children: [
                      index > 0 && showLine && /* @__PURE__ */ jsx17(
                        "div",
                        {
                          className: cn(
                            isHorizontal ? "h-px flex-1" : "w-px flex-1 min-h-[16px]",
                            isConcluded || isCurrent ? "bg-brand-primary" : "bg-disabled"
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx17(
                        "div",
                        {
                          className: cn(
                            "shrink-0 rounded-full flex items-center justify-center font-bold transition-colors",
                            circleSize,
                            isConcluded && "bg-brand-primary text-brand-primary-foreground",
                            isCurrent && "bg-brand-primary text-brand-primary-foreground",
                            isDefault && "bg-surface-variant text-on-surface"
                          ),
                          children: isConcluded ? /* @__PURE__ */ jsx17(Check2, { className: size === "large" ? "!h-4 !w-4" : "!h-3 !w-3" }) : index + 1
                        }
                      ),
                      index < steps.length - 1 && showLine && /* @__PURE__ */ jsx17(
                        "div",
                        {
                          className: cn(
                            isHorizontal ? "h-px flex-1" : "w-px flex-1 min-h-[16px]",
                            isConcluded ? "bg-brand-primary" : "bg-disabled"
                          )
                        }
                      )
                    ]
                  }
                ),
                showText && /* @__PURE__ */ jsxs10(
                  "div",
                  {
                    className: cn(
                      "flex flex-col",
                      isHorizontal ? "items-center mt-1" : "items-start ml-2"
                    ),
                    children: [
                      /* @__PURE__ */ jsx17(
                        "span",
                        {
                          className: cn(
                            "font-bold text-on-surface",
                            size === "large" ? "text-sm leading-[24.5px]" : "text-xs leading-[21px]"
                          ),
                          children: step.label
                        }
                      ),
                      showHelpText && step.helpText && /* @__PURE__ */ jsx17(
                        "span",
                        {
                          className: cn(
                            "text-on-surface font-normal",
                            size === "large" ? "text-xs leading-[21px]" : "text-[10px] leading-4"
                          ),
                          children: step.helpText
                        }
                      )
                    ]
                  }
                )
              ]
            },
            index
          );
        })
      }
    );
  }
);
AtlStepper.displayName = "AtlStepper";

// src/components/AtlTabs.tsx
import * as React18 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
var AtlTabs = TabsPrimitive.Root;
var AtlTabsList = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex items-end border-b border-border w-full",
      className
    ),
    ...props
  }
));
AtlTabsList.displayName = "AtlTabsList";
var AtlTabTrigger = React18.forwardRef(({ className, icon: Icon, children, ...props }, ref) => /* @__PURE__ */ jsxs11(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "group inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors rounded-t-[8px] rounded-b-none",
      "text-on-surface border-b-2 border-transparent",
      "data-[state=active]:border-brand-primary data-[state=active]:text-brand-primary-foreground data-[state=active]:bg-brand-primary",
      "hover:text-brand-primary hover:bg-brand-primary/5 data-[state=active]:hover:bg-brand-primary data-[state=active]:hover:text-brand-primary-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      Icon && /* @__PURE__ */ jsx18(Icon, { className: "h-4 w-4" }),
      children
    ]
  }
));
AtlTabTrigger.displayName = "AtlTabTrigger";
var AtlTabContent = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
  TabsPrimitive.Content,
  {
    ref,
    className: cn("p-5 focus-visible:outline-none", className),
    ...props
  }
));
AtlTabContent.displayName = "AtlTabContent";

// src/components/AtlTextArea.tsx
import * as React19 from "react";
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
var AtlTextArea = React19.forwardRef(
  ({
    className,
    label,
    helpText,
    showOptional = false,
    showTooltip = false,
    tooltipText,
    isRequired = false,
    showCount = false,
    maxLength,
    state = "enabled",
    disabled,
    value,
    onChange,
    placeholder = "Placeholder",
    ...props
  }, ref) => {
    const isDisabled = disabled || state === "disabled";
    const charCount = typeof value === "string" ? value.length : 0;
    const borderColor = state === "error" ? "border-critical" : state === "focused" ? "border-brand-primary ring-2 ring-ring" : state === "hovered" ? "border-brand-primary" : "border-input";
    return /* @__PURE__ */ jsxs12("div", { className: cn("flex flex-col gap-1", className), children: [
      label && /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx19("label", { className: "text-xs text-on-surface-primary font-medium leading-[21px]", children: label }),
        isRequired && /* @__PURE__ */ jsx19("span", { className: "text-critical text-xs", children: "*" }),
        showOptional && /* @__PURE__ */ jsx19("span", { className: "text-on-surface-variant text-xs", children: "(Opcional)" }),
        showTooltip && tooltipText && /* @__PURE__ */ jsx19(AtlTooltip, { text: tooltipText })
      ] }),
      /* @__PURE__ */ jsx19(
        "textarea",
        {
          ref,
          value,
          onChange,
          placeholder,
          disabled: isDisabled,
          maxLength,
          className: cn(
            "w-full min-h-[88px] rounded-sm bg-surface border px-2 py-2 text-base leading-7 text-on-surface-primary placeholder:text-on-surface-variant resize-y transition-colors",
            "focus:outline-none",
            borderColor,
            isDisabled && "opacity-50 cursor-not-allowed bg-disabled-foreground"
          ),
          ...props
        }
      ),
      /* @__PURE__ */ jsxs12("div", { className: "flex items-center justify-between", children: [
        helpText ? /* @__PURE__ */ jsx19("span", { className: cn(
          "text-xs leading-[21px]",
          state === "error" ? "text-critical" : isDisabled ? "text-disabled" : "text-on-surface-primary"
        ), children: helpText }) : /* @__PURE__ */ jsx19("span", {}),
        showCount && /* @__PURE__ */ jsxs12("span", { className: cn(
          "text-xs leading-[21px] text-right",
          isDisabled ? "text-disabled" : "text-on-surface-variant"
        ), children: [
          charCount,
          maxLength ? `/${maxLength}` : ""
        ] })
      ] })
    ] });
  }
);
AtlTextArea.displayName = "AtlTextArea";

// src/components/AtlSkeleton.tsx
import * as React20 from "react";
import { cva as cva7 } from "class-variance-authority";
import { jsx as jsx20 } from "react/jsx-runtime";
var atlSkeletonVariants = cva7(
  "animate-pulse bg-bg-variant",
  {
    variants: {
      variant: {
        text: "h-4 w-full rounded-xs",
        circular: "rounded-full h-10 w-10",
        rectangular: "rounded-none",
        rounded: "rounded-sm"
      },
      position: {
        start: "",
        end: "ml-auto"
      }
    },
    defaultVariants: {
      variant: "text",
      position: "start"
    }
  }
);
var AtlSkeleton = React20.forwardRef(
  ({ className, variant, position, ...props }, ref) => {
    return /* @__PURE__ */ jsx20(
      "div",
      {
        ref,
        className: cn(atlSkeletonVariants({ variant, position, className })),
        ...props
      }
    );
  }
);
AtlSkeleton.displayName = "AtlSkeleton";

// src/components/AtlPageHeader.tsx
import * as React21 from "react";
import SearchIcon from "@mui/icons-material/Search";
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
var AtlPageHeader = React21.forwardRef(
  ({
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
  }, ref) => {
    return /* @__PURE__ */ jsxs13("div", { ref, className: cn("flex flex-col gap-0", className), ...props, children: [
      showBreadcrumb && breadcrumbItems.length > 0 && /* @__PURE__ */ jsx21(AtlBreadcrumb, { items: breadcrumbItems, showBack: true }),
      /* @__PURE__ */ jsxs13("div", { className: "flex items-start justify-between gap-4 py-4", children: [
        /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-1 flex-1", children: [
          label && /* @__PURE__ */ jsx21("span", { className: "text-xs text-on-background font-medium uppercase tracking-wider", children: label }),
          /* @__PURE__ */ jsx21("h1", { className: "text-heading-md text-on-background", children: title }),
          description && /* @__PURE__ */ jsx21("p", { className: "text-sm text-on-background leading-6", children: description })
        ] }),
        /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2 shrink-0", children: [
          showSearch && /* @__PURE__ */ jsxs13("div", { className: "relative", children: [
            /* @__PURE__ */ jsx21(SearchIcon, { className: "absolute left-2 top-1/2 -translate-y-1/2 !h-4 !w-4 text-on-surface-variant" }),
            /* @__PURE__ */ jsx21(
              "input",
              {
                type: "text",
                placeholder: "Buscar...",
                onChange: (e) => onSearch?.(e.target.value),
                className: "h-9 pl-8 pr-3 rounded-sm border border-input bg-surface text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-ring"
              }
            )
          ] }),
          actions
        ] })
      ] }),
      children
    ] });
  }
);
AtlPageHeader.displayName = "AtlPageHeader";

// src/components/AtlTextField.tsx
import * as React22 from "react";
import { jsx as jsx22, jsxs as jsxs14 } from "react/jsx-runtime";
var AtlTextField = React22.forwardRef(
  ({
    className,
    label,
    helpText,
    showOptional = false,
    showTooltip = false,
    tooltipText,
    isRequired = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    state = "enable",
    fieldSize = "large",
    disabled,
    placeholder = "Placeholder",
    ...props
  }, ref) => {
    const isDisabled = disabled || state === "disabled";
    const isReadonly = state === "no-editable";
    const [isFocused, setIsFocused] = React22.useState(false);
    const inputHeight = fieldSize === "large" ? "h-11" : "h-9";
    const fontSize = fieldSize === "large" ? "text-base leading-7" : "text-sm leading-6";
    const iconSize = fieldSize === "large" ? "h-4 w-4" : "h-3.5 w-3.5";
    const effectiveState = state === "enable" && isFocused ? "focused" : state;
    const borderColor = effectiveState === "error" ? "border-critical" : effectiveState === "focused" ? "border-brand-primary" : effectiveState === "hovered" ? "border-brand-primary" : "border-input";
    const isFocusedStyle = effectiveState === "focused";
    return /* @__PURE__ */ jsxs14("div", { className: cn("flex flex-col gap-1", className), children: [
      label && /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx22(
          "label",
          {
            className: cn(
              "text-xs font-medium leading-[21px]",
              isFocusedStyle ? "text-brand-primary" : "text-on-surface-primary"
            ),
            children: label
          }
        ),
        isRequired && /* @__PURE__ */ jsx22("span", { className: "text-critical text-xs", children: "*" }),
        showOptional && /* @__PURE__ */ jsx22("span", { className: "text-on-surface-variant text-xs", children: "(Opcional)" }),
        showTooltip && tooltipText && /* @__PURE__ */ jsx22(AtlTooltip, { text: tooltipText })
      ] }),
      /* @__PURE__ */ jsxs14(
        "div",
        {
          className: cn(
            "flex items-center gap-2 rounded-sm px-2 border transition-colors",
            borderColor,
            inputHeight,
            isFocusedStyle ? "bg-surface-variant" : "bg-surface",
            isDisabled && "opacity-50 cursor-not-allowed",
            isReadonly && "bg-background-variant"
          ),
          children: [
            LeftIcon && /* @__PURE__ */ jsx22(LeftIcon, { className: cn(iconSize, "text-on-surface-primary shrink-0") }),
            /* @__PURE__ */ jsx22(
              "input",
              {
                ref,
                placeholder,
                disabled: isDisabled,
                readOnly: isReadonly,
                className: cn(
                  "flex-1 bg-transparent outline-none text-on-surface-primary placeholder:text-on-surface-variant",
                  fontSize
                ),
                ...props,
                onFocus: (e) => {
                  setIsFocused(true);
                  props.onFocus?.(e);
                },
                onBlur: (e) => {
                  setIsFocused(false);
                  props.onBlur?.(e);
                }
              }
            ),
            RightIcon && /* @__PURE__ */ jsx22(RightIcon, { className: cn(iconSize, "text-on-surface-primary shrink-0") })
          ]
        }
      ),
      helpText && /* @__PURE__ */ jsx22("span", { className: cn(
        "text-xs leading-[21px]",
        state === "error" ? "text-critical" : "text-on-surface-primary"
      ), children: helpText })
    ] });
  }
);
AtlTextField.displayName = "AtlTextField";

// src/components/AtlChip.tsx
import * as React23 from "react";
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx23, jsxs as jsxs15 } from "react/jsx-runtime";
var atlChipVariants = cva8(
  "inline-flex items-center font-sans font-bold transition-colors",
  {
    variants: {
      chipType: {
        standart: "",
        critical: "",
        disabled: "cursor-not-allowed",
        neutral: ""
      },
      chipStyle: {
        outline: "bg-transparent border",
        filed: ""
      },
      size: {
        large: "h-8 px-3 gap-1.5 text-xs leading-[21px] rounded-full [&_svg]:size-4",
        small: "h-6 px-2 gap-1 text-xs leading-[21px] rounded-full [&_svg]:size-3.5"
      },
      state: {
        enabled: "",
        hovered: "",
        pressed: "",
        selected: "",
        disabled: "cursor-not-allowed"
      }
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
      { chipType: "disabled", chipStyle: "outline", state: "selected", className: "border-disabled text-disabled" }
    ],
    defaultVariants: {
      chipType: "standart",
      chipStyle: "filed",
      size: "large",
      state: "enabled"
    }
  }
);
var AtlChip = React23.forwardRef(
  ({
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
  }, ref) => {
    const isDisabledVisual = disabled || state === "disabled" || chipType === "disabled";
    const resolvedType = isDisabledVisual ? "disabled" : chipType;
    const resolvedState = isDisabledVisual ? "disabled" : state;
    const Comp = clickable ? "button" : "span";
    const isLarge = size !== "small";
    const imgSize = isLarge ? "h-[21px] w-[21px]" : "h-[18px] w-[18px]";
    const badgeSizeClass = "h-3 w-3";
    return /* @__PURE__ */ jsxs15(
      Comp,
      {
        ref,
        className: cn(atlChipVariants({ chipType: resolvedType, chipStyle, size, state: resolvedState, className })),
        disabled: clickable ? disabled || resolvedState === "disabled" : void 0,
        type: clickable ? "button" : void 0,
        ...props,
        children: [
          showImage && imageUrl && /* @__PURE__ */ jsx23(
            "img",
            {
              src: imageUrl,
              alt: "",
              className: cn("rounded-full object-cover shrink-0", imgSize)
            }
          ),
          LeftIcon && /* @__PURE__ */ jsx23(LeftIcon, {}),
          /* @__PURE__ */ jsx23("span", { children: label }),
          RightIcon && /* @__PURE__ */ jsx23(RightIcon, {}),
          showBadge && badgeContent !== void 0 && /* @__PURE__ */ jsx23(
            "span",
            {
              className: cn(
                "inline-flex items-center justify-center rounded-full shrink-0 text-[8px] font-bold leading-none",
                badgeSizeClass,
                /* Badge inherits chip foreground as bg, chip bg as text */
                resolvedType === "disabled" ? "bg-disabled-foreground text-disabled" : chipStyle === "outline" ? "bg-current text-surface" : "bg-current/20"
              ),
              children: badgeContent
            }
          )
        ]
      }
    );
  }
);
AtlChip.displayName = "AtlChip";

// src/components/AtlInputCounter.tsx
import * as React24 from "react";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { jsx as jsx24, jsxs as jsxs16 } from "react/jsx-runtime";
var AtlInputCounter = React24.forwardRef(
  ({
    label,
    helpText,
    showOptional = false,
    showTooltip = false,
    tooltipText,
    value = 0,
    onChange,
    min = 0,
    max = Infinity,
    step = 1,
    state = "enable",
    size = "large",
    className
  }, ref) => {
    const isDisabled = state === "disabled";
    const inputHeight = size === "large" ? "h-11" : "h-9";
    const iconSize = size === "large" ? "h-4 w-4" : "h-3.5 w-3.5";
    const decrement = () => {
      if (!isDisabled && value > min) onChange?.(value - step);
    };
    const increment = () => {
      if (!isDisabled && value < max) onChange?.(value + step);
    };
    return /* @__PURE__ */ jsxs16("div", { ref, className: cn("flex flex-col gap-1", className), children: [
      label && /* @__PURE__ */ jsxs16("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx24("label", { className: "text-xs text-on-surface-primary font-medium leading-[21px]", children: label }),
        showOptional && /* @__PURE__ */ jsx24("span", { className: "text-on-surface-variant text-xs", children: "(Opcional)" }),
        showTooltip && tooltipText && /* @__PURE__ */ jsx24(AtlTooltip, { text: tooltipText })
      ] }),
      /* @__PURE__ */ jsxs16(
        "div",
        {
          className: cn(
            "inline-flex items-center gap-4 rounded-sm bg-surface border border-input px-2",
            inputHeight,
            isDisabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ jsx24(
              "button",
              {
                type: "button",
                onClick: decrement,
                disabled: isDisabled || value <= min,
                className: "text-on-surface-primary disabled:text-disabled shrink-0",
                children: /* @__PURE__ */ jsx24(RemoveCircleOutline, { className: iconSize })
              }
            ),
            /* @__PURE__ */ jsx24("span", { className: "text-base leading-7 text-on-surface-primary font-medium min-w-[2ch] text-center tabular-nums", children: value }),
            /* @__PURE__ */ jsx24(
              "button",
              {
                type: "button",
                onClick: increment,
                disabled: isDisabled || value >= max,
                className: "text-on-surface-primary disabled:text-disabled shrink-0",
                children: /* @__PURE__ */ jsx24(AddCircleOutline, { className: iconSize })
              }
            )
          ]
        }
      ),
      helpText && /* @__PURE__ */ jsx24("span", { className: "text-xs text-on-surface-primary leading-[21px]", children: helpText })
    ] });
  }
);
AtlInputCounter.displayName = "AtlInputCounter";

// src/components/AtlToast.tsx
import * as React25 from "react";
import InfoOutlined2 from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import WarningAmber from "@mui/icons-material/WarningAmber";
import Cancel from "@mui/icons-material/Cancel";
import GppMaybe from "@mui/icons-material/GppMaybe";
import { cva as cva9 } from "class-variance-authority";
import { jsx as jsx25, jsxs as jsxs17 } from "react/jsx-runtime";
var atlToastVariants = cva9(
  "flex items-center gap-4 rounded-sm font-sans",
  {
    variants: {
      toastType: {
        info: "bg-brand-primary",
        success: "bg-success",
        alert: "bg-alert",
        error: "bg-surface-error",
        critical: "bg-critical"
      },
      size: {
        large: "px-6 py-3",
        small: "px-4 py-2"
      }
    },
    defaultVariants: {
      toastType: "info",
      size: "large"
    }
  }
);
var iconMap = {
  info: InfoOutlined2,
  success: CheckCircleOutlined,
  alert: WarningAmber,
  error: Cancel,
  critical: GppMaybe
};
var AtlToast = React25.forwardRef(
  ({ className, toastType = "info", size, title = "T\xEDtulo", text = "Texto", showText = true, ...props }, ref) => {
    const Icon = iconMap[toastType ?? "info"];
    const textColorMap = {
      info: "text-brand-primary-foreground",
      success: "text-success-foreground",
      alert: "text-alert-foreground",
      error: "text-on-surface-error",
      critical: "text-critical-foreground"
    };
    const iconColorMap = {
      info: "text-brand-primary",
      success: "text-success",
      alert: "text-alert",
      error: "text-surface-error",
      critical: "text-critical"
    };
    const circleBgMap = {
      info: "bg-brand-primary-foreground",
      success: "bg-on-surface-success",
      alert: "bg-alert-foreground",
      error: "bg-on-surface-error",
      critical: "bg-critical-foreground"
    };
    const textColor = textColorMap[toastType ?? "info"];
    const iconColor = iconColorMap[toastType ?? "info"];
    const circleSize = size === "large" ? "h-12 w-12" : "h-10 w-10";
    const iconSize = size === "large" ? "!h-6 !w-6" : "!h-5 !w-5";
    const circleBg = circleBgMap[toastType ?? "info"];
    return /* @__PURE__ */ jsxs17(
      "div",
      {
        ref,
        className: cn(atlToastVariants({ toastType, size, className })),
        role: "alert",
        ...props,
        children: [
          /* @__PURE__ */ jsx25("div", { className: cn("shrink-0 rounded-full flex items-center justify-center", circleSize, circleBg), children: /* @__PURE__ */ jsx25(Icon, { className: cn(iconSize, iconColor) }) }),
          /* @__PURE__ */ jsxs17("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx25("span", { className: cn("font-semibold", textColor, size === "large" ? "text-xl leading-[35px]" : "text-sm leading-6"), children: title }),
            showText && text && /* @__PURE__ */ jsx25("span", { className: cn("font-normal", textColor, size === "large" ? "text-sm leading-[24.5px]" : "text-xs leading-[21px]"), children: text })
          ] })
        ]
      }
    );
  }
);
AtlToast.displayName = "AtlToast";

// src/components/AtlToastBanner.tsx
import * as React26 from "react";
import InfoOutlined3 from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlined2 from "@mui/icons-material/CheckCircleOutlined";
import WarningAmber2 from "@mui/icons-material/WarningAmber";
import Cancel2 from "@mui/icons-material/Cancel";
import GppMaybe2 from "@mui/icons-material/GppMaybe";
import Close2 from "@mui/icons-material/Close";
import { cva as cva10 } from "class-variance-authority";
import { jsx as jsx26, jsxs as jsxs18 } from "react/jsx-runtime";
var atlToastBannerVariants = cva10(
  "flex items-start gap-4 rounded-sm font-sans w-full",
  {
    variants: {
      toastType: {
        info: "bg-brand-primary",
        success: "bg-success",
        alert: "bg-alert",
        critical: "bg-critical",
        error: "bg-surface-error"
      },
      size: {
        large: "px-6 py-4",
        small: "px-4 py-3",
        mobile: "px-4 py-3"
      }
    },
    defaultVariants: {
      toastType: "info",
      size: "large"
    }
  }
);
var iconMap2 = {
  info: InfoOutlined3,
  success: CheckCircleOutlined2,
  alert: WarningAmber2,
  critical: GppMaybe2,
  error: Cancel2
};
var iconBgMap = {
  info: "bg-brand-primary-foreground",
  success: "bg-on-surface-success",
  alert: "bg-alert-foreground",
  critical: "bg-critical-foreground",
  error: "bg-on-surface-error"
};
var AtlToastBanner = React26.forwardRef(
  ({
    className,
    toastType = "info",
    size,
    title = "T\xEDtulo",
    text = "Texto",
    showText = true,
    showButton = false,
    buttonLabel = "button",
    onButtonClick,
    showClose = true,
    onClose,
    ...props
  }, ref) => {
    const Icon = iconMap2[toastType ?? "info"];
    const textColorMap = {
      info: "text-brand-primary-foreground",
      success: "text-success-foreground",
      alert: "text-alert-foreground",
      error: "text-on-surface-error",
      critical: "text-critical-foreground"
    };
    const iconColorMap = {
      info: "text-brand-primary",
      success: "text-success",
      alert: "text-alert",
      error: "text-surface-error",
      critical: "text-critical"
    };
    const buttonColorMap = {
      info: "text-brand-primary-foreground",
      success: "text-success-foreground",
      alert: "text-alert-foreground",
      error: "text-on-surface-error",
      critical: "text-critical-foreground"
    };
    const textColor = textColorMap[toastType ?? "info"];
    const iconColor = iconColorMap[toastType ?? "info"];
    const circleSize = size === "large" ? "h-12 w-12" : "h-10 w-10";
    const iconSize = size === "large" ? "!h-6 !w-6" : "!h-5 !w-5";
    const circleBg = iconBgMap[toastType ?? "info"];
    const isMobile = size === "mobile";
    return /* @__PURE__ */ jsxs18(
      "div",
      {
        ref,
        className: cn(atlToastBannerVariants({ toastType, size, className })),
        role: "alert",
        ...props,
        children: [
          /* @__PURE__ */ jsx26("div", { className: "shrink-0 pt-0.5", children: /* @__PURE__ */ jsx26("div", { className: cn("rounded-full flex items-center justify-center", circleSize, circleBg), children: /* @__PURE__ */ jsx26(Icon, { className: cn(iconSize, iconColor) }) }) }),
          /* @__PURE__ */ jsxs18("div", { className: cn("flex-1", isMobile ? "flex flex-col gap-2" : "flex items-center gap-4"), children: [
            /* @__PURE__ */ jsxs18("div", { className: cn("flex flex-col gap-0.5", isMobile ? "flex-1" : "flex-1"), children: [
              /* @__PURE__ */ jsx26("span", { className: cn("font-semibold", textColor, size === "large" ? "text-xl leading-[35px]" : "text-sm leading-6"), children: title }),
              showText && text && /* @__PURE__ */ jsx26("span", { className: cn("font-normal", textColor, size === "large" ? "text-sm leading-[24.5px]" : "text-xs leading-[21px]"), children: text })
            ] }),
            showButton && /* @__PURE__ */ jsx26(
              "button",
              {
                type: "button",
                onClick: onButtonClick,
                className: cn(
                  "shrink-0 rounded-full px-4 py-2 text-base font-normal transition-colors",
                  "border border-current/30 hover:bg-white/10",
                  buttonColorMap[toastType ?? "info"]
                ),
                children: buttonLabel
              }
            )
          ] }),
          showClose && /* @__PURE__ */ jsx26(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: cn("shrink-0", textColor, "hover:opacity-70"),
              children: /* @__PURE__ */ jsx26(Close2, { className: iconSize })
            }
          )
        ]
      }
    );
  }
);
AtlToastBanner.displayName = "AtlToastBanner";

// src/components/AtlToggleTabs.tsx
import * as React27 from "react";
import { cva as cva11 } from "class-variance-authority";
import { jsx as jsx27, jsxs as jsxs19 } from "react/jsx-runtime";
var containerVariants = cva11(
  "inline-flex items-center rounded-full p-1 gap-0",
  {
    variants: {
      toggleType: {
        primary: "bg-surface-primary",
        secundary: "bg-brand-secondary/10",
        tretiary: "bg-brand-tertiary/10",
        standard: "bg-surface-variant"
      },
      behavior: {
        "hug-contents": "w-auto",
        "fill-container": "w-full"
      }
    },
    defaultVariants: {
      toggleType: "primary",
      behavior: "hug-contents"
    }
  }
);
var AtlToggleTabs = React27.forwardRef(
  ({
    className,
    toggleType = "primary",
    behavior,
    items,
    selected,
    onChange,
    size = "large",
    ...props
  }, ref) => {
    const itemHeight = size === "large" ? "h-9 px-4 text-sm" : "h-7 px-3 text-xs";
    const selectedBgMap = {
      primary: "bg-brand-primary text-brand-primary-foreground",
      secundary: "bg-brand-secondary text-brand-secondary-foreground",
      tretiary: "bg-brand-tertiary text-brand-tertiary-foreground",
      standard: "bg-on-surface text-surface"
    };
    const unselectedTextMap = {
      primary: "text-on-surface-primary",
      secundary: "text-on-surface-primary",
      tretiary: "text-on-surface-primary",
      standard: "text-on-surface-primary"
    };
    const resolvedType = toggleType ?? "primary";
    return /* @__PURE__ */ jsx27(
      "div",
      {
        ref,
        className: cn(containerVariants({ toggleType, behavior, className })),
        role: "tablist",
        ...props,
        children: items.map((item) => {
          const isSelected = item.label === selected;
          const LeftIcon = item.leftIcon;
          const RightIcon = item.rightIcon;
          return /* @__PURE__ */ jsxs19(
            "button",
            {
              role: "tab",
              type: "button",
              "aria-selected": isSelected,
              onClick: () => onChange?.(item.label),
              className: cn(
                "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors [&_svg]:size-4",
                itemHeight,
                behavior === "fill-container" && "flex-1",
                isSelected ? selectedBgMap[resolvedType] : cn(unselectedTextMap[resolvedType], "hover:bg-black/5")
              ),
              children: [
                LeftIcon && /* @__PURE__ */ jsx27(LeftIcon, {}),
                item.showLabel !== false && /* @__PURE__ */ jsx27("span", { children: item.label }),
                RightIcon && /* @__PURE__ */ jsx27(RightIcon, {})
              ]
            },
            item.label
          );
        })
      }
    );
  }
);
AtlToggleTabs.displayName = "AtlToggleTabs";

// src/components/AtlPagination.tsx
import * as React28 from "react";
import ChevronLeft2 from "@mui/icons-material/ChevronLeft";
import ChevronRight3 from "@mui/icons-material/ChevronRight";
import { jsx as jsx28, jsxs as jsxs20 } from "react/jsx-runtime";
var AtlPagination = React28.forwardRef(
  ({ className, currentPage, totalPages, onPageChange, ...props }, ref) => {
    const handleInputChange = (e) => {
      const val = parseInt(e.target.value, 10);
      if (!isNaN(val) && val >= 1 && val <= totalPages) {
        onPageChange?.(val);
      }
    };
    return /* @__PURE__ */ jsxs20(
      "div",
      {
        ref,
        className: cn("inline-flex items-center gap-2", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx28(
            AtlIconButton,
            {
              icon: ChevronLeft2,
              variant: "standard",
              shape: "radius",
              size: "small",
              disabled: currentPage <= 1,
              onClick: () => onPageChange?.(currentPage - 1),
              "aria-label": "P\xE1gina anterior"
            }
          ),
          /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx28(
              "input",
              {
                type: "text",
                value: currentPage,
                onChange: handleInputChange,
                className: "w-12 h-9 rounded-sm border border-input bg-surface text-center text-base leading-7 text-on-surface-primary focus:outline-none focus:ring-2 focus:ring-ring"
              }
            ),
            /* @__PURE__ */ jsxs20("span", { className: "text-sm text-on-surface-variant", children: [
              "de ",
              totalPages
            ] })
          ] }),
          /* @__PURE__ */ jsx28(
            AtlIconButton,
            {
              icon: ChevronRight3,
              variant: "standard",
              shape: "radius",
              size: "small",
              disabled: currentPage >= totalPages,
              onClick: () => onPageChange?.(currentPage + 1),
              "aria-label": "Pr\xF3xima p\xE1gina"
            }
          )
        ]
      }
    );
  }
);
AtlPagination.displayName = "AtlPagination";

// src/components/AtlTypeFile.tsx
import * as React29 from "react";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import TableChart from "@mui/icons-material/TableChart";
import Article from "@mui/icons-material/Article";
import { jsx as jsx29 } from "react/jsx-runtime";
var fileConfig = {
  ".img": { icon: ImageIcon, colorClass: "text-on-surface" },
  ".pdf": { icon: PictureAsPdf, colorClass: "text-critical" },
  ".csv": { icon: TableChart, colorClass: "text-success" },
  ".doc": { icon: Article, colorClass: "text-brand-primary" }
};
var AtlTypeFile = React29.forwardRef(
  ({ className, type, size = 24, ...props }, ref) => {
    const { icon: Icon, colorClass } = fileConfig[type];
    return /* @__PURE__ */ jsx29(
      "span",
      {
        ref,
        className: cn("inline-flex items-center justify-center", colorClass, className),
        ...props,
        children: /* @__PURE__ */ jsx29(Icon, { style: { width: size, height: size } })
      }
    );
  }
);
AtlTypeFile.displayName = "AtlTypeFile";

// src/components/AtlBrand.tsx
import * as React30 from "react";

// src/assets/brand/ColorTrinus_Full.svg
var ColorTrinus_Full_default = 'data:image/svg+xml,<svg width="117" height="36" viewBox="0 0 117 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M22.5469 20.345L22.4894 20.5603L18.407 35.9961C18.3392 36.0016 18.2705 36.0016 18.2027 35.9937H18.2011C18.1569 35.9898 18.112 35.9835 18.0694 35.974C17.951 35.9488 17.8359 35.9062 17.7294 35.8462C17.5337 35.7374 17.3665 35.5702 17.2521 35.3469L0.133827 1.74285C0.0170759 1.51409 -0.0192082 1.27903 0.00919078 1.05895C0.0281234 0.898025 0.0809709 0.744205 0.160646 0.606949C0.193778 0.548576 0.232438 0.49414 0.275036 0.442078L22.2858 20.1131L22.3892 20.2062L22.5461 20.3458L22.5469 20.345Z" fill="%231A3EB5"/>%0A<path d="M22.6676 20.2748L22.4073 20.0421L0.365754 0.345062C0.3342 0.375827 0.303433 0.407378 0.275823 0.442086C0.233224 0.494149 0.194564 0.548585 0.161432 0.606958C0.0817573 0.743425 0.0289098 0.898034 0.00997712 1.05895C-0.017633 1.27983 0.0178623 1.51489 0.134614 1.74286L17.2529 35.3469C17.3673 35.5702 17.5345 35.7374 17.7302 35.8462C17.8366 35.9062 17.9518 35.9488 18.0701 35.974C18.1127 35.9835 18.1577 35.9898 18.2019 35.9937H18.2035C18.2713 36.0016 18.3399 36.0017 18.4078 35.9961C18.4559 35.9938 18.5024 35.9882 18.5482 35.9788L22.6952 20.3L22.6676 20.2748ZM18.3036 35.8675C18.2729 35.8659 18.2429 35.8652 18.2137 35.8612C18.1774 35.8589 18.1396 35.8533 18.1049 35.8455C18.1025 35.8455 18.1009 35.8439 18.0985 35.8439C17.9897 35.821 17.8887 35.7831 17.794 35.7311C17.615 35.6301 17.4682 35.4771 17.372 35.2878L0.253732 1.68212C0.154336 1.48965 0.115679 1.27982 0.1425 1.07394C0.158278 0.935893 0.204818 0.797861 0.278182 0.672437C0.283704 0.662182 0.290015 0.651126 0.297904 0.639293L22.1983 20.2117L22.2314 20.2425L22.397 20.3915L18.3044 35.8683L18.3036 35.8675Z" fill="%231A3EB5"/>%0A<path d="M36.0436 12.6918V12.6934C36.0333 12.9182 35.9568 13.1438 35.8085 13.3426L19.2763 35.5189C19.1265 35.7208 18.9308 35.8573 18.7186 35.933C18.6871 35.9433 18.6563 35.9527 18.624 35.9606H18.6224C18.5971 35.9669 18.5735 35.9725 18.5482 35.978C18.5017 35.9875 18.4551 35.993 18.4078 35.9953L22.4902 20.5596L22.5477 20.3442L22.6684 20.274L22.7292 20.2385L36.0349 12.4678C36.0451 12.5411 36.0483 12.6169 36.0444 12.6926L36.0436 12.6918Z" fill="%231A6EE8"/>%0A<path d="M36.0341 12.4678C36.0246 12.3984 36.0089 12.3313 35.9876 12.2643V12.2627C35.9741 12.2201 35.9584 12.1775 35.9386 12.138L22.4073 20.0421L22.2866 20.1123L22.2614 20.1273L22.2306 20.2417L18.1049 35.8447L18.0702 35.9733C18.1128 35.9827 18.1577 35.989 18.2019 35.993H18.2035C18.2713 36.0009 18.34 36.0008 18.4078 35.9953C18.4559 35.993 18.5025 35.9875 18.5482 35.978C18.5735 35.9725 18.5971 35.9677 18.6224 35.9606H18.6239C18.6555 35.9527 18.6863 35.9433 18.7186 35.933C18.9308 35.8573 19.1264 35.7208 19.2763 35.5189L35.8085 13.3426C35.9568 13.143 36.0333 12.9174 36.0436 12.6934V12.6918C36.0475 12.6161 36.0451 12.5403 36.0341 12.467V12.4678ZM35.5426 13.1454L19.0089 35.3217C18.9742 35.3682 18.9371 35.4108 18.8961 35.4479L22.8112 20.6455L22.8325 20.5635L35.5482 13.1367C35.5482 13.1367 35.5442 13.1422 35.5426 13.1462V13.1454Z" fill="%231A6EE8"/>%0A<path d="M36.0443 12.6918L36.0435 12.6934V12.6918H36.0443Z" fill="%230061FF"/>%0A<path d="M36.0341 12.4678L22.7284 20.2385L22.6676 20.274L22.5469 20.3442L22.3899 20.2046L22.2866 20.1115L0.275818 0.440499C0.303428 0.405791 0.334195 0.374239 0.365749 0.343475C0.381526 0.327699 0.397303 0.311934 0.414658 0.296947C0.548764 0.177045 0.709692 0.0886963 0.887975 0.0405778C1.0915 -0.0154289 1.31711 -0.0162224 1.54825 0.0555609C1.54983 0.0555609 1.55219 0.0571401 1.55377 0.0571401L35.2705 11.5093C35.2705 11.5093 35.2744 11.5109 35.2776 11.5117C35.4937 11.5929 35.6696 11.7294 35.7966 11.8982C35.8542 11.9716 35.9016 12.0521 35.9386 12.1373C35.9584 12.1775 35.9749 12.2193 35.9875 12.2619V12.2634C36.0088 12.3297 36.0246 12.3975 36.0341 12.467V12.4678Z" fill="%230FE4F5"/>%0A<path d="M22.5469 20.345L22.4894 20.5603L18.407 35.9961C18.3392 36.0016 18.2705 36.0016 18.2027 35.9937H18.2011C18.1569 35.9898 18.112 35.9835 18.0694 35.974C17.951 35.9488 17.8359 35.9062 17.7294 35.8462C17.5337 35.7374 17.3665 35.5702 17.2521 35.3469L0.133827 1.74285C0.0170759 1.51409 -0.0192082 1.27903 0.00919078 1.05895C0.0281234 0.898025 0.0809709 0.744205 0.160646 0.606949C0.193778 0.548576 0.232438 0.49414 0.275036 0.442078L22.2858 20.1131L22.3892 20.2062L22.5461 20.3458L22.5469 20.345Z" fill="%231A3EB5"/>%0A<path d="M36.0435 12.6918V12.6934C36.0333 12.9182 35.9568 13.1438 35.8085 13.3426L19.2763 35.5189C19.1264 35.7208 18.9308 35.8573 18.7186 35.933C18.687 35.9433 18.6563 35.9527 18.6239 35.9606H18.6223C18.5971 35.9669 18.5734 35.9725 18.5482 35.978C18.5017 35.9875 18.4551 35.993 18.4078 35.9953L22.4901 20.5596L22.5477 20.3442L22.6684 20.274L22.7292 20.2385L36.0349 12.4678C36.0451 12.5411 36.0483 12.6169 36.0443 12.6926L36.0435 12.6918Z" fill="%231A6EE8"/>%0A<path d="M45.0523 27.2812V19.5017H43.4541C43.234 19.5017 43.0557 19.3235 43.0557 19.1034V16.4427C43.0557 16.2226 43.234 16.0443 43.4541 16.0443H45.0523V12.1657C45.0523 11.9456 45.2306 11.7673 45.4507 11.7673H48.2559C48.476 11.7673 48.6543 11.9456 48.6543 12.1657V16.0443H51.5691C51.7892 16.0443 51.9675 16.2226 51.9675 16.4427V19.1034C51.9675 19.3235 51.7892 19.5017 51.5691 19.5017H48.6543V26.5609C48.6543 27.1179 49.1055 27.5699 49.6632 27.5699H51.5699C51.79 27.5699 51.9683 27.7482 51.9683 27.9682V30.341C51.9683 30.5611 51.79 30.7394 51.5699 30.7394H48.7986C47.5885 30.7394 46.6616 30.4365 46.0179 29.8314C45.3742 29.2264 45.0523 28.3761 45.0523 27.2812Z" fill="%231A6EE8"/>%0A<path d="M71.6835 30.3402V16.4419C71.6835 16.2218 71.8618 16.0435 72.0819 16.0435H74.9967L75.2846 17.4839H75.429C75.6593 17.196 75.9859 16.9081 76.4087 16.6193C77.2923 16.0427 78.3107 15.7548 79.4632 15.7548C81.1348 15.7548 82.513 16.3267 83.5984 17.4689C84.6831 18.6119 85.2266 20.1052 85.2266 21.9494V30.3394C85.2266 30.5595 85.0484 30.7378 84.8283 30.7378H82.0231C81.803 30.7378 81.6247 30.5595 81.6247 30.3394V22.2382C81.6247 21.2971 81.3312 20.5335 80.7459 19.9474C80.1598 19.3621 79.3962 19.0686 78.4551 19.0686C77.5139 19.0686 76.7503 19.3621 76.1642 19.9474C75.5781 20.5335 75.2854 21.2971 75.2854 22.2382V30.3394C75.2854 30.5595 75.1071 30.7378 74.887 30.7378H72.0819C71.8618 30.7378 71.6835 30.5595 71.6835 30.3394V30.3402Z" fill="%231A6EE8"/>%0A<path d="M87.9466 24.8318V16.4419C87.9466 16.2218 88.1249 16.0435 88.345 16.0435H91.1502C91.3703 16.0435 91.5486 16.2218 91.5486 16.4419V24.5439C91.5486 25.485 91.8412 26.2486 92.4274 26.8347C93.0127 27.4208 93.7763 27.7134 94.7182 27.7134C95.6601 27.7134 96.4229 27.4208 97.0091 26.8347C97.5944 26.2494 97.8878 25.4858 97.8878 24.5439V16.4419C97.8878 16.2218 98.0661 16.0435 98.2862 16.0435H101.091C101.312 16.0435 101.49 16.2218 101.49 16.4419V30.3402C101.49 30.5603 101.312 30.7385 101.091 30.7385H98.5032C98.313 30.7385 98.1498 30.6045 98.1127 30.4183L97.8886 29.2982H97.7443C97.5139 29.5861 97.1866 29.874 96.7645 30.1627C95.881 30.7386 94.8626 31.0273 93.71 31.0273C92.0384 31.0273 90.6603 30.4562 89.5748 29.3132C88.4894 28.1701 87.9466 26.6769 87.9466 24.8326V24.8318Z" fill="%231A6EE8"/>%0A<path d="M104.645 26.2723H107.322C107.499 26.2723 107.66 26.3866 107.704 26.5586C107.79 26.8978 108.033 27.2252 108.431 27.5407C108.94 27.9438 109.646 28.1457 110.549 28.1457C112.374 28.1457 113.286 27.6172 113.286 26.5609C113.286 26.0995 113.142 25.7398 112.854 25.4803C112.566 25.2207 112.038 25.0338 111.269 24.9186L108.964 24.5439C105.795 24.0249 104.21 22.6326 104.21 20.3655C104.21 19.0789 104.757 17.9888 105.852 17.095C106.947 16.2021 108.464 15.7556 110.405 15.7556C112.345 15.7556 113.862 16.2841 114.957 17.3404C115.895 18.2452 116.431 19.1499 116.566 20.0547C116.601 20.2945 116.413 20.5098 116.17 20.5098H113.492C113.306 20.5098 113.148 20.3805 113.105 20.1991C113.019 19.8417 112.782 19.5128 112.392 19.213C111.892 18.8289 111.229 18.6372 110.404 18.6372C109.579 18.6372 108.939 18.8052 108.488 19.1413C108.036 19.4773 107.811 19.8859 107.811 20.3655C107.811 21.0762 108.483 21.5283 109.828 21.7199L112.277 22.0946C115.351 22.5561 116.888 24.0446 116.888 26.5609C116.888 27.8483 116.345 28.914 115.259 29.7597C114.174 30.6053 112.603 31.0273 110.548 31.0273C109.511 31.0273 108.593 30.8924 107.797 30.6234C106.999 30.3552 106.385 30.0326 105.952 29.6579C105.52 29.2832 105.164 28.8556 104.887 28.3752C104.608 27.8956 104.425 27.487 104.339 27.151C104.301 27.0043 104.272 26.8662 104.251 26.7361C104.211 26.4931 104.398 26.2723 104.644 26.2723H104.645Z" fill="%231A6EE8"/>%0A<path d="M68.5651 16.0435H65.7599C65.5399 16.0435 65.3616 16.2219 65.3616 16.4419V30.3402C65.3616 30.5602 65.5399 30.7385 65.7599 30.7385H68.5651C68.7851 30.7385 68.9635 30.5602 68.9635 30.3402V16.4419C68.9635 16.2219 68.7851 16.0435 68.5651 16.0435Z" fill="%231A6EE8"/>%0A<path d="M68.9083 11.3981L67.3621 10.5052C67.239 10.4342 67.0868 10.4342 66.9637 10.5052L65.4176 11.3981C65.2945 11.4691 65.218 11.6008 65.218 11.7436V13.4554C65.218 13.6755 65.3963 13.8537 65.6164 13.8537H68.7095C68.9296 13.8537 69.1079 13.6755 69.1079 13.4554V11.7436C69.1079 11.6016 69.0321 11.4699 68.9083 11.3981Z" fill="%231A6EE8"/>%0A<path d="M54.6883 30.3402V16.4419C54.6883 16.2218 54.8665 16.0435 55.0866 16.0435H57.7135L58.0015 17.3403H58.1458C58.3186 17.1092 58.53 16.8986 58.7801 16.7061C59.3749 16.2644 60.0288 16.0435 60.7396 16.0435H63.2229C63.443 16.0435 63.6213 16.2218 63.6213 16.4419V19.1026C63.6213 19.3227 63.443 19.5009 63.2229 19.5009H61.0283C59.4932 19.5009 58.291 20.1596 58.291 22.2382V30.3394C58.291 30.5595 58.1127 30.7378 57.8926 30.7378H55.0874C54.8673 30.7378 54.6891 30.5595 54.6891 30.3394L54.6883 30.3402Z" fill="%231A6EE8"/>%0A</svg>%0A';

// src/assets/brand/ColorTrinus_Icon.svg
var ColorTrinus_Icon_default = 'data:image/svg+xml,<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g clip-path="url(%23clip0_6983_1933)">%0A<path d="M22.3221 20.345L22.2645 20.5603L18.1821 35.9961C18.1143 36.0016 18.0457 36.0016 17.9778 35.9937H17.9763C17.9321 35.9898 17.8871 35.9835 17.8445 35.974C17.7262 35.9488 17.611 35.9062 17.5045 35.8462C17.3089 35.7374 17.1416 35.5702 17.0273 35.3469L-0.0910262 1.74285C-0.207778 1.51409 -0.244062 1.27903 -0.215663 1.05895C-0.19673 0.898025 -0.143883 0.744205 -0.0642076 0.606949C-0.0310755 0.548576 0.00758445 0.49414 0.0501829 0.442078L22.061 20.1131L22.1643 20.2062L22.3213 20.3458L22.3221 20.345Z" fill="%231A3EB5"/>%0A<path d="M22.4428 20.2748L22.1824 20.0421L0.140901 0.345062C0.109346 0.375827 0.0785794 0.407378 0.0509692 0.442086C0.00837076 0.494149 -0.0302892 0.548585 -0.0634213 0.606958C-0.143096 0.743425 -0.195944 0.898034 -0.214876 1.05895C-0.242487 1.27983 -0.206991 1.51489 -0.0902399 1.74286L17.028 35.3469C17.1424 35.5702 17.3097 35.7374 17.5053 35.8462C17.6118 35.9062 17.727 35.9488 17.8453 35.974C17.8879 35.9835 17.9329 35.9898 17.977 35.9937H17.9786C18.0465 36.0016 18.1151 36.0017 18.1829 35.9961C18.231 35.9938 18.2776 35.9882 18.3233 35.9788L22.4704 20.3L22.4428 20.2748ZM18.0788 35.8675C18.048 35.8659 18.0181 35.8652 17.9889 35.8612C17.9526 35.8589 17.9147 35.8533 17.88 35.8455C17.8776 35.8455 17.8761 35.8439 17.8737 35.8439C17.7648 35.821 17.6639 35.7831 17.5692 35.7311C17.3901 35.6301 17.2434 35.4771 17.1472 35.2878L0.0288788 1.68212C-0.0705176 1.48965 -0.109174 1.27982 -0.0823532 1.07394C-0.066576 0.935893 -0.0200355 0.797861 0.0533285 0.672437C0.0588505 0.662182 0.0651614 0.651126 0.07305 0.639293L21.9734 20.2117L22.0065 20.2425L22.1722 20.3915L18.0796 35.8683L18.0788 35.8675Z" fill="%231A3EB5"/>%0A<path d="M35.8187 12.6918V12.6934C35.8084 12.9182 35.7319 13.1438 35.5836 13.3426L19.0515 35.5189C18.9016 35.7208 18.7059 35.8573 18.4937 35.933C18.4622 35.9433 18.4314 35.9527 18.3991 35.9606H18.3975C18.3722 35.9669 18.3486 35.9725 18.3233 35.978C18.2768 35.9875 18.2303 35.993 18.1829 35.9953L22.2653 20.5596L22.3229 20.3442L22.4436 20.274L22.5043 20.2385L35.81 12.4678C35.8203 12.5411 35.8234 12.6169 35.8195 12.6926L35.8187 12.6918Z" fill="%231A6EE8"/>%0A<path d="M35.8092 12.4678C35.7997 12.3984 35.784 12.3313 35.7627 12.2643V12.2627C35.7493 12.2201 35.7335 12.1775 35.7138 12.138L22.1824 20.0421L22.0617 20.1123L22.0365 20.1273L22.0057 20.2417L17.88 35.8447L17.8453 35.9733C17.8879 35.9827 17.9328 35.989 17.977 35.993H17.9786C18.0464 36.0009 18.1151 36.0008 18.1829 35.9953C18.231 35.993 18.2776 35.9875 18.3233 35.978C18.3486 35.9725 18.3722 35.9677 18.3975 35.9606H18.3991C18.4306 35.9527 18.4614 35.9433 18.4937 35.933C18.7059 35.8573 18.9016 35.7208 19.0514 35.5189L35.5836 13.3426C35.7319 13.143 35.8084 12.9174 35.8187 12.6934V12.6918C35.8226 12.6161 35.8203 12.5403 35.8092 12.467V12.4678ZM35.3178 13.1454L18.784 35.3217C18.7493 35.3682 18.7122 35.4108 18.6712 35.4479L22.5863 20.6455L22.6076 20.5635L35.3233 13.1367C35.3233 13.1367 35.3193 13.1422 35.3178 13.1462V13.1454Z" fill="%231A6EE8"/>%0A<path d="M35.8195 12.6918L35.8187 12.6934V12.6918H35.8195Z" fill="%230061FF"/>%0A<path d="M35.8092 12.4678L22.5035 20.2385L22.4428 20.274L22.3221 20.3442L22.1651 20.2046L22.0618 20.1115L0.0509644 0.440499C0.0785745 0.405791 0.109341 0.374239 0.140896 0.343475C0.156673 0.327699 0.17245 0.311934 0.189805 0.296947C0.323911 0.177045 0.484839 0.0886963 0.663121 0.0405778C0.866647 -0.0154289 1.09226 -0.0162224 1.3234 0.0555609C1.32497 0.0555609 1.32734 0.0571401 1.32891 0.0571401L35.0456 11.5093C35.0456 11.5093 35.0496 11.5109 35.0527 11.5117C35.2689 11.5929 35.4448 11.7294 35.5718 11.8982C35.6294 11.9716 35.6767 12.0521 35.7138 12.1373C35.7335 12.1775 35.7501 12.2193 35.7627 12.2619V12.2634C35.784 12.3297 35.7998 12.3975 35.8092 12.467V12.4678Z" fill="%230FE4F5"/>%0A<path d="M22.3221 20.345L22.2645 20.5603L18.1821 35.9961C18.1143 36.0016 18.0457 36.0016 17.9778 35.9937H17.9763C17.9321 35.9898 17.8871 35.9835 17.8445 35.974C17.7262 35.9488 17.611 35.9062 17.5045 35.8462C17.3089 35.7374 17.1416 35.5702 17.0273 35.3469L-0.0910262 1.74285C-0.207778 1.51409 -0.244062 1.27903 -0.215663 1.05895C-0.19673 0.898025 -0.143883 0.744205 -0.0642076 0.606949C-0.0310755 0.548576 0.00758445 0.49414 0.0501829 0.442078L22.061 20.1131L22.1643 20.2062L22.3213 20.3458L22.3221 20.345Z" fill="%231A3EB5"/>%0A<path d="M35.8187 12.6918V12.6934C35.8084 12.9182 35.7319 13.1438 35.5836 13.3426L19.0515 35.5189C18.9016 35.7208 18.7059 35.8573 18.4937 35.933C18.4622 35.9433 18.4314 35.9527 18.3991 35.9606H18.3975C18.3722 35.9669 18.3486 35.9725 18.3233 35.978C18.2768 35.9875 18.2303 35.993 18.1829 35.9953L22.2653 20.5596L22.3229 20.3442L22.4436 20.274L22.5043 20.2385L35.81 12.4678C35.8203 12.5411 35.8234 12.6169 35.8195 12.6926L35.8187 12.6918Z" fill="%231A6EE8"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_6983_1933">%0A<rect width="36" height="36" fill="white"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// src/assets/brand/NeutralTrinus_Full.svg
var NeutralTrinus_Full_default = 'data:image/svg+xml,<svg width="117" height="36" viewBox="0 0 117 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M45.0517 27.2814V19.5016H43.4534C43.2333 19.5016 43.0551 19.3233 43.0551 19.1032V16.4423C43.0551 16.2223 43.2333 16.044 43.4534 16.044H45.0517V12.1651C45.0517 11.945 45.23 11.7667 45.4501 11.7667H48.2553C48.4754 11.7667 48.6537 11.945 48.6537 12.1651V16.044H51.5685C51.7886 16.044 51.9669 16.2223 51.9669 16.4423V19.1032C51.9669 19.3233 51.7886 19.5016 51.5685 19.5016H48.6537V26.5612C48.6537 27.1181 49.1049 27.5701 49.6626 27.5701H51.5693C51.7894 27.5701 51.9677 27.7484 51.9677 27.9685V30.3414C51.9677 30.5615 51.7894 30.7398 51.5693 30.7398H48.798C47.5879 30.7398 46.661 30.4369 46.0173 29.8318C45.3735 29.2267 45.0517 28.3764 45.0517 27.2814Z" fill="%231E293B"/>%0A<path d="M71.683 30.3406V16.4416C71.683 16.2215 71.8614 16.0432 72.0814 16.0432H74.9963L75.2843 17.4836H75.4286C75.6589 17.1957 75.9856 16.9078 76.4084 16.6191C77.2919 16.0424 78.3103 15.7545 79.4629 15.7545C81.1345 15.7545 82.5126 16.3264 83.5981 17.4687C84.6828 18.6117 85.2263 20.105 85.2263 21.9494V30.3398C85.2263 30.5599 85.0481 30.7382 84.828 30.7382H82.0228C81.8027 30.7382 81.6244 30.5599 81.6244 30.3398V22.2382C81.6244 21.297 81.3309 20.5334 80.7456 19.9473C80.1595 19.3619 79.3958 19.0685 78.4547 19.0685C77.5136 19.0685 76.75 19.3619 76.1638 19.9473C75.5777 20.5334 75.285 21.297 75.285 22.2382V30.3398C75.285 30.5599 75.1068 30.7382 74.8867 30.7382H72.0814C71.8614 30.7382 71.683 30.5599 71.683 30.3398V30.3406Z" fill="%231E293B"/>%0A<path d="M87.9464 24.832V16.4416C87.9464 16.2215 88.1247 16.0432 88.3448 16.0432H91.15C91.3701 16.0432 91.5484 16.2215 91.5484 16.4416V24.544C91.5484 25.4852 91.841 26.2488 92.4272 26.8349C93.0125 27.421 93.7761 27.7137 94.718 27.7137C95.6599 27.7137 96.4228 27.421 97.0089 26.8349C97.5943 26.2496 97.8877 25.4859 97.8877 24.544V16.4416C97.8877 16.2215 98.066 16.0432 98.2861 16.0432H101.091C101.311 16.0432 101.49 16.2215 101.49 16.4416V30.3406C101.49 30.5607 101.311 30.739 101.091 30.739H98.503C98.3129 30.739 98.1496 30.6049 98.1126 30.4188L97.8885 29.2985H97.7442C97.5138 29.5865 97.1864 29.8744 96.7644 30.1631C95.8809 30.739 94.8624 31.0277 93.7099 31.0277C92.0383 31.0277 90.6601 30.4566 89.5746 29.3135C88.4892 28.1705 87.9464 26.6771 87.9464 24.8328V24.832Z" fill="%231E293B"/>%0A<path d="M104.645 26.2725H107.322C107.498 26.2725 107.66 26.3868 107.704 26.5588C107.79 26.898 108.033 27.2254 108.431 27.541C108.94 27.9441 109.646 28.146 110.549 28.146C112.374 28.146 113.286 27.6175 113.286 26.5612C113.286 26.0997 113.142 25.74 112.854 25.4804C112.566 25.2209 112.038 25.0339 111.269 24.9188L108.964 24.544C105.795 24.025 104.21 22.6326 104.21 20.3654C104.21 19.0787 104.757 17.9885 105.852 17.0947C106.947 16.2017 108.464 15.7552 110.405 15.7552C112.345 15.7552 113.862 16.2838 114.957 17.3401C115.895 18.2449 116.431 19.1497 116.566 20.0546C116.601 20.2944 116.413 20.5098 116.17 20.5098H113.492C113.306 20.5098 113.148 20.3804 113.105 20.1989C113.019 19.8416 112.782 19.5126 112.392 19.2129C111.892 18.8287 111.229 18.637 110.404 18.637C109.579 18.637 108.939 18.805 108.488 19.1411C108.036 19.4772 107.811 19.8858 107.811 20.3654C107.811 21.0762 108.483 21.5282 109.828 21.7199L112.277 22.0946C115.351 22.5561 116.888 24.0447 116.888 26.5612C116.888 27.8486 116.345 28.9144 115.259 29.76C114.174 30.6057 112.603 31.0277 110.548 31.0277C109.511 31.0277 108.593 30.8928 107.797 30.6238C106.999 30.3556 106.385 30.033 105.952 29.6583C105.52 29.2836 105.164 28.856 104.887 28.3756C104.608 27.8959 104.425 27.4873 104.339 27.1512C104.301 27.0045 104.272 26.8665 104.251 26.7363C104.211 26.4933 104.398 26.2725 104.644 26.2725H104.645Z" fill="%231E293B"/>%0A<path d="M68.5647 16.0432H65.7595C65.5394 16.0432 65.3611 16.2216 65.3611 16.4416V30.3406C65.3611 30.5607 65.5394 30.739 65.7595 30.739H68.5647C68.7847 30.739 68.963 30.5607 68.963 30.3406V16.4416C68.963 16.2216 68.7847 16.0432 68.5647 16.0432Z" fill="%231E293B"/>%0A<path d="M68.9079 11.3976L67.3617 10.5045C67.2386 10.4335 67.0864 10.4335 66.9633 10.5045L65.4171 11.3976C65.2941 11.4686 65.2175 11.6003 65.2175 11.7431V13.4549C65.2175 13.675 65.3958 13.8533 65.6159 13.8533H68.7091C68.9292 13.8533 69.1074 13.675 69.1074 13.4549V11.7431C69.1074 11.6011 69.0317 11.4694 68.9079 11.3976Z" fill="%231E293B"/>%0A<path d="M54.6877 30.3406V16.4416C54.6877 16.2215 54.866 16.0432 55.0861 16.0432H57.713L58.001 17.3401H58.1453C58.3181 17.109 58.5295 16.8983 58.7796 16.7059C59.3744 16.2641 60.0284 16.0432 60.7391 16.0432H63.2225C63.4426 16.0432 63.6209 16.2215 63.6209 16.4416V19.1024C63.6209 19.3225 63.4426 19.5008 63.2225 19.5008H61.0279C59.4927 19.5008 58.2905 20.1595 58.2905 22.2382V30.3399C58.2905 30.56 58.1122 30.7382 57.8921 30.7382H55.0869C54.8668 30.7382 54.6885 30.56 54.6885 30.3399L54.6877 30.3406Z" fill="%231E293B"/>%0A<path d="M36.0333 12.4673C36.0286 12.4326 36.0223 12.3986 36.0144 12.3647C36.0065 12.3308 35.997 12.2977 35.9868 12.2637V12.2622C35.9734 12.2196 35.9576 12.177 35.9379 12.1375C35.9008 12.0523 35.8527 11.9719 35.7959 11.8985C35.6681 11.7297 35.493 11.5932 35.2768 11.5119C35.2744 11.5103 35.2729 11.5104 35.2697 11.5096L1.5527 0.0567962C1.5527 0.0567962 1.54875 0.0552169 1.54717 0.0552169C1.42568 0.0173512 1.30577 0 1.18902 0C1.0841 0 0.983139 0.0142012 0.886898 0.0410227C0.846665 0.0520668 0.808012 0.0654776 0.769357 0.0804661C0.758313 0.0851993 0.746466 0.0899271 0.735422 0.0946603C0.707811 0.106493 0.680199 0.119114 0.654166 0.133314C0.643122 0.138836 0.632874 0.144355 0.621829 0.149877C0.58633 0.169599 0.552405 0.190903 0.519273 0.21378C0.482196 0.239813 0.447498 0.267428 0.413577 0.297405C0.396222 0.312393 0.380435 0.328158 0.364658 0.343936C0.333103 0.374701 0.302346 0.406255 0.274735 0.440965C0.232136 0.49303 0.193466 0.547469 0.160334 0.605845C0.0806583 0.742319 0.0278103 0.896936 0.00887745 1.05787C-0.0187329 1.27875 0.0167723 1.51382 0.133525 1.74181L17.252 35.3476C17.3663 35.5709 17.5336 35.7381 17.7292 35.8469C17.7821 35.8769 17.8381 35.9022 17.8949 35.9235C17.9517 35.9448 18.0101 35.9613 18.0692 35.974C18.1118 35.9834 18.1568 35.9897 18.201 35.9937H18.2026C18.2396 35.9984 18.2775 36 18.3154 36C18.3461 36 18.3769 35.9984 18.4076 35.996C18.4558 35.9937 18.5023 35.9882 18.5481 35.9787C18.5733 35.9732 18.597 35.9684 18.6222 35.9613H18.6238C18.6553 35.9534 18.6861 35.944 18.7185 35.9337C18.7666 35.9164 18.8123 35.8959 18.8581 35.8722C18.8715 35.8651 18.8849 35.858 18.8983 35.8501C18.9314 35.8312 18.9646 35.8114 18.9961 35.7893C19.0088 35.7807 19.0214 35.772 19.034 35.7625C19.0758 35.731 19.1168 35.6971 19.1555 35.6584C19.1981 35.6158 19.2383 35.5693 19.2762 35.5188L35.8085 13.3413C35.9568 13.1418 36.0333 12.9161 36.0436 12.6921V12.6905C36.0459 12.6527 36.046 12.6148 36.0444 12.5769C36.0428 12.539 36.0396 12.502 36.0341 12.4657L36.0333 12.4673ZM19.9018 32.6804L23.0604 20.7362L33.2344 14.7936L19.9018 32.6796V32.6804ZM34.6733 12.569L22.6202 19.6089L2.52459 1.64873L34.6733 12.5682V12.569ZM2.01259 2.79574L21.8739 20.546L18.1765 34.528L2.01259 2.79574Z" fill="%231E293B"/>%0A</svg>%0A';

// src/assets/brand/NeutralTrinus_Icon.svg
var NeutralTrinus_Icon_default = 'data:image/svg+xml,<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g clip-path="url(%23clip0_6983_1929)">%0A<path d="M36.2127 12.4673C36.208 12.4326 36.2017 12.3986 36.1938 12.3647C36.1859 12.3308 36.1765 12.2977 36.1662 12.2637V12.2622C36.1529 12.2196 36.1371 12.177 36.1174 12.1375C36.0804 12.0523 36.0323 11.9719 35.9756 11.8985C35.8479 11.7297 35.673 11.5932 35.4572 11.5119C35.4548 11.5103 35.4532 11.5104 35.4501 11.5096L1.77559 0.0567962C1.77559 0.0567962 1.77165 0.0552169 1.77007 0.0552169C1.64874 0.0173512 1.52898 0 1.41237 0C1.30759 0 1.20675 0.0142012 1.11063 0.0410227C1.07045 0.0520668 1.03185 0.0654776 0.99324 0.0804661C0.98221 0.0851993 0.970378 0.0899271 0.959348 0.0946603C0.931772 0.106493 0.904194 0.119114 0.878194 0.133314C0.867164 0.138836 0.856929 0.144355 0.845899 0.149877C0.810444 0.169599 0.776562 0.190903 0.743471 0.21378C0.706441 0.239813 0.671787 0.267428 0.637909 0.297405C0.620575 0.312393 0.604809 0.328158 0.589051 0.343936C0.557536 0.374701 0.526818 0.406255 0.499242 0.440965C0.456697 0.49303 0.418076 0.547469 0.384985 0.605845C0.30541 0.742319 0.252629 0.896936 0.23372 1.05787C0.206144 1.27875 0.241605 1.51382 0.35821 1.74181L17.4551 35.3476C17.5693 35.5709 17.7363 35.7381 17.9317 35.8469C17.9845 35.8769 18.0404 35.9022 18.0972 35.9235C18.1539 35.9448 18.2122 35.9613 18.2713 35.974C18.3138 35.9834 18.3587 35.9897 18.4029 35.9937H18.4044C18.4415 35.9984 18.4793 36 18.5171 36C18.5478 36 18.5786 35.9984 18.6093 35.996C18.6573 35.9937 18.7038 35.9882 18.7495 35.9787C18.7747 35.9732 18.7984 35.9684 18.8236 35.9613H18.8252C18.8567 35.9534 18.8874 35.944 18.9197 35.9337C18.9678 35.9164 19.0135 35.8959 19.0592 35.8722C19.0725 35.8651 19.0859 35.858 19.0993 35.8501C19.1324 35.8312 19.1655 35.8114 19.197 35.7893C19.2096 35.7807 19.2222 35.772 19.2348 35.7625C19.2766 35.731 19.3176 35.6971 19.3562 35.6584C19.3987 35.6158 19.4389 35.5693 19.4767 35.5188L35.9882 13.3413C36.1363 13.1418 36.2127 12.9161 36.223 12.6921V12.6905C36.2253 12.6527 36.2253 12.6148 36.2238 12.5769C36.2222 12.539 36.219 12.502 36.2135 12.4657L36.2127 12.4673ZM20.1015 32.6804L23.2562 20.7362L33.4173 14.7936L20.1015 32.6796V32.6804ZM34.8544 12.569L22.8165 19.6089L2.74626 1.64873L34.8544 12.5682V12.569ZM2.23491 2.79574L22.0712 20.546L18.3784 34.528L2.23491 2.79574Z" fill="%231E293B"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_6983_1929">%0A<rect width="36" height="36" fill="white"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// src/assets/brand/ColorNeo_Full.svg
var ColorNeo_Full_default = 'data:image/svg+xml,<svg width="117" height="36" viewBox="0 0 117 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g clip-path="url(%23clip0_7495_19719)">%0A<path d="M16.5379 18.3598C16.5514 21.4006 18.1563 23.3545 21.1217 23.3545H28.0236C28.2117 23.355 28.3921 23.43 28.5251 23.5632C28.6582 23.6964 28.7331 23.8769 28.7336 24.0652C28.7331 24.2536 28.6582 24.4342 28.5251 24.5674C28.3921 24.7007 28.2118 24.7759 28.0236 24.7765H21.0947C17.4408 24.7765 15.2732 22.1605 15.2523 18.3598C15.2523 18.3156 15.2523 17.6098 15.2523 17.5655C15.3224 13.8367 17.4825 11.2816 21.0934 11.2816H28.0223C28.2106 11.2822 28.3909 11.3574 28.5239 11.4907C28.6569 11.624 28.7319 11.8045 28.7324 11.9929C28.7319 12.1813 28.6569 12.3617 28.5239 12.4949C28.3908 12.6281 28.2105 12.7031 28.0223 12.7036H21.1205C18.2012 12.7036 16.5999 14.5978 16.5391 17.5606C16.5391 17.6067 16.5391 18.3156 16.5391 18.3598" fill="%23006A6E"/>%0A<path d="M4.67013 12.8444C6.39851 16.1131 8.1228 19.3802 9.84299 22.6456C10.752 24.0388 11.4627 22.8467 11.6156 22.4434C11.8576 21.8064 11.83 20.2405 11.83 19.4025V12.4946C11.8304 12.3062 11.9054 12.1256 12.0384 11.9924C12.1714 11.8591 12.3518 11.7839 12.54 11.7833C12.7282 11.7839 12.9085 11.8591 13.0416 11.9924C13.1746 12.1256 13.2495 12.3062 13.25 12.4946V19.4296C13.25 21.2592 13.2783 22.4679 12.7359 23.5389C12.4067 24.19 11.6733 24.7685 10.908 24.7759C9.99225 24.7882 9.3289 24.5048 8.80621 23.7148C7.07783 20.4456 5.35334 17.1788 3.63273 13.9142C2.7237 12.521 2.01367 13.7131 1.86012 14.1164C1.61812 14.7534 1.64576 16.3187 1.64576 17.1567V24.0652C1.64528 24.2536 1.57032 24.434 1.43727 24.5672C1.30422 24.7004 1.12389 24.7754 0.935733 24.7759C0.747516 24.7754 0.567138 24.7004 0.43399 24.5673C0.300842 24.4341 0.225738 24.2536 0.22509 24.0652V17.1302C0.22509 15.3006 0.197458 14.0919 0.739805 13.0209C1.06902 12.3698 1.80239 11.7913 2.56769 11.7839C3.48348 11.771 4.1462 12.055 4.66951 12.8444" fill="%23006A6E"/>%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9757 17.9596C17.9762 17.7711 18.0513 17.5906 18.1844 17.4574C18.3176 17.3242 18.4981 17.2492 18.6864 17.2489H22.5682C22.7563 17.2494 22.9366 17.3244 23.0697 17.4576C23.2027 17.5908 23.2777 17.7712 23.2782 17.9596C23.2777 18.1479 23.2027 18.3284 23.0697 18.4616C22.9366 18.5948 22.7563 18.6698 22.5682 18.6703H18.6864C18.4981 18.67 18.3176 18.595 18.1844 18.4618C18.0513 18.3286 17.9762 18.148 17.9757 17.9596Z" fill="%23006A6E"/>%0A<path d="M36.5316 24.7009C38.1764 24.3997 39.6284 23.7394 40.7082 22.3327C41.6136 21.2217 42.127 19.7917 42.0883 18.1453C42.1756 14.2665 39.4669 11.5982 35.8934 11.3086C32.7929 11.0566 30.0971 12.5622 29.0708 15.5028C29.0467 15.5662 29.0306 15.6322 29.0229 15.6996C29.0093 15.8702 29.0639 16.0392 29.1747 16.1696C29.2854 16.2999 29.4434 16.381 29.6138 16.3949C29.7523 16.4064 29.8907 16.3728 30.0085 16.299C30.1263 16.2252 30.2171 16.1152 30.2673 15.9855C31.1763 13.7629 33.3997 12.3274 35.7952 12.5216C38.833 12.7676 40.7451 15.1801 40.7979 18.1858C40.7592 19.4284 40.3956 20.6451 39.6082 21.6251C38.8054 22.5639 37.6501 23.2051 36.3031 23.4516C33.662 23.9349 31.1438 22.6352 30.2022 20.0087C30.1566 19.8558 30.0561 19.7251 29.92 19.6419C29.7839 19.5586 29.6219 19.5288 29.4651 19.5581C29.0352 19.6362 28.8595 20.0844 29.0063 20.4864C30.1948 23.7375 33.2357 25.3065 36.5291 24.7034" fill="%23006A6E"/>%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M29.2385 17.2513C29.4245 17.2263 29.6129 17.2759 29.7625 17.3893C29.912 17.5028 30.0107 17.6709 30.037 17.8569C30.0622 18.0432 30.0126 18.2319 29.8991 18.3817C29.7856 18.5315 29.6174 18.6302 29.4313 18.6562C29.2453 18.6812 29.057 18.6316 28.9074 18.5182C28.7578 18.4047 28.6591 18.2366 28.6329 18.0506C28.607 17.8638 28.6562 17.6744 28.7698 17.5239C28.8833 17.3735 29.0519 17.2743 29.2385 17.2483" fill="%23006A6E"/>%0A<path d="M107.335 11.4168C107.335 11.2422 107.422 11.1555 107.596 11.1555H116.61C116.818 11.1555 116.921 11.2422 116.921 11.4168V11.4261C116.924 11.4644 116.917 11.5029 116.903 11.5385C116.888 11.5741 116.866 11.6059 116.837 11.6314C116.772 11.6797 116.691 11.7038 116.61 11.6996H107.857V17.5692H115.028C115.111 17.5659 115.193 17.5873 115.265 17.6307C115.296 17.6532 115.321 17.6833 115.337 17.7182C115.353 17.7531 115.36 17.7915 115.357 17.8299V17.8422C115.36 17.8805 115.353 17.919 115.337 17.9538C115.321 17.9887 115.296 18.0188 115.265 18.0414C115.193 18.0847 115.111 18.1061 115.028 18.1028H107.857V24.4808H116.803C117.011 24.4808 117.114 24.5681 117.114 24.7427V24.755C117.117 24.7927 117.112 24.8307 117.098 24.8659C117.083 24.901 117.061 24.9323 117.033 24.9573C116.967 25.0069 116.885 25.0311 116.803 25.0255H107.596C107.423 25.0255 107.336 24.9354 107.335 24.755V11.4168ZM104.637 23.1246C104.696 23.0703 104.771 23.0383 104.851 23.0342C104.913 23.0348 104.972 23.0595 105.016 23.103L105.035 23.1246C105.055 23.1446 105.071 23.1684 105.081 23.1946C105.092 23.2207 105.097 23.2488 105.096 23.277C105.097 23.3267 105.086 23.3758 105.064 23.4203C105.042 23.4647 105.009 23.5031 104.969 23.5322C104.363 24.0509 103.674 24.4633 102.93 24.7519C102.176 25.0413 101.375 25.1873 100.568 25.1823C99.31 25.1915 98.0727 24.8639 96.9838 24.2337C95.9049 23.6172 95.0058 22.7289 94.3759 21.657C93.7347 20.5803 93.4003 19.3483 93.4092 18.0948C93.3978 16.8403 93.7312 15.6067 94.3728 14.529C95.0027 13.4579 95.9018 12.5706 96.9808 11.9554C98.0711 11.3264 99.3093 11 100.568 11.0098C101.372 11.0048 102.171 11.1482 102.924 11.4328C103.671 11.716 104.365 12.1221 104.978 12.6341C105.081 12.7301 105.134 12.8186 105.134 12.8954C105.135 12.917 105.129 12.9383 105.118 12.9569C105.111 12.9683 105.107 12.9811 105.106 12.9944L105.087 13.0344L105.075 13.0436C105.048 13.0723 105.015 13.095 104.979 13.11C104.942 13.1251 104.903 13.1322 104.864 13.1309C104.785 13.1293 104.71 13.1021 104.649 13.0534C103.371 12.0673 102.011 11.5755 100.568 11.5779C99.4054 11.5691 98.2613 11.8675 97.251 12.4429C96.2547 13.0037 95.4254 13.8198 94.8482 14.8075C94.2574 15.8039 93.9511 16.9436 93.9626 18.1022C93.9527 19.2601 94.2601 20.3986 94.8513 21.3939C95.4344 22.3771 96.2636 23.1911 97.2572 23.7553C98.2634 24.3358 99.4064 24.6366 100.568 24.6265C102.011 24.6228 103.368 24.1222 104.637 23.1246ZM90.9296 11.4666C90.9264 11.3863 90.9505 11.3072 90.9978 11.2422C91.0212 11.2132 91.0512 11.1902 91.0853 11.1751C91.1193 11.16 91.1565 11.1533 91.1937 11.1555H91.2029C91.3712 11.1555 91.4547 11.2582 91.4547 11.4666V24.7083C91.4547 24.9229 91.3712 25.0286 91.2029 25.0286H91.1937C91.1558 25.0325 91.1176 25.0265 91.0827 25.0112C91.0478 24.9959 91.0175 24.9718 90.9947 24.9413C90.9483 24.8728 90.9255 24.791 90.9296 24.7083V11.4666ZM83.2581 24.8546C83.2084 24.9696 83.1353 25.0348 83.0468 25.0471H82.9971C82.9068 25.0471 82.8325 24.9819 82.7735 24.8546L77.2186 11.5632C77.1909 11.5161 77.1769 11.4622 77.1781 11.4076C77.177 11.3714 77.1843 11.3353 77.1994 11.3024C77.2145 11.2694 77.2371 11.2404 77.2653 11.2176C77.3127 11.1728 77.3746 11.1465 77.4397 11.1432H77.4704C77.5115 11.1476 77.5494 11.1676 77.5761 11.1992C77.623 11.2439 77.6601 11.2979 77.6848 11.3578L83.0155 24.1328L88.3401 11.3486C88.3898 11.2115 88.4629 11.1432 88.5637 11.1432H88.5827C88.65 11.1449 88.7148 11.1689 88.767 11.2115C88.7961 11.2348 88.8193 11.2648 88.8345 11.2989C88.8497 11.333 88.8564 11.3703 88.8542 11.4076C88.8559 11.4648 88.843 11.5215 88.8167 11.5724L83.2581 24.8546ZM66.5136 19.2322H71.5243C72.1919 19.239 72.8492 19.0672 73.4283 18.7349C73.9936 18.4087 74.4624 17.9384 74.787 17.3718C75.1191 16.7973 75.2908 16.1439 75.2839 15.4801C75.2904 14.8105 75.1189 14.1512 74.787 13.5699C74.4648 12.9983 73.9957 12.5234 73.4283 12.1946C72.8504 11.8584 72.1927 11.6843 71.5243 11.6904H66.5136V19.2322ZM72.7582 19.6011C72.3579 19.7204 71.942 19.7793 71.5243 19.7757H66.5136V24.7556C66.5136 24.9358 66.43 25.0262 66.2617 25.0262H66.2495C66.0758 25.0262 65.9888 24.936 65.9884 24.7556V11.4144C65.9884 11.2398 66.0756 11.1531 66.2495 11.1531H71.5243C72.2827 11.1473 73.0285 11.3484 73.6814 11.7347C74.3343 12.1144 74.8758 12.6596 75.2513 13.3154C75.6345 13.9711 75.8342 14.718 75.8293 15.4776C75.8372 16.3109 75.5945 17.1272 75.1328 17.8206C74.6836 18.509 74.0488 19.0558 73.3018 19.3976L75.4779 24.656C75.487 24.6887 75.4934 24.722 75.497 24.7556C75.4968 24.7903 75.4896 24.8246 75.4756 24.8563C75.4617 24.888 75.4413 24.9165 75.4159 24.9401C75.3931 24.9656 75.3654 24.9863 75.3343 25.0006C75.3032 25.015 75.2696 25.0229 75.2353 25.0237H75.2077C75.156 25.022 75.1057 25.0069 75.0615 24.98C75.0036 24.9443 74.9588 24.8908 74.9338 24.8276L72.7582 19.6011ZM54.9511 11.4156C54.9511 11.241 55.0377 11.1543 55.2121 11.1543H64.2256C64.4339 11.1543 64.537 11.241 64.537 11.4156V11.4248C64.5396 11.4632 64.5334 11.5017 64.5188 11.5373C64.5042 11.5729 64.4817 11.6046 64.4529 11.6302C64.3873 11.6785 64.307 11.7026 64.2256 11.6984H55.4732V17.5692H62.6441C62.727 17.566 62.809 17.5874 62.8799 17.6307C62.9112 17.6531 62.9362 17.6832 62.9525 17.7181C62.9688 17.753 62.976 17.7914 62.9733 17.8299V17.8422C62.976 17.8806 62.9688 17.9191 62.9525 17.9539C62.9362 17.9888 62.9112 18.0189 62.8799 18.0414C62.809 18.0846 62.727 18.106 62.6441 18.1028H55.4732V24.4808H64.4185C64.6267 24.4808 64.7293 24.5681 64.7293 24.7427V24.755C64.7327 24.7927 64.7272 24.8306 64.7133 24.8658C64.6993 24.9009 64.6772 24.9323 64.6488 24.9573C64.5827 25.007 64.501 25.0312 64.4185 25.0255H55.2121C55.0377 25.0255 54.9511 24.9352 54.9511 24.755V11.4156ZM43.3321 23.092C43.2612 23.0224 43.2176 22.9297 43.2093 22.8307C43.2091 22.7617 43.236 22.6955 43.2842 22.6462L43.3057 22.6272C43.3504 22.6024 43.4008 22.5897 43.4519 22.5903C43.5422 22.5903 43.6362 22.6518 43.7412 22.7747C44.2266 23.3877 44.8509 23.8762 45.5623 24.1999C46.2711 24.5204 47.1404 24.68 48.1702 24.6788C49.0467 24.6788 49.8286 24.5638 50.5171 24.3308C51.2056 24.0978 51.7572 23.724 52.1675 23.2076C52.5778 22.6911 52.786 22.0314 52.786 21.2285C52.786 20.5344 52.5465 19.9841 52.0711 19.5685C51.6036 19.1625 51.0562 18.8592 50.4643 18.6783C49.8673 18.4984 49.1098 18.317 48.1917 18.1342C47.1226 17.9411 46.2459 17.6952 45.5617 17.3964C44.8811 17.0982 44.3652 16.7244 44.0262 16.2738C43.6871 15.8231 43.5102 15.2747 43.5102 14.6243C43.5102 13.8588 43.7092 13.2059 44.1103 12.6612C44.5114 12.1165 45.074 11.7027 45.8074 11.423C46.5407 11.1432 47.4141 11 48.4153 11C49.3041 11 50.0737 11.118 50.7247 11.3578C51.3758 11.5976 51.9992 12.0077 52.5925 12.5837C52.621 12.6116 52.6434 12.645 52.6584 12.6819C52.6734 12.7189 52.6807 12.7585 52.6798 12.7983C52.6804 12.8608 52.6608 12.9219 52.6239 12.9723L52.6017 12.9914C52.5532 13.0242 52.4957 13.0413 52.4371 13.0405C52.3817 13.0395 52.3277 13.0224 52.2817 12.9914C52.2163 12.9479 52.1547 12.8989 52.0975 12.845C51.7675 12.558 51.4127 12.3009 51.0374 12.0765C50.6966 11.8871 50.3287 11.7517 49.9465 11.6751C49.4415 11.5794 48.928 11.5356 48.4141 11.5441C47.6967 11.5385 46.9824 11.6392 46.2944 11.8429C45.6755 12.0212 45.116 12.3631 44.6748 12.8327C44.2555 13.2893 44.0452 13.8865 44.044 14.6243C44.044 15.4739 44.4313 16.1275 45.2061 16.5849C45.9808 17.0423 47.018 17.3938 48.3176 17.6393C49.3556 17.8477 50.1983 18.0561 50.8543 18.2676C51.5008 18.4736 52.091 18.8262 52.579 19.298C53.0733 19.7739 53.3208 20.4168 53.3216 21.2267C53.3216 22.1071 53.0978 22.8465 52.6503 23.4449C52.2027 24.0433 51.5906 24.4872 50.8138 24.7765C50.0358 25.0663 49.1554 25.2116 48.1727 25.2124C47.138 25.2124 46.2304 25.0485 45.4499 24.7206C44.6694 24.3927 43.9635 23.8502 43.3321 23.0932V23.092Z" fill="%23374151"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_7495_19719">%0A<rect width="116.89" height="36" fill="white"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// src/assets/brand/ColorNeo_Icon.svg
var ColorNeo_Icon_default = 'data:image/svg+xml,<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g clip-path="url(%23clip0_7495_19721)">%0A<path d="M42.7287 18.6424C42.7629 26.3448 46.8282 31.2938 54.3396 31.2938H71.8219C72.2985 31.2951 72.7553 31.4852 73.0923 31.8225C73.4293 32.1598 73.6192 32.617 73.6204 33.0941C73.6192 33.5713 73.4293 34.0286 73.0924 34.3662C72.7554 34.7038 72.2987 34.8942 71.8219 34.8959H54.2711C45.0157 34.8959 39.5254 28.2696 39.4725 18.6424C39.4725 18.5303 39.4725 16.7425 39.4725 16.6303C39.6498 7.18535 45.1215 0.713234 54.268 0.713234H71.8188C72.2955 0.714878 72.7523 0.905281 73.0892 1.24287C73.4262 1.58046 73.6161 2.03782 73.6173 2.51504C73.6161 2.99211 73.4262 3.44929 73.0892 3.78663C72.7522 4.12397 72.2954 4.31403 71.8188 4.31526H54.3364C46.9418 4.31526 42.8858 9.11329 42.7318 16.6179C42.7318 16.7347 42.7318 18.5303 42.7318 18.6424" fill="%23006A6E"/>%0A<path d="M12.6678 4.67189C17.0458 12.9515 21.4134 21.227 25.7706 29.4983C28.0732 33.0271 29.8733 30.0075 30.2606 28.9859C30.8736 27.3726 30.8036 23.4061 30.8036 21.2835V3.78578C30.8048 3.30856 30.9946 2.85122 31.3316 2.51363C31.6686 2.17604 32.1253 1.98564 32.6021 1.98399C33.0788 1.98564 33.5356 2.17604 33.8726 2.51363C34.2095 2.85122 34.3993 3.30856 34.4006 3.78578V21.3521C34.4006 25.9866 34.4722 29.0482 33.0984 31.761C32.2645 33.4102 30.4069 34.8756 28.4684 34.8943C26.1487 34.9255 24.4685 34.2075 23.1445 32.2064C18.7665 23.9258 14.3984 15.6508 10.0401 7.38158C7.73753 3.85275 5.93902 6.87234 5.55008 7.89392C4.9371 9.50728 5.00711 13.4722 5.00711 15.5948V33.0941C5.00588 33.5712 4.81601 34.0283 4.47899 34.3657C4.14198 34.703 3.68522 34.8931 3.20861 34.8943C2.73186 34.8931 2.27496 34.7031 1.9377 34.3658C1.60044 34.0285 1.4102 33.5713 1.40856 33.0941V15.5278C1.40856 10.8933 1.33857 7.83164 2.71233 5.11883C3.54623 3.46965 5.40384 2.00424 7.34235 1.98555C9.66202 1.95285 11.3407 2.67232 12.6662 4.67189" fill="%23006A6E"/>%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M46.3708 17.6286C46.372 17.1512 46.5621 16.6938 46.8995 16.3564C47.2368 16.019 47.694 15.8292 48.1708 15.8284H58.0034C58.48 15.8296 58.9368 16.0196 59.2738 16.357C59.6108 16.6943 59.8007 17.1515 59.8019 17.6286C59.8007 18.1056 59.6108 18.5628 59.2738 18.9002C58.9368 19.2375 58.48 19.4276 58.0034 19.4288H48.1708C47.694 19.428 47.2368 19.2381 46.8995 18.9007C46.5621 18.5633 46.372 18.1059 46.3708 17.6286Z" fill="%23006A6E"/>%0A<path d="M93.3727 34.7043C97.5391 33.9413 101.217 32.2687 103.952 28.7056C106.245 25.8916 107.546 22.2693 107.448 18.0989C107.669 8.27392 100.808 1.51526 91.7562 0.781775C83.9026 0.143284 77.0742 3.9571 74.4745 11.4056C74.4135 11.566 74.3727 11.7334 74.3532 11.904C74.3188 12.3361 74.4571 12.7642 74.7376 13.0944C75.0182 13.4246 75.4182 13.6299 75.8499 13.6653C76.2007 13.6944 76.5514 13.6092 76.8498 13.4222C77.1482 13.2353 77.3781 12.9567 77.5052 12.6281C79.8078 6.99849 85.4397 3.36221 91.5073 3.85432C99.2022 4.47723 104.045 10.5881 104.179 18.2017C104.081 21.349 103.16 24.4309 101.166 26.9132C99.1322 29.2912 96.2057 30.9154 92.7939 31.5399C86.104 32.764 79.7253 29.4718 77.3403 22.8191C77.2249 22.4316 76.9704 22.1005 76.6256 21.8898C76.2809 21.679 75.8704 21.6034 75.4733 21.6776C74.3843 21.8753 73.9393 23.0106 74.3112 24.0291C77.3216 32.264 85.0243 36.2383 93.3664 34.7106" fill="%23006A6E"/>%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M74.8993 15.8346C75.3704 15.7711 75.8475 15.8967 76.2265 16.1841C76.6054 16.4715 76.8554 16.8973 76.9218 17.3685C76.9856 17.8404 76.86 18.3184 76.5725 18.6979C76.285 19.0773 75.859 19.3273 75.3878 19.393C74.9166 19.4565 74.4395 19.3308 74.0606 19.0434C73.6816 18.756 73.4317 18.3303 73.3652 17.859C73.2996 17.386 73.4244 16.9062 73.712 16.5251C73.9996 16.144 74.4267 15.8928 74.8993 15.8268" fill="%23006A6E"/>%0A<path d="M272.717 1.05585C272.717 0.613579 272.938 0.394 273.379 0.394H296.211C296.739 0.394 296.999 0.613579 296.999 1.05585V1.0792C297.005 1.17643 296.989 1.27386 296.952 1.36402C296.915 1.45418 296.858 1.53468 296.785 1.59935C296.62 1.72169 296.417 1.78278 296.211 1.7722H274.04V16.6397H292.204C292.414 16.6314 292.623 16.6856 292.803 16.7954C292.882 16.8525 292.945 16.9288 292.986 17.0171C293.027 17.1054 293.045 17.2028 293.038 17.3V17.3311C293.045 17.4283 293.027 17.5257 292.986 17.614C292.945 17.7023 292.882 17.7786 292.803 17.8357C292.623 17.9455 292.414 17.9997 292.204 17.9914H274.04V34.1468H296.7C297.227 34.1468 297.487 34.368 297.487 34.8102V34.8414C297.496 34.9369 297.481 35.0331 297.446 35.1221C297.41 35.2111 297.354 35.2905 297.282 35.3537C297.115 35.4794 296.908 35.5408 296.7 35.5266H273.379C272.939 35.5266 272.719 35.2982 272.717 34.8414V1.05585ZM265.883 30.7114C266.032 30.5739 266.224 30.4929 266.426 30.4825C266.583 30.4842 266.733 30.5467 266.844 30.6569L266.891 30.7114C266.941 30.7621 266.981 30.8224 267.008 30.8887C267.035 30.9551 267.048 31.0261 267.047 31.0976C267.049 31.2234 267.021 31.3479 266.965 31.4604C266.909 31.573 266.826 31.6702 266.725 31.7439C265.189 33.0577 263.443 34.1023 261.559 34.8336C259.65 35.5666 257.621 35.9363 255.576 35.9237C252.39 35.9468 249.256 35.1173 246.498 33.5208C243.765 31.9593 241.487 29.7092 239.892 26.9942C238.268 24.2668 237.421 21.1463 237.443 17.9712C237.414 14.7934 238.259 11.6688 239.884 8.93888C241.48 6.22575 243.757 3.97821 246.49 2.42002C249.252 0.826827 252.388 4.03335e-05 255.576 0.0249221C257.614 0.012225 259.637 0.375406 261.544 1.09632C263.436 1.81374 265.194 2.8422 266.748 4.13928C267.008 4.38222 267.142 4.60647 267.142 4.80114C267.143 4.85568 267.13 4.90966 267.103 4.95686C267.085 4.98569 267.074 5.01815 267.07 5.05186L267.023 5.15309L266.992 5.17645C266.924 5.24922 266.841 5.30658 266.748 5.34471C266.656 5.38283 266.557 5.40087 266.457 5.39759C266.259 5.39346 266.068 5.32454 265.912 5.20137C262.676 2.70347 259.231 1.45763 255.576 1.46386C252.632 1.44149 249.734 2.1973 247.175 3.65497C244.651 5.07543 242.55 7.14263 241.088 9.64432C239.592 12.1683 238.816 15.055 238.845 17.9899C238.82 20.9228 239.599 23.8065 241.096 26.3276C242.573 28.8182 244.674 30.88 247.19 32.3092C249.739 33.7796 252.634 34.5415 255.576 34.5159C259.232 34.5066 262.668 33.2384 265.883 30.7114ZM231.162 1.18198C231.154 0.978455 231.215 0.778178 231.335 0.613565C231.394 0.54006 231.47 0.48179 231.557 0.443597C231.643 0.405405 231.737 0.388408 231.831 0.394H231.855C232.281 0.394 232.493 0.654059 232.493 1.18198V34.723C232.493 35.2665 232.281 35.5344 231.855 35.5344H231.831C231.735 35.5442 231.639 35.529 231.55 35.4903C231.462 35.4515 231.385 35.3905 231.327 35.3132C231.21 35.1396 231.152 34.9324 231.162 34.723V1.18198ZM211.731 35.0937C211.605 35.3849 211.419 35.5499 211.195 35.5811H211.069C210.841 35.5811 210.652 35.416 210.503 35.0937L196.433 1.42649C196.362 1.30726 196.327 1.17082 196.33 1.03249C196.327 0.940649 196.346 0.849399 196.384 0.765911C196.422 0.682423 196.479 0.608953 196.551 0.55127C196.671 0.437814 196.828 0.371004 196.993 0.362843H197.07C197.175 0.373787 197.27 0.424563 197.338 0.504562C197.457 0.617713 197.551 0.754588 197.613 0.906338L211.116 33.2654L224.603 0.882974C224.729 0.535697 224.914 0.362843 225.17 0.362843H225.218C225.388 0.367054 225.552 0.427861 225.684 0.535701C225.758 0.59471 225.817 0.670651 225.856 0.757109C225.894 0.843568 225.911 0.93802 225.905 1.03249C225.91 1.17742 225.877 1.32107 225.811 1.44983L211.731 35.0937ZM169.317 20.8522H182.009C183.7 20.8692 185.365 20.4343 186.832 19.5923C188.264 18.7662 189.451 17.5749 190.273 16.1398C191.115 14.6845 191.549 13.0294 191.532 11.348C191.548 9.65199 191.114 7.98207 190.273 6.50948C189.457 5.06167 188.269 3.85884 186.832 3.02581C185.368 2.17433 183.702 1.73323 182.009 1.74884H169.317V20.8522ZM185.134 21.7866C184.12 22.0888 183.067 22.2378 182.009 22.2288H169.317V34.8429C169.317 35.2992 169.105 35.5281 168.679 35.5281H168.648C168.208 35.5281 167.988 35.2997 167.987 34.8429V1.04962C167.987 0.607344 168.208 0.387765 168.648 0.387765H182.009C183.93 0.373116 185.819 0.882396 187.473 1.86096C189.127 2.82286 190.498 4.20379 191.449 5.86478C192.42 7.52568 192.926 9.41762 192.913 11.3418C192.933 13.4524 192.319 15.5203 191.149 17.2766C190.012 19.0202 188.403 20.4052 186.511 21.2711L192.023 34.5906C192.046 34.6733 192.063 34.7576 192.072 34.8429C192.071 34.9307 192.053 35.0175 192.018 35.0979C191.982 35.1783 191.931 35.2505 191.866 35.3101C191.809 35.3749 191.738 35.4271 191.66 35.4635C191.581 35.5 191.496 35.5198 191.409 35.5219H191.339C191.208 35.5176 191.081 35.4795 190.969 35.4113C190.822 35.3209 190.709 35.1854 190.645 35.0251L185.134 21.7866ZM140.029 1.05273C140.029 0.610461 140.248 0.390883 140.69 0.390883H163.521C164.049 0.390883 164.31 0.610461 164.31 1.05273V1.0761C164.317 1.17333 164.301 1.27075 164.264 1.3609C164.227 1.45106 164.17 1.53156 164.097 1.59623C163.931 1.71857 163.728 1.77964 163.521 1.76909H141.352V16.6397H159.515C159.725 16.6317 159.933 16.6858 160.113 16.7954C160.192 16.8523 160.255 16.9286 160.297 17.0169C160.338 17.1052 160.356 17.2027 160.349 17.3V17.3311C160.356 17.4284 160.338 17.5259 160.297 17.6142C160.255 17.7025 160.192 17.7788 160.113 17.8357C159.933 17.9453 159.725 17.9995 159.515 17.9914H141.352V34.1468H164.01C164.537 34.1468 164.797 34.368 164.797 34.8102V34.8414C164.806 34.9368 164.792 35.0329 164.757 35.122C164.721 35.211 164.665 35.2904 164.593 35.3537C164.426 35.4795 164.219 35.5409 164.01 35.5266H140.69C140.248 35.5266 140.029 35.2977 140.029 34.8414V1.05273ZM110.598 30.6289C110.419 30.4527 110.308 30.2178 110.287 29.967C110.287 29.7924 110.355 29.6247 110.477 29.4998L110.531 29.4516C110.645 29.3889 110.772 29.3567 110.902 29.3581C111.13 29.3581 111.368 29.5139 111.634 29.8253C112.864 31.378 114.445 32.6153 116.247 33.4351C118.043 34.247 120.245 34.6514 122.853 34.6483C125.073 34.6483 127.054 34.357 128.798 33.7668C130.542 33.1766 131.939 32.2298 132.978 30.9216C134.018 29.6135 134.545 27.9426 134.545 25.9087C134.545 24.1505 133.938 22.7568 132.734 21.704C131.55 20.6756 130.163 19.9074 128.664 19.4491C127.152 18.9933 125.233 18.5339 122.908 18.0708C120.2 17.5819 117.979 16.9589 116.246 16.2021C114.522 15.4468 113.215 14.5 112.356 13.3585C111.498 12.217 111.05 10.8279 111.05 9.18025C111.05 7.24142 111.554 5.58758 112.569 4.20782C113.585 2.82805 115.011 1.77999 116.868 1.07142C118.726 0.362851 120.938 0 123.474 0C125.725 0 127.675 0.298992 129.324 0.906338C130.973 1.51368 132.552 2.55241 134.055 4.01159C134.127 4.0822 134.184 4.16687 134.222 4.26036C134.26 4.35385 134.278 4.45418 134.276 4.55509C134.277 4.71344 134.228 4.86804 134.134 4.9958L134.078 5.04408C133.955 5.12718 133.81 5.17064 133.661 5.16865C133.521 5.16592 133.384 5.12267 133.268 5.04408C133.102 4.93395 132.946 4.80996 132.801 4.67345C131.965 3.94651 131.066 3.29509 130.116 2.72683C129.253 2.24711 128.321 1.90407 127.353 1.70991C126.073 1.46771 124.773 1.35656 123.471 1.3782C121.654 1.36404 119.844 1.61908 118.102 2.13505C116.534 2.58662 115.117 3.45273 113.999 4.64229C112.937 5.79884 112.405 7.31149 112.401 9.18025C112.401 11.3324 113.383 12.9878 115.345 14.1465C117.307 15.3051 119.935 16.1954 123.227 16.8172C125.856 17.3452 127.99 17.8731 129.652 18.4088C131.29 18.9305 132.785 19.8238 134.021 21.0188C135.273 22.2242 135.9 23.8526 135.902 25.904C135.902 28.1341 135.335 30.007 134.201 31.5228C133.068 33.0385 131.517 34.1629 129.549 34.8959C127.579 35.6299 125.349 35.9979 122.859 36C120.238 36 117.94 35.5847 115.963 34.7542C113.986 33.9236 112.198 32.5495 110.598 30.632V30.6289Z" fill="%23808285"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_7495_19721">%0A<rect width="36" height="36" fill="white"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// src/assets/brand/NeutralNeo_Full.svg
var NeutralNeo_Full_default = 'data:image/svg+xml,<svg width="117" height="36" viewBox="0 0 117 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g clip-path="url(%23clip0_7495_19723)">%0A<path d="M16.6479 18.3598C16.6614 21.4006 18.2663 23.3545 21.2317 23.3545H28.1336C28.3217 23.355 28.502 23.43 28.6351 23.5632C28.7681 23.6964 28.8431 23.8769 28.8436 24.0652C28.8431 24.2536 28.7682 24.4342 28.6351 24.5674C28.5021 24.7007 28.3218 24.7759 28.1336 24.7765H21.2047C17.5507 24.7765 15.3832 22.1605 15.3623 18.3598C15.3623 18.3156 15.3623 17.6098 15.3623 17.5655C15.4323 13.8367 17.5925 11.2816 21.2034 11.2816H28.1323C28.3205 11.2822 28.5009 11.3574 28.6339 11.4907C28.7669 11.624 28.8419 11.8045 28.8424 11.9929C28.8419 12.1813 28.7669 12.3617 28.6339 12.4949C28.5008 12.6281 28.3205 12.7031 28.1323 12.7036H21.2305C18.3111 12.7036 16.7099 14.5978 16.6491 17.5606C16.6491 17.6067 16.6491 18.3156 16.6491 18.3598" fill="white"/>%0A<path d="M4.78011 12.8444C6.50849 16.1131 8.23278 19.3802 9.95297 22.6456C10.862 24.0388 11.5726 22.8467 11.7256 22.4434C11.9676 21.8064 11.9399 20.2405 11.9399 19.4025V12.4946C11.9404 12.3062 12.0154 12.1256 12.1484 11.9924C12.2814 11.8591 12.4617 11.7839 12.65 11.7833C12.8382 11.7839 13.0185 11.8591 13.1515 11.9924C13.2846 12.1256 13.3595 12.3062 13.36 12.4946V19.4296C13.36 21.2592 13.3882 22.4679 12.8459 23.5389C12.5167 24.19 11.7833 24.7685 11.018 24.7759C10.1022 24.7882 9.43889 24.5048 8.9162 23.7148C7.18781 20.4456 5.46332 17.1788 3.74272 13.9142C2.83369 12.521 2.12366 13.7131 1.97011 14.1164C1.72811 14.7534 1.75575 16.3187 1.75575 17.1567V24.0652C1.75526 24.2536 1.6803 24.434 1.54725 24.5672C1.4142 24.7004 1.23388 24.7754 1.04572 24.7759C0.857501 24.7754 0.677123 24.7004 0.543975 24.5673C0.410827 24.4341 0.335724 24.2536 0.335075 24.0652V17.1302C0.335075 15.3006 0.307444 14.0919 0.84979 13.0209C1.17901 12.3698 1.91237 11.7913 2.67768 11.7839C3.59346 11.771 4.25619 12.055 4.7795 12.8444" fill="white"/>%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0857 17.9596C18.0862 17.7711 18.1612 17.5906 18.2944 17.4574C18.4276 17.3242 18.6081 17.2492 18.7964 17.2489H22.6782C22.8663 17.2494 23.0466 17.3244 23.1797 17.4576C23.3127 17.5908 23.3877 17.7712 23.3882 17.9596C23.3877 18.1479 23.3127 18.3284 23.1797 18.4616C23.0466 18.5948 22.8663 18.6698 22.6782 18.6703H18.7964C18.6081 18.67 18.4276 18.595 18.2944 18.4618C18.1612 18.3286 18.0862 18.148 18.0857 17.9596Z" fill="white"/>%0A<path d="M36.6416 24.7009C38.2864 24.3997 39.7384 23.7394 40.8182 22.3327C41.7235 21.2217 42.237 19.7917 42.1983 18.1453C42.2855 14.2665 39.5769 11.5982 36.0034 11.3086C32.9029 11.0566 30.2071 12.5622 29.1808 15.5028C29.1567 15.5662 29.1406 15.6322 29.1329 15.6996C29.1193 15.8702 29.1739 16.0392 29.2847 16.1696C29.3954 16.2999 29.5533 16.381 29.7238 16.3949C29.8622 16.4064 30.0007 16.3728 30.1185 16.299C30.2363 16.2252 30.3271 16.1152 30.3773 15.9855C31.2863 13.7629 33.5097 12.3274 35.9051 12.5216C38.943 12.7676 40.855 15.1801 40.9079 18.1858C40.8692 19.4284 40.5056 20.6451 39.7182 21.6251C38.9154 22.5639 37.7601 23.2051 36.4131 23.4516C33.772 23.9349 31.2537 22.6352 30.3122 20.0087C30.2666 19.8558 30.1661 19.7251 30.03 19.6419C29.8939 19.5586 29.7319 19.5288 29.5751 19.5581C29.1452 19.6362 28.9695 20.0844 29.1163 20.4864C30.3048 23.7375 33.3457 25.3065 36.6391 24.7034" fill="white"/>%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M29.3485 17.2513C29.5345 17.2263 29.7228 17.2759 29.8724 17.3893C30.022 17.5028 30.1207 17.6709 30.1469 17.8569C30.1721 18.0432 30.1225 18.2319 30.009 18.3817C29.8955 18.5315 29.7274 18.6302 29.5413 18.6562C29.3553 18.6812 29.167 18.6316 29.0174 18.5182C28.8678 18.4047 28.7691 18.2366 28.7429 18.0506C28.7169 17.8638 28.7662 17.6744 28.8797 17.5239C28.9933 17.3735 29.1619 17.2743 29.3485 17.2483" fill="white"/>%0A<path d="M107.445 11.4168C107.445 11.2422 107.532 11.1555 107.706 11.1555H116.72C116.928 11.1555 117.031 11.2422 117.031 11.4168V11.4261C117.034 11.4644 117.027 11.5029 117.013 11.5385C116.998 11.5741 116.976 11.6059 116.947 11.6314C116.882 11.6797 116.801 11.7038 116.72 11.6996H107.967V17.5692H115.138C115.221 17.5659 115.303 17.5873 115.375 17.6307C115.406 17.6532 115.431 17.6833 115.447 17.7182C115.463 17.7531 115.47 17.7915 115.467 17.8299V17.8422C115.47 17.8805 115.463 17.919 115.447 17.9538C115.431 17.9887 115.406 18.0188 115.375 18.0414C115.303 18.0847 115.221 18.1061 115.138 18.1028H107.967V24.4808H116.913C117.121 24.4808 117.224 24.5681 117.224 24.7427V24.755C117.227 24.7927 117.222 24.8307 117.208 24.8659C117.193 24.901 117.171 24.9323 117.143 24.9573C117.077 25.0069 116.995 25.0311 116.913 25.0255H107.706C107.533 25.0255 107.446 24.9354 107.445 24.755V11.4168ZM104.747 23.1246C104.806 23.0703 104.881 23.0383 104.961 23.0342C105.023 23.0348 105.082 23.0595 105.126 23.103L105.145 23.1246C105.165 23.1446 105.181 23.1684 105.191 23.1946C105.202 23.2207 105.207 23.2488 105.206 23.277C105.207 23.3267 105.196 23.3758 105.174 23.4203C105.152 23.4647 105.119 23.5031 105.079 23.5322C104.473 24.0509 103.784 24.4633 103.04 24.7519C102.286 25.0413 101.485 25.1873 100.678 25.1823C99.42 25.1915 98.1827 24.8639 97.0938 24.2337C96.0149 23.6172 95.1158 22.7289 94.4859 21.657C93.8447 20.5803 93.5103 19.3483 93.5191 18.0948C93.5078 16.8403 93.8412 15.6067 94.4828 14.529C95.1127 13.4579 96.0118 12.5706 97.0908 11.9554C98.1811 11.3264 99.4193 11 100.678 11.0098C101.482 11.0048 102.281 11.1482 103.034 11.4328C103.781 11.716 104.475 12.1221 105.088 12.6341C105.191 12.7301 105.244 12.8186 105.244 12.8954C105.245 12.917 105.239 12.9383 105.228 12.9569C105.221 12.9683 105.217 12.9811 105.216 12.9944L105.197 13.0344L105.185 13.0436C105.158 13.0723 105.125 13.095 105.089 13.11C105.052 13.1251 105.013 13.1322 104.974 13.1309C104.895 13.1293 104.82 13.1021 104.759 13.0534C103.481 12.0673 102.121 11.5755 100.678 11.5779C99.5154 11.5691 98.3713 11.8675 97.361 12.4429C96.3647 13.0037 95.5353 13.8198 94.9582 14.8075C94.3674 15.8039 94.0611 16.9436 94.0725 18.1022C94.0627 19.2601 94.3701 20.3986 94.9613 21.3939C95.5444 22.3771 96.3736 23.1911 97.3672 23.7553C98.3734 24.3358 99.5164 24.6366 100.678 24.6265C102.121 24.6228 103.478 24.1222 104.747 23.1246ZM91.0396 11.4666C91.0364 11.3863 91.0604 11.3072 91.1078 11.2422C91.1312 11.2132 91.1612 11.1902 91.1952 11.1751C91.2293 11.16 91.2665 11.1533 91.3037 11.1555H91.3129C91.4812 11.1555 91.5647 11.2582 91.5647 11.4666V24.7083C91.5647 24.9229 91.4812 25.0286 91.3129 25.0286H91.3037C91.2658 25.0325 91.2276 25.0265 91.1927 25.0112C91.1578 24.9959 91.1275 24.9718 91.1047 24.9413C91.0583 24.8728 91.0355 24.791 91.0396 24.7083V11.4666ZM83.3681 24.8546C83.3184 24.9696 83.2453 25.0348 83.1568 25.0471H83.1071C83.0168 25.0471 82.9425 24.9819 82.8835 24.8546L77.3286 11.5632C77.3009 11.5161 77.2869 11.4622 77.2881 11.4076C77.287 11.3714 77.2943 11.3353 77.3094 11.3024C77.3245 11.2694 77.3471 11.2404 77.3753 11.2176C77.4227 11.1728 77.4846 11.1465 77.5497 11.1432H77.5804C77.6215 11.1476 77.6594 11.1676 77.6861 11.1992C77.733 11.2439 77.77 11.2979 77.7948 11.3578L83.1255 24.1328L88.4501 11.3486C88.4998 11.2115 88.5729 11.1432 88.6737 11.1432H88.6927C88.76 11.1449 88.8248 11.1689 88.877 11.2115C88.9061 11.2348 88.9293 11.2648 88.9445 11.2989C88.9597 11.333 88.9664 11.3703 88.9642 11.4076C88.9659 11.4648 88.953 11.5215 88.9267 11.5724L83.3681 24.8546ZM66.6236 19.2322H71.6343C72.3019 19.239 72.9591 19.0672 73.5383 18.7349C74.1036 18.4087 74.5724 17.9384 74.8969 17.3718C75.2291 16.7973 75.4008 16.1439 75.3938 15.4801C75.4004 14.8105 75.2289 14.1512 74.8969 13.5699C74.5748 12.9983 74.1057 12.5234 73.5383 12.1946C72.9604 11.8584 72.3027 11.6843 71.6343 11.6904H66.6236V19.2322ZM72.8682 19.6011C72.4679 19.7204 72.052 19.7793 71.6343 19.7757H66.6236V24.7556C66.6236 24.9358 66.54 25.0262 66.3717 25.0262H66.3594C66.1858 25.0262 66.0988 24.936 66.0984 24.7556V11.4144C66.0984 11.2398 66.1856 11.1531 66.3594 11.1531H71.6343C72.3927 11.1473 73.1384 11.3484 73.7914 11.7347C74.4443 12.1144 74.9857 12.6596 75.3613 13.3154C75.7445 13.9711 75.9441 14.718 75.9393 15.4776C75.9472 16.3109 75.7045 17.1272 75.2427 17.8206C74.7936 18.509 74.1588 19.0558 73.4118 19.3976L75.5879 24.656C75.597 24.6887 75.6034 24.722 75.607 24.7556C75.6068 24.7903 75.5995 24.8246 75.5856 24.8563C75.5717 24.888 75.5513 24.9165 75.5259 24.9401C75.5031 24.9656 75.4753 24.9863 75.4443 25.0006C75.4132 25.015 75.3795 25.0229 75.3453 25.0237H75.3177C75.266 25.022 75.2157 25.0069 75.1715 24.98C75.1136 24.9443 75.0688 24.8908 75.0437 24.8276L72.8682 19.6011ZM55.0611 11.4156C55.0611 11.241 55.1477 11.1543 55.3221 11.1543H64.3356C64.5438 11.1543 64.647 11.241 64.647 11.4156V11.4248C64.6496 11.4632 64.6433 11.5017 64.6288 11.5373C64.6142 11.5729 64.5916 11.6046 64.5629 11.6302C64.4973 11.6785 64.417 11.7026 64.3356 11.6984H55.5832V17.5692H62.754C62.837 17.566 62.919 17.5874 62.9899 17.6307C63.0212 17.6531 63.0461 17.6832 63.0625 17.7181C63.0788 17.753 63.086 17.7914 63.0833 17.8299V17.8422C63.086 17.8806 63.0788 17.9191 63.0625 17.9539C63.0461 17.9888 63.0212 18.0189 62.9899 18.0414C62.919 18.0846 62.837 18.106 62.754 18.1028H55.5832V24.4808H64.5285C64.7367 24.4808 64.8393 24.5681 64.8393 24.7427V24.755C64.8427 24.7927 64.8372 24.8306 64.8232 24.8658C64.8093 24.9009 64.7872 24.9323 64.7588 24.9573C64.6927 25.007 64.611 25.0312 64.5285 25.0255H55.3221C55.1477 25.0255 55.0611 24.9352 55.0611 24.755V11.4156ZM43.4421 23.092C43.3712 23.0224 43.3276 22.9297 43.3193 22.8307C43.3191 22.7617 43.346 22.6955 43.3942 22.6462L43.4157 22.6272C43.4604 22.6024 43.5108 22.5897 43.5619 22.5903C43.6521 22.5903 43.7461 22.6518 43.8512 22.7747C44.3366 23.3877 44.9609 23.8762 45.6723 24.1999C46.3811 24.5204 47.2504 24.68 48.2802 24.6788C49.1567 24.6788 49.9386 24.5638 50.6271 24.3308C51.3156 24.0978 51.8672 23.724 52.2775 23.2076C52.6878 22.6911 52.896 22.0314 52.896 21.2285C52.896 20.5344 52.6565 19.9841 52.1811 19.5685C51.7136 19.1625 51.1662 18.8592 50.5743 18.6783C49.9773 18.4984 49.2198 18.317 48.3017 18.1342C47.2326 17.9411 46.3559 17.6952 45.6717 17.3964C44.9911 17.0982 44.4752 16.7244 44.1362 16.2738C43.7971 15.8231 43.6202 15.2747 43.6202 14.6243C43.6202 13.8588 43.8192 13.2059 44.2203 12.6612C44.6214 12.1165 45.184 11.7027 45.9174 11.423C46.6507 11.1432 47.5241 11 48.5253 11C49.414 11 50.1837 11.118 50.8347 11.3578C51.4858 11.5976 52.1092 12.0077 52.7025 12.5837C52.731 12.6116 52.7534 12.645 52.7684 12.6819C52.7834 12.7189 52.7907 12.7585 52.7897 12.7983C52.7904 12.8608 52.7707 12.9219 52.7338 12.9723L52.7117 12.9914C52.6632 13.0242 52.6057 13.0413 52.5471 13.0405C52.4917 13.0395 52.4377 13.0224 52.3917 12.9914C52.3263 12.9479 52.2647 12.8989 52.2075 12.845C51.8774 12.558 51.5227 12.3009 51.1473 12.0765C50.8066 11.8871 50.4386 11.7517 50.0565 11.6751C49.5515 11.5794 49.038 11.5356 48.5241 11.5441C47.8067 11.5385 47.0924 11.6392 46.4044 11.8429C45.7855 12.0212 45.226 12.3631 44.7848 12.8327C44.3655 13.2893 44.1552 13.8865 44.154 14.6243C44.154 15.4739 44.5413 16.1275 45.316 16.5849C46.0908 17.0423 47.128 17.3938 48.4276 17.6393C49.4656 17.8477 50.3083 18.0561 50.9643 18.2676C51.6108 18.4736 52.201 18.8262 52.689 19.298C53.1832 19.7739 53.4308 20.4168 53.4316 21.2267C53.4316 22.1071 53.2078 22.8465 52.7603 23.4449C52.3127 24.0433 51.7005 24.4872 50.9238 24.7765C50.1458 25.0663 49.2654 25.2116 48.2827 25.2124C47.2479 25.2124 46.3403 25.0485 45.5599 24.7206C44.7794 24.3927 44.0735 23.8502 43.4421 23.0932V23.092Z" fill="white"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_7495_19723">%0A<rect width="116.89" height="36" fill="white"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// src/assets/brand/NeutralNeo_Icon.svg
var NeutralNeo_Icon_default = 'data:image/svg+xml,<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g clip-path="url(%23clip0_7495_19725)">%0A<path d="M42.7287 18.6424C42.7629 26.3448 46.8282 31.2938 54.3396 31.2938H71.8219C72.2985 31.2951 72.7553 31.4852 73.0923 31.8225C73.4293 32.1598 73.6192 32.617 73.6204 33.0941C73.6192 33.5713 73.4293 34.0286 73.0924 34.3662C72.7554 34.7038 72.2987 34.8942 71.8219 34.8959H54.2711C45.0157 34.8959 39.5254 28.2696 39.4725 18.6424C39.4725 18.5303 39.4725 16.7425 39.4725 16.6303C39.6498 7.18535 45.1215 0.713234 54.268 0.713234H71.8188C72.2955 0.714878 72.7523 0.905281 73.0892 1.24287C73.4262 1.58046 73.6161 2.03782 73.6173 2.51504C73.6161 2.99211 73.4262 3.44929 73.0892 3.78663C72.7522 4.12397 72.2954 4.31403 71.8188 4.31526H54.3364C46.9418 4.31526 42.8858 9.11329 42.7318 16.6179C42.7318 16.7347 42.7318 18.5303 42.7318 18.6424" fill="white"/>%0A<path d="M12.6678 4.67189C17.0458 12.9515 21.4134 21.227 25.7706 29.4983C28.0732 33.0271 29.8733 30.0075 30.2606 28.9859C30.8736 27.3726 30.8036 23.4061 30.8036 21.2835V3.78578C30.8048 3.30856 30.9946 2.85122 31.3316 2.51363C31.6686 2.17604 32.1253 1.98564 32.6021 1.98399C33.0788 1.98564 33.5356 2.17604 33.8726 2.51363C34.2095 2.85122 34.3993 3.30856 34.4006 3.78578V21.3521C34.4006 25.9866 34.4722 29.0482 33.0984 31.761C32.2645 33.4102 30.4069 34.8756 28.4684 34.8943C26.1487 34.9255 24.4685 34.2075 23.1445 32.2064C18.7665 23.9258 14.3984 15.6508 10.0401 7.38158C7.73753 3.85275 5.93902 6.87234 5.55008 7.89392C4.9371 9.50728 5.00711 13.4722 5.00711 15.5948V33.0941C5.00588 33.5712 4.81601 34.0283 4.47899 34.3657C4.14198 34.703 3.68522 34.8931 3.20861 34.8943C2.73186 34.8931 2.27496 34.7031 1.9377 34.3658C1.60044 34.0285 1.4102 33.5713 1.40856 33.0941V15.5278C1.40856 10.8933 1.33857 7.83164 2.71233 5.11883C3.54623 3.46965 5.40384 2.00424 7.34235 1.98555C9.66202 1.95285 11.3407 2.67232 12.6662 4.67189" fill="white"/>%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M46.3708 17.6286C46.372 17.1512 46.5621 16.6938 46.8995 16.3564C47.2368 16.019 47.694 15.8292 48.1708 15.8284H58.0034C58.48 15.8296 58.9368 16.0196 59.2738 16.357C59.6108 16.6943 59.8007 17.1515 59.8019 17.6286C59.8007 18.1056 59.6108 18.5628 59.2738 18.9002C58.9368 19.2375 58.48 19.4276 58.0034 19.4288H48.1708C47.694 19.428 47.2368 19.2381 46.8995 18.9007C46.5621 18.5633 46.372 18.1059 46.3708 17.6286Z" fill="white"/>%0A<path d="M93.3727 34.7043C97.5391 33.9413 101.217 32.2687 103.952 28.7056C106.245 25.8916 107.546 22.2693 107.448 18.0989C107.669 8.27392 100.808 1.51526 91.7562 0.781775C83.9026 0.143284 77.0742 3.9571 74.4745 11.4056C74.4135 11.566 74.3727 11.7334 74.3532 11.904C74.3188 12.3361 74.4571 12.7642 74.7376 13.0944C75.0182 13.4246 75.4182 13.6299 75.8499 13.6653C76.2007 13.6944 76.5514 13.6092 76.8498 13.4222C77.1482 13.2353 77.3781 12.9567 77.5052 12.6281C79.8078 6.99849 85.4397 3.36221 91.5073 3.85432C99.2022 4.47723 104.045 10.5881 104.179 18.2017C104.081 21.349 103.16 24.4309 101.166 26.9132C99.1322 29.2912 96.2057 30.9154 92.7939 31.5399C86.104 32.764 79.7253 29.4718 77.3403 22.8191C77.2249 22.4316 76.9704 22.1005 76.6256 21.8898C76.2809 21.679 75.8704 21.6034 75.4733 21.6776C74.3843 21.8753 73.9393 23.0106 74.3112 24.0291C77.3216 32.264 85.0243 36.2383 93.3664 34.7106" fill="white"/>%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M74.8993 15.8346C75.3704 15.7711 75.8475 15.8967 76.2265 16.1841C76.6054 16.4715 76.8554 16.8973 76.9218 17.3685C76.9856 17.8404 76.86 18.3184 76.5725 18.6979C76.285 19.0773 75.859 19.3273 75.3878 19.393C74.9166 19.4565 74.4395 19.3308 74.0606 19.0434C73.6816 18.756 73.4317 18.3303 73.3652 17.859C73.2996 17.386 73.4244 16.9062 73.712 16.5251C73.9996 16.144 74.4267 15.8928 74.8993 15.8268" fill="white"/>%0A<path d="M272.717 1.05585C272.717 0.613579 272.938 0.394 273.379 0.394H296.211C296.739 0.394 296.999 0.613579 296.999 1.05585V1.0792C297.005 1.17643 296.989 1.27386 296.952 1.36402C296.915 1.45418 296.858 1.53468 296.785 1.59935C296.62 1.72169 296.417 1.78278 296.211 1.7722H274.04V16.6397H292.204C292.414 16.6314 292.623 16.6856 292.803 16.7954C292.882 16.8525 292.945 16.9288 292.986 17.0171C293.027 17.1054 293.045 17.2028 293.038 17.3V17.3311C293.045 17.4283 293.027 17.5257 292.986 17.614C292.945 17.7023 292.882 17.7786 292.803 17.8357C292.623 17.9455 292.414 17.9997 292.204 17.9914H274.04V34.1468H296.7C297.227 34.1468 297.487 34.368 297.487 34.8102V34.8414C297.496 34.9369 297.481 35.0331 297.446 35.1221C297.41 35.2111 297.354 35.2905 297.282 35.3537C297.115 35.4794 296.908 35.5408 296.7 35.5266H273.379C272.939 35.5266 272.719 35.2982 272.717 34.8414V1.05585ZM265.883 30.7114C266.032 30.5739 266.224 30.4929 266.426 30.4825C266.583 30.4842 266.733 30.5467 266.844 30.6569L266.891 30.7114C266.941 30.7621 266.981 30.8224 267.008 30.8887C267.035 30.9551 267.048 31.0261 267.047 31.0976C267.049 31.2234 267.021 31.3479 266.965 31.4604C266.909 31.573 266.826 31.6702 266.725 31.7439C265.189 33.0577 263.443 34.1023 261.559 34.8336C259.65 35.5666 257.621 35.9363 255.576 35.9237C252.39 35.9468 249.256 35.1173 246.498 33.5208C243.765 31.9593 241.487 29.7092 239.892 26.9942C238.268 24.2668 237.421 21.1463 237.443 17.9712C237.414 14.7934 238.259 11.6688 239.884 8.93888C241.48 6.22575 243.757 3.97821 246.49 2.42002C249.252 0.826827 252.388 4.03335e-05 255.576 0.0249221C257.614 0.012225 259.637 0.375406 261.544 1.09632C263.436 1.81374 265.194 2.8422 266.748 4.13928C267.008 4.38222 267.142 4.60647 267.142 4.80114C267.143 4.85568 267.13 4.90966 267.103 4.95686C267.085 4.98569 267.074 5.01815 267.07 5.05186L267.023 5.15309L266.992 5.17645C266.924 5.24922 266.841 5.30658 266.748 5.34471C266.656 5.38283 266.557 5.40087 266.457 5.39759C266.259 5.39346 266.068 5.32454 265.912 5.20137C262.676 2.70347 259.231 1.45763 255.576 1.46386C252.632 1.44149 249.734 2.1973 247.175 3.65497C244.651 5.07543 242.55 7.14263 241.088 9.64432C239.592 12.1683 238.816 15.055 238.845 17.9899C238.82 20.9228 239.599 23.8065 241.096 26.3276C242.573 28.8182 244.674 30.88 247.19 32.3092C249.739 33.7796 252.634 34.5415 255.576 34.5159C259.232 34.5066 262.668 33.2384 265.883 30.7114ZM231.162 1.18198C231.154 0.978455 231.215 0.778178 231.335 0.613565C231.394 0.54006 231.47 0.48179 231.557 0.443597C231.643 0.405405 231.737 0.388408 231.831 0.394H231.855C232.281 0.394 232.493 0.654059 232.493 1.18198V34.723C232.493 35.2665 232.281 35.5344 231.855 35.5344H231.831C231.735 35.5442 231.639 35.529 231.55 35.4903C231.462 35.4515 231.385 35.3905 231.327 35.3132C231.21 35.1396 231.152 34.9324 231.162 34.723V1.18198ZM211.731 35.0937C211.605 35.3849 211.419 35.5499 211.195 35.5811H211.069C210.841 35.5811 210.652 35.416 210.503 35.0937L196.433 1.42649C196.362 1.30726 196.327 1.17082 196.33 1.03249C196.327 0.940649 196.346 0.849399 196.384 0.765911C196.422 0.682423 196.479 0.608953 196.551 0.55127C196.671 0.437814 196.828 0.371004 196.993 0.362843H197.07C197.175 0.373787 197.27 0.424563 197.338 0.504562C197.457 0.617713 197.551 0.754588 197.613 0.906338L211.116 33.2654L224.603 0.882974C224.729 0.535697 224.914 0.362843 225.17 0.362843H225.218C225.388 0.367054 225.552 0.427861 225.684 0.535701C225.758 0.59471 225.817 0.670651 225.856 0.757109C225.894 0.843568 225.911 0.93802 225.905 1.03249C225.91 1.17742 225.877 1.32107 225.811 1.44983L211.731 35.0937ZM169.317 20.8522H182.009C183.7 20.8692 185.365 20.4343 186.832 19.5923C188.264 18.7662 189.451 17.5749 190.273 16.1398C191.115 14.6845 191.549 13.0294 191.532 11.348C191.548 9.65199 191.114 7.98207 190.273 6.50948C189.457 5.06167 188.269 3.85884 186.832 3.02581C185.368 2.17433 183.702 1.73323 182.009 1.74884H169.317V20.8522ZM185.134 21.7866C184.12 22.0888 183.067 22.2378 182.009 22.2288H169.317V34.8429C169.317 35.2992 169.105 35.5281 168.679 35.5281H168.648C168.208 35.5281 167.988 35.2997 167.987 34.8429V1.04962C167.987 0.607344 168.208 0.387765 168.648 0.387765H182.009C183.93 0.373116 185.819 0.882396 187.473 1.86096C189.127 2.82286 190.498 4.20379 191.449 5.86478C192.42 7.52568 192.926 9.41762 192.913 11.3418C192.933 13.4524 192.319 15.5203 191.149 17.2766C190.012 19.0202 188.403 20.4052 186.511 21.2711L192.023 34.5906C192.046 34.6733 192.063 34.7576 192.072 34.8429C192.071 34.9307 192.053 35.0175 192.018 35.0979C191.982 35.1783 191.931 35.2505 191.866 35.3101C191.809 35.3749 191.738 35.4271 191.66 35.4635C191.581 35.5 191.496 35.5198 191.409 35.5219H191.339C191.208 35.5176 191.081 35.4795 190.969 35.4113C190.822 35.3209 190.709 35.1854 190.645 35.0251L185.134 21.7866ZM140.029 1.05273C140.029 0.610461 140.248 0.390883 140.69 0.390883H163.521C164.049 0.390883 164.31 0.610461 164.31 1.05273V1.0761C164.317 1.17333 164.301 1.27075 164.264 1.3609C164.227 1.45106 164.17 1.53156 164.097 1.59623C163.931 1.71857 163.728 1.77964 163.521 1.76909H141.352V16.6397H159.515C159.725 16.6317 159.933 16.6858 160.113 16.7954C160.192 16.8523 160.255 16.9286 160.297 17.0169C160.338 17.1052 160.356 17.2027 160.349 17.3V17.3311C160.356 17.4284 160.338 17.5259 160.297 17.6142C160.255 17.7025 160.192 17.7788 160.113 17.8357C159.933 17.9453 159.725 17.9995 159.515 17.9914H141.352V34.1468H164.01C164.537 34.1468 164.797 34.368 164.797 34.8102V34.8414C164.806 34.9368 164.792 35.0329 164.757 35.122C164.721 35.211 164.665 35.2904 164.593 35.3537C164.426 35.4795 164.219 35.5409 164.01 35.5266H140.69C140.248 35.5266 140.029 35.2977 140.029 34.8414V1.05273ZM110.598 30.6289C110.419 30.4527 110.308 30.2178 110.287 29.967C110.287 29.7924 110.355 29.6247 110.477 29.4998L110.531 29.4516C110.645 29.3889 110.772 29.3567 110.902 29.3581C111.13 29.3581 111.368 29.5139 111.634 29.8253C112.864 31.378 114.445 32.6153 116.247 33.4351C118.043 34.247 120.245 34.6514 122.853 34.6483C125.073 34.6483 127.054 34.357 128.798 33.7668C130.542 33.1766 131.939 32.2298 132.978 30.9216C134.018 29.6135 134.545 27.9426 134.545 25.9087C134.545 24.1505 133.938 22.7568 132.734 21.704C131.55 20.6756 130.163 19.9074 128.664 19.4491C127.152 18.9933 125.233 18.5339 122.908 18.0708C120.2 17.5819 117.979 16.9589 116.246 16.2021C114.522 15.4468 113.215 14.5 112.356 13.3585C111.498 12.217 111.05 10.8279 111.05 9.18025C111.05 7.24142 111.554 5.58758 112.569 4.20782C113.585 2.82805 115.011 1.77999 116.868 1.07142C118.726 0.362851 120.938 0 123.474 0C125.725 0 127.675 0.298992 129.324 0.906338C130.973 1.51368 132.552 2.55241 134.055 4.01159C134.127 4.0822 134.184 4.16687 134.222 4.26036C134.26 4.35385 134.278 4.45418 134.276 4.55509C134.277 4.71344 134.228 4.86804 134.134 4.9958L134.078 5.04408C133.955 5.12718 133.81 5.17064 133.661 5.16865C133.521 5.16592 133.384 5.12267 133.268 5.04408C133.102 4.93395 132.946 4.80996 132.801 4.67345C131.965 3.94651 131.066 3.29509 130.116 2.72683C129.253 2.24711 128.321 1.90407 127.353 1.70991C126.073 1.46771 124.773 1.35656 123.471 1.3782C121.654 1.36404 119.844 1.61908 118.102 2.13505C116.534 2.58662 115.117 3.45273 113.999 4.64229C112.937 5.79884 112.405 7.31149 112.401 9.18025C112.401 11.3324 113.383 12.9878 115.345 14.1465C117.307 15.3051 119.935 16.1954 123.227 16.8172C125.856 17.3452 127.99 17.8731 129.652 18.4088C131.29 18.9305 132.785 19.8238 134.021 21.0188C135.273 22.2242 135.9 23.8526 135.902 25.904C135.902 28.1341 135.335 30.007 134.201 31.5228C133.068 33.0385 131.517 34.1629 129.549 34.8959C127.579 35.6299 125.349 35.9979 122.859 36C120.238 36 117.94 35.5847 115.963 34.7542C113.986 33.9236 112.198 32.5495 110.598 30.632V30.6289Z" fill="white"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_7495_19725">%0A<rect width="36" height="36" fill="white"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// src/assets/brand/ColorTrinusBank_Full.svg
var ColorTrinusBank_Full_default = 'data:image/svg+xml,<svg width="117" height="36" viewBox="0 0 117 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M77.886 11.7072H79.0678V17.1922H79.1661C79.5398 16.6058 80.6625 15.4294 82.5129 15.4294C84.9729 15.4294 86.9431 17.3871 86.9431 20.5229C86.9431 23.6587 84.9729 25.6182 82.5129 25.6182C80.6625 25.6182 79.5415 24.4418 79.1661 23.8554H79.0678L78.8711 25.4233H77.8878V11.7072H77.886ZM85.7614 20.5247C85.7614 18.0754 84.3043 16.6058 82.4146 16.6058C80.5248 16.6058 79.0678 18.0754 79.0678 20.5247C79.0678 22.974 80.5248 24.4436 82.4146 24.4436C84.3043 24.4436 85.7614 22.974 85.7614 20.5247Z" fill="%231A6EE8"/>%0A<path d="M95.2118 24.0521H95.1134C94.8971 24.3453 94.62 24.6009 94.3053 24.8369C93.7547 25.2284 92.9663 25.6218 91.865 25.6218C89.8179 25.6218 88.5182 24.3667 88.5182 22.5843C88.5182 20.8018 89.7786 19.5486 92.3566 19.5486H95.2118V19.157C95.2118 17.4514 94.3643 16.6094 92.6516 16.6094C91.0765 16.6094 90.1326 17.3728 89.9931 18.4705H88.8114C89.0277 16.8239 90.2881 15.4348 92.6498 15.4348C95.0115 15.4348 96.3899 16.7864 96.3899 19.157V25.4251H95.4066L95.21 24.0539H95.2135L95.2118 24.0521ZM95.2118 20.6212H92.3566C90.5652 20.6212 89.6981 21.483 89.6981 22.5789C89.6981 23.6748 90.4651 24.44 91.8632 24.44C93.9299 24.44 95.21 23.1671 95.21 21.1093V20.6195L95.2118 20.6212Z" fill="%231A6EE8"/>%0A<path d="M98.3619 15.6261H99.3452L99.5418 16.899H99.6402C99.8172 16.6433 100.055 16.3895 100.35 16.1749C100.843 15.8031 101.591 15.4312 102.694 15.4312C104.959 15.4312 106.631 17.0957 106.631 19.545V25.4215H105.449V19.545C105.449 17.7625 104.267 16.6058 102.594 16.6058C100.802 16.6058 99.5436 17.8787 99.5436 19.545V25.4215H98.3619V15.6261Z" fill="%231A6EE8"/>%0A<path d="M108.56 11.7072H109.741V20.1314L114.526 15.6261H116.14L111.02 20.4246L116.335 25.4215H114.72L109.741 20.7196V25.4215H108.56V11.7072Z" fill="%231A6EE8"/>%0A<path d="M28.0989 22.94V17.7536H27.028C26.8814 17.7536 26.7616 17.6356 26.7616 17.489V15.7137C26.7616 15.5671 26.8814 15.4473 27.028 15.4473H28.0989V12.8621C28.0989 12.7155 28.2187 12.5957 28.3653 12.5957H30.2443C30.3909 12.5957 30.5106 12.7155 30.5106 12.8621V15.4473H32.4629C32.6095 15.4473 32.7293 15.5653 32.7293 15.7137V17.489C32.7293 17.6356 32.6095 17.7536 32.4629 17.7536H30.5106V22.4591C30.5106 22.8292 30.8128 23.1313 31.1864 23.1313H32.4629C32.6095 23.1313 32.7293 23.2511 32.7293 23.3977V24.9799C32.7293 25.1265 32.6095 25.2463 32.4629 25.2463H30.6072C29.7973 25.2463 29.1769 25.0443 28.7443 24.6403C28.3134 24.238 28.0989 23.6713 28.0989 22.9418" fill="%231A6EE8"/>%0A<path d="M45.9342 24.9799V15.7155C45.9342 15.5689 46.0539 15.4509 46.2005 15.4509H48.1528L48.3459 16.4109H48.4442C48.598 16.2196 48.8161 16.0283 49.1004 15.8353C49.6921 15.4509 50.3751 15.2596 51.1456 15.2596C52.2648 15.2596 53.1873 15.6404 53.915 16.402C54.6426 17.1636 55.0037 18.1594 55.0037 19.3876V24.9799C55.0037 25.1265 54.884 25.2463 54.7374 25.2463H52.8602C52.7118 25.2463 52.5938 25.1265 52.5938 24.9799V19.5807C52.5938 18.9532 52.3971 18.4455 52.0038 18.0539C51.6105 17.6624 51.1009 17.4675 50.4698 17.4675C49.8387 17.4675 49.3274 17.6642 48.9341 18.0539C48.5408 18.4455 48.3441 18.9532 48.3441 19.5807V24.9799C48.3441 25.1265 48.2243 25.2463 48.0795 25.2463H46.2005C46.0521 25.2463 45.9342 25.1265 45.9342 24.9799Z" fill="%231A6EE8"/>%0A<path d="M56.8255 21.3078V15.7155C56.8255 15.5689 56.9453 15.4509 57.0919 15.4509H58.9709C59.1175 15.4509 59.2355 15.5689 59.2355 15.7155V21.1147C59.2355 21.744 59.4322 22.2517 59.8255 22.6415C60.2188 23.033 60.7283 23.2261 61.3612 23.2261C61.9941 23.2261 62.5019 23.0312 62.8952 22.6415C63.2885 22.2499 63.4852 21.7422 63.4852 21.1147V15.7155C63.4852 15.5689 63.6049 15.4509 63.7515 15.4509H65.6287C65.7753 15.4509 65.8951 15.5689 65.8951 15.7155V24.9782C65.8951 25.1248 65.7753 25.2445 65.6287 25.2445H63.8946C63.7676 25.2445 63.6568 25.1551 63.6318 25.0318L63.4834 24.2863H63.385C63.2313 24.4776 63.0132 24.6706 62.7289 24.8619C62.1371 25.2463 61.4542 25.4376 60.6836 25.4376C59.5645 25.4376 58.642 25.0568 57.9143 24.2952C57.1867 23.5336 56.8255 22.5378 56.8255 21.3078Z" fill="%231A6EE8"/>%0A<path d="M68.0083 22.2678H69.8015C69.9195 22.2678 70.0286 22.3429 70.0572 22.4573C70.1144 22.6826 70.2771 22.9025 70.5452 23.1117C70.8867 23.3798 71.3587 23.5157 71.963 23.5157C73.1841 23.5157 73.7955 23.1635 73.7955 22.4591C73.7955 22.1516 73.699 21.912 73.5077 21.7386C73.3146 21.5652 72.9588 21.4401 72.4457 21.3632L70.901 21.1129C68.7771 20.7678 67.7187 19.8382 67.7187 18.3275C67.7187 17.4711 68.0852 16.7435 68.8182 16.1481C69.5512 15.5528 70.5667 15.256 71.8682 15.256C73.1698 15.256 74.1834 15.6082 74.9165 16.3126C75.544 16.9169 75.9051 17.5194 75.9927 18.1219C76.016 18.281 75.8908 18.424 75.7281 18.424H73.9349C73.8098 18.424 73.7043 18.3382 73.6757 18.2166C73.6185 17.9788 73.4594 17.7589 73.1984 17.5605C72.8623 17.3048 72.4189 17.1761 71.8664 17.1761C71.314 17.1761 70.8849 17.2887 70.5828 17.5122C70.2807 17.7357 70.1287 18.0092 70.1287 18.3293C70.1287 18.803 70.5792 19.1052 71.4785 19.2303L73.1197 19.4806C75.1775 19.7881 76.2073 20.7786 76.2073 22.4573C76.2073 23.3155 75.8443 24.027 75.1185 24.5884C74.3908 25.1516 73.3396 25.434 71.963 25.434C71.2675 25.434 70.6525 25.3447 70.1197 25.1659C69.5852 24.9871 69.174 24.7726 68.8844 24.524C68.5965 24.2738 68.3587 23.9895 68.171 23.6695C67.9851 23.3495 67.8617 23.0759 67.8045 22.8524C67.7795 22.7559 67.7598 22.6629 67.7455 22.5753C67.7187 22.4126 67.8456 22.266 68.0101 22.266" fill="%231A6EE8"/>%0A<path d="M41.7006 24.9799V15.7155C41.7006 15.5689 41.8204 15.4509 41.967 15.4509H43.846C43.9926 15.4509 44.1106 15.5707 44.1106 15.7155V24.9799C44.1106 25.1265 43.9908 25.2463 43.846 25.2463H41.967C41.8186 25.2463 41.7006 25.1265 41.7006 24.9799Z" fill="%231A6EE8"/>%0A<path d="M44.0766 12.3544L43.0415 11.759C42.9592 11.7125 42.8573 11.7125 42.7751 11.759L41.7399 12.3544C41.6577 12.4026 41.6058 12.4902 41.6058 12.585V13.7256C41.6058 13.8722 41.7256 13.992 41.8722 13.992H43.9425C44.0909 13.992 44.2089 13.8722 44.2089 13.7256V12.585C44.2089 12.4902 44.1571 12.4026 44.0748 12.3544" fill="%231A6EE8"/>%0A<path d="M34.5529 24.9799V15.7155C34.5529 15.5689 34.6727 15.4509 34.8193 15.4509H36.5785L36.7716 16.3162H36.8681C36.9843 16.1642 37.1256 16.023 37.2936 15.8925C37.6923 15.5993 38.1285 15.4509 38.6059 15.4509H40.2703C40.4169 15.4509 40.5367 15.5707 40.5367 15.7155V17.4908C40.5367 17.6374 40.4169 17.7554 40.2703 17.7554H38.8008C37.7728 17.7554 36.9682 18.1934 36.9682 19.5789V24.9782C36.9682 25.1248 36.8485 25.2445 36.7037 25.2445H34.8247C34.6781 25.2445 34.5583 25.1248 34.5583 24.9782" fill="%231A6EE8"/>%0A<path d="M22.7092 12.2382L4.36445 6.03624C3.81023 5.84851 3.30964 6.42598 3.57423 6.94445L7.18205 13.9956L9.58845 10.7847C9.87629 10.3985 10.4734 10.4504 10.6915 10.8776L16.4143 22.0604L23.0203 13.2394C23.2849 12.8854 23.1258 12.3794 22.7075 12.2364L22.7092 12.2382Z" fill="%231A6EE8"/>%0A<path d="M12.9049 25.1784L7.18205 13.9956L0.574276 22.8167C0.309679 23.1707 0.468795 23.6766 0.887144 23.8197L19.2319 30.0198C19.7862 30.2075 20.2868 29.6283 20.0222 29.1116L16.4143 22.0604L14.0079 25.2714C13.7201 25.6575 13.123 25.6075 12.9049 25.1784Z" fill="%230FE4F5"/>%0A</svg>%0A';

// src/assets/brand/ColorTrinusBank_Icon.svg
var ColorTrinusBank_Icon_default = 'data:image/svg+xml,<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M33.8737 9.33549L6.42057 0.0542264C5.59117 -0.2267 4.84203 0.637483 5.238 1.41337L10.6371 11.9655L14.2383 7.16032C14.6691 6.58242 15.5627 6.66001 15.8891 7.29945L24.4534 24.0346L34.3393 10.8338C34.7353 10.304 34.4971 9.54686 33.8711 9.33282L33.8737 9.33549Z" fill="%231A6EE8"/>%0A<path d="M19.2014 28.7007L10.6371 11.9655L0.748535 25.1664C0.352563 25.6961 0.590681 26.4533 1.21675 26.6673L28.6699 35.9459C29.4993 36.2268 30.2485 35.36 29.8525 34.5867L24.4534 24.0346L20.8521 28.8398C20.4214 29.4177 19.5278 29.3428 19.2014 28.7007Z" fill="%230FE4F5"/>%0A</svg>%0A';

// src/assets/brand/NeutralTrinusBank_Full.svg
var NeutralTrinusBank_Full_default = 'data:image/svg+xml,<svg width="117" height="36" viewBox="0 0 117 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M77.996 11.7072H79.1778V17.1922H79.2761C79.6497 16.6058 80.7725 15.4294 82.6229 15.4294C85.0829 15.4294 87.0531 17.3871 87.0531 20.5229C87.0531 23.6587 85.0829 25.6182 82.6229 25.6182C80.7725 25.6182 79.6515 24.4418 79.2761 23.8554H79.1778L78.9811 25.4233H77.9978V11.7072H77.996ZM85.8713 20.5247C85.8713 18.0754 84.4143 16.6058 82.5245 16.6058C80.6348 16.6058 79.1778 18.0754 79.1778 20.5247C79.1778 22.974 80.6348 24.4436 82.5245 24.4436C84.4143 24.4436 85.8713 22.974 85.8713 20.5247Z" fill="white"/>%0A<path d="M95.3217 24.0521H95.2234C95.0071 24.3453 94.73 24.6009 94.4153 24.8369C93.8647 25.2284 93.0762 25.6218 91.9749 25.6218C89.9279 25.6218 88.6282 24.3667 88.6282 22.5843C88.6282 20.8018 89.8886 19.5486 92.4666 19.5486H95.3217V19.157C95.3217 17.4514 94.4743 16.6094 92.7616 16.6094C91.1865 16.6094 90.2426 17.3728 90.1031 18.4705H88.9214C89.1377 16.8239 90.3981 15.4348 92.7598 15.4348C95.1215 15.4348 96.4999 16.7864 96.4999 19.157V25.4251H95.5166L95.32 24.0539H95.3235L95.3217 24.0521ZM95.3217 20.6212H92.4666C90.6752 20.6212 89.8081 21.483 89.8081 22.5789C89.8081 23.6748 90.5751 24.44 91.9732 24.44C94.0399 24.44 95.32 23.1671 95.32 21.1093V20.6195L95.3217 20.6212Z" fill="white"/>%0A<path d="M98.4719 15.6261H99.4552L99.6518 16.899H99.7502C99.9271 16.6433 100.165 16.3895 100.46 16.1749C100.953 15.8031 101.701 15.4312 102.804 15.4312C105.069 15.4312 106.741 17.0957 106.741 19.545V25.4215H105.559V19.545C105.559 17.7625 104.377 16.6058 102.704 16.6058C100.912 16.6058 99.6536 17.8787 99.6536 19.545V25.4215H98.4719V15.6261Z" fill="white"/>%0A<path d="M108.67 11.7072H109.851V20.1314L114.636 15.6261H116.25L111.13 20.4246L116.445 25.4215H114.83L109.851 20.7196V25.4215H108.67V11.7072Z" fill="white"/>%0A<path d="M28.2089 22.94V17.7536H27.138C26.9914 17.7536 26.8716 17.6356 26.8716 17.489V15.7137C26.8716 15.5671 26.9914 15.4473 27.138 15.4473H28.2089V12.8621C28.2089 12.7155 28.3287 12.5957 28.4753 12.5957H30.3542C30.5009 12.5957 30.6206 12.7155 30.6206 12.8621V15.4473H32.5729C32.7195 15.4473 32.8393 15.5653 32.8393 15.7137V17.489C32.8393 17.6356 32.7195 17.7536 32.5729 17.7536H30.6206V22.4591C30.6206 22.8292 30.9228 23.1313 31.2964 23.1313H32.5729C32.7195 23.1313 32.8393 23.2511 32.8393 23.3977V24.9799C32.8393 25.1265 32.7195 25.2463 32.5729 25.2463H30.7172C29.9073 25.2463 29.2869 25.0443 28.8543 24.6403C28.4234 24.238 28.2089 23.6713 28.2089 22.9418" fill="white"/>%0A<path d="M46.0441 24.9799V15.7155C46.0441 15.5689 46.1639 15.4509 46.3105 15.4509H48.2628L48.4559 16.4109H48.5542C48.708 16.2196 48.9261 16.0283 49.2104 15.8353C49.8021 15.4509 50.4851 15.2596 51.2556 15.2596C52.3748 15.2596 53.2973 15.6404 54.025 16.402C54.7526 17.1636 55.1137 18.1594 55.1137 19.3876V24.9799C55.1137 25.1265 54.9939 25.2463 54.8473 25.2463H52.9701C52.8218 25.2463 52.7038 25.1265 52.7038 24.9799V19.5807C52.7038 18.9532 52.5071 18.4455 52.1138 18.0539C51.7205 17.6624 51.2109 17.4675 50.5798 17.4675C49.9487 17.4675 49.4374 17.6642 49.0441 18.0539C48.6508 18.4455 48.4541 18.9532 48.4541 19.5807V24.9799C48.4541 25.1265 48.3343 25.2463 48.1895 25.2463H46.3105C46.1621 25.2463 46.0441 25.1265 46.0441 24.9799Z" fill="white"/>%0A<path d="M56.9355 21.3078V15.7155C56.9355 15.5689 57.0553 15.4509 57.2019 15.4509H59.0809C59.2275 15.4509 59.3455 15.5689 59.3455 15.7155V21.1147C59.3455 21.744 59.5422 22.2517 59.9355 22.6415C60.3288 23.033 60.8383 23.2261 61.4712 23.2261C62.1041 23.2261 62.6118 23.0312 63.0052 22.6415C63.3985 22.2499 63.5951 21.7422 63.5951 21.1147V15.7155C63.5951 15.5689 63.7149 15.4509 63.8615 15.4509H65.7387C65.8853 15.4509 66.0051 15.5689 66.0051 15.7155V24.9782C66.0051 25.1248 65.8853 25.2445 65.7387 25.2445H64.0046C63.8776 25.2445 63.7668 25.1551 63.7417 25.0318L63.5934 24.2863H63.495C63.3413 24.4776 63.1232 24.6706 62.8389 24.8619C62.2471 25.2463 61.5642 25.4376 60.7936 25.4376C59.6745 25.4376 58.7519 25.0568 58.0243 24.2952C57.2967 23.5336 56.9355 22.5378 56.9355 21.3078Z" fill="white"/>%0A<path d="M68.1183 22.2678H69.9115C70.0295 22.2678 70.1385 22.3429 70.1672 22.4573C70.2244 22.6826 70.3871 22.9025 70.6552 23.1117C70.9967 23.3798 71.4687 23.5157 72.073 23.5157C73.2941 23.5157 73.9055 23.1635 73.9055 22.4591C73.9055 22.1516 73.8089 21.912 73.6176 21.7386C73.4246 21.5652 73.0688 21.4401 72.5557 21.3632L71.011 21.1129C68.8871 20.7678 67.8287 19.8382 67.8287 18.3275C67.8287 17.4711 68.1952 16.7435 68.9282 16.1481C69.6612 15.5528 70.6767 15.256 71.9782 15.256C73.2797 15.256 74.2934 15.6082 75.0264 16.3126C75.654 16.9169 76.0151 17.5194 76.1027 18.1219C76.126 18.281 76.0008 18.424 75.8381 18.424H74.0449C73.9198 18.424 73.8143 18.3382 73.7857 18.2166C73.7285 17.9788 73.5694 17.7589 73.3084 17.5605C72.9722 17.3048 72.5289 17.1761 71.9764 17.1761C71.424 17.1761 70.9949 17.2887 70.6928 17.5122C70.3906 17.7357 70.2387 18.0092 70.2387 18.3293C70.2387 18.803 70.6892 19.1052 71.5885 19.2303L73.2297 19.4806C75.2875 19.7881 76.3172 20.7786 76.3172 22.4573C76.3172 23.3155 75.9543 24.027 75.2285 24.5884C74.5008 25.1516 73.4496 25.434 72.073 25.434C71.3775 25.434 70.7625 25.3447 70.2297 25.1659C69.6952 24.9871 69.284 24.7726 68.9944 24.524C68.7065 24.2738 68.4687 23.9895 68.281 23.6695C68.0951 23.3495 67.9717 23.0759 67.9145 22.8524C67.8895 22.7559 67.8698 22.6629 67.8555 22.5753C67.8287 22.4126 67.9556 22.266 68.1201 22.266" fill="white"/>%0A<path d="M41.8106 24.9799V15.7155C41.8106 15.5689 41.9304 15.4509 42.077 15.4509H43.956C44.1026 15.4509 44.2206 15.5707 44.2206 15.7155V24.9799C44.2206 25.1265 44.1008 25.2463 43.956 25.2463H42.077C41.9286 25.2463 41.8106 25.1265 41.8106 24.9799Z" fill="white"/>%0A<path d="M44.1866 12.3544L43.1514 11.759C43.0692 11.7125 42.9673 11.7125 42.8851 11.759L41.8499 12.3544C41.7677 12.4026 41.7158 12.4902 41.7158 12.585V13.7256C41.7158 13.8722 41.8356 13.992 41.9822 13.992H44.0525C44.2009 13.992 44.3189 13.8722 44.3189 13.7256V12.585C44.3189 12.4902 44.267 12.4026 44.1848 12.3544" fill="white"/>%0A<path d="M34.6629 24.9799V15.7155C34.6629 15.5689 34.7827 15.4509 34.9293 15.4509H36.6885L36.8816 16.3162H36.9781C37.0943 16.1642 37.2356 16.023 37.4036 15.8925C37.8023 15.5993 38.2385 15.4509 38.7159 15.4509H40.3803C40.5269 15.4509 40.6467 15.5707 40.6467 15.7155V17.4908C40.6467 17.6374 40.5269 17.7554 40.3803 17.7554H38.9107C37.8827 17.7554 37.0782 18.1934 37.0782 19.5789V24.9782C37.0782 25.1248 36.9585 25.2445 36.8136 25.2445H34.9346C34.788 25.2445 34.6683 25.1248 34.6683 24.9782" fill="white"/>%0A<path d="M22.8192 12.2382L4.47443 6.03624C3.92021 5.84851 3.41962 6.42598 3.68422 6.94445L7.29203 13.9956L9.69844 10.7847C9.98628 10.3985 10.5834 10.4504 10.8015 10.8776L16.5243 22.0604L23.1303 13.2394C23.3949 12.8854 23.2358 12.3794 22.8174 12.2364L22.8192 12.2382Z" fill="white"/>%0A<path d="M13.0148 25.1784L7.29203 13.9956L0.684261 22.8167C0.419664 23.1707 0.57878 23.6766 0.997129 23.8197L19.3419 30.0198C19.8961 30.2075 20.3967 29.6283 20.1321 29.1116L16.5243 22.0604L14.1179 25.2714C13.8301 25.6575 13.233 25.6075 13.0148 25.1784Z" fill="white"/>%0A</svg>%0A';

// src/assets/brand/NeutralTrinusBank_Icon.svg
var NeutralTrinusBank_Icon_default = 'data:image/svg+xml,<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M33.9837 9.33549L6.53055 0.0542264C5.70115 -0.2267 4.95202 0.637483 5.34799 1.41337L10.7471 11.9655L14.3483 7.16032C14.7791 6.58242 15.6727 6.66001 15.9991 7.29945L24.5633 24.0346L34.4493 10.8338C34.8452 10.304 34.6071 9.54686 33.9811 9.33282L33.9837 9.33549Z" fill="white"/>%0A<path d="M19.3114 28.7007L10.7471 11.9655L0.858521 25.1664C0.462548 25.6961 0.700667 26.4533 1.32673 26.6673L28.7799 35.9459C29.6093 36.2268 30.3584 35.36 29.9625 34.5867L24.5633 24.0346L20.9621 28.8398C20.5314 29.4177 19.6378 29.3428 19.3114 28.7007Z" fill="white"/>%0A</svg>%0A';

// src/components/AtlBrand.tsx
import { jsx as jsx30 } from "react/jsx-runtime";
var brandMap = {
  "ColorTrinus-full": ColorTrinus_Full_default,
  "ColorTrinus-icon": ColorTrinus_Icon_default,
  "NeutralTrinus-full": NeutralTrinus_Full_default,
  "NeutralTrinus-icon": NeutralTrinus_Icon_default,
  "ColorNeo-full": ColorNeo_Full_default,
  "ColorNeo-icon": ColorNeo_Icon_default,
  "NeutralNeo-full": NeutralNeo_Full_default,
  "NeutralNeo-icon": NeutralNeo_Icon_default,
  "ColorTrinusBank-full": ColorTrinusBank_Full_default,
  "ColorTrinusBank-icon": ColorTrinusBank_Icon_default,
  "NeutralTrinusBank-full": NeutralTrinusBank_Full_default,
  "NeutralTrinusBank-icon": NeutralTrinusBank_Icon_default
};
var sizeMap = {
  ColorTrinus: { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } },
  NeutralTrinus: { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } },
  ColorNeo: { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } },
  NeutralNeo: { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } },
  ColorTrinusBank: { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } },
  NeutralTrinusBank: { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } }
};
var AtlBrand = React30.forwardRef(
  ({ type = "ColorNeo", size = "full", className, ...props }, ref) => {
    const key = `${type}-${size}`;
    const src = brandMap[key];
    const dims = sizeMap[type][size];
    return /* @__PURE__ */ jsx30(
      "img",
      {
        ref,
        src,
        alt: `${type} logo`,
        width: dims.w,
        height: dims.h,
        className: cn("shrink-0", className),
        ...props
      }
    );
  }
);
AtlBrand.displayName = "AtlBrand";

// src/components/AtlTable.tsx
import * as React31 from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Fragment as Fragment2, jsx as jsx31, jsxs as jsxs21 } from "react/jsx-runtime";
var HeaderCell = ({ column, sortKey, sortDirection, onSort }) => {
  const Icon = column.icon;
  const isSorted = sortKey === column.key;
  const align = column.align ?? "left";
  return /* @__PURE__ */ jsx31(
    "th",
    {
      className: cn(
        "px-4 py-2 text-xs font-bold leading-[21px] text-on-surface-primary whitespace-nowrap",
        "bg-background border-b border-background",
        align === "center" && "text-center",
        align === "right" && "text-right",
        column.sortable && "cursor-pointer select-none"
      ),
      style: { width: column.width ? `${column.width}px` : void 0 },
      onClick: column.sortable ? onSort : void 0,
      children: /* @__PURE__ */ jsxs21("div", { className: cn("flex items-center gap-2", align === "right" && "justify-end", align === "center" && "justify-center"), children: [
        column.renderHeader ? column.renderHeader() : /* @__PURE__ */ jsxs21(Fragment2, { children: [
          Icon && /* @__PURE__ */ jsx31(Icon, { className: "!size-3 text-on-surface-primary" }),
          /* @__PURE__ */ jsx31("span", { children: column.label })
        ] }),
        column.sortable && /* @__PURE__ */ jsxs21("span", { className: "inline-flex flex-col items-center -space-y-1 ml-0.5", children: [
          /* @__PURE__ */ jsx31(ExpandLess, { className: cn("!w-3 !h-3", isSorted && sortDirection === "asc" ? "text-brand-primary" : "text-on-surface-primary") }),
          /* @__PURE__ */ jsx31(ExpandMore, { className: cn("!w-4 !h-4", isSorted && sortDirection === "desc" ? "text-brand-primary" : "text-on-surface-primary") })
        ] })
      ] })
    }
  );
};
var DataCell = ({ column, row, rowIndex }) => {
  const align = column.align ?? "left";
  const value = row[column.key];
  return /* @__PURE__ */ jsx31(
    "td",
    {
      className: cn(
        "px-4 py-2 text-xs leading-[21px] text-on-surface whitespace-nowrap",
        align === "center" && "text-center",
        align === "right" && "text-right"
      ),
      children: column.render ? column.render(value, row, rowIndex) : value ?? "\u2014"
    }
  );
};
function AtlTableInner({
  columns,
  data,
  showTotais = false,
  totalsContent,
  showPagination = true,
  showScroll = false,
  showFooter = true,
  showRowCount = false,
  currentPage = 1,
  totalPages = 1,
  rowsPerPage = 10,
  rowsPerPageOptions = [10, 20, 50, 100],
  onPageChange,
  onSortChange,
  onRowsPerPageChange,
  sortKey,
  sortDirection,
  renderRowActions,
  rowKey,
  emptyMessage = "Nenhum registro encontrado.",
  className,
  ...props
}, ref) {
  const handleSort = (key) => {
    if (!onSortChange) return;
    let newDir = "asc";
    if (sortKey === key) {
      if (sortDirection === "asc") newDir = "desc";
      else if (sortDirection === "desc") newDir = null;
    }
    onSortChange(key, newDir);
  };
  const hasActions = !!renderRowActions;
  return /* @__PURE__ */ jsxs21("div", { ref, className: cn("w-full border border-background overflow-hidden", className), ...props, children: [
    /* @__PURE__ */ jsx31("div", { className: cn("w-full overflow-x-auto", showScroll && "scrollbar-thin"), children: /* @__PURE__ */ jsxs21("table", { className: "w-full border-collapse text-sm font-sans", children: [
      /* @__PURE__ */ jsx31("thead", { children: /* @__PURE__ */ jsxs21("tr", { children: [
        columns.map((col) => /* @__PURE__ */ jsx31(
          HeaderCell,
          {
            column: col,
            sortKey,
            sortDirection,
            onSort: () => handleSort(col.key)
          },
          col.key
        )),
        hasActions && /* @__PURE__ */ jsx31("th", { className: "px-4 py-2 bg-background border-b border-background", style: { width: 106 } })
      ] }) }),
      /* @__PURE__ */ jsx31("tbody", { children: data.length === 0 ? /* @__PURE__ */ jsx31("tr", { children: /* @__PURE__ */ jsx31("td", { colSpan: columns.length + (hasActions ? 1 : 0), className: "px-4 py-8 text-center text-on-surface-variant text-sm", children: emptyMessage }) }) : data.map((row, idx) => {
        const key = rowKey ? rowKey(row, idx) : idx;
        return /* @__PURE__ */ jsxs21(
          "tr",
          {
            className: cn(
              "border-b border-background",
              idx % 2 === 0 ? "bg-surface" : "bg-background"
            ),
            children: [
              columns.map((col) => /* @__PURE__ */ jsx31(DataCell, { column: col, row, rowIndex: idx }, col.key)),
              hasActions && /* @__PURE__ */ jsx31("td", { className: "px-4 py-2", style: { width: 106 }, children: /* @__PURE__ */ jsx31("div", { className: "flex items-center justify-end gap-1", children: renderRowActions(row, idx) }) })
            ]
          },
          key
        );
      }) })
    ] }) }),
    showFooter && /* @__PURE__ */ jsxs21("div", { className: "flex flex-col px-4", style: { gap: 8 }, children: [
      showScroll && /* @__PURE__ */ jsx31("div", { className: "h-[9px] rounded-full bg-disabled/20", children: /* @__PURE__ */ jsx31("div", { className: "h-full w-[11%] rounded-full bg-disabled" }) }),
      /* @__PURE__ */ jsxs21("div", { className: "flex items-center justify-between", style: { gap: 8, minHeight: 44 }, children: [
        showTotais && totalsContent ? /* @__PURE__ */ jsx31("div", { className: "flex items-center gap-2 text-sm text-on-surface", children: totalsContent }) : /* @__PURE__ */ jsx31("div", {}),
        /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-2", children: [
          showRowCount && /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx31("span", { className: "text-xs leading-[21px] text-on-surface font-sans whitespace-nowrap", children: "Quantidade de linhas" }),
            /* @__PURE__ */ jsx31(
              AtlSelect,
              {
                options: rowsPerPageOptions.map((v) => ({ label: String(v), value: String(v) })),
                value: String(rowsPerPage),
                onChange: (val) => onRowsPerPageChange?.(Number(val)),
                size: "small",
                className: "w-[54px]"
              }
            )
          ] }),
          showPagination && /* @__PURE__ */ jsx31(
            AtlPagination,
            {
              currentPage,
              totalPages,
              onPageChange: (p) => onPageChange?.(p)
            }
          )
        ] })
      ] })
    ] })
  ] });
}
var AtlTable = React31.forwardRef(AtlTableInner);
AtlTable.displayName = "AtlTable";
export {
  AtlAutoComplete,
  AtlBadge,
  AtlBrand,
  AtlBreadcrumb,
  AtlButton,
  AtlCard,
  AtlCardContent,
  AtlCardFooter,
  AtlCardFullContent,
  AtlCardHeader,
  AtlCheckbox,
  AtlChip,
  AtlCircularProgress,
  AtlDatePicker,
  AtlIconButton,
  AtlInputCounter,
  AtlLoadTimes,
  AtlPageHeader,
  AtlPagination,
  AtlRadioButton,
  AtlRadioGroup,
  AtlSelect,
  AtlSelectItem,
  AtlSelectList,
  AtlSkeleton,
  AtlStepper,
  AtlSwitch,
  AtlTabContent,
  AtlTabTrigger,
  AtlTable,
  AtlTabs,
  AtlTabsList,
  AtlTextArea,
  AtlTextField,
  AtlToast,
  AtlToastBanner,
  AtlToggleTabs,
  AtlTooltip,
  AtlTypeFile,
  atlBadgeVariants,
  atlButtonVariants,
  atlCheckboxVariants,
  atlChipVariants,
  atlIconButtonVariants,
  atlRadioVariants,
  atlSelectItemVariants,
  atlSkeletonVariants,
  atlToastBannerVariants,
  atlToastVariants,
  containerVariants as atlToggleTabsVariants,
  cn,
  tailwind_preset_default as tailwindPreset
};
//# sourceMappingURL=index.js.map