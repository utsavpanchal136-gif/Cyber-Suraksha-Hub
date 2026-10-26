import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Shield, Target, Users, BookOpen, Phone, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About Cyber Suraksha Hub — India's Public Cyber Safety Awareness Platform, a GTU Societal Internship Project.",
};

const features = [
  {
    icon: BookOpen,
    title: "Education First",
    description: "Easy-to-understand guides on every major cyber threat facing Indian citizens today.",
  },
  {
    icon: Phone,
    title: "Emergency Ready",
    description: "One-click access to official helplines, reporting portals, and state cyber cell contacts.",
  },
  {
    icon: Shield,
    title: "Government Aligned",
    description: "Resources linked directly to CERT-In, cybercrime.gov.in, RBI, and MeitY advisories.",
  },
  {
    icon: Users,
    title: "For All Citizens",
    description: "Tailored content for students, parents, seniors, and small business owners.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Cyber Suraksha Hub"
        description="India's Public Cyber Safety Awareness Platform — empowering citizens to stay safe in the digital world."
        badge="GTU Societal Internship Project"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-4 dark:text-white">Our Mission</h2>
          <p className="text-navy-700 leading-relaxed dark:text-blue-100/80">
            Cyber Suraksha Hub is a public cyber safety awareness platform designed to help Indian citizens
            learn about cyber threats, access emergency resources, and stay informed about the latest scams
            and cybersecurity laws. With cyber crime cases rising exponentially across India, every citizen
            deserves easy access to trusted information and official reporting channels.
          </p>
          <p className="mt-4 text-navy-700 leading-relaxed dark:text-blue-100/80">
            This platform was developed as part of the GTU Societal Internship Project, with design inspiration
            from Google Safety Center, Microsoft Security, CERT-In, and RBI awareness campaigns. Our goal is
            to create a trusted, government-grade resource that citizens can rely on during cyber emergencies.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Target className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">What We Offer</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 dark:border-navy-800 dark:bg-navy-900"
              >
                <feature.icon className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-navy-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-navy-600 dark:text-blue-200/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-2xl bg-navy-900 p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Need Help Right Now?</h2>
          <p className="text-blue-200/80 mb-6">Every feature on this platform is accessible within 2 clicks.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:1930"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
            >
              <Phone className="h-5 w-5" /> Call 1930
            </a>
            <Link
              href="/emergency"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-400 px-6 py-3 font-semibold text-blue-400 hover:bg-blue-400 hover:text-navy-900"
            >
              Emergency Resources
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4 dark:text-white">Official Partners & Sources</h2>
          <ul className="space-y-2">
            {[
              { name: "National Cyber Crime Reporting Portal", url: "https://cybercrime.gov.in" },
              { name: "Indian Computer Emergency Response Team (CERT-In)", url: "https://www.cert-in.org.in" },
              { name: "Reserve Bank of India", url: "https://www.rbi.org.in" },
              { name: "Ministry of Electronics & IT", url: "https://www.meity.gov.in" },
              { name: "Press Information Bureau", url: "https://pib.gov.in" },
            ].map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
                >
                  {source.name} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
