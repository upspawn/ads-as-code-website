import { FadeIn } from "./FadeIn";
import { CopyButton } from "./CopyButton";

const installCmd = "npm install @upspawn/ads";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-20 md:py-32 max-w-6xl mx-auto border-t border-code-border">
      <FadeIn>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to ship ads from your editor?
        </h2>
        <div className="flex items-center gap-2 bg-code-bg border border-code-border rounded-lg px-4 py-3 mb-10 w-fit">
          <code className="font-mono text-base">{installCmd}</code>
          <CopyButton text={installCmd} />
        </div>
        <div className="flex flex-wrap gap-4 mb-16">
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
      <div className="flex flex-wrap gap-6 text-sm text-text-muted pt-8 border-t border-code-border">
        <a
          href="https://github.com/upspawn/ads-as-code/blob/main/docs/api.md"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text transition-colors"
        >
          Docs
        </a>
        <a
          href="https://github.com/upspawn/ads-as-code"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://github.com/upspawn/ads-as-code/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text transition-colors"
        >
          Contributing
        </a>
        <span className="ml-auto">
          Built by{" "}
          <a
            href="https://upspawn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors"
          >
            Upspawn
          </a>
        </span>
      </div>
    </footer>
  );
}
