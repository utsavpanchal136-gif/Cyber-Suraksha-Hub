import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { awarenessCategories } from "@/data/awareness-topics";
import {
  Mail, CreditCard, Share2, Key, UserX, Globe, MessageCircle, ArrowRight, Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Awareness Hub",
  description: "Learn about phishing, UPI fraud, social media security, password safety, identity theft, and more.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  "credit-card": CreditCard,
  "share-2": Share2,
  key: Key,
  "user-x": UserX,
  globe: Globe,
  "message-circle": MessageCircle,
};

export default function AwarenessPage() {
  return (
    <>
      <PageHeader
        title="Awareness & Education Hub"
        description="Comprehensive cyber safety guides for every threat Indian citizens face online."
        badge="7 Categories"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {awarenessCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Shield;
            return (
              <article
                key={cat.slug}
                className="rounded-2xl border border-blue-100 bg-white overflow-hidden card-hover dark:border-navy-800 dark:bg-navy-900"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-navy-800 dark:text-blue-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-navy-900 dark:text-white">{cat.title}</h2>
                      <p className="mt-1 text-sm text-navy-600 dark:text-blue-200/70">{cat.description}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2 border-t border-blue-50 pt-4 dark:border-navy-800">
                    {cat.topics.map((topic) => (
                      <li key={topic.slug}>
                        <Link
                          href={`/awareness/${cat.slug}/${topic.slug}`}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-navy-700 hover:bg-blue-50 hover:text-blue-600 dark:text-blue-100 dark:hover:bg-navy-800 dark:hover:text-blue-400 transition-colors"
                        >
                          {topic.title}
                          <ArrowRight className="h-4 w-4 opacity-50" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
