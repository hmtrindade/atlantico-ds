import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import Info from "@mui/icons-material/Info";
import { cn } from "@/lib/utils";

export interface AtlTooltipProps {
  text: string;
  className?: string;
}

const AtlTooltip: React.FC<AtlTooltipProps> = ({ text, className }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root open={open} onOpenChange={setOpen}>
        <TooltipPrimitive.Trigger asChild>
          <button type="button" className="inline-flex">
            {open ? (
              <Info className="!h-4 !w-4 text-on-surface-primary" />
            ) : (
              <InfoOutlined className="!h-4 !w-4 text-on-surface-primary" />
            )}
          </button>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={4}
            className={cn(
              "z-50 bg-surface-primary text-on-surface-primary text-xs leading-[21px] font-normal px-4 py-4 rounded-lg shadow-neutral-md max-w-[200px]",
              className
            )}
          >
            {text}
            <TooltipPrimitive.Arrow className="fill-surface-primary" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
AtlTooltip.displayName = "AtlTooltip";

export { AtlTooltip };
