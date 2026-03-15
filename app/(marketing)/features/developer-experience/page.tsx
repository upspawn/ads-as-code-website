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
} from "@/lib/snippets/developer-experience";

export const metadata: Metadata = {
  title: "Developer Experience — ads-as-code",
  description:
    "Full TypeScript autocomplete, branded type validation, and AI tools that work natively. No MCP server, no plugin — your AI already speaks TypeScript.",
};

export default function DeveloperExperiencePage() {
  return (
    <>
      <FeatureHero
        title="The best ad management interface is your editor."
        subtitle="Your AI Already Knows TypeScript. Full autocomplete, branded type safety, AI-native workflows — and a git-based review process your whole team already understands."
        code={heroCode}
        lang="typescript"
      />
      <FeatureProblem lines={problemLines} />
      <FeatureHow heading="What becomes possible" steps={howSteps} />
      <FeatureCapabilities heading="Capabilities" items={capabilities} />
      <FeatureCTA docsLabel="Explore the SDK" />
    </>
  );
}
