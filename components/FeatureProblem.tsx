import { FadeIn } from "./FadeIn";

export function FeatureProblem({ lines }: { lines: string[] }) {
  return (
    <section className="border-t border-code-border px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto">
      <div className="max-w-2xl">
        {lines.map((line, i) => (
          <FadeIn key={i} delay={i * 80}>
            <p className="text-text-muted text-lg leading-relaxed mb-4 last:mb-0">
              {line}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
