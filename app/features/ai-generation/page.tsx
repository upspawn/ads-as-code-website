import type { Metadata } from "next";
import { FeatureHero } from "@/components/FeatureHero";
import { FeatureProblem } from "@/components/FeatureProblem";
import { FeatureHow } from "@/components/FeatureHow";
import { FeatureCapabilities } from "@/components/FeatureCapabilities";
import { FeatureCTA } from "@/components/FeatureCTA";
import {
  heroCode,
  problemLines,
  howSteps,
  capabilities,
} from "@/lib/snippets/ai-generation";

export const metadata: Metadata = {
  title: "AI Copy Generation — ads-as-code",
  description:
    "Generate 15 headlines and 4 descriptions per RSA ad in seconds. Optimize existing copy, judge quality in CI, and scale across every ad group in your account.",
};

export default function AiGenerationPage() {
  return (
    <>
      <FeatureHero
        title="Up to 15 headlines per RSA ad. In seconds."
        subtitle="AI generates ad copy at scale — headlines, descriptions, and body text written directly into your campaign files. Optimize what's live, judge quality in CI, and ship copy you'd actually write yourself."
        code={heroCode}
        lang="shellscript"
      />
      <FeatureProblem lines={problemLines} />
      <FeatureHow heading="How it works" steps={howSteps} />
      <FeatureCapabilities heading="Capabilities" items={capabilities} />
      <FeatureCTA />
    </>
  );
}
