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
} from "@/lib/snippets/plan-apply";

export const metadata: Metadata = {
  title: "Plan / Apply — ads-as-code",
  description:
    "Preview every change before it goes live. Dependency-ordered execution, drift detection, and full rollback via git.",
};

export default function PlanApplyPage() {
  return (
    <>
      <FeatureHero
        title="Plan / Apply"
        subtitle="Preview every change before it goes live. Commit. Roll back with git."
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
