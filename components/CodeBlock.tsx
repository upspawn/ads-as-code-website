"use client";

import { useEffect, useState } from "react";
import type { BundledLanguage } from "shiki";
import { highlight } from "@/lib/highlight";

export function CodeBlock({
  code,
  lang = "typescript",
  className = "",
}: {
  code: string;
  lang?: BundledLanguage;
  className?: string;
}) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    highlight(code, lang).then(setHtml);
  }, [code, lang]);

  const containerClass = `rounded-xl border border-code-border bg-code-bg p-5 overflow-x-auto text-sm leading-relaxed ${className}`;

  if (!html) {
    return (
      <div className={containerClass}>
        <pre className="font-mono text-text-muted">{code}</pre>
      </div>
    );
  }

  return (
    <div
      className={containerClass}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
