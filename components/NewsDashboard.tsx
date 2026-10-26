"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, Filter, ExternalLink, AlertCircle } from "lucide-react";
import type { NewsItem, NewsCategory, NewsSeverity } from "@/data/news";
import { newsCategories, fallbackNews } from "@/data/news";

const severityColors: Record<NewsSeverity, string> = {
  low: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  medium: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  high: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  critical: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

export default function NewsDashboard() {
  const [news, setNews] = useState<NewsItem[]>(fallbackNews);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<NewsCategory | "all">("all");
  const [severity, setSeverity] = useState<NewsSeverity | "all">("all");

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        if (data.items?.length) setNews(data.items);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return news.filter((item) => {
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || item.category === category;
      const matchesSeverity = severity === "all" || item.severity === severity;
      return matchesSearch && matchesCategory && matchesSeverity;
    });
  }, [news, search, category, severity]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400" />
          <input
            type="search"
            placeholder="Search news and alerts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-blue-200 bg-white py-3 pl-12 pr-4 text-navy-900 placeholder:text-navy-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
            aria-label="Search news"
          />
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400 pointer-events-none" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as NewsCategory | "all")}
              className="appearance-none rounded-xl border border-blue-200 bg-white py-3 pl-10 pr-8 text-sm text-navy-900 focus:border-blue-500 focus:outline-none dark:border-navy-700 dark:bg-navy-900 dark:text-white"
              aria-label="Filter by category"
            >
              <option value="all">All Categories</option>
              {newsCategories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>{cat.label}</option>
              ))}
            </select>
          </div>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value as NewsSeverity | "all")}
            className="rounded-xl border border-blue-200 bg-white py-3 px-4 text-sm text-navy-900 focus:border-blue-500 focus:outline-none dark:border-navy-700 dark:bg-navy-900 dark:text-white"
            aria-label="Filter by severity"
          >
            <option value="all">All Severity</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {loading && (
        <p className="text-center py-4 text-sm text-navy-500 dark:text-blue-200/50">Loading latest alerts...</p>
      )}

      <div className="grid gap-4">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-blue-100 bg-white p-6 card-hover dark:border-navy-800 dark:bg-navy-900"
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase ${severityColors[item.severity]}`}>
                {item.severity}
              </span>
              <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-navy-800 dark:text-blue-400">
                {newsCategories.find((c) => c.slug === item.category)?.label}
              </span>
              <span className="text-xs text-navy-500 dark:text-blue-200/50">{item.source} &middot; {item.date}</span>
            </div>
            <h3 className="text-lg font-semibold text-navy-900 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-navy-600 dark:text-blue-200/70">{item.summary}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              Read more <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <AlertCircle className="mx-auto h-12 w-12 text-navy-300 dark:text-navy-600" />
          <p className="mt-4 text-navy-600 dark:text-blue-200/60">No alerts match your filters.</p>
        </div>
      )}
    </div>
  );
}
