export type ContributionDay = {
  date: string;
  weekday: number;
  count: number;
  level: number; // 0-4
};

export type ContributionData = {
  total: number;
  weeks: ContributionDay[][];
};

const LEVEL_MAP: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const QUERY = `query {
  viewer {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            weekday
            contributionCount
            contributionLevel
          }
        }
      }
    }
  }
}`;

type ApiDay = {
  date: string;
  weekday: number;
  contributionCount: number;
  contributionLevel: string;
};

/**
 * Fetches the authenticated user's contribution calendar from GitHub.
 * Revalidates hourly so the heatmap stays in sync as activity changes.
 * Returns null on any failure so the UI can fall back gracefully.
 */
export async function getContributions(): Promise<ContributionData | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    const calendar =
      json?.data?.viewer?.contributionsCollection?.contributionCalendar;
    if (!calendar) return null;

    const weeks: ContributionDay[][] = calendar.weeks.map(
      (w: { contributionDays: ApiDay[] }) =>
        w.contributionDays.map((d) => ({
          date: d.date,
          weekday: d.weekday,
          count: d.contributionCount,
          level: LEVEL_MAP[d.contributionLevel] ?? 0,
        })),
    );

    return { total: calendar.totalContributions, weeks };
  } catch {
    return null;
  }
}
