import { FadeIn } from "./FadeIn";
import { CodeBlock } from "./CodeBlock";
import { fullCampaignSnippet } from "@/lib/snippets";

export function CodeExample() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-32 max-w-6xl mx-auto border-t border-code-border">
      <FadeIn>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Real campaigns. Real code.
        </h2>
        <p className="text-text-muted text-lg mb-12 max-w-2xl">
          A production campaign definition — two locales, keyword match types,
          RSA ads, sitelinks, and callout extensions. All type-safe.
        </p>
      </FadeIn>
      <FadeIn delay={100}>
        <CodeBlock
          code={fullCampaignSnippet}
          className="text-sm md:text-base"
        />
      </FadeIn>
    </section>
  );
}
