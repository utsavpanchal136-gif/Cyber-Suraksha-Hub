export type NewsCategory =
  | "scam-alerts"
  | "upi-frauds"
  | "banking-alerts"
  | "social-media"
  | "data-breaches"
  | "cyber-laws";

export type NewsSeverity = "low" | "medium" | "high" | "critical";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  category: NewsCategory;
  severity: NewsSeverity;
  date: string;
  url: string;
}

export const newsCategories: { slug: NewsCategory; label: string }[] = [
  { slug: "scam-alerts", label: "Scam Alerts" },
  { slug: "upi-frauds", label: "UPI Frauds" },
  { slug: "banking-alerts", label: "Banking Alerts" },
  { slug: "social-media", label: "Social Media Threats" },
  { slug: "data-breaches", label: "Data Breaches" },
  { slug: "cyber-laws", label: "New Cyber Laws" },
];

export const fallbackNews: NewsItem[] = [
  {
    id: "1",
    title: "CERT-In Advisory: Critical Vulnerability in Popular Web Browsers",
    summary: "Indian Computer Emergency Response Team urges immediate browser updates to patch actively exploited security flaws.",
    source: "CERT-In",
    category: "data-breaches",
    severity: "critical",
    date: "2025-06-20",
    url: "https://www.cert-in.org.in",
  },
  {
    id: "2",
    title: "RBI Alert: Rising UPI Fraud Through QR Code Manipulation",
    summary: "Reserve Bank of India warns citizens about increasing QR code scams at markets and toll plazas across the country.",
    source: "RBI",
    category: "upi-frauds",
    severity: "high",
    date: "2025-06-18",
    url: "https://www.rbi.org.in",
  },
  {
    id: "3",
    title: "MeitY Advisory on Deepfake and AI-Generated Fraud",
    summary: "Ministry of Electronics & IT issues guidelines on identifying AI-generated impersonation used in financial fraud.",
    source: "MeitY",
    category: "scam-alerts",
    severity: "high",
    date: "2025-06-15",
    url: "https://www.meity.gov.in",
  },
  {
    id: "4",
    title: "New Cyber Crime Reporting Portal Features Launched",
    summary: "National Cyber Crime Reporting Portal adds real-time tracking and state-wise cyber cell integration.",
    source: "Cybercrime.gov.in",
    category: "cyber-laws",
    severity: "medium",
    date: "2025-06-12",
    url: "https://cybercrime.gov.in",
  },
  {
    id: "5",
    title: "PIB Fact Check: Viral WhatsApp Message About Bank Account Closure",
    summary: "Press Information Bureau debunks viral message claiming all bank accounts without Aadhaar linking will be closed.",
    source: "PIB",
    category: "banking-alerts",
    severity: "medium",
    date: "2025-06-10",
    url: "https://pib.gov.in",
  },
  {
    id: "6",
    title: "Instagram Impersonation Scams Targeting Indian Influencers",
    summary: "CERT-In reports surge in fake brand collaboration DMs leading to account takeover and financial fraud.",
    source: "CERT-In",
    category: "social-media",
    severity: "high",
    date: "2025-06-08",
    url: "https://www.cert-in.org.in",
  },
  {
    id: "7",
    title: "Digital Personal Data Protection Act: Key Rights for Citizens",
    summary: "Overview of citizen rights under DPDP Act 2023 including data correction, erasure, and grievance redressal.",
    source: "MeitY",
    category: "cyber-laws",
    severity: "low",
    date: "2025-06-05",
    url: "https://www.meity.gov.in",
  },
  {
    id: "8",
    title: "Fake Customer Care Numbers Circulating on Social Media",
    summary: "Multiple banks report customers losing money to fake helpline numbers promoted through Facebook and Twitter ads.",
    source: "RBI",
    category: "banking-alerts",
    severity: "critical",
    date: "2025-06-03",
    url: "https://www.rbi.org.in",
  },
];

export const rssSources = [
  { name: "CERT-In", url: "https://www.cert-in.org.in/pdf/advisory.xml", category: "data-breaches" as NewsCategory },
  { name: "PIB", url: "https://pib.gov.in/rss.aspx", category: "scam-alerts" as NewsCategory },
];
