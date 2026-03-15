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

// Matches the heroCode snippet exactly
const metaTree: TreeNode = {
  label: "Acme — Traffic — AI Enthusiasts",
  type: "campaign",
  children: [
    {
      label: "AI Ops — USA",
      type: "adset",
      children: [
        { label: "age: 28–55, geo: US", type: "keyword" },
        { label: "interests: AI, SaaS, Zapier", type: "keyword" },
        { label: "placements: feed, reels, stories", type: "keyword" },
        { label: "hero-workflow.jpg → 'Automate Your Entire Workflow'", type: "creative" },
      ],
    },
    {
      label: "Lookalike — 1% Customers",
      type: "adset",
      children: [
        { label: "geo: US, lookalike: customer-list-q1 1%", type: "keyword" },
        { label: "placements: feed", type: "keyword" },
        { label: "social-proof.jpg → 'Join 12,000+ Teams'", type: "creative" },
      ],
    },
  ],
};

export default function MetaAdsPage() {
  return (
    <>
      <section className="px-6 md:px-12 pt-12 md:pt-20 pb-16 md:pb-24 max-w-6xl mx-auto">
        <FadeIn>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-4">
            Meta Ads
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Facebook and Instagram campaigns that live in git. Typed objectives, rich targeting, version-controlled creatives.
          </p>
        </FadeIn>
        <CodeToResult code={heroCode} label="produces these ads" delay={150}>
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <div className="space-y-3">
              <MetaAdPreview
                pageName="Acme"
                primaryText="Acme connects your tools. No code. Deploy in minutes."
                headline="Automate Your Entire Workflow with AI"
                cta="Learn More"
              />
              <MetaAdPreview
                pageName="Acme"
                primaryText="The workflow automation platform ops teams swear by."
                headline="Join 12,000+ Teams Using Acme"
                cta="Learn More"
              />
            </div>
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
