import type { Metadata } from "next";
import { FeatureHero } from "@/components/FeatureHero";
import { FeatureProblem } from "@/components/FeatureProblem";
import { FeatureHow } from "@/components/FeatureHow";
import { FeatureCapabilities } from "@/components/FeatureCapabilities";
import { FeatureCTA } from "@/components/FeatureCTA";
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

const fullTree: TreeNode = {
  label: "Brand - Arcflow",
  type: "campaign",
  children: [
    {
      label: "core-keywords",
      type: "adgroup",
      children: [
        { label: "workflow automation [exact]", type: "keyword" },
        { label: "ai automation tool [exact]", type: "keyword" },
        { label: "automate workflows [broad]", type: "keyword" },
        { label: "RSA → 3 headlines, 2 descriptions", type: "ad" },
      ],
    },
    { label: "Sitelinks (3)", type: "extension" },
    { label: "Callouts (3)", type: "extension" },
  ],
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

      {/* Visual: what the code produces */}
      <section className="px-6 md:px-12 pb-16 max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-text-muted text-sm mb-4 font-mono">This code produces →</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-5">
          <GoogleAdPreview
            headlines={["Automate Any Workflow", "AI-Powered", "Free Trial"]}
            descriptions={["Connect 200+ apps. Ship workflows in minutes.", "Teams save 12 hrs/week on average."]}
            url="https://arcflow.dev"
            sitelinks={[
              { title: "See Pricing", url: "#" },
              { title: "Integrations", url: "#" },
              { title: "Templates", url: "#" },
            ]}
            callouts={["No Credit Card", "SOC 2 Certified", "99.9% Uptime"]}
            delay={100}
          />
          <CampaignTree
            tree={fullTree}
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
