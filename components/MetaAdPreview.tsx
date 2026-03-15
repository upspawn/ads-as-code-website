import { FadeIn } from "./FadeIn";

export function MetaAdPreview({
  pageName,
  primaryText,
  headline,
  description,
  cta,
  imageAlt,
  delay = 0,
}: {
  pageName: string;
  primaryText: string;
  headline: string;
  description?: string;
  cta: string;
  imageAlt?: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="rounded-2xl border border-code-border bg-white shadow-sm max-w-sm overflow-hidden">
        <div className="text-xs text-text-muted px-4 pt-3 mb-1 font-mono">Ad Preview</div>

        {/* Page header */}
        <div className="flex items-center gap-2.5 px-4 py-2">
          <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
            {pageName.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">{pageName}</div>
            <div className="text-xs text-text-muted">Sponsored · <span className="text-text-muted">🌐</span></div>
          </div>
        </div>

        {/* Primary text */}
        <div className="px-4 pb-3">
          <p className="text-sm text-text leading-relaxed">{primaryText}</p>
        </div>

        {/* Image placeholder */}
        <div className="bg-gradient-to-br from-[#F0EDE8] to-[#E5E2DC] h-48 flex items-center justify-center">
          <div className="text-text-muted/40 text-sm">{imageAlt || "Creative"}</div>
        </div>

        {/* Link preview bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#F7F5F2] border-t border-code-border">
          <div className="min-w-0 mr-3">
            <div className="text-[11px] text-text-muted uppercase tracking-wide truncate">arcflow.dev</div>
            <div className="text-sm font-semibold text-text truncate">{headline}</div>
            {description && (
              <div className="text-xs text-text-muted truncate">{description}</div>
            )}
          </div>
          <button className="shrink-0 bg-[#E4E6EB] text-sm font-semibold text-text px-4 py-1.5 rounded-md">
            {cta}
          </button>
        </div>
      </div>
    </FadeIn>
  );
}
