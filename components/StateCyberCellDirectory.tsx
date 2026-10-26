"use client";

import { useState, useMemo } from "react";
import { Search, MapPin, Phone, Mail, Globe, ExternalLink } from "lucide-react";
import { stateCyberCells } from "@/data/state-cyber-cells";

export default function StateCyberCellDirectory() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return stateCyberCells;
    return stateCyberCells.filter(
      (cell) =>
        cell.state.toLowerCase().includes(q) ||
        cell.name.toLowerCase().includes(q) ||
        cell.address.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400" />
        <input
          type="search"
          placeholder="Search by state name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-blue-200 bg-white py-3 pl-12 pr-4 text-navy-900 placeholder:text-navy-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-navy-700 dark:bg-navy-900 dark:text-white dark:placeholder:text-navy-500"
          aria-label="Search state cyber cells"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((cell) => (
          <article
            key={cell.state}
            className="rounded-2xl border border-blue-100 bg-white p-6 card-hover dark:border-navy-800 dark:bg-navy-900"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <span className="inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-navy-800 dark:text-blue-400">
                  {cell.state}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-navy-900 dark:text-white">{cell.name}</h3>
              </div>
            </div>

            <dl className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Globe className="h-4 w-4 mt-0.5 shrink-0 text-blue-600" />
                <dd>
                  <a
                    href={cell.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Official Website <ExternalLink className="h-3 w-3" />
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-blue-600" />
                <dd>
                  <a href={`tel:${cell.phone.replace(/[^0-9+]/g, "")}`} className="text-navy-700 hover:text-blue-600 dark:text-blue-100">
                    {cell.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-blue-600" />
                <dd>
                  <a href={`mailto:${cell.email}`} className="text-navy-700 hover:text-blue-600 dark:text-blue-100">
                    {cell.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-blue-600" />
                <dd className="text-navy-600 dark:text-blue-200/70">{cell.address}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-8 text-navy-600 dark:text-blue-200/60">
          No cyber cells found for &ldquo;{query}&rdquo;. Try a different state name.
        </p>
      )}
    </div>
  );
}
