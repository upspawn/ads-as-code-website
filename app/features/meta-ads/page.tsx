import type { Metadata } from "next";
import { FeatureProblem } from "@/components/FeatureProblem";
import { FeatureHow } from "@/components/FeatureHow";
import { FeatureCapabilities } from "@/components/FeatureCapabilities";
import { FeatureCTA } from "@/components/FeatureCTA";
import { CodeToResult } from "@/components/CodeToResult";
import { MetaAdPreview } from "@/components/MetaAdPreview";
import { CampaignTree } from "@/components/CampaignTree";
import type { TreeNode } from "@/components/CampaignTree";
import { FadeIn } from "@/components/FadeIn";
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

const metaTree: TreeNode = {
  label: "Brand - Arcflow",
  type: "campaign",
  children: [
    {
      label: "professionals-25-45",
      type: "adset",
      children: [
        { label: "interests: SaaS, Automation", type: "keyword" },
        { label: "lookalike: purchasers 2%", type: "keyword" },
        { label: "Image → hero-banner.jpg", type: "creative" },
      ],
    },
  ],
};

export default function MetaAdsPage() {
  return (
    <>
      {/* Hero as CodeToResult */}
      <section className="px-6 md:px-12 pt-12 md:pt-20 pb-16 md:pb-24 max-w-6xl mx-auto">
        <FadeIn>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-4">
            Meta Ads
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Facebook and Instagram campaigns that live in git. Typed objectives, rich targeting, version-controlled creatives.
          </p>
        </FadeIn>
        <CodeToResult code={heroCode} label="produces this ad" delay={150}>
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <MetaAdPreview
              pageName="Arcflow"
              primaryText="Connect 200+ apps. Build workflows visually. No code needed."
              headline="Automate Any Workflow"
              cta="Learn More"
            />
            <CampaignTree tree={metaTree} />
          </div>
        </CodeToResult>
      </section>

      <FeatureProblem lines={problemLines} />
      <FeatureHow heading="How it works" steps={howSteps} />
      <FeatureCapabilities heading="Capabilities" items={capabilities} />
      <FeatureCTA />
    </>
  );
}
