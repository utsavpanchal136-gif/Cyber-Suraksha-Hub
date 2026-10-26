export const scamAlerts = [
  { id: 1, text: "New UPI Fraud Alert — Never share OTP with anyone claiming to be from your bank", severity: "high" },
  { id: 2, text: "WhatsApp OTP Scam — Fraudsters are impersonating family members to steal OTPs", severity: "high" },
  { id: 3, text: "Fake Internship Scam — Verify job offers before paying registration fees", severity: "medium" },
  { id: 4, text: "Banking Phishing Attack — Do not click links in SMS claiming your account is blocked", severity: "high" },
  { id: 5, text: "QR Code Scam Alert — Scan only trusted QR codes; verify payment details before confirming", severity: "high" },
  { id: 6, text: "SIM Swap Fraud — Contact your telecom provider if your phone loses network unexpectedly", severity: "high" },
  { id: 7, text: "Fake Customer Support — Banks never ask for OTP or PIN over phone calls", severity: "medium" },
];

export type ScamAlert = (typeof scamAlerts)[number];
