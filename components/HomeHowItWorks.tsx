import { FadeIn } from "./FadeIn";
import { CodeBlock } from "./CodeBlock";
import { CodeToResult } from "./CodeToResult";
import { GoogleAdPreview } from "./GoogleAdPreview";
import { CampaignTree } from "./CampaignTree";
import type { TreeNode } from "./CampaignTree";
import { defineStep, planStep, applyStep } from "@/lib/snippets/homepage";

const campaignTree: TreeNode = {
  label: "Brand - Arcflow",
  type: "campaign",
  children: [
    {
      label: "core-keywords",
      type: "adgroup",
      children: [
        { label: "workflow automation [exact]", type: "keyword" },
        { label: "ai automation [broad]", type: "keyword" },
        { label: "RSA → 3 headlines, 1 description", type: "ad" },
      ],
    },
  ],
};

export function HomeHowItWorks() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto border-t border-code-border">
      <FadeIn>
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Three commands. Full control.
        </h2>
        <p className="text-text-muted text-lg mb-14 max-w-2xl">
          Define ad campaigns in TypeScript. Preview changes with <code className="font-mono text-text bg-code-bg px-1.5 py-0.5 rounded text-base">plan</code>. Apply them to Google Ads and Meta. Detect drift when someone edits in the UI.
        </p>
      </FadeIn>

      <div className="grid gap-14">
        {/* Step 01: Define — code → ad preview + tree */}
        <div>
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-mono text-accent text-sm font-bold">01</span>
              <h3 className="font-heading text-xl font-bold">Define</h3>
            </div>
            <p className="text-text-muted text-base leading-relaxed mb-4">
              Campaigns are TypeScript. Type-safe, reviewable, version-controlled.
            </p>
          </FadeIn>
          <CodeToResult code={defineStep} lang="typescript" label="produces this ad">
            <div className="grid md:grid-cols-2 gap-5">
              <GoogleAdPreview
                headlines={["Automate Any Workflow", "AI-Powered", "Free Trial"]}
                descriptions={["Connect 200+ apps. Ship workflows in minutes."]}
                url="https://arcflow.dev"
              />
              <CampaignTree tree={campaignTree} />
            </div>
          </CodeToResult>
        </div>

        {/* Step 02: Plan */}
        <div>
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-mono text-accent text-sm font-bold">02</span>
              <h3 className="font-heading text-xl font-bold">Plan</h3>
            </div>
            <p className="text-text-muted text-base leading-relaxed mb-4">
              Preview every change before it touches your ad account.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <CodeBlock code={planStep} lang="shellscript" />
          </FadeIn>
        </div>

        {/* Step 03: Apply */}
        <div>
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-mono text-accent text-sm font-bold">03</span>
              <h3 className="font-heading text-xl font-bold">Apply</h3>
            </div>
            <p className="text-text-muted text-base leading-relaxed mb-4">
              Execute with confidence. Rollback with git revert.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <CodeBlock code={applyStep} lang="shellscript" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
