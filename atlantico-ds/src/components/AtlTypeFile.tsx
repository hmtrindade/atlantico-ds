import * as React from "react";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import TableChart from "@mui/icons-material/TableChart";
import Article from "@mui/icons-material/Article";
import { cn } from "@/lib/utils";

const fileConfig = {
  ".img": { icon: ImageIcon, colorClass: "text-on-surface" },
  ".pdf": { icon: PictureAsPdf, colorClass: "text-critical" },
  ".csv": { icon: TableChart, colorClass: "text-success" },
  ".doc": { icon: Article, colorClass: "text-brand-primary" },
};

export interface AtlTypeFileProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: ".csv" | ".doc" | ".img" | ".pdf";
  size?: number;
}

const AtlTypeFile = React.forwardRef<HTMLSpanElement, AtlTypeFileProps>(
  ({ className, type, size = 24, ...props }, ref) => {
    const { icon: Icon, colorClass } = fileConfig[type];
    return (
      <span
        ref={ref}
        className={cn("inline-flex items-center justify-center", colorClass, className)}
        {...props}
      >
        <Icon style={{ width: size, height: size }} />
      </span>
    );
  }
);
AtlTypeFile.displayName = "AtlTypeFile";

export { AtlTypeFile };
