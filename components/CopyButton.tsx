"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-3 text-xs font-mono text-text-muted hover:text-accent transition-colors cursor-pointer"
      aria-label="Copy to clipboard"
    >
      {copied ? "copied!" : "copy"}
    </button>
  );
}
