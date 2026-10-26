export interface ResourceItem {
  title: string;
  description: string;
  href: string;
}

export interface ResourceSection {
  slug: string;
  title: string;
  description: string;
  icon: string;
  items: ResourceItem[];
}

export const resourceSections: ResourceSection[] = [
  {
    slug: "students",
    title: "For Students",
    description: "Stay safe from gaming scams, fake internships, and social media threats.",
    icon: "graduation-cap",
    items: [
      {
        title: "Gaming Scams",
        description: "Avoid free V-Bucks, UC coins, and game hack scams that steal account credentials.",
        href: "/awareness/social-media-security/instagram-security",
      },
      {
        title: "Fake Internship Scams",
        description: "Verify internship offers on company websites. Never pay registration or training fees upfront.",
        href: "/awareness/phishing-attacks/email-scams",
      },
      {
        title: "Social Media Safety",
        description: "Protect your profiles, manage privacy settings, and handle cyberbullying effectively.",
        href: "/awareness/cyberbullying/student-safety",
      },
    ],
  },
  {
    slug: "parents",
    title: "For Parents",
    description: "Guide your children safely through the digital world.",
    icon: "users",
    items: [
      {
        title: "Child Online Safety",
        description: "Set age-appropriate boundaries, parental controls, and open communication about online activity.",
        href: "/awareness/cyberbullying/student-safety",
      },
      {
        title: "Screen Monitoring",
        description: "Balance supervision with trust. Use built-in parental controls on devices and apps.",
        href: "/awareness/safe-browsing/app-permissions",
      },
      {
        title: "Cyberbullying Prevention",
        description: "Recognize signs of cyberbullying and know how to report and support your child.",
        href: "/awareness/cyberbullying/reporting-abuse",
      },
    ],
  },
  {
    slug: "senior-citizens",
    title: "For Senior Citizens",
    description: "Simple guides to protect against the most common scams targeting seniors.",
    icon: "heart-handshake",
    items: [
      {
        title: "Banking Fraud Prevention",
        description: "Never share OTP, PIN, or CVV. Banks never ask for these over phone or SMS.",
        href: "/awareness/upi-banking-fraud/fake-customer-support",
      },
      {
        title: "WhatsApp Scams",
        description: "Verify identity before sending money. Enable two-step verification on WhatsApp.",
        href: "/awareness/phishing-attacks/whatsapp-scams",
      },
      {
        title: "OTP Fraud",
        description: "Your OTP is your digital signature. Never share it with anyone, including family on phone.",
        href: "/awareness/upi-banking-fraud/qr-code-scams",
      },
    ],
  },
  {
    slug: "small-businesses",
    title: "For Small Businesses",
    description: "Protect your business from ransomware, email fraud, and employee-targeted attacks.",
    icon: "building-2",
    items: [
      {
        title: "Ransomware Awareness",
        description: "Backup data regularly, keep software updated, and never open suspicious email attachments.",
        href: "/awareness/safe-browsing/malicious-websites",
      },
      {
        title: "Email Security",
        description: "Train employees to identify phishing. Use business email with SPF, DKIM, and DMARC.",
        href: "/awareness/phishing-attacks/email-scams",
      },
      {
        title: "Employee Awareness",
        description: "Conduct regular cyber security training. Establish clear protocols for financial transactions.",
        href: "/awareness/password-safety-2fa/multi-factor-authentication",
      },
    ],
  },
];
