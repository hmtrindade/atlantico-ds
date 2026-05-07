import * as React from "react";
import { cn } from "@/lib/utils";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { AtlPagination } from "./AtlPagination";
import { AtlSelect } from "./AtlSelect";

/* ─────────────────────── Types ─────────────────────── */

export type SortDirection = "asc" | "desc" | null;

export interface AtlTableColumn<T = any> {
  /** Unique key matching data field */
  key: string;
  /** Header label */
  label: string;
  /** Column width in px (default auto) */
  width?: number;
  /** Enable sorting on this column */
  sortable?: boolean;
  /** Custom cell render */
  render?: (value: any, row: T, rowIndex: number) => React.ReactNode;
  /** Custom header render */
  renderHeader?: () => React.ReactNode;
  /** Alignment */
  align?: "left" | "center" | "right";
  /** Optional header icon */
  icon?: React.ElementType;
}

export interface AtlTableProps<T = any> extends React.HTMLAttributes<HTMLDivElement> {
  columns: AtlTableColumn<T>[];
  data: T[];
  /** Show totals row */
  showTotais?: boolean;
  /** Totals content slot */
  totalsContent?: React.ReactNode;
  /** Show pagination */
  showPagination?: boolean;
  /** Show horizontal scroll bar */
  showScroll?: boolean;
  /** Show footer area */
  showFooter?: boolean;
  /** Show row-count selector */
  showRowCount?: boolean;
  /** Current page (1-indexed) */
  currentPage?: number;
  /** Total pages */
  totalPages?: number;
  /** Rows per page */
  rowsPerPage?: number;
  /** Row-count options */
  rowsPerPageOptions?: number[];
  /** Page change handler */
  onPageChange?: (page: number) => void;
  /** Sort change handler */
  onSortChange?: (key: string, direction: SortDirection) => void;
  /** Rows per page change */
  onRowsPerPageChange?: (count: number) => void;
  /** Current sort state */
  sortKey?: string;
  /** Current sort direction */
  sortDirection?: SortDirection;
  /** Row actions renderer (renders in last column) */
  renderRowActions?: (row: T, rowIndex: number) => React.ReactNode;
  /** Row key extractor */
  rowKey?: (row: T, index: number) => string | number;
  /** Empty state message */
  emptyMessage?: string;
}

/* ─────────────────── Sub-components ─────────────────── */

const HeaderCell: React.FC<{
  column: AtlTableColumn;
  sortKey?: string;
  sortDirection?: SortDirection;
  onSort?: () => void;
}> = ({ column, sortKey, sortDirection, onSort }) => {
  const Icon = column.icon;
  const isSorted = sortKey === column.key;
  const align = column.align ?? "left";

  return (
    <th
      className={cn(
        "px-4 py-2 text-xs font-bold leading-[21px] text-on-surface-primary whitespace-nowrap",
        "bg-background border-b border-background",
        align === "center" && "text-center",
        align === "right" && "text-right",
        column.sortable && "cursor-pointer select-none"
      )}
      style={{ width: column.width ? `${column.width}px` : undefined }}
      onClick={column.sortable ? onSort : undefined}
    >
      <div className={cn("flex items-center gap-2", align === "right" && "justify-end", align === "center" && "justify-center")}>
        {column.renderHeader ? column.renderHeader() : (
          <>
            {Icon && <Icon className="!size-3 text-on-surface-primary" />}
            <span>{column.label}</span>
          </>
        )}
        {column.sortable && (
          <span className="inline-flex flex-col items-center -space-y-1 ml-0.5">
            <ExpandLess className={cn("!w-3 !h-3", isSorted && sortDirection === "asc" ? "text-brand-primary" : "text-on-surface-primary")} />
            <ExpandMore className={cn("!w-4 !h-4", isSorted && sortDirection === "desc" ? "text-brand-primary" : "text-on-surface-primary")} />
          </span>
        )}
      </div>
    </th>
  );
};

