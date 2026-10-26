import { NextResponse } from "next/server";
import { fallbackNews, type NewsItem, type NewsCategory } from "@/data/news";

export const revalidate = 3600;

async function fetchRSSFeed(url: string, source: string, category: NewsCategory): Promise<NewsItem[]> {
  try {
    const Parser = (await import("rss-parser")).default;
    const parser = new Parser({ timeout: 8000 });
    const feed = await parser.parseURL(url);
    return (feed.items ?? []).slice(0, 5).map((item, i) => ({
      id: `rss-${source}-${i}`,
      title: item.title ?? "Untitled Advisory",
      summary: item.contentSnippet?.slice(0, 200) ?? item.title ?? "",
      source,
      category,
      severity: "medium" as const,
      date: item.pubDate ? new Date(item.pubDate).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
      url: item.link ?? "#",
    }));
  } catch {
    return [];
  }
}

export async function GET() {
  const [certInItems, pibItems] = await Promise.all([
    fetchRSSFeed("https://www.cert-in.org.in/pdf/advisory.xml", "CERT-In", "data-breaches"),
    fetchRSSFeed("https://pib.gov.in/rss.aspx", "PIB", "scam-alerts"),
  ]);

  const rssItems = [...certInItems, ...pibItems];
  const items = rssItems.length > 0
    ? [...rssItems, ...fallbackNews].slice(0, 20)
    : fallbackNews;

  return NextResponse.json({
    items,
    updatedAt: new Date().toISOString(),
    sources: ["CERT-In", "RBI", "MeitY", "PIB", "Cybercrime.gov.in"],
  });
}
