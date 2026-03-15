export function GoogleAdPreview({
  headlines,
  descriptions,
  url,
  sitelinks,
  callouts,
}: {
  headlines: string[];
  descriptions: string[];
  url: string;
  sitelinks?: { title: string }[];
  callouts?: string[];
}) {
  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div>
      {/* Sponsored + URL */}
      <div className="flex items-center gap-2 mb-0.5">
        <div className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center text-[9px] font-bold text-accent">A</div>
        <span className="text-xs text-[#70757a]">{displayUrl}</span>
        <span className="text-[10px] text-[#70757a]">· Sponsored</span>
      </div>

      {/* Headline */}
      <div className="text-[#1a0dab] text-base font-medium leading-snug mb-0.5">
        {headlines.slice(0, 3).join(" | ")}
      </div>

      {/* Description */}
      <p className="text-[13px] text-[#4d5156] leading-relaxed">
        {descriptions.slice(0, 2).join(" ")}
      </p>

      {/* Sitelinks */}
      {sitelinks && sitelinks.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-2">
          {sitelinks.map((link) => (
            <span key={link.title} className="text-[13px] text-[#1a0dab]">
              {link.title}
            </span>
          ))}
        </div>
      )}

      {/* Callouts */}
      {callouts && callouts.length > 0 && (
        <div className="text-[12px] text-[#4d5156] mt-1">
          {callouts.join(" · ")}
        </div>
      )}
    </div>
  );
}
