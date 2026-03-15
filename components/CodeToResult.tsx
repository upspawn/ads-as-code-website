"use client";

import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";
import { CodeBlock } from "./CodeBlock";
import type { BundledLanguage } from "shiki";

export function CodeToResult({
  code,
  lang = "typescript",
  children,
  label = "Result",
  delay = 0,
}: {
  code: string;
  lang?: BundledLanguage;
  children: ReactNode;
  label?: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="rounded-2xl overflow-hidden shadow-lg border border-[#2A2725]">
        {/* Code half */}
        <CodeBlock code={code} lang={lang} className="rounded-none shadow-none border-0" />

        {/* Divider with arrow */}
        <div className="bg-[#1E1B18] px-5 py-2 flex items-center gap-2">
          <div className="h-px flex-1 bg-[#3A3632]" />
          <span className="text-xs text-[#6B6560] font-mono shrink-0">↓ {label}</span>
          <div className="h-px flex-1 bg-[#3A3632]" />
        </div>

        {/* Result half */}
        <div className="bg-[#F7F5F2] p-5">
          {children}
        </div>
      </div>
    </FadeIn>
  );
}
