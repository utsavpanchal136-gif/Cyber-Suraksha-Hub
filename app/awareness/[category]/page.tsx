import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategory, awarenessCategories } from "@/data/awareness-topics";
import PageHeader from "@/components/PageHeader";
import { Breadcrumb } from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return awarenessCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Not Found" };
  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Awareness Hub", href: "/awareness" },
          { label: category.title },
        ]}
      />
      <PageHeader title={category.title} description={category.description} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/awareness/${category.slug}/${topic.slug}`}
              className="group rounded-2xl border border-blue-100 bg-white p-6 card-hover dark:border-navy-800 dark:bg-navy-900"
            >
              <h2 className="text-lg font-semibold text-navy-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
                {topic.title}
              </h2>
              <p className="mt-2 text-sm text-navy-600 line-clamp-3 dark:text-blue-200/70">{topic.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
