"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertOctagon, Search, BookOpen, Phone } from "lucide-react";

const cards = [
  {
    title: "Report a Cyber Crime",
    description: "File a complaint and get immediate help",
    href: "/emergency",
    icon: AlertOctagon,
    color: "bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400",
  },
  {
    title: "Check If I'm Hacked",
    description: "Quick risk assessment tool",
    href: "/check-hacked",
    icon: Search,
    color: "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
  },
  {
    title: "Cyber Safety Basics",
    description: "Learn essential protection skills",
    href: "/awareness",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400",
  },
  {
    title: "Emergency Contacts",
    description: "Helplines and official resources",
    href: "/emergency",
    icon: Phone,
    color: "bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400",
  },
];

export default function QuickAccessCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl dark:text-white">Quick Access</h2>
        <p className="mt-2 text-navy-600 dark:text-blue-200/70">Everything you need, one click away</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={card.href}
              className="group flex flex-col items-center rounded-2xl border border-blue-100 bg-white p-6 text-center card-hover dark:border-navy-800 dark:bg-navy-900"
            >
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${card.color} transition-transform group-hover:scale-110`}>
                <card.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 dark:text-white">{card.title}</h3>
              <p className="mt-1 text-sm text-navy-600 dark:text-blue-200/60">{card.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
