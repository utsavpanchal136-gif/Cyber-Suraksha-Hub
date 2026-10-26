import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { resourceSections } from "@/data/resources";
import {
  GraduationCap, Users, HeartHandshake, Building2, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description: "Cyber safety resources for students, parents, senior citizens, and small businesses in India.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "graduation-cap": GraduationCap,
  users: Users,
  "heart-handshake": HeartHandshake,
  "building-2": Building2,
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        description="Tailored cyber safety guides for every member of your family and community."
        badge="For Everyone"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {resourceSections.map((section) => {
            const Icon = iconMap[section.icon] || Users;
            return (
              <section
                key={section.slug}
                className="rounded-2xl border border-blue-100 bg-white overflow-hidden dark:border-navy-800 dark:bg-navy-900"
              >
                <div className="border-b border-blue-50 bg-blue-50/50 px-6 py-5 dark:border-navy-800 dark:bg-navy-900/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-navy-900 dark:text-white">{section.title}</h2>
                      <p className="text-sm text-navy-600 dark:text-blue-200/70">{section.description}</p>
                    </div>
                  </div>
                </div>
                <ul className="divide-y divide-blue-50 dark:divide-navy-800">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-6 py-4 hover:bg-blue-50/50 dark:hover:bg-navy-800/50 transition-colors group"
                      >
                        <div>
                          <h3 className="font-medium text-navy-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="mt-0.5 text-sm text-navy-600 dark:text-blue-200/60">{item.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 shrink-0 text-navy-300 group-hover:text-blue-600 dark:text-navy-600 dark:group-hover:text-blue-400 transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
