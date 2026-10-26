"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/awareness", label: "Awareness Hub" },
  { href: "/news", label: "News & Alerts" },
  { href: "/emergency", label: "Emergency Help" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100/80 bg-white/95 backdrop-blur-md dark:border-navy-800 dark:bg-navy-950/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white transition-transform group-hover:scale-105">
            <Shield className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-navy-900 dark:text-white">Cyber Suraksha Hub</span>
            <p className="text-[10px] leading-tight text-blue-600 dark:text-blue-400">India&apos;s Cyber Safety Platform</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "bg-blue-50 text-blue-600 dark:bg-navy-800 dark:text-blue-400"
                  : "text-navy-700 hover:bg-blue-50 hover:text-blue-600 dark:text-blue-100 dark:hover:bg-navy-800 dark:hover:text-blue-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 text-navy-700 hover:bg-blue-50 dark:text-blue-100 dark:hover:bg-navy-800"
            aria-label="Toggle dark mode"
          >
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="hidden h-5 w-5 dark:block" />
          </button>

          <a
            href="tel:1930"
            className="hidden items-center gap-1.5 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call 1930
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-navy-700 hover:bg-blue-50 lg:hidden dark:text-blue-100 dark:hover:bg-navy-800"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-blue-100 lg:hidden dark:border-navy-800"
          >
            <div className="space-y-1 px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    pathname === link.href
                      ? "bg-blue-50 text-blue-600 dark:bg-navy-800 dark:text-blue-400"
                      : "text-navy-700 hover:bg-blue-50 dark:text-blue-100 dark:hover:bg-navy-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:1930"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-red-600 px-3 py-2.5 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                Call 1930 — Emergency
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
