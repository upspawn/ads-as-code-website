import { FadeIn } from "./FadeIn";
import { DiffOutput } from "./DiffOutput";
import { heroDiff } from "@/lib/snippets";

export function Hero() {
  return (
    <section className="px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-32 max-w-6xl mx-auto">
      <FadeIn>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
          Stop clicking.
          <br />
          Start committing.
        </h1>
      </FadeIn>
      <FadeIn delay={100}>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Define ad campaigns in TypeScript. Preview changes with{" "}
          <code className="font-mono text-text bg-code-bg px-1.5 py-0.5 rounded text-base">
            plan
          </code>
          . Apply with confidence.
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="https://github.com/upspawn/ads-as-code/blob/main/docs/getting-started.md"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://github.com/upspawn/ads-as-code"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-code-border text-text px-6 py-3 rounded-lg font-medium hover:border-text-muted transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </FadeIn>
      <FadeIn delay={300}>
        <DiffOutput content={heroDiff} />
      </FadeIn>
    </section>
  );
}