const DataCell: React.FC<{
  column: AtlTableColumn;
  row: any;
  rowIndex: number;
}> = ({ column, row, rowIndex }) => {
  const align = column.align ?? "left";
  const value = row[column.key];

  return (
    <td
      className={cn(
        "px-4 py-2 text-xs leading-[21px] text-on-surface whitespace-nowrap",
        align === "center" && "text-center",
        align === "right" && "text-right"
      )}
    >
      {column.render ? column.render(value, row, rowIndex) : (value ?? "—")}
    </td>
  );
};

/* ─────────────────── Main component ─────────────────── */

function AtlTableInner<T extends Record<string, any>>(
  {
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
  }: AtlTableProps<T>,
  ref: React.Ref<HTMLDivElement>
) {
  const handleSort = (key: string) => {
    if (!onSortChange) return;
    let newDir: SortDirection = "asc";
    if (sortKey === key) {
      if (sortDirection === "asc") newDir = "desc";
      else if (sortDirection === "desc") newDir = null;
    }
    onSortChange(key, newDir);
  };

  const hasActions = !!renderRowActions;

  return (
    <div ref={ref} className={cn("w-full border border-background overflow-hidden", className)} {...props}>
      {/* Scrollable area */}
      <div className={cn("w-full overflow-x-auto", showScroll && "scrollbar-thin")}>
        <table className="w-full border-collapse text-sm font-sans">
          <thead>
            <tr>
              {columns.map((col) => (
                <HeaderCell
                  key={col.key}
                  column={col}
                  sortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={() => handleSort(col.key)}
                />
              ))}
              {hasActions && (
                <th className="px-4 py-2 bg-background border-b border-background" style={{ width: 106 }} />
              )}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (hasActions ? 1 : 0)} className="px-4 py-8 text-center text-on-surface-variant text-sm">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, idx) => {
                const key = rowKey ? rowKey(row, idx) : idx;
                return (
                  <tr
                    key={key}
                    className={cn(
                      "border-b border-background",
                      idx % 2 === 0 ? "bg-surface" : "bg-background"
                    )}
                  >
                    {columns.map((col) => (
                      <DataCell key={col.key} column={col} row={row} rowIndex={idx} />
                    ))}
                    {hasActions && (
                      <td className="px-4 py-2" style={{ width: 106 }}>
                        <div className="flex items-center justify-end gap-1">
                          {renderRowActions!(row, idx)}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>




      {/* Footer */}
      {showFooter && (
        <div className="flex flex-col px-4" style={{ gap: 8 }}>
          {/* Scroll bar indicator */}
          {showScroll && (
            <div className="h-[9px] rounded-full bg-disabled/20">
              <div className="h-full w-[11%] rounded-full bg-disabled" />
            </div>
          )}

          {/* Section row */}
          <div className="flex items-center justify-between" style={{ gap: 8, minHeight: 44 }}>
            {/* Totals slot */}
            {showTotais && totalsContent ? (
              <div className="flex items-center gap-2 text-sm text-on-surface">
                {totalsContent}
              </div>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-2">
              {/* Row count selector */}
              {showRowCount && (
                <div className="flex items-center gap-2">
                  <span className="text-xs leading-[21px] text-on-surface font-sans whitespace-nowrap">Quantidade de linhas</span>
                  <AtlSelect
                    options={rowsPerPageOptions.map((v) => ({ label: String(v), value: String(v) }))}
                    value={String(rowsPerPage)}
                    onChange={(val) => onRowsPerPageChange?.(Number(val))}
                    size="small"
                    className="w-[54px]"
                  />
                </div>
              )}

              {/* Pagination */}
              {showPagination && (
                <AtlPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(p) => onPageChange?.(p)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const AtlTable = React.forwardRef(AtlTableInner) as <T extends Record<string, any>>(
  props: AtlTableProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement;

(AtlTable as any).displayName = "AtlTable";

export { AtlTable };
