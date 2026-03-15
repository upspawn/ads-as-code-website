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
} from "@/lib/snippets/creatives";

export const metadata: Metadata = {
  title: "Creatives — ads-as-code",
  description:
    "Images, videos, and carousels defined in code. Local file references, auto-upload on apply, and version-controlled assets alongside your campaigns.",
};

export default function CreativesPage() {
  return (
    <>
      <FeatureHero
        title="Images, videos, and carousels — defined, versioned, deployed."
        subtitle="Creative assets are code. Reference local files, define carousels inline, and let ads apply handle the upload. Every creative lives in git next to the campaign it belongs to."
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
