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
} from "@/lib/snippets/google-ads";

export const metadata: Metadata = {
  title: "Google Ads — ads-as-code",
  description:
    "Search campaigns without the gRPC nightmares. Type-safe builders, branded types, and dependency-ordered mutations.",
};

export default function GoogleAdsPage() {
  return (
    <>
      <FeatureHero
        title="Google Ads"
        subtitle="Search campaigns without the gRPC nightmares. Type-safe builders, human-readable enums."
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
