import type { Metadata } from "next";
import HackAssessment from "@/components/HackAssessment";

export const metadata: Metadata = {
  title: "Check If I'm Hacked",
  description: "Interactive cyber security risk assessment tool. Answer quick questions to evaluate if your accounts may be compromised.",
};

export default function CheckHackedPage() {
  return <HackAssessment />;
}
