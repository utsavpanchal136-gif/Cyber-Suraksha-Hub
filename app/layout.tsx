import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Cyber Suraksha Hub | India's Public Cyber Safety Platform",
    template: "%s | Cyber Suraksha Hub",
  },
  description:
    "Learn, prevent, report, and protect yourself from cyber crime. India's trusted public cyber safety awareness platform with emergency resources, scam alerts, and education.",
  keywords: [
    "cyber safety India",
    "cyber crime reporting",
    "1930 helpline",
    "cybercrime.gov.in",
    "UPI fraud",
    "phishing awareness",
    "CERT-In",
  ],
  authors: [{ name: "Cyber Suraksha Hub" }],
  openGraph: {
    title: "Cyber Suraksha Hub",
    description: "India's Public Cyber Safety Awareness Platform",
    type: "website",
    locale: "en_IN",
    siteName: "Cyber Suraksha Hub",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
