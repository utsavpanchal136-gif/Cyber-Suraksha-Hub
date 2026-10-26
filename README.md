# Cyber Suraksha Hub

**India's Public Cyber Safety Awareness Platform**

A production-ready responsive website helping Indian citizens learn about cyber threats, access emergency resources, and stay updated on scams and cybersecurity laws.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion**
- **next-themes** (Dark Mode)
- **RSS Parser** (News feeds)

## Features

- Sticky navbar with emergency "Call 1930" button
- Hero section with cybersecurity illustration
- Live scam alert ticker
- Quick access cards (Report, Check Hacked, Basics, Contacts)
- 7 awareness categories with 20+ detailed topic pages
- Interactive "Check If I'm Hacked" assessment tool
- Emergency help directory with state-wise cyber cells
- News & alerts dashboard with RSS integration
- Audience-specific resources (Students, Parents, Seniors, Businesses)
- Full dark mode support
- SEO optimized with metadata

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
cd cyber-suraksha-hub
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/                  # Next.js App Router pages
  awareness/          # Education hub with dynamic routes
  check-hacked/       # Risk assessment tool
  emergency/          # Emergency resources
  news/               # Threat intelligence dashboard
  resources/          # Audience-specific guides
  about/              # About page
  api/news/           # RSS feed API
components/           # Reusable UI components
data/                 # Content and configuration data
```

## GTU Societal Internship Project

Developed as part of the GTU Societal Internship initiative to promote cyber safety awareness among Indian citizens.

## Disclaimer

This platform provides educational information and links to official government resources. It is not a substitute for professional legal advice. In emergencies, call **1930** or visit [cybercrime.gov.in](https://cybercrime.gov.in).
