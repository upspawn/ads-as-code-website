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
} from "@/lib/snippets/pipelines";

export const metadata: Metadata = {
  title: "Pipelines — ads-as-code",
  description:
    "When ads live in your codebase, your entire engineering pipeline becomes available: CI/CD, staging accounts, image generation, drift detection, and automated budget management.",
};

export default function PipelinesPage() {
  return (
    <>
      <FeatureHero
        title="What happens when ads live in your codebase?"
        subtitle="Your Ads Are Code. Your Pipeline Is Limitless. CI/CD, image generation, staging accounts, drift detection — all the infrastructure you already have, now for ads."
        code={heroCode}
        lang="yaml"
      />
      <FeatureProblem lines={problemLines} />
      <FeatureHow heading="What becomes possible" steps={howSteps} />
      <FeatureCapabilities heading="Capabilities" items={capabilities} />
      <FeatureCTA docsLabel="Explore the SDK" />
    </>
  );
}
