export interface EmergencyContact {
  name: string;
  number?: string;
  url?: string;
  description: string;
  icon: string;
  isPrimary?: boolean;
}

export const governmentResources: EmergencyContact[] = [
  {
    name: "National Cyber Crime Reporting Portal",
    url: "https://cybercrime.gov.in",
    description: "Official portal to report cyber crimes online",
    icon: "globe",
    isPrimary: true,
  },
  {
    name: "National Cyber Crime Helpline",
    number: "1930",
    description: "24/7 helpline for cyber crime victims — call immediately",
    icon: "phone",
    isPrimary: true,
  },
  {
    name: "Indian Computer Emergency Response Team (CERT-In)",
    url: "https://www.cert-in.org.in",
    description: "National nodal agency for cyber security incidents",
    icon: "shield",
  },
  {
    name: "National Consumer Helpline",
    number: "1915",
    description: "Consumer grievances including online fraud",
    icon: "headphones",
  },
];

export const emergencyServices: EmergencyContact[] = [
  { name: "Emergency Services", number: "112", description: "Unified emergency number", icon: "alert" },
  { name: "Women Helpline", number: "181", description: "24/7 support for women in distress", icon: "heart" },
  { name: "Child Helpline", number: "1098", description: "Childline India Foundation", icon: "baby" },
  { name: "Police", number: "100", description: "Police emergency", icon: "badge" },
  { name: "Ambulance", number: "108", description: "Medical emergency", icon: "ambulance" },
  { name: "Fire", number: "101", description: "Fire emergency", icon: "flame" },
];

export const reportingSteps = [
  {
    step: 1,
    title: "Call 1930 immediately",
    description: "Contact the National Cyber Crime Helpline as soon as you discover fraud or unauthorized activity.",
  },
  {
    step: 2,
    title: "Freeze affected bank account",
    description: "Call your bank's fraud helpline and request immediate account freeze to prevent further losses.",
  },
  {
    step: 3,
    title: "Report at cybercrime.gov.in",
    description: "File an official complaint on the National Cyber Crime Reporting Portal with all details.",
  },
  {
    step: 4,
    title: "Collect screenshots and evidence",
    description: "Save transaction IDs, chat screenshots, emails, and phone numbers used by fraudsters.",
  },
  {
    step: 5,
    title: "Contact nearest cyber cell",
    description: "Visit or call your state cyber crime cell for follow-up investigation support.",
  },
];
