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
} from "@/lib/snippets/import";

export const metadata: Metadata = {
  title: "Import — ads-as-code",
  description:
    "Pull your existing campaigns into TypeScript in seconds. Import from Google Ads or Meta — clean, idiomatic code, ready to modify.",
};

export default function ImportPage() {
  return (
    <>
      <FeatureHero
        title="50 campaigns in the UI? Now they're TypeScript."
        subtitle="Import First. Rewrite Never. Pull your entire account into typed, editable campaign files — then diff, version, and apply like code."
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
