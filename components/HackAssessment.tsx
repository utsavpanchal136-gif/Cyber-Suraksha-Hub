"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle, ShieldAlert, ChevronRight } from "lucide-react";
import PageHeader from "./PageHeader";

interface Question {
  id: string;
  text: string;
  weight: number;
}

const questions: Question[] = [
  { id: "logins", text: "Have you noticed unknown login attempts or sessions on your accounts?", weight: 2 },
  { id: "password", text: "Was your password changed without your knowledge?", weight: 3 },
  { id: "emails", text: "Have suspicious emails been sent from your account?", weight: 2 },
  { id: "banking", text: "Have you noticed strange banking or UPI transactions?", weight: 3 },
  { id: "device", text: "Is your device behaving abnormally (slow, pop-ups, unknown apps)?", weight: 2 },
];

type RiskLevel = "low" | "medium" | "high";

interface RiskResult {
  level: RiskLevel;
  title: string;
  description: string;
  recommendations: string[];
  color: string;
  icon: typeof ShieldAlert;
}

function getRiskResult(score: number): RiskResult {
  if (score >= 6) {
    return {
      level: "high",
      title: "High Risk",
      description: "Multiple warning signs detected. Your accounts or device may be compromised. Take immediate action.",
      recommendations: [
        "Call the National Cyber Crime Helpline at 1930 immediately",
        "Change all passwords from a different, secure device",
        "Enable two-factor authentication on all accounts",
        "Contact your bank to freeze accounts and check transactions",
        "Run a full antivirus scan and remove suspicious apps",
        "File a complaint at cybercrime.gov.in with evidence",
      ],
      color: "text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-950/30 dark:border-red-900",
      icon: ShieldAlert,
    };
  }
  if (score >= 3) {
    return {
      level: "medium",
      title: "Medium Risk",
      description: "Some concerning signs detected. Review your accounts and strengthen your security immediately.",
      recommendations: [
        "Change passwords on affected accounts immediately",
        "Review recent login activity on email and social media",
        "Check bank and UPI transaction history for unauthorized activity",
        "Enable two-factor authentication where not already active",
        "Be alert for phishing attempts in the coming days",
        "Consider running a malware scan on your devices",
      ],
      color: "text-amber-600 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-950/30 dark:border-amber-900",
      icon: AlertTriangle,
    };
  }
  return {
    level: "low",
    title: "Low Risk",
    description: "No major warning signs detected. Continue practicing good cyber hygiene to stay protected.",
    recommendations: [
      "Keep all software and apps updated",
      "Use strong, unique passwords with a password manager",
      "Enable two-factor authentication on important accounts",
      "Be cautious of unsolicited messages and links",
      "Regularly review account activity and bank statements",
      "Learn more in our Awareness Hub to stay ahead of threats",
    ],
    color: "text-green-600 bg-green-50 border-green-200 dark:text-green-400 dark:bg-green-950/30 dark:border-green-900",
    icon: CheckCircle2,
  };
}

export default function HackAssessment() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const score = questions.reduce((total, q) => total + (answers[q.id] ? q.weight : 0), 0);
  const answeredCount = Object.keys(answers).length;
  const result = getRiskResult(score);

  const handleAnswer = (id: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setShowResult(false);
  };

  const handleSubmit = () => {
    if (answeredCount === questions.length) setShowResult(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
  };

  return (
    <>
      <PageHeader
        title="Check If I'm Hacked"
        description="Answer these quick questions to assess your cyber security risk and get personalized recommendations."
        badge="Interactive Tool"
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {questions.map((q, i) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-blue-100 bg-white p-6 dark:border-navy-800 dark:bg-navy-900"
            >
              <p className="font-medium text-navy-900 dark:text-white">
                <span className="mr-2 text-blue-600">{i + 1}.</span>
                {q.text}
              </p>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleAnswer(q.id, true)}
                  className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    answers[q.id] === true
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-gray-100 text-navy-700 hover:bg-gray-200 dark:bg-navy-800 dark:text-blue-100 dark:hover:bg-navy-700"
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer(q.id, false)}
                  className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    answers[q.id] === false
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-100 text-navy-700 hover:bg-gray-200 dark:bg-navy-800 dark:text-blue-100 dark:hover:bg-navy-700"
                  }`}
                >
                  No
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSubmit}
            disabled={answeredCount < questions.length}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Get My Risk Assessment
            <ChevronRight className="h-5 w-5" />
          </button>
          {answeredCount > 0 && (
            <button
              onClick={handleReset}
              className="rounded-xl border border-blue-200 px-6 py-3.5 text-sm font-medium text-navy-700 hover:bg-blue-50 dark:border-navy-700 dark:text-blue-100 dark:hover:bg-navy-800"
            >
              Reset
            </button>
          )}
        </div>

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-8 rounded-2xl border p-8 ${result.color}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <result.icon className="h-8 w-8" />
                <div>
                  <h3 className="text-2xl font-bold">{result.title}</h3>
                  <p className="text-sm opacity-80">Risk score: {score}/{questions.reduce((t, q) => t + q.weight, 0)}</p>
                </div>
              </div>
              <p className="mb-6 opacity-90">{result.description}</p>
              <h4 className="font-semibold mb-3">Recommended Actions:</h4>
              <ul className="space-y-2">
                {result.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 mt-0.5 shrink-0" />
                    {rec}
                  </li>
                ))}
              </ul>
              {result.level === "high" && (
                <a
                  href="tel:1930"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-700"
                >
                  Call 1930 Now
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
