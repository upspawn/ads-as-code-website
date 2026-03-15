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

  const isTerminal = lang === "shellscript" || lang === "bash";
  const label = filename || langLabels[lang] || lang;

  return (
    <div
      className={`rounded-2xl border border-code-border bg-code-bg shadow-sm overflow-hidden ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-code-border bg-[#EFEEE8]">
        {/* macOS dots */}
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5E4DE]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5E4DE]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5E4DE]" />
        </div>
        <span className="text-xs text-text-muted font-mono">{label}</span>
      </div>

      {/* Code body */}
      <div className={`p-5 overflow-x-auto text-sm leading-relaxed ${isTerminal ? "font-mono" : ""}`}>
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <pre className="font-mono text-text-muted">{code}</pre>
        )}
      </div>
    </div>
  );
}
