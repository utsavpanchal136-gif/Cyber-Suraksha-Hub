"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-navy-800 dark:text-blue-300">
              <ShieldCheck className="h-4 w-4" />
              Trusted by citizens across India
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl dark:text-white text-balance">
              Stay Safe Online
            </h1>

            <p className="mt-4 text-lg text-navy-700 sm:text-xl dark:text-blue-200/90 text-balance max-w-xl">
              Learn, Prevent, Report, and Protect Yourself from Cyber Crime.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/awareness"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
              >
                Learn Cyber Safety
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/emergency"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy-800 px-6 py-3.5 text-base font-semibold text-navy-800 transition-all hover:bg-navy-800 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-navy-950"
              >
                Report Cyber Crime
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="180" className="fill-blue-100 dark:fill-navy-800" />
        <circle cx="200" cy="200" r="140" className="fill-blue-50 dark:fill-navy-900" stroke="#2563eb" strokeWidth="2" strokeDasharray="8 4" />

        <path
          d="M200 80 L280 120 L280 220 C280 280 200 320 200 320 C200 320 120 280 120 220 L120 120 Z"
          className="fill-blue-600/20 stroke-blue-600"
          strokeWidth="3"
        />
        <path
          d="M200 110 L255 140 L255 215 C255 260 200 290 200 290 C200 290 145 260 145 215 L145 140 Z"
          className="fill-blue-600"
        />
        <path
          d="M185 200 L195 215 L220 180"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        <circle cx="120" cy="280" r="24" className="fill-amber-200 stroke-amber-500" strokeWidth="2" />
        <circle cx="120" cy="275" r="8" className="fill-amber-600" />
        <rect x="105" y="300" width="30" height="35" rx="8" className="fill-blue-500" />

        <circle cx="280" cy="280" r="24" className="fill-amber-200 stroke-amber-500" strokeWidth="2" />
        <circle cx="280" cy="275" r="8" className="fill-amber-600" />
        <rect x="265" y="300" width="30" height="35" rx="8" className="fill-blue-500" />

        <circle cx="200" cy="310" r="24" className="fill-amber-200 stroke-amber-500" strokeWidth="2" />
        <circle cx="200" cy="305" r="8" className="fill-amber-600" />
        <rect x="185" y="330" width="30" height="35" rx="8" className="fill-blue-500" />

        <rect x="60" y="140" width="40" height="28" rx="4" className="fill-white stroke-blue-400" strokeWidth="1.5" />
        <text x="80" y="158" textAnchor="middle" className="fill-blue-600 text-[8px] font-bold">UPI</text>

        <rect x="300" y="140" width="40" height="28" rx="4" className="fill-white stroke-blue-400" strokeWidth="1.5" />
        <text x="320" y="158" textAnchor="middle" className="fill-blue-600 text-[8px] font-bold">OTP</text>

        <rect x="170" y="50" width="60" height="24" rx="4" className="fill-white stroke-red-400" strokeWidth="1.5" />
        <line x1="175" y1="58" x2="225" y2="58" className="stroke-red-400" strokeWidth="1.5" />
        <line x1="175" y1="64" x2="210" y2="64" className="stroke-red-400" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
