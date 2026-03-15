import type { Metadata } from "next";
import { FeatureProblem } from "@/components/FeatureProblem";
import { FeatureHow } from "@/components/FeatureHow";
import { FeatureCapabilities } from "@/components/FeatureCapabilities";
import { FeatureCTA } from "@/components/FeatureCTA";
import { CodeToResult } from "@/components/CodeToResult";
import { GoogleAdPreview } from "@/components/GoogleAdPreview";
import { CampaignTree } from "@/components/CampaignTree";
import type { TreeNode } from "@/components/CampaignTree";
import { FadeIn } from "@/components/FadeIn";
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

// Matches the heroCode snippet exactly
const fullTree: TreeNode = {
  label: "Brand - Arcflow",
  type: "campaign",
  children: [
    {
      label: "core-keywords",
      type: "adgroup",
      children: [
        { label: "arcflow [exact]", type: "keyword" },
        { label: "ai workflow automation [phrase]", type: "keyword" },
        { label: "RSA → 3 headlines, 1 description", type: "ad" },
      ],
    },
  ],
};

export default function GoogleAdsPage() {
  return (
    <>
      {/* Hero as CodeToResult */}
      <section className="px-6 md:px-12 pt-12 md:pt-20 pb-16 md:pb-24 max-w-6xl mx-auto">
        <FadeIn>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-4">
            Google Ads
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Search campaigns without the gRPC nightmares. Type-safe builders, human-readable enums.
          </p>
        </FadeIn>
        <CodeToResult code={heroCode} label="produces this ad" delay={150}>
          <div className="grid md:grid-cols-2 gap-5">
            <GoogleAdPreview
              headlines={["Automate Any Workflow", "AI-Powered", "Free Trial"]}
              descriptions={["Connect 200+ apps. Ship workflows in minutes."]}
              url="https://arcflow.dev"
            />
            <CampaignTree tree={fullTree} />
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
