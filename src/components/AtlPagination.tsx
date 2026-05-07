import * as React from "react";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { cn } from "@/lib/utils";
import { AtlIconButton } from "./AtlIconButton";

export interface AtlPaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const AtlPagination = React.forwardRef<HTMLDivElement, AtlPaginationProps>(
  ({ className, currentPage, totalPages, onPageChange, ...props }, ref) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseInt(e.target.value, 10);
      if (!isNaN(val) && val >= 1 && val <= totalPages) {
        onPageChange?.(val);
      }
    };

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center gap-2", className)}
        {...props}
      >
        <AtlIconButton
          icon={ChevronLeft}
          variant="standard"
          shape="radius"
          size="small"
          disabled={currentPage <= 1}
          onClick={() => onPageChange?.(currentPage - 1)}
          aria-label="Página anterior"
        />
        <div className="flex items-center gap-1.5">
          <input
            type="text"
            value={currentPage}
            onChange={handleInputChange}
            className="w-12 h-9 rounded-sm border border-input bg-surface text-center text-base leading-7 text-on-surface-primary focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <span className="text-sm text-on-surface-variant">de {totalPages}</span>
        </div>
        <AtlIconButton
          icon={ChevronRight}
          variant="standard"
          shape="radius"
          size="small"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange?.(currentPage + 1)}
          aria-label="Próxima página"
        />
      </div>
    );
  }
);
AtlPagination.displayName = "AtlPagination";

export { AtlPagination };
