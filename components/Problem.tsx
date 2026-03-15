import { FadeIn } from "./FadeIn";

const painPoints = [
  "No version history on campaign changes.",
  "No code review before someone doubles the budget.",
  "No rollback when a change tanks your ROAS.",
  "Someone tweaks a bid in the UI — nobody knows.",
  "Doesn't scale past a handful of campaigns.",
];

export function Problem() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-32 max-w-6xl mx-auto border-t border-code-border">
      <FadeIn>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-12">
          The Google Ads UI wasn&apos;t built for teams.
        </h2>
      </FadeIn>
      <div className="space-y-4 max-w-2xl">
        {painPoints.map((point, i) => (
          <FadeIn key={i} delay={i * 80}>
            <p className="text-text-muted text-lg md:text-xl leading-relaxed">
              {point}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
