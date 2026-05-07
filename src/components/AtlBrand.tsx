import * as React from "react";
import { cn } from "@/lib/utils";

// Brand SVG imports
import ColorTrinusFull from "@/assets/brand/ColorTrinus_Full.svg";
import ColorTrinusIcon from "@/assets/brand/ColorTrinus_Icon.svg";
import NeutralTrinusFull from "@/assets/brand/NeutralTrinus_Full.svg";
import NeutralTrinusIcon from "@/assets/brand/NeutralTrinus_Icon.svg";
import ColorNeoFull from "@/assets/brand/ColorNeo_Full.svg";
import ColorNeoIcon from "@/assets/brand/ColorNeo_Icon.svg";
import NeutralNeoFull from "@/assets/brand/NeutralNeo_Full.svg";
import NeutralNeoIcon from "@/assets/brand/NeutralNeo_Icon.svg";
import ColorTrinusBankFull from "@/assets/brand/ColorTrinusBank_Full.svg";
import ColorTrinusBankIcon from "@/assets/brand/ColorTrinusBank_Icon.svg";
import NeutralTrinusBankFull from "@/assets/brand/NeutralTrinusBank_Full.svg";
import NeutralTrinusBankIcon from "@/assets/brand/NeutralTrinusBank_Icon.svg";

export type AtlBrandType =
  | "ColorTrinus"
  | "NeutralTrinus"
  | "ColorNeo"
  | "NeutralNeo"
  | "ColorTrinusBank"
  | "NeutralTrinusBank";

export type AtlBrandSize = "full" | "icon";

export interface AtlBrandProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  type?: AtlBrandType;
  size?: AtlBrandSize;
}

const brandMap: Record<string, string> = {
  "ColorTrinus-full": ColorTrinusFull,
  "ColorTrinus-icon": ColorTrinusIcon,
  "NeutralTrinus-full": NeutralTrinusFull,
  "NeutralTrinus-icon": NeutralTrinusIcon,
  "ColorNeo-full": ColorNeoFull,
  "ColorNeo-icon": ColorNeoIcon,
  "NeutralNeo-full": NeutralNeoFull,
  "NeutralNeo-icon": NeutralNeoIcon,
  "ColorTrinusBank-full": ColorTrinusBankFull,
  "ColorTrinusBank-icon": ColorTrinusBankIcon,
  "NeutralTrinusBank-full": NeutralTrinusBankFull,
  "NeutralTrinusBank-icon": NeutralTrinusBankIcon,
};

const sizeMap: Record<AtlBrandType, { full: { w: number; h: number }; icon: { w: number; h: number } }> = {
  ColorTrinus:       { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } },
  NeutralTrinus:     { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } },
  ColorNeo:          { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } },
  NeutralNeo:        { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } },
  ColorTrinusBank:   { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } },
  NeutralTrinusBank: { full: { w: 117, h: 36 }, icon: { w: 36, h: 36 } },
};

const AtlBrand = React.forwardRef<HTMLImageElement, AtlBrandProps>(
  ({ type = "ColorNeo", size = "full", className, ...props }, ref) => {
    const key = `${type}-${size}`;
    const src = brandMap[key];
    const dims = sizeMap[type][size];

    return (
      <img
        ref={ref}
        src={src}
        alt={`${type} logo`}
        width={dims.w}
        height={dims.h}
        className={cn("shrink-0", className)}
        {...props}
      />
    );
  }
);
AtlBrand.displayName = "AtlBrand";

export { AtlBrand };
