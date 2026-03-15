import type { BundledLanguage } from "shiki";
import { FadeIn } from "./FadeIn";
import { CodeBlock } from "./CodeBlock";

type Step = {
  title: string;
  caption: string;
  code: string;
  lang?: BundledLanguage;
};

export function FeatureHow({
  heading,
  steps,
}: {
  heading: string;
  steps: Step[];
}) {
  return (
    <section className="border-t border-code-border px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-12">
          {heading}
        </h2>
      </FadeIn>
      <div className="space-y-12">
        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div>
              <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-text-muted leading-relaxed mb-5">{step.caption}</p>
              <CodeBlock code={step.code} lang={step.lang ?? "typescript"} />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
