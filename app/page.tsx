import Hero from "@/components/Hero";
import ScamTicker from "@/components/ScamTicker";
import QuickAccessCards from "@/components/QuickAccessCards";
import { SectionHeading } from "@/components/PageHeader";
import Link from "next/link";
import { awarenessCategories } from "@/data/awareness-topics";
import {
  Mail, CreditCard, Share2, Key, UserX, Globe, MessageCircle, ArrowRight, Phone, Shield,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  "credit-card": CreditCard,
  "share-2": Share2,
  key: Key,
  "user-x": UserX,
  globe: Globe,
  "message-circle": MessageCircle,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScamTicker />
      <QuickAccessCards />

      <section className="bg-blue-50/50 dark:bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            title="Awareness & Education"
            description="Explore cyber safety topics tailored for Indian citizens"
            href="/awareness"
            linkText="View all topics"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {awarenessCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Shield;
              return (
                <Link
                  key={cat.slug}
                  href={`/awareness/${cat.slug}`}
                  className="group rounded-2xl border border-blue-100 bg-white p-5 card-hover dark:border-navy-800 dark:bg-navy-900"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-navy-800 dark:text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-navy-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy-600 line-clamp-2 dark:text-blue-200/60">{cat.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                    {cat.topics.length} topics <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-navy-900 p-8 sm:p-12 text-center">
          <Phone className="mx-auto h-10 w-10 text-red-400 mb-4" />
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Facing a Cyber Emergency?</h2>
          <p className="mt-3 text-blue-200/80 max-w-xl mx-auto">
            Don&apos;t wait. Call the National Cyber Crime Helpline immediately and report at cybercrime.gov.in
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:1930"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-3.5 text-lg font-bold text-white hover:bg-red-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call 1930
            </a>
            <Link
              href="/emergency"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-400 px-8 py-3.5 text-lg font-semibold text-blue-400 hover:bg-blue-400 hover:text-navy-900 transition-colors"
            >
              Emergency Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
