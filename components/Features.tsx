import { FadeIn } from "./FadeIn";
import { FeatureCard } from "./FeatureCard";

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-sm bg-code-bg px-1 py-0.5 rounded">
      {children}
    </code>
  );
}

export function Features() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-32 max-w-6xl mx-auto border-t border-code-border">
      <FadeIn>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-16">
          Everything you need.
          <br />
          Nothing you don&apos;t.
        </h2>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        <FadeIn>
          <FeatureCard title="Type-safe campaigns">
            Branded types catch &ldquo;headline too long&rdquo; at build time, not after
            you&apos;ve burned budget.
          </FeatureCard>
        </FadeIn>
        <FadeIn delay={60}>
          <FeatureCard title="Plan / Apply">
            Preview a diff of every change before it touches your ad account.
          </FeatureCard>
        </FadeIn>
        <FadeIn delay={120}>
          <FeatureCard title="Import existing campaigns">
            <Code>ads import</Code> pulls your entire Google Ads account into
            TypeScript.
          </FeatureCard>
        </FadeIn>
        <FadeIn delay={180}>
          <FeatureCard title="Drift detection">
            <Code>ads pull</Code> catches changes someone made in the UI.
          </FeatureCard>
        </FadeIn>
        <FadeIn delay={240}>
          <FeatureCard title="AI-powered copy">
            Generate and optimize ad copy — headlines, descriptions, keywords —
            with built-in AI.
          </FeatureCard>
        </FadeIn>
        <FadeIn delay={300}>
          <FeatureCard title="Multi-provider">
            Google Ads today. Meta in progress. Same engine, same workflow.
          </FeatureCard>
        </FadeIn>
      </div>
    </section>
  );
}
