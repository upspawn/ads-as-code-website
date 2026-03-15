export function MetaAdPreview({
  pageName,
  primaryText,
  headline,
  cta,
}: {
  pageName: string;
  primaryText: string;
  headline: string;
  cta: string;
}) {
  return (
    <div className="rounded-lg border border-[#E0DDD8] overflow-hidden bg-white">
      {/* Page header */}
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">
          {pageName.charAt(0)}
        </div>
        <div>
          <div className="text-[13px] font-semibold leading-tight">{pageName}</div>
          <div className="text-[11px] text-[#65676B]">Sponsored</div>
        </div>
      </div>

      {/* Primary text */}
      <div className="px-3 pb-2">
        <p className="text-[13px] text-[#050505] leading-snug">{primaryText}</p>
      </div>

      {/* Image placeholder */}
      <div className="bg-gradient-to-br from-[#E8E5E0] to-[#D8D5CF] h-32 flex items-center justify-center">
        <svg className="w-8 h-8 text-[#B8B5B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
        </svg>
      </div>

      {/* Link bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#F0EEEA]">
        <div className="text-[13px] font-semibold text-[#050505] truncate">{headline}</div>
        <button className="shrink-0 bg-[#E4E6EB] text-[12px] font-semibold text-[#050505] px-3 py-1 rounded-md ml-2">
          {cta}
        </button>
      </div>
    </div>
  );
}
