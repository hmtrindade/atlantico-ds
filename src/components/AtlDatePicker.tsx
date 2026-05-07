import * as React from "react";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { cn } from "@/lib/utils";
import { AtlIconButton } from "./AtlIconButton";

const DAYS_PT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MONTHS_PT = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

export interface AtlDatePickerProps {
  /** Single date mode */
  value?: Date;
  onChange?: (date: Date) => void;
  /** Range mode */
  mode?: "single" | "range";
  rangeStart?: Date;
  rangeEnd?: Date;
  onRangeChange?: (start: Date | undefined, end: Date | undefined) => void;
  className?: string;
}

const AtlDatePicker = React.forwardRef<HTMLDivElement, AtlDatePickerProps>(
  ({ value, onChange, mode = "single", rangeStart, rangeEnd, onRangeChange, className }, ref) => {
    const today = new Date();
    const [viewDate, setViewDate] = React.useState(value ?? rangeStart ?? today);
    const [view, setView] = React.useState<"days" | "months" | "years" | "decades">("days");
    // Range internal state
    const [rStart, setRStart] = React.useState<Date | undefined>(rangeStart);
    const [rEnd, setREnd] = React.useState<Date | undefined>(rangeEnd);
    const [hovered, setHovered] = React.useState<Date | undefined>(undefined);

    React.useEffect(() => { setRStart(rangeStart); }, [rangeStart]);
    React.useEffect(() => { setREnd(rangeEnd); }, [rangeEnd]);

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
    const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

    const sameDay = (a?: Date, b?: Date) =>
      a && b && a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();

    const selectDay = (day: number) => {
      const selected = new Date(year, month, day);
      if (mode === "single") {
        onChange?.(selected);
      } else {
        if (!rStart || (rStart && rEnd)) {
          setRStart(selected);
          setREnd(undefined);
          onRangeChange?.(selected, undefined);
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

    const selectMonth = (m: number) => {
      setViewDate(new Date(year, m, 1));
      setView("days");
    };

    const selectYear = (y: number) => {
      setViewDate(new Date(y, month, 1));
      setView("months");
    };

    const decadeStart = Math.floor(year / 10) * 10;
    const centuryStart = Math.floor(year / 100) * 100;

    const selectDecade = (startYear: number) => {
      setViewDate(new Date(startYear, month, 1));
      setView("years");
    };

    const isSelected = (day: number) => {
      const d = new Date(year, month, day);
      if (mode === "single") return sameDay(value, d);
      return sameDay(rStart, d) || sameDay(rEnd, d);
    };

    const isInRange = (day: number) => {
      if (mode !== "range") return false;
      const d = new Date(year, month, day);
      const end = rEnd ?? hovered;
      if (!rStart || !end) return false;
      const lo = rStart < end ? rStart : end;
      const hi = rStart < end ? end : rStart;
      return d > lo && d < hi;
    };

    const isToday = (day: number) =>
      today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;

    return (
      <div
        ref={ref}
        className={cn(
          "w-[325px] bg-surface border border-border rounded-sm shadow-neutral-md p-3",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <AtlIconButton
            icon={ChevronLeft}
            variant="standard"
            shape="none"
            size="small"
            onClick={() => {
              if (view === "days") prevMonth();
              else if (view === "months") setViewDate(new Date(year - 1, month, 1));
              else if (view === "years") setViewDate(new Date(decadeStart - 10, month, 1));
              else setViewDate(new Date(centuryStart - 100, month, 1));
            }}
          />
          <div className="flex gap-1">
            {view === "days" && (
              <>
                <button
                  onClick={() => setView("months")}
                  className="text-sm font-medium text-on-surface-primary hover:text-brand-primary"
                >
                  {MONTHS_PT[month]}
                </button>
                <button
                  onClick={() => setView("years")}
                  className="text-sm text-on-surface hover:text-brand-primary"
                >
                  {year}
                </button>
              </>
            )}
            {view === "months" && (
              <button
                onClick={() => setView("years")}
                className="text-sm font-medium text-on-surface-primary hover:text-brand-primary"
              >
                {year}
              </button>
            )}
            {view === "years" && (
              <button
                onClick={() => setView("decades")}
                className="text-sm font-medium text-on-surface-primary hover:text-brand-primary"
              >
                {decadeStart} - {decadeStart + 9}
              </button>
            )}
            {view === "decades" && (
              <span className="text-sm font-medium text-on-surface-primary">
                {centuryStart} - {centuryStart + 99}
              </span>
            )}
          </div>
          <AtlIconButton
            icon={ChevronRight}
            variant="standard"
            shape="none"
            size="small"
            onClick={() => {
              if (view === "days") nextMonth();
              else if (view === "months") setViewDate(new Date(year + 1, month, 1));
              else if (view === "years") setViewDate(new Date(decadeStart + 10, month, 1));
              else setViewDate(new Date(centuryStart + 100, month, 1));
            }}
          />
        </div>

        {/* Days view */}
        {view === "days" && (
          <>
            <div className="grid grid-cols-7 mb-1">
              {DAYS_PT.map((d, i) => (
                <span
                  key={d}
                  className={cn(
                    "text-center text-xs text-on-surface-variant py-1",
                    i === 0 && "text-on-surface-error"
                  )}
                >
                  {d}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {Array.from({ length: firstDay }).map((_, i) => (
                <span key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const selected = isSelected(day);
                const inRange = isInRange(day);
                return (
                  <button
                    key={day}
                    onClick={() => selectDay(day)}
                    onMouseEnter={() => mode === "range" && rStart && !rEnd && setHovered(new Date(year, month, day))}
                    onMouseLeave={() => mode === "range" && setHovered(undefined)}
                    className={cn(
                      "h-8 text-sm text-center rounded-sm transition-colors text-on-surface hover:bg-surface-variant",
                      selected &&
                        "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
                      inRange && "bg-surface-primary",
                      isToday(day) && !selected && "font-bold text-brand-primary"
                    )}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* Months view */}
        {view === "months" && (
          <div className="grid grid-cols-3 gap-2">
            {MONTHS_PT.map((m, i) => (
              <button
                key={m}
                onClick={() => selectMonth(i)}
                className={cn(
                  "py-2 text-sm rounded-sm text-on-surface hover:bg-surface-variant transition-colors",
                  month === i && "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover"
                )}
              >
                {m.slice(0, 3)}
              </button>
            ))}
          </div>
        )}

        {/* Years view (decade) */}
        {view === "years" && (
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 12 }).map((_, i) => {
              const y = decadeStart - 1 + i;
              return (
                <button
                  key={y}
                  onClick={() => selectYear(y)}
                  className={cn(
                    "py-2 text-sm rounded-sm text-on-surface hover:bg-surface-variant transition-colors",
                    year === y && "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
                    (i === 0 || i === 11) && "text-on-surface-variant"
                  )}
                >
                  {y}
                </button>
              );
            })}
          </div>
        )}

        {/* Decades view (century) */}
        {view === "decades" && (
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 12 }).map((_, i) => {
              const dStart = centuryStart - 10 + i * 10;
              const isCurrentDecade = year >= dStart && year < dStart + 10;
              return (
                <button
                  key={dStart}
                  onClick={() => selectDecade(dStart)}
                  className={cn(
                    "py-2 text-xs rounded-sm text-on-surface hover:bg-surface-variant transition-colors",
                    isCurrentDecade && "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
                    (i === 0 || i === 11) && "text-on-surface-variant"
                  )}
                >
                  {dStart}-{dStart + 9}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);
AtlDatePicker.displayName = "AtlDatePicker";

export { AtlDatePicker };
