import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StateCyberCellDirectory from "@/components/StateCyberCellDirectory";
import { governmentResources, emergencyServices, reportingSteps } from "@/data/emergency-contacts";
import { Phone, Globe, ExternalLink, Shield, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Help & Reporting",
  description: "Official government cyber crime resources, helplines, reporting guide, and state-wise cyber cell directory.",
};

export default function EmergencyPage() {
  return (
    <>
      <PageHeader
        title="Emergency Help & Reporting"
        description="Official government resources and step-by-step guide for cyber crime victims. Act fast — every minute counts."
        badge="Critical Resources"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-2 dark:text-white">Official Government Resources</h2>
          <p className="text-navy-600 mb-6 dark:text-blue-200/70">Verified helplines and portals for cyber crime reporting</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {governmentResources.map((resource) => (
              <article
                key={resource.name}
                className={`rounded-2xl border p-6 card-hover ${
                  resource.isPrimary
                    ? "border-red-200 bg-red-50/50 dark:border-red-900/30 dark:bg-red-950/20"
                    : "border-blue-100 bg-white dark:border-navy-800 dark:bg-navy-900"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    resource.isPrimary ? "bg-red-600 text-white" : "bg-blue-100 text-blue-600 dark:bg-navy-800 dark:text-blue-400"
                  }`}>
                    {resource.number ? <Phone className="h-6 w-6" /> : <Globe className="h-6 w-6" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 dark:text-white">{resource.name}</h3>
                    <p className="mt-1 text-sm text-navy-600 dark:text-blue-200/70">{resource.description}</p>
                    {resource.number && (
                      <a
                        href={`tel:${resource.number}`}
                        className="mt-3 inline-flex items-center gap-2 text-2xl font-bold text-red-600 hover:text-red-700 dark:text-red-400"
                      >
                        <Phone className="h-6 w-6" />
                        {resource.number}
                      </a>
                    )}
                    {resource.url && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                      >
                        Visit Portal <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 dark:text-white">Other Emergency Services</h2>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {emergencyServices.map((service) => (
              <a
                key={service.number}
                href={`tel:${service.number}`}
                className="rounded-xl border border-blue-100 bg-white p-4 text-center card-hover dark:border-navy-800 dark:bg-navy-900"
              >
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{service.number}</p>
                <p className="mt-1 text-xs font-medium text-navy-900 dark:text-white">{service.name}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-6 w-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Cyber Crime Reporting Guide</h2>
          </div>
          <div className="space-y-4">
            {reportingSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-6 dark:border-navy-800 dark:bg-navy-900"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-navy-600 dark:text-blue-200/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">State-wise Cyber Cell Directory</h2>
          </div>
          <StateCyberCellDirectory />
        </section>
      </div>
    </>
  );
}
