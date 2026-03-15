import { FadeIn } from "./FadeIn";
import { cliCommands } from "@/lib/snippets";

export function CliReference() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-32 max-w-6xl mx-auto border-t border-code-border">
      <FadeIn>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-12">
          One CLI. Full lifecycle.
        </h2>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="rounded-xl border border-code-border bg-code-bg p-5 md:p-8 font-mono text-sm md:text-base">
          {cliCommands.map((entry, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:gap-4 py-2 border-b border-code-border last:border-0"
            >
              <span className="text-accent font-bold whitespace-nowrap">
                {entry.cmd}
              </span>
              <span className="text-text-muted">{entry.desc}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
