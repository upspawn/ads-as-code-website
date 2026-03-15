import { FadeIn } from "./FadeIn";
import { CodeBlock } from "./CodeBlock";
import { defineStep, planStep, applyStep } from "@/lib/snippets/homepage";

const steps = [
  {
    number: "01",
    title: "Define",
    caption: "Campaigns are TypeScript. Type-safe, reviewable, version-controlled.",
    code: defineStep,
    lang: "typescript" as const,
  },
  {
    number: "02",
    title: "Plan",
    caption: "Preview every change before it touches your ad account.",
    code: planStep,
    lang: "shellscript" as const,
  },
  {
    number: "03",
    title: "Apply",
    caption: "Execute with confidence. Rollback with git revert.",
    code: applyStep,
    lang: "shellscript" as const,
  },
];

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
        {steps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 100}>
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-accent text-sm font-bold">
                  {step.number}
                </span>
                <h3 className="font-heading text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-text-muted text-base leading-relaxed">
                {step.caption}
              </p>
              <CodeBlock code={step.code} lang={step.lang} />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
