import type { ContributionData } from "@/lib/github";

const DAYS = 7;
const CELL = 9;
const GAP = 2;

const LEVEL_COLORS = [
  "#161b22", // 0 - empty
  "#0e4429", // 1
  "#006d32", // 2
  "#26a641", // 3
  "#39d353", // 4
];

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Day-of-week labels shown on alternating rows (GitHub style; row 0 = Sunday).
const DAY_LABELS: Record<number, string> = { 1: "Mon", 3: "Wed", 5: "Fri" };

export default function ContributionGraph({
  data,
}: {
  data: ContributionData | null;
}) {
  if (!data) {
    return (
      <p className="font-mono text-[11px] text-neutral-500 dark:text-neutral-500">
        Unable to load GitHub contributions right now.
      </p>
    );
  }

  const { weeks, total } = data;

  // Compute month labels: show a month name above the first week it appears in.
  const monthForWeek: (string | null)[] = weeks.map((week, i) => {
    const firstDay = week[0];
    if (!firstDay) return null;
    const month = new Date(firstDay.date).getUTCMonth();
    if (i === 0) return MONTH_NAMES[month];
    const prevFirst = weeks[i - 1][0];
    const prevMonth = prevFirst ? new Date(prevFirst.date).getUTCMonth() : -1;
    return month !== prevMonth ? MONTH_NAMES[month] : null;
  });

  const MONTH_ROW = "1.1rem";

  return (
    <div className="font-mono text-xs text-neutral-500 dark:text-neutral-500 sm:text-[13px]">
      <div className="flex" style={{ gap: GAP }}>
        {/* Day-of-week labels */}
        <div className="flex shrink-0 flex-col">
          <div style={{ height: MONTH_ROW, marginBottom: 4 }} />
          <div className="flex flex-1 flex-col" style={{ gap: GAP }}>
            {Array.from({ length: DAYS }).map((_, d) => (
              <div
                key={d}
                className="flex flex-1 items-center justify-end pr-1 text-[10px] leading-none text-neutral-500 dark:text-neutral-500"
              >
                {DAY_LABELS[d] ?? ""}
              </div>
            ))}
          </div>
        </div>

        {/* Months + grid (fills remaining width) */}
        <div className="min-w-0 flex-1">
          {/* Month labels */}
          <div className="flex" style={{ gap: GAP, height: MONTH_ROW, marginBottom: 4 }}>
            {weeks.map((_, w) => (
              <div key={w} className="relative min-w-0 flex-1">
                {monthForWeek[w] && (
                  <span className="absolute left-0 top-0 whitespace-nowrap text-[10px] text-neutral-500 dark:text-neutral-500">
                    {monthForWeek[w]}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Cells: one column per week, 7 rows per column */}
          <div className="flex" style={{ gap: GAP }}>
            {weeks.map((week, w) => {
              const byWeekday: Record<number, (typeof week)[number]> = {};
              week.forEach((day) => (byWeekday[day.weekday] = day));
              return (
                <div
                  key={w}
                  className="flex min-w-0 flex-1 flex-col"
                  style={{ gap: GAP }}
                >
                  {Array.from({ length: DAYS }).map((_, d) => {
                    const day = byWeekday[d];
                    return (
                      <span
                        key={d}
                        className="aspect-square w-full rounded-[2px]"
                        style={{
                          backgroundColor: day
                            ? LEVEL_COLORS[day.level]
                            : "transparent",
                        }}
                        title={
                          day
                            ? `${day.count} contributions on ${day.date}`
                            : undefined
                        }
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer: total + legend */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-neutral-600 dark:text-neutral-400">
          {total.toLocaleString()} contributions in the last year.
        </span>
        <div className="flex items-center gap-[3px]">
          <span className="mr-1 text-neutral-500">Less</span>
          {LEVEL_COLORS.map((c) => (
            <span
              key={c}
              className="rounded-[2px]"
              style={{ width: CELL, height: CELL, backgroundColor: c }}
            />
          ))}
          <span className="ml-1 text-neutral-500">More</span>
        </div>
      </div>
    </div>
  );
}
