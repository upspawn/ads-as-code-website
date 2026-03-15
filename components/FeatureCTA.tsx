import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function FeatureCTA({
  docsHref = "/docs/getting-started",
  docsLabel = "Get Started",
}: {
  docsHref?: string;
  docsLabel?: string;
}) {
  return (
    <section className="border-t border-code-border px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex flex-wrap gap-4">
          <Link
            href={docsHref}
            className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors"
          >
            {docsLabel}
          </Link>
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
    </section>
  );
}
