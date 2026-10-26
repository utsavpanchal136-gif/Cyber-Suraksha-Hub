import { CheckCircle2, HelpCircle, Play, BarChart3 } from "lucide-react";
import type { AwarenessTopic, AwarenessCategory } from "@/data/awareness-topics";
import { Breadcrumb } from "./PageHeader";

interface TopicContentProps {
  category: AwarenessCategory;
  topic: AwarenessTopic;
}

export default function TopicContent({ category, topic }: TopicContentProps) {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Awareness Hub", href: "/awareness" },
          { label: category.title, href: `/awareness/${category.slug}` },
          { label: topic.title },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-navy-800 dark:text-blue-400">
            {category.title}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl dark:text-white">{topic.title}</h1>
          <p className="mt-3 text-lg text-navy-600 dark:text-blue-200/70">{topic.summary}</p>
        </header>

        <section className="prose-section mb-12">
          <h2 className="text-xl font-bold text-navy-900 mb-4 dark:text-white">Understanding the Threat</h2>
          <div className="space-y-4">
            {topic.article.map((paragraph, i) => (
              <p key={i} className="text-navy-700 leading-relaxed dark:text-blue-100/80">{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-2xl border border-blue-100 bg-blue-50/50 p-8 dark:border-navy-800 dark:bg-navy-900/50">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold text-navy-900 dark:text-white">Safety Infographic</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topic.infographicPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm dark:bg-navy-900"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-navy-800 dark:text-blue-100">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Play className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold text-navy-900 dark:text-white">Educational Video</h2>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy-900 shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${topic.videoId}`}
              title={`${topic.title} - Educational Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              loading="lazy"
            />
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-bold text-navy-900 dark:text-white">Safety Checklist</h2>
          </div>
          <ul className="space-y-3">
            {topic.checklist.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-green-100 bg-green-50/50 p-4 dark:border-green-900/30 dark:bg-green-950/20"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
                <span className="text-navy-800 dark:text-blue-100">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold text-navy-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {topic.faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-blue-100 bg-white dark:border-navy-800 dark:bg-navy-900"
              >
                <summary className="cursor-pointer px-6 py-4 font-medium text-navy-900 list-none flex items-center justify-between dark:text-white">
                  {faq.question}
                  <span className="ml-2 text-blue-600 transition-transform group-open:rotate-45 text-xl">+</span>
                </summary>
                <div className="px-6 pb-4 text-navy-600 dark:text-blue-200/70">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
