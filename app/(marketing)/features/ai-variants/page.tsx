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
} from "@/lib/snippets/ai-variants";

export const metadata: Metadata = {
  title: "AI Variants — ads-as-code",
  description:
    "Expand one campaign into translated locale variants or ICP-targeted copies. Launch in 5 markets without 5x the work.",
};

export default function AiVariantsPage() {
  return (
    <>
      <FeatureHero
        title="Launch in 5 markets without 5x the work."
        subtitle="One command turns a campaign into translated locale variants or persona-targeted copies. Every variant is a TypeScript file — reviewable, diffable, and applied like any other campaign."
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
