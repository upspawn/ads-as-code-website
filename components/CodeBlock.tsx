"use client";

import { useEffect, useState } from "react";
import type { BundledLanguage } from "shiki";
import { highlight } from "@/lib/highlight";

const langLabels: Record<string, string> = {
  typescript: "TypeScript",
  shellscript: "Terminal",
  yaml: "YAML",
  bash: "Terminal",
};

export function CodeBlock({
  code,
  lang = "typescript",
  className = "",
  filename,
}: {
  code: string;
  lang?: BundledLanguage;
  className?: string;
  filename?: string;
}) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    highlight(code, lang).then(setHtml);
  }, [code, lang]);

  const label = filename || langLabels[lang] || lang;

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#1E1B18]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3632]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3632]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3632]" />
        </div>
        <span className="text-xs text-[#6B6560] font-mono">{label}</span>
      </div>

      {/* Code body */}
      <div className="bg-[#101010] px-5 py-5 overflow-x-auto text-[13px] leading-[1.75]">
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <pre className="font-mono text-[#A09B96]">{code}</pre>
        )}
      </div>
    </div>
  );
}
