import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export default function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="border-b border-blue-100 bg-blue-50/50 dark:border-navy-800 dark:bg-navy-900/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {badge && (
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:bg-navy-800 dark:text-blue-400">
            {badge}
          </span>
        )}
        <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl dark:text-white">{title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-navy-600 dark:text-blue-200/70">{description}</p>
      </div>
    </div>
  );
}

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-navy-600 dark:text-blue-200/60">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy-900 font-medium dark:text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

interface SectionHeadingProps {
  title: string;
  description?: string;
  href?: string;
  linkText?: string;
}

export function SectionHeading({ title, description, href, linkText }: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">{title}</h2>
        {description && <p className="mt-1 text-navy-600 dark:text-blue-200/70">{description}</p>}
      </div>
      {href && linkText && (
        <Link href={href} className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
          {linkText} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
