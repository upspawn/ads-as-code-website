import type { BundledLanguage } from "shiki";
import { FadeIn } from "./FadeIn";
import { CodeBlock } from "./CodeBlock";

export function FeatureHero({
  title,
  subtitle,
  code,
  lang = "typescript",
}: {
  title: string;
  subtitle: string;
  code: string;
  lang?: BundledLanguage;
}) {
  return (
    <section className="px-6 md:px-12 pt-14 md:pt-20 pb-16 md:pb-24 max-w-6xl mx-auto">
      <FadeIn>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-5">
          {title}
        </h1>
      </FadeIn>
      <FadeIn delay={100}>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          {subtitle}
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <CodeBlock code={code} lang={lang} />
      </FadeIn>
    </section>
  );
}
