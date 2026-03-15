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
} from "@/lib/snippets/meta-ads";

export const metadata: Metadata = {
  title: "Meta Ads — ads-as-code",
  description:
    "Facebook and Instagram campaigns that live in git. Objective-typed builders, lookalike audiences, and placement control.",
};

export default function MetaAdsPage() {
  return (
    <>
      <FeatureHero
        title="Meta Ads"
        subtitle="Facebook and Instagram campaigns that live in git. Typed objectives, rich targeting, version-controlled creatives."
        code={heroCode}
        lang="typescript"
      />
      <FeatureProblem lines={problemLines} />
      <FeatureHow heading="How it works" steps={howSteps} />
      <FeatureCapabilities heading="Capabilities" items={capabilities} />
      <FeatureCTA />
    </>
  );
}
