import { FadeIn } from "./FadeIn";

export function GoogleAdPreview({
  headlines,
  descriptions,
  url,
  sitelinks,
  callouts,
  delay = 0,
}: {
  headlines: string[];
  descriptions: string[];
  url: string;
  sitelinks?: { title: string; url: string }[];
  callouts?: string[];
  delay?: number;
}) {
  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <FadeIn delay={delay}>
      <div className="rounded-2xl border border-code-border bg-white p-6 shadow-sm max-w-lg">
        <div className="text-xs text-text-muted mb-1 font-mono">Ad Preview</div>

        {/* Sponsored tag */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-text-muted">Sponsored</span>
        </div>

        {/* URL line */}
        <div className="flex items-center gap-1.5 mb-0.5">
          <div className="w-5 h-5 rounded-full bg-[#E8590C]/10 flex items-center justify-center text-[10px] font-bold text-accent">A</div>
          <span className="text-sm text-text-muted">{displayUrl}</span>
        </div>

        {/* Headline */}
        <a className="text-lg font-medium text-[#1a0dab] hover:underline leading-snug block mb-1">
          {headlines.slice(0, 3).join(" | ")}
        </a>

        {/* Description */}
        <p className="text-sm text-[#4d5156] leading-relaxed mb-3">
          {descriptions.slice(0, 2).join(" ")}
        </p>

        {/* Sitelinks */}
        {sitelinks && sitelinks.length > 0 && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-2">
            {sitelinks.map((link) => (
              <span key={link.title} className="text-sm text-[#1a0dab] hover:underline cursor-pointer">
                {link.title}
              </span>
            ))}
          </div>
        )}

        {/* Callouts */}
        {callouts && callouts.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
            {callouts.map((callout) => (
              <span key={callout} className="text-xs text-[#4d5156] bg-gray-50 px-2 py-0.5 rounded">
                {callout}
              </span>
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  );
}
