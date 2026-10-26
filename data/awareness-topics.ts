export interface TopicFAQ {
  question: string;
  answer: string;
}

export interface AwarenessTopic {
  slug: string;
  title: string;
  summary: string;
  article: string[];
  infographicPoints: string[];
  videoId: string;
  checklist: string[];
  faqs: TopicFAQ[];
}

export interface AwarenessCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  topics: AwarenessTopic[];
}

export const awarenessCategories: AwarenessCategory[] = [
  {
    slug: "phishing-attacks",
    title: "Phishing Attacks",
    description: "Learn to identify and avoid email, SMS, and WhatsApp scams targeting Indian citizens.",
    icon: "mail",
    topics: [
      {
        slug: "email-scams",
        title: "Email Scams",
        summary: "Recognize fraudulent emails pretending to be banks, government agencies, or popular services.",
        article: [
          "Email phishing remains one of the most common cyber threats in India. Fraudsters send emails that appear to come from trusted organizations like SBI, HDFC, Income Tax Department, or Amazon.",
          "These emails often create urgency — claiming your account will be blocked, a refund is pending, or legal action will be taken. They include links to fake websites designed to steal your login credentials.",
          "Always check the sender's email address carefully. Official government emails use @gov.in domains. Banks never ask for passwords or OTP via email.",
          "Hover over links before clicking. If the URL doesn't match the official website, do not click. When in doubt, visit the official website directly by typing the URL in your browser.",
        ],
        infographicPoints: [
          "Check sender email domain carefully",
          "Never click suspicious links",
          "Banks never ask for OTP via email",
          "Verify through official website directly",
          "Report phishing to reportphishing@cert-in.org.in",
        ],
        videoId: "Y7zNlEMDmI4",
        checklist: [
          "Verify sender email address matches official domain",
          "Do not download attachments from unknown senders",
          "Enable spam filters on your email account",
          "Report phishing emails to your email provider",
          "Use two-factor authentication on email accounts",
        ],
        faqs: [
          { question: "What should I do if I clicked a phishing link?", answer: "Immediately change your passwords, enable 2FA, and monitor accounts for unauthorized activity. Report to cybercrime.gov.in." },
          { question: "How do I identify a phishing email?", answer: "Look for generic greetings, spelling errors, urgent threats, mismatched URLs, and requests for sensitive information." },
        ],
      },
      {
        slug: "sms-scams",
        title: "SMS Scams (Smishing)",
        summary: "Protect yourself from fraudulent text messages about KYC updates, parcel delivery, and lottery wins.",
        article: [
          "SMS phishing (smishing) has surged in India with messages about KYC expiry, pending deliveries, lottery wins, and account suspension.",
          "These messages contain links to malicious websites or phone numbers of fake customer support agents. Common scams include fake India Post delivery messages and bank KYC update alerts.",
          "TRAI regulations require commercial SMS to include sender IDs. However, fraudsters spoof these IDs. Never call numbers provided in unsolicited SMS.",
          "If you receive a suspicious SMS about your bank account, call the number printed on your debit card — not the number in the SMS.",
        ],
        infographicPoints: [
          "Ignore KYC expiry SMS from unknown numbers",
          "Don't call numbers in suspicious texts",
          "Banks send alerts from registered sender IDs",
          "Block and report spam SMS to 1909",
          "Never share OTP received via SMS",
        ],
        videoId: "f5EbX0HasiQ",
        checklist: [
          "Register for DND to reduce spam SMS",
          "Never share OTP with anyone",
          "Verify bank messages through official app",
          "Report spam by forwarding to 1909",
          "Block suspicious sender numbers",
        ],
        faqs: [
          { question: "I received a KYC expiry SMS. Is it real?", answer: "Banks notify KYC updates through official apps and registered SMS IDs. Visit your bank branch or app to verify — never use links in SMS." },
          { question: "How do I report spam SMS?", answer: "Forward the spam message to 1909 (TRAI DND service) or report on the Sanchar Saathi portal." },
        ],
      },
      {
        slug: "whatsapp-scams",
        title: "WhatsApp Scams",
        summary: "Stay safe from WhatsApp fraud including impersonation, investment schemes, and OTP theft.",
        article: [
          "WhatsApp scams in India often involve impersonation — fraudsters use profile photos of family members or officials to request money or OTP codes.",
          "Investment scams promising high returns through WhatsApp groups are rampant. SEBI-registered advisors never guarantee returns or operate solely through WhatsApp.",
          "Another common scam involves fake customer support numbers shared on WhatsApp. These lead to remote access apps being installed on your phone.",
          "Enable two-step verification on WhatsApp. Never share OTP codes, even if the sender claims to be a family member in an emergency.",
        ],
        infographicPoints: [
          "Verify identity via phone call before sending money",
          "Enable WhatsApp two-step verification",
          "Never share OTP on WhatsApp",
          "Beware of investment groups promising high returns",
          "Block and report suspicious contacts",
        ],
        videoId: "inpok4MKVLM",
        checklist: [
          "Enable two-step verification on WhatsApp",
          "Verify urgent money requests by calling directly",
          "Never join unknown investment groups",
          "Don't install apps suggested by WhatsApp contacts",
          "Report scams using WhatsApp's report feature",
        ],
        faqs: [
          { question: "Someone on WhatsApp asked for my OTP saying they're from the bank.", answer: "This is always a scam. Banks never contact via WhatsApp for OTP. Block the number and report to 1930." },
          { question: "A family member's WhatsApp is asking for money urgently.", answer: "Call them directly on their phone number to verify. WhatsApp accounts can be cloned or hacked." },
        ],
      },
    ],
  },
  {
    slug: "upi-banking-fraud",
    title: "UPI & Banking Fraud",
    description: "Understand QR code scams, fake payment screenshots, and fraudulent customer support calls.",
    icon: "credit-card",
    topics: [
      {
        slug: "qr-code-scams",
        title: "QR Code Scams",
        summary: "Learn how fraudsters misuse QR codes to steal money through UPI payment apps.",
        article: [
          "QR code scams exploit India's widespread UPI adoption. Fraudsters share QR codes claiming you'll receive money, but scanning them actually initiates a payment from your account.",
          "Marketplace scams involve sellers sharing QR codes for 'verification' or 'refund processing.' Always remember: scanning a QR code to receive money is not how UPI works.",
          "In parking and toll scams, stickers with malicious QR codes are placed over legitimate ones. Always verify the payment recipient name before confirming any UPI transaction.",
          "Use UPI apps' built-in spam reporting features. NPCI provides guidelines — you only need to enter your UPI PIN when sending money, never when receiving.",
        ],
        infographicPoints: [
          "QR codes are for sending money, not receiving",
          "Verify recipient name before paying",
          "Never scan QR codes from strangers",
          "Check for tampered QR stickers in public places",
          "Report fraudulent UPI IDs on your payment app",
        ],
        videoId: "k0n0c5cF6kA",
        checklist: [
          "Verify recipient name on UPI screen before paying",
          "Never scan QR codes sent by unknown persons",
          "Use UPI transaction limits and alerts",
          "Enable biometric authentication on UPI apps",
          "Report suspicious UPI IDs immediately",
        ],
        faqs: [
          { question: "Can I receive money by scanning a QR code?", answer: "No. Scanning a QR code initiates a payment from your account. To receive money, share your UPI ID or QR code." },
          { question: "I accidentally paid via a scam QR code. What now?", answer: "Call 1930 immediately, contact your bank to freeze the account, and file a complaint on cybercrime.gov.in." },
        ],
      },
      {
        slug: "fake-payment-screenshots",
        title: "Fake Payment Screenshots",
        summary: "Identify forged UPI payment confirmations used in marketplace and business fraud.",
        article: [
          "Fake payment screenshots are commonly used in OLX, Facebook Marketplace, and small business fraud. Scammers show edited screenshots claiming payment was made.",
          "These screenshots mimic Google Pay, PhonePe, and Paytm interfaces but are created using photo editing apps. Always verify payments in your own bank or UPI app.",
          "For business owners, never deliver goods based on payment screenshots alone. Check your actual account balance and transaction history.",
          "Some scammers use delayed payment tricks — showing a 'processing' screenshot. UPI payments are instant; there is no processing delay for person-to-person transfers.",
        ],
        infographicPoints: [
          "Always verify in your own UPI app",
          "UPI payments are instant, not 'processing'",
          "Don't deliver goods based on screenshots",
          "Check your bank statement directly",
          "Use escrow services for high-value transactions",
        ],
        videoId: "Y7zNlEMDmI4",
        checklist: [
          "Verify payments in your own UPI/bank app",
          "Never release goods on screenshot alone",
          "Enable transaction notifications",
          "Use payment on delivery when possible",
          "Report fake screenshot scams to 1930",
        ],
        faqs: [
          { question: "How can I tell if a payment screenshot is fake?", answer: "Check your own UPI app for the transaction. Fake screenshots often have wrong fonts, missing transaction IDs, or show 'processing' status." },
          { question: "Should I accept UPI payments from unknown buyers?", answer: "Verify payment in your app before handing over goods. For high-value items, prefer cash or bank transfer with confirmation." },
        ],
      },
      {
        slug: "fake-customer-support",
        title: "Fake Customer Support",
        summary: "Avoid fraudulent helpline numbers that appear in search results and social media.",
        article: [
          "Fake customer support scams target users searching for bank, wallet, or tech company helplines. Fraudsters operate fake call centers that appear in Google search results.",
          "These scammers ask victims to install remote access apps like AnyDesk or TeamViewer, then access banking apps and steal money. No legitimate bank ever asks you to install such apps.",
          "Fake support numbers are also shared on social media and via SMS. Always use the helpline number printed on your bank card or the official website.",
          "If someone claiming to be bank support asks for your UPI PIN, OTP, or to install an app — hang up immediately and call your bank's official number.",
        ],
        infographicPoints: [
          "Use helpline numbers from official websites only",
          "Banks never ask to install remote access apps",
          "Never share UPI PIN or OTP over phone",
          "Google search results may show fake numbers",
          "Report fake helplines to cybercrime.gov.in",
        ],
        videoId: "f5EbX0HasiQ",
        checklist: [
          "Save official bank helpline numbers in contacts",
          "Never install AnyDesk/TeamViewer for 'support'",
          "Verify support numbers on official websites",
          "Hang up if asked for OTP or PIN",
          "Report fake numbers to your bank and 1930",
        ],
        faqs: [
          { question: "A caller said my account is compromised and asked me to install an app.", answer: "This is a scam. Hang up immediately. Call your bank using the number on your debit card." },
          { question: "How do I find the real customer support number?", answer: "Use the number on your bank card, passbook, or the official website accessed by typing the URL directly." },
        ],
      },
    ],
  },
  {
    slug: "social-media-security",
    title: "Social Media Security",
    description: "Secure your Instagram, Facebook accounts and learn proper account recovery steps.",
    icon: "share-2",
    topics: [
      {
        slug: "instagram-security",
        title: "Instagram Security",
        summary: "Protect your Instagram account from hacking, impersonation, and phishing DMs.",
        article: [
          "Instagram accounts are targeted for impersonation, sextortion, and financial fraud. Hackers often gain access through phishing DMs claiming you've violated community guidelines.",
          "Enable two-factor authentication using an authenticator app rather than SMS. Review connected apps and remove unused third-party access regularly.",
          "Be cautious of DMs offering verified badges, brand collaborations, or claiming your account will be deleted. These are phishing attempts to steal credentials.",
          "Use a strong, unique password and check login activity in Settings > Security > Login Activity to spot unauthorized access.",
        ],
        infographicPoints: [
          "Enable 2FA with authenticator app",
          "Ignore 'account violation' DMs",
          "Review connected third-party apps",
          "Use strong unique passwords",
          "Check login activity regularly",
        ],
        videoId: "inpok4MKVLM",
        checklist: [
          "Enable two-factor authentication",
          "Use a unique strong password",
          "Review and revoke third-party app access",
          "Set account to private if needed",
          "Report impersonation accounts to Instagram",
        ],
        faqs: [
          { question: "I received a DM saying my account will be deleted.", answer: "This is a phishing scam. Do not click any links. Report the account and verify your security settings." },
          { question: "How do I recover a hacked Instagram account?", answer: "Use Instagram's account recovery at help.instagram.com. Report the hack and enable 2FA once recovered." },
        ],
      },
      {
        slug: "facebook-security",
        title: "Facebook Security",
        summary: "Keep your Facebook account and personal data safe from hackers and scammers.",
        article: [
          "Facebook accounts often serve as login credentials for many other services, making them high-value targets. Compromised accounts are used to spread scams to your friends.",
          "Enable Facebook Protect if eligible, use two-factor authentication, and be wary of messages from friends asking for money or sharing suspicious links.",
          "Review privacy settings regularly. Limit who can see your posts, friend list, and personal information. Scammers use public profiles for social engineering.",
          "Facebook Marketplace scams are common — verify buyers and sellers, meet in public places, and never share OTP or make advance payments to strangers.",
        ],
        infographicPoints: [
          "Enable Facebook two-factor authentication",
          "Review privacy settings regularly",
          "Verify urgent requests from friends by calling",
          "Be cautious on Facebook Marketplace",
          "Check active sessions in security settings",
        ],
        videoId: "Y7zNlEMDmI4",
        checklist: [
          "Enable 2FA on Facebook account",
          "Review privacy and sharing settings",
          "Check active login sessions monthly",
          "Be skeptical of friend money requests",
          "Report compromised accounts immediately",
        ],
        faqs: [
          { question: "My friend's Facebook account is sending me suspicious links.", answer: "Their account may be hacked. Don't click links. Inform your friend via phone and report the account." },
          { question: "How do I enable Facebook Protect?", answer: "Go to Settings > Security > Facebook Protect and follow the setup steps if you're eligible." },
        ],
      },
      {
        slug: "account-recovery",
        title: "Account Recovery",
        summary: "Step-by-step guide to recover hacked social media and email accounts safely.",
        article: [
          "If your account is hacked, act quickly. Start by attempting password reset using the 'Forgot Password' option. Use a secure device and network for recovery.",
          "Check if the hacker changed your recovery email or phone number. Most platforms have an account recovery form for this situation.",
          "Document evidence of the hack — screenshots of unauthorized posts, login alerts, and messages. This helps when reporting to platform support and cyber crime authorities.",
          "After recovery, immediately change passwords on all linked accounts, enable 2FA, and review connected apps. Report the incident on cybercrime.gov.in if financial loss occurred.",
        ],
        infographicPoints: [
          "Act quickly — use 'Forgot Password' first",
          "Use platform account recovery forms",
          "Document evidence with screenshots",
          "Change passwords on all linked accounts",
          "Enable 2FA after recovery",
        ],
        videoId: "f5EbX0HasiQ",
        checklist: [
          "Attempt password reset from a secure device",
          "Use official platform recovery forms",
          "Change passwords on all linked accounts",
          "Enable two-factor authentication",
          "Report to cybercrime.gov.in if needed",
        ],
        faqs: [
          { question: "The hacker changed my recovery email. What do I do?", answer: "Use the platform's account recovery form with identity verification. Contact platform support directly." },
          { question: "Should I pay someone to recover my account?", answer: "No. Legitimate recovery is free through official platform channels. 'Hacker for hire' services are often scams." },
        ],
      },
    ],
  },
  {
    slug: "password-safety-2fa",
    title: "Password Safety & 2FA",
    description: "Create strong passwords, use password managers, and enable multi-factor authentication.",
    icon: "key",
    topics: [
      {
        slug: "strong-passwords",
        title: "Strong Passwords",
        summary: "Learn how to create and maintain passwords that protect your digital life.",
        article: [
          "Weak passwords like '123456' or 'password' are responsible for most account breaches. Use passwords with at least 12 characters combining letters, numbers, and symbols.",
          "Never reuse passwords across accounts. If one service is breached, reused passwords give attackers access to all your accounts including banking and email.",
          "Avoid using personal information like birthdays, names, or phone numbers in passwords. These are easily guessed through social media profiling.",
          "Change passwords immediately if you learn of a data breach affecting a service you use. Check haveibeenpwned.com to see if your email was exposed.",
        ],
        infographicPoints: [
          "Use 12+ characters with mixed character types",
          "Never reuse passwords across sites",
          "Avoid personal info in passwords",
          "Change passwords after data breaches",
          "Check haveibeenpwned.com regularly",
        ],
        videoId: "k0n0c5cF6kA",
        checklist: [
          "Use unique passwords for each account",
          "Make passwords at least 12 characters long",
          "Include uppercase, lowercase, numbers, symbols",
          "Change compromised passwords immediately",
          "Never share passwords with anyone",
        ],
        faqs: [
          { question: "How often should I change my passwords?", answer: "Change immediately after a breach. Otherwise, strong unique passwords with 2FA don't need frequent rotation." },
          { question: "Is it safe to write passwords in a notebook?", answer: "A physical notebook at home is safer than reusing weak passwords, but a password manager is the best option." },
        ],
      },
      {
        slug: "password-managers",
        title: "Password Managers",
        summary: "Use password managers to securely store and generate strong unique passwords.",
        article: [
          "Password managers like Bitwarden, 1Password, or built-in browser managers generate and store unique passwords for every account behind one master password.",
          "They encrypt your password vault locally and in the cloud. You only need to remember one strong master password to access all your credentials.",
          "Password managers also help detect phishing by not auto-filling credentials on fake websites that mimic legitimate login pages.",
          "Many password managers are free for personal use. Enable biometric unlock on mobile for convenience while maintaining security.",
        ],
        infographicPoints: [
          "One master password protects all accounts",
          "Auto-generates strong unique passwords",
          "Detects phishing via autofill behavior",
          "Syncs securely across devices",
          "Free options available for personal use",
        ],
        videoId: "w68BBPAYWrI",
        checklist: [
          "Choose a reputable password manager",
          "Create a strong master password",
          "Enable 2FA on the password manager",
          "Import existing passwords gradually",
          "Use autofill to avoid typing passwords",
        ],
        faqs: [
          { question: "What if my password manager is hacked?", answer: "Reputable managers use zero-knowledge encryption. Your data remains encrypted even if their servers are breached." },
          { question: "Are browser built-in password managers safe?", answer: "They're better than reusing passwords but dedicated managers offer more features and cross-browser support." },
        ],
      },
      {
        slug: "multi-factor-authentication",
        title: "Multi-Factor Authentication",
        summary: "Add an extra layer of security with 2FA on all your important accounts.",
        article: [
          "Multi-factor authentication (MFA) requires a second verification step beyond your password — typically a code from an app, SMS, or biometric scan.",
          "Authenticator apps (Google Authenticator, Microsoft Authenticator) are more secure than SMS-based 2FA, which can be bypassed through SIM swap attacks.",
          "Enable 2FA on email, banking, social media, and cloud storage accounts at minimum. Your email account is especially critical as it's used for password resets.",
          "Save backup codes provided during 2FA setup in a secure location. These allow account access if you lose your phone.",
        ],
        infographicPoints: [
          "Enable 2FA on email and banking first",
          "Authenticator apps beat SMS codes",
          "Save backup recovery codes securely",
          "Biometric unlock adds convenience",
          "2FA blocks 99.9% of automated attacks",
        ],
        videoId: "hp0S5P2t8bw",
        checklist: [
          "Enable 2FA on email accounts first",
          "Use authenticator app over SMS when possible",
          "Save backup codes in a secure place",
          "Enable 2FA on banking and payment apps",
          "Review 2FA settings on all important accounts",
        ],
        faqs: [
          { question: "Is SMS-based 2FA good enough?", answer: "It's better than no 2FA, but authenticator apps are safer against SIM swap attacks. Use app-based 2FA when available." },
          { question: "I lost my phone with the authenticator app.", answer: "Use backup recovery codes to regain access, then set up 2FA on your new device." },
        ],
      },
    ],
  },
  {
    slug: "identity-theft",
    title: "Identity Theft Protection",
    description: "Protect your Aadhaar, PAN, and SIM from identity theft and fraud.",
    icon: "user-x",
    topics: [
      {
        slug: "aadhaar-safety",
        title: "Aadhaar Safety",
        summary: "Safeguard your Aadhaar number and biometric data from misuse and fraud.",
        article: [
          "Your Aadhaar is a sensitive identity document. Never share your full Aadhaar number with unknown persons or over unsecured channels.",
          "Use UIDAI's masked Aadhaar (showing only last 4 digits) when sharing for non-essential purposes. Download it from myaadhaar.uidai.gov.in.",
          "Enable biometric lock on your Aadhaar through the UIDAI website. This prevents unauthorized biometric authentication using your Aadhaar.",
          "Regularly check your Aadhaar authentication history on the UIDAI portal to detect unauthorized use of your Aadhaar credentials.",
        ],
        infographicPoints: [
          "Use masked Aadhaar for non-essential sharing",
          "Enable biometric lock on UIDAI portal",
          "Check authentication history regularly",
          "Never share Aadhaar OTP with strangers",
          "Report misuse to UIDAI helpline 1947",
        ],
        videoId: "Y7zNlEMDmI4",
        checklist: [
          "Enable Aadhaar biometric lock",
          "Use masked Aadhaar when possible",
          "Check authentication history monthly",
          "Never share Aadhaar OTP with callers",
          "Report unauthorized use to UIDAI",
        ],
        faqs: [
          { question: "Should I share my Aadhaar for hotel check-in?", answer: "Hotels may require ID proof. Use masked Aadhaar or alternative ID like driving license when possible." },
          { question: "Someone asked for Aadhaar OTP on phone.", answer: "Never share Aadhaar OTP with anyone. This is a scam to link your Aadhaar to fraudulent activities." },
        ],
      },
      {
        slug: "pan-card-safety",
        title: "PAN Card Safety",
        summary: "Prevent misuse of your PAN for fraudulent loans, tax filings, and financial crimes.",
        article: [
          "PAN card misuse can result in fraudulent loans, fake ITR filings, and money laundering in your name. Treat your PAN like a financial password.",
          "Never share PAN card photos on WhatsApp, social media, or with unknown persons. When required for legitimate purposes, share only with verified entities.",
          "Check your credit report regularly on CIBIL or other bureaus to detect unauthorized loans taken using your PAN.",
          "If you suspect PAN misuse, file a complaint with the Income Tax Department and report on cybercrime.gov.in.",
        ],
        infographicPoints: [
          "Never share PAN photos on social media",
          "Check CIBIL report for unknown loans",
          "Verify requests before sharing PAN",
          "Report misuse to Income Tax Department",
          "Use e-PAN with masked details when possible",
        ],
        videoId: "f5EbX0HasiQ",
        checklist: [
          "Never post PAN card photos online",
          "Check credit report every 6 months",
          "Verify entity before sharing PAN",
          "Report suspicious PAN activity",
          "Use masked PAN where accepted",
        ],
        faqs: [
          { question: "How do I check if my PAN is misused?", answer: "Check your CIBIL credit report for unknown loans and verify ITR filings on the Income Tax e-filing portal." },
          { question: "Can I get a new PAN if mine is misused?", answer: "PAN cannot be changed. Report misuse, file FIR, and work with authorities to clear fraudulent records." },
        ],
      },
      {
        slug: "sim-swap-fraud",
        title: "SIM Swap Fraud",
        summary: "Understand and prevent SIM swap attacks that bypass SMS-based security.",
        article: [
          "SIM swap fraud occurs when criminals trick your telecom provider into transferring your number to their SIM card, intercepting all SMS including OTPs.",
          "Warning signs include sudden loss of mobile network, inability to make calls, and notifications about SIM change requests you didn't initiate.",
          "Contact your telecom provider immediately if your SIM stops working unexpectedly. Visit a service center with ID proof rather than calling unverified numbers.",
          "Use app-based 2FA instead of SMS OTP wherever possible. Register for Do Not Disturb and telecom fraud reporting on the Sanchar Saathi portal.",
        ],
        infographicPoints: [
          "Sudden network loss may indicate SIM swap",
          "Contact telecom provider immediately",
          "Use app-based 2FA over SMS OTP",
          "Register on Sanchar Saathi portal",
          "Set SIM change alerts with your provider",
        ],
        videoId: "k0n0c5cF6kA",
        checklist: [
          "Register for SIM change alerts",
          "Use authenticator app 2FA over SMS",
          "Contact telecom provider if network drops",
          "Register on Sanchar Saathi portal",
          "Report SIM swap to 1930 immediately",
        ],
        faqs: [
          { question: "My phone suddenly has no network. Is it SIM swap?", answer: "It could be. Contact your telecom provider immediately from another phone and visit a service center." },
          { question: "How do I protect against SIM swap?", answer: "Enable SIM change alerts, use app-based 2FA, and add a porting PIN/MNP PIN with your telecom provider." },
        ],
      },
    ],
  },
  {
    slug: "safe-browsing",
    title: "Safe Browsing",
    description: "Navigate the web safely by avoiding malicious websites and managing app permissions.",
    icon: "globe",
    topics: [
      {
        slug: "malicious-websites",
        title: "Malicious Websites",
        summary: "Identify dangerous websites that spread malware, steal data, or run phishing scams.",
        article: [
          "Malicious websites may look identical to legitimate banking, shopping, or government sites. Always check for HTTPS and verify the domain name carefully.",
          "Look for misspellings in URLs — cybercrime.gov.in vs cybercrimes-gov.in. Fraudsters register similar domains to trick users.",
          "Avoid downloading software from unofficial sources. Pirated software and 'cracked' apps often contain malware that steals banking credentials.",
          "Use browser security features like Google Safe Browsing which warns about dangerous sites. Keep your browser updated for the latest security patches.",
        ],
        infographicPoints: [
          "Check URL spelling before entering data",
          "Look for HTTPS padlock in address bar",
          "Download apps only from official stores",
          "Heed browser security warnings",
          "Keep browser updated automatically",
        ],
        videoId: "w68BBPAYWrI",
        checklist: [
          "Verify website URL before entering credentials",
          "Download software from official sources only",
          "Enable browser safe browsing features",
          "Keep browser and OS updated",
          "Use ad blockers to reduce malicious ads",
        ],
        faqs: [
          { question: "Does HTTPS mean a website is safe?", answer: "HTTPS means encrypted connection, not trustworthy content. Phishing sites can also use HTTPS." },
          { question: "I accidentally visited a suspicious website.", answer: "Close the tab, don't enter any information, run an antivirus scan, and clear browser cache." },
        ],
      },
      {
        slug: "browser-safety",
        title: "Browser Safety",
        summary: "Configure your browser for maximum security and privacy while browsing.",
        article: [
          "Your browser is the gateway to the internet. Configure security settings, disable unnecessary permissions, and use privacy-focused extensions carefully.",
          "Enable 'Do Not Track' and block third-party cookies. Clear browsing data regularly, especially on shared computers.",
          "Use separate browser profiles for banking and general browsing. This isolates sensitive sessions from potentially compromised browsing activity.",
          "Be cautious with browser extensions — only install from official stores and review permissions. Malicious extensions can read all your browsing data.",
        ],
        infographicPoints: [
          "Use separate profiles for banking",
          "Review extension permissions carefully",
          "Block third-party cookies",
          "Clear data on shared computers",
          "Keep browser auto-update enabled",
        ],
        videoId: "hp0S5P2t8bw",
        checklist: [
          "Enable automatic browser updates",
          "Use separate profile for banking",
          "Review installed extensions monthly",
          "Block pop-ups and third-party cookies",
          "Clear cache on shared devices",
        ],
        faqs: [
          { question: "Which browser is most secure?", answer: "All major browsers are secure when updated. Security depends more on your habits and settings than browser choice." },
          { question: "Should I use incognito mode for banking?", answer: "Incognito doesn't add security. Use HTTPS, 2FA, and a updated browser on a trusted device instead." },
        ],
      },
      {
        slug: "app-permissions",
        title: "App Permissions",
        summary: "Control what data and features mobile apps can access on your device.",
        article: [
          "Mobile apps often request excessive permissions — access to contacts, camera, microphone, and location when not needed for their function.",
          "Review app permissions in your phone settings regularly. Revoke permissions that aren't essential for the app's core functionality.",
          "Be especially cautious with apps requesting accessibility services, device admin rights, or overlay permissions — these can be abused to steal banking credentials.",
          "Download apps only from Google Play Store or Apple App Store. Sideloaded APK files from unknown sources are a major malware vector in India.",
        ],
        infographicPoints: [
          "Review app permissions regularly",
          "Deny unnecessary access requests",
          "Avoid sideloading APK files",
          "Watch for accessibility permission abuse",
          "Uninstall unused apps",
        ],
        videoId: "inpok4MKVLM",
        checklist: [
          "Review permissions for all installed apps",
          "Deny unnecessary permission requests",
          "Install apps only from official stores",
          "Remove apps you no longer use",
          "Be wary of apps requesting admin access",
        ],
        faqs: [
          { question: "Why does a flashlight app need my contacts?", answer: "It doesn't. Deny unnecessary permissions and consider uninstalling apps that request excessive access." },
          { question: "Is it safe to install APK files?", answer: "Only from verified developers. Unknown APKs are a common source of banking malware in India." },
        ],
      },
    ],
  },
  {
    slug: "cyberbullying",
    title: "Cyberbullying & Online Harassment",
    description: "Resources for students and guidance on reporting online abuse and harassment.",
    icon: "message-circle",
    topics: [
      {
        slug: "student-safety",
        title: "Student Safety Online",
        summary: "Help students navigate online spaces safely and recognize cyberbullying.",
        article: [
          "Students face unique online risks including cyberbullying, exam scam websites, fake scholarship offers, and peer pressure on social media.",
          "Encourage open communication about online experiences. Students should know they can report bullying without fear of losing device privileges.",
          "Educate about digital footprint — posts, photos, and comments can persist forever and affect college admissions and employment.",
          "Schools should have clear cyberbullying policies. Students can report incidents to teachers, parents, and the Cyber Crime Helpline at 1930.",
        ],
        infographicPoints: [
          "Talk openly about online experiences",
          "Think before posting — digital footprint lasts",
          "Report bullying to trusted adults",
          "Don't respond to cyberbullies",
          "Save evidence of harassment",
        ],
        videoId: "f5EbX0HasiQ",
        checklist: [
          "Discuss online safety with students regularly",
          "Set age-appropriate screen time limits",
          "Monitor without invading privacy",
          "Teach how to report and block bullies",
          "Save evidence of cyberbullying incidents",
        ],
        faqs: [
          { question: "My child is being bullied online. What should I do?", answer: "Document evidence, block the bully, report to the platform, inform school authorities, and call 1098 (Childline) if needed." },
          { question: "Should I take away my child's phone if they're bullied?", answer: "This may prevent them from reporting future incidents. Instead, work together on safety settings and reporting." },
        ],
      },
      {
        slug: "reporting-abuse",
        title: "Reporting Online Abuse",
        summary: "Know where and how to report cyberbullying, harassment, and illegal online content.",
        article: [
          "Online abuse can be reported through multiple channels — social media platforms, cybercrime.gov.in, and specialized helplines.",
          "Document all evidence before reporting: screenshots, URLs, usernames, dates, and times. This strengthens your complaint and aids investigation.",
          "For women facing online harassment, contact the Women Helpline at 181 or the National Commission for Women portal.",
          "Child victims should be supported through Childline (1098) and parents should file complaints on cybercrime.gov.in with the child's details protected.",
        ],
        infographicPoints: [
          "Document evidence with screenshots",
          "Report on platform AND cybercrime.gov.in",
          "Women Helpline: 181",
          "Childline: 1098",
          "National Cyber Crime Helpline: 1930",
        ],
        videoId: "Y7zNlEMDmI4",
        checklist: [
          "Screenshot all abusive content before reporting",
          "Report to the social media platform",
          "File complaint on cybercrime.gov.in",
          "Contact appropriate helpline (181/1098/1930)",
          "Seek counseling support if needed",
        ],
        faqs: [
          { question: "Can I report anonymous harassment?", answer: "Yes. Platforms and cyber cells can trace accounts with proper legal process. File a complaint with all available evidence." },
          { question: "Is online harassment a crime in India?", answer: "Yes. It can be prosecuted under IT Act 2000, IPC sections for harassment, and POCSO Act for child victims." },
        ],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return awarenessCategories.find((c) => c.slug === slug);
}

export function getTopic(categorySlug: string, topicSlug: string) {
  const category = getCategory(categorySlug);
  return category?.topics.find((t) => t.slug === topicSlug);
}

export function getAllTopicPaths() {
  return awarenessCategories.flatMap((category) =>
    category.topics.map((topic) => ({
      category: category.slug,
      topic: topic.slug,
    }))
  );
}
