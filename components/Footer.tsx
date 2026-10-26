import Link from "next/link";
import { Shield, Phone, ExternalLink } from "lucide-react";

const quickLinks = [
  { href: "/awareness", label: "Awareness Hub" },
  { href: "/check-hacked", label: "Check If I'm Hacked" },
  { href: "/news", label: "News & Alerts" },
  { href: "/emergency", label: "Emergency Help" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

const emergencyLinks = [
  { label: "Cyber Crime Helpline", value: "1930", href: "tel:1930" },
  { label: "Emergency Services", value: "112", href: "tel:112" },
  { label: "Women Helpline", value: "181", href: "tel:181" },
  { label: "Child Helpline", value: "1098", href: "tel:1098" },
];

const govLinks = [
  { label: "Cybercrime.gov.in", href: "https://cybercrime.gov.in" },
  { label: "CERT-In", href: "https://www.cert-in.org.in" },
  { label: "RBI", href: "https://www.rbi.org.in" },
  { label: "MeitY", href: "https://www.meity.gov.in" },
];

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-navy-900 text-blue-100 dark:border-navy-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-white">Cyber Suraksha Hub</span>
            </div>
            <p className="text-sm text-blue-200/80 leading-relaxed">
              India&apos;s Public Cyber Safety Awareness Platform. Learn, prevent, report, and protect yourself from cyber crime.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-blue-200/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Emergency Contacts</h3>
            <ul className="space-y-2">
              {emergencyLinks.map((link) => (
                <li key={link.value}>
                  <a href={link.href} className="flex items-center gap-2 text-sm text-blue-200/80 hover:text-white transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                    {link.label}: <span className="font-semibold text-white">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Government Resources</h3>
            <ul className="space-y-2">
              {govLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-200/80 hover:text-white transition-colors"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-800 pt-6">
          <p className="text-xs text-blue-200/60 leading-relaxed max-w-3xl">
            <strong className="text-blue-200">Cyber Safety Disclaimer:</strong> This platform provides educational information and official resource links. It is not a substitute for professional legal advice or official government communication. Always verify information through official government channels. In emergencies, call 1930 or visit cybercrime.gov.in immediately.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-xs text-blue-200/50">
              &copy; {new Date().getFullYear()} Cyber Suraksha Hub. GTU Societal Internship Project.
            </p>
            <p className="text-xs text-blue-200/50">
              Built for a safer digital India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
