import { profile } from "@/data/profile";
import { githubFallback } from "@/data/stats";
import type { GitHubData, GitHubRepo } from "@/types";

const GH_API = "https://api.github.com";

function headers(): HeadersInit {
  const base: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "drashtin-portfolio",
  };
  if (process.env.GITHUB_TOKEN) {
    return { ...base, Authorization: `Bearer ${process.env.GITHUB_TOKEN}` };
  }
  return base;
}

/**
 * Fetch and shape GitHub profile + repository data for the showcase.
 * Revalidated on the server (ISR) and always degrades to curated fallback
 * data so the section never renders empty.
 */
export async function getGitHubData(): Promise<GitHubData> {
  const username = profile.githubUsername;
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`${GH_API}/users/${username}`, {
        headers: headers(),
        next: { revalidate: 3600 },
      }),
      fetch(
        `${GH_API}/users/${username}/repos?per_page=100&sort=updated&type=owner`,
        { headers: headers(), next: { revalidate: 3600 } },
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) return githubFallback;

    const user = await userRes.json();
    const rawRepos = (await reposRes.json()) as any[];

    if (!Array.isArray(rawRepos)) return githubFallback;

    const repos: GitHubRepo[] = rawRepos
      .filter((r) => !r.fork && !r.archived)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        htmlUrl: r.html_url,
        homepage: r.homepage,
        language: r.language,
        stargazersCount: r.stargazers_count ?? 0,
        forksCount: r.forks_count ?? 0,
        topics: r.topics ?? [],
        updatedAt: r.updated_at,
      }));

    // Aggregate language usage across non-forked repos.
    const langCount: Record<string, number> = {};
    for (const r of repos) {
      if (r.language) langCount[r.language] = (langCount[r.language] ?? 0) + 1;
    }
    const langTotal = Object.values(langCount).reduce((a, b) => a + b, 0) || 1;
    const languages = Object.entries(langCount)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / langTotal) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 6);

    const featured = [...repos]
      .sort(
        (a, b) =>
          b.stargazersCount - a.stargazersCount ||
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      )
      .slice(0, 6);

    const totalStars = repos.reduce((sum, r) => sum + r.stargazersCount, 0);

    return {
      source: "live",
      profile: {
        login: user.login,
        name: user.name,
        avatarUrl: user.avatar_url,
        bio: user.bio,
        followers: user.followers ?? 0,
        following: user.following ?? 0,
        publicRepos: user.public_repos ?? repos.length,
        htmlUrl: user.html_url,
        company: user.company,
        location: user.location,
      },
      repos: featured,
      languages: languages.length ? languages : githubFallback.languages,
      totalStars,
    };
  } catch {
    return githubFallback;
  }
}
