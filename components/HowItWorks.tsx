import { FadeIn } from "./FadeIn";
import { HowItWorksStep } from "./HowItWorksStep";
import { defineSnippet, planSnippet, applySnippet } from "@/lib/snippets";

export function HowItWorks() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-32 max-w-6xl mx-auto border-t border-code-border">
      <FadeIn>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-16">
          Three commands. Full control.
        </h2>
      </FadeIn>
      <div className="grid gap-16 md:gap-20">
        <FadeIn>
          <HowItWorksStep
            number="01"
            title="Define"
            caption="Campaigns are TypeScript. Type-safe, reviewable, version-controlled."
            code={defineSnippet}
          />
        </FadeIn>
        <FadeIn delay={100}>
          <HowItWorksStep
            number="02"
            title="Plan"
            caption="Preview every change before it touches your ad account."
            code={planSnippet}
            lang="shellscript"
          />
        </FadeIn>
        <FadeIn delay={200}>
          <HowItWorksStep
            number="03"
            title="Apply"
            caption="Apply with confidence. Rollback with git."
            code={applySnippet}
            lang="shellscript"
          />
        </FadeIn>
      </div>
    </section>
  );
}
