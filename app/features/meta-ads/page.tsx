import type { Metadata } from "next";
import { FeatureHero } from "@/components/FeatureHero";
import { FeatureProblem } from "@/components/FeatureProblem";
import { FeatureHow } from "@/components/FeatureHow";
import { FeatureCapabilities } from "@/components/FeatureCapabilities";
import { FeatureCTA } from "@/components/FeatureCTA";
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
        { label: "Image ad → hero-banner.jpg", type: "creative" },
      ],
    },
  ],
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

      {/* Visual: what the code produces */}
      <section className="px-6 md:px-12 pb-16 max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-text-muted text-sm mb-4 font-mono">This code produces →</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-5 items-start">
          <MetaAdPreview
            pageName="Arcflow"
            primaryText="Connect 200+ apps. Build workflows visually. No code needed. Start your free trial today."
            headline="Automate Any Workflow"
            description="Connect Slack, Notion, Salesforce — AI handles the rest."
            cta="Learn More"
            imageAlt="hero-banner.jpg"
            delay={100}
          />
          <CampaignTree
            tree={metaTree}
            title="Campaign Structure"
            delay={200}
          />
        </div>
      </section>

      <FeatureProblem lines={problemLines} />
      <FeatureHow heading="How it works" steps={howSteps} />
      <FeatureCapabilities heading="Capabilities" items={capabilities} />
      <FeatureCTA />
    </>
  );
}
