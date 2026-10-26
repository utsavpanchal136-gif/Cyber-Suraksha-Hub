"use client";

import { AlertTriangle } from "lucide-react";
import { scamAlerts } from "@/data/scam-alerts";

export default function ScamTicker() {
  const doubled = [...scamAlerts, ...scamAlerts];

  return (
    <div
      className="relative overflow-hidden bg-red-600 text-white"
      role="marquee"
      aria-label="Live scam alerts"
    >
      <div className="flex items-center">
        <div className="z-10 flex shrink-0 items-center gap-2 bg-red-700 px-4 py-2.5 text-sm font-bold uppercase tracking-wide">
          <AlertTriangle className="h-4 w-4 animate-pulse" aria-hidden="true" />
          <span className="hidden sm:inline">Live Alert</span>
        </div>
        <div className="overflow-hidden flex-1 py-2.5">
          <div className="ticker-scroll flex whitespace-nowrap">
            {doubled.map((alert, i) => (
              <span key={`${alert.id}-${i}`} className="mx-8 inline-flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                {alert.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
