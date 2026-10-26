import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import NewsDashboard from "@/components/NewsDashboard";

export const metadata: Metadata = {
  title: "News & Alerts",
  description: "Latest cyber scams, security news, government advisories, CERT-In alerts, and RBI fraud warnings.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News & Alerts"
        description="Cyber Threat Intelligence Dashboard — stay updated on the latest scams, advisories, and security alerts."
        badge="Live Dashboard"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <NewsDashboard />
      </div>
    </>
  );
}
