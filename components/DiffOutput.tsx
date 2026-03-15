"use client";

import { useEffect, useRef, useState } from "react";

type DiffLine = {
  text: string;
  type: "add" | "change" | "remove" | "muted" | "plain";
};

function parseDiffLines(raw: string): DiffLine[] {
  return raw.split("\n").map((line) => {
    if (line.startsWith("+")) return { text: line, type: "add" };
    if (line.startsWith("~")) return { text: line, type: "change" };
    if (line.startsWith("-")) return { text: line, type: "remove" };
    if (line.startsWith("$") || line.trim() === "" || line.startsWith("  "))
      return { text: line, type: "muted" };
    return { text: line, type: "plain" };
  });
}

const colorMap = {
  add: "text-diff-add",
  change: "text-diff-change",
  remove: "text-diff-remove",
  muted: "text-text-muted",
  plain: "text-text",
};

export function DiffOutput({ content }: { content: string }) {
  const lines = parseDiffLines(content);
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef<HTMLPreElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let count = 0;
          const interval = setInterval(() => {
            count++;
            setVisibleCount(count);
            if (count >= lines.length) clearInterval(interval);
          }, 120);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [lines.length]);

  return (
    <pre
      ref={ref}
      className="font-mono text-sm md:text-base leading-relaxed rounded-xl border border-code-border bg-code-bg p-5 md:p-8 overflow-x-auto"
    >
      {lines.map((line, i) => (
        <div
          key={i}
          className={`${colorMap[line.type]} transition-opacity duration-300`}
          style={{ opacity: i < visibleCount ? 1 : 0 }}
        >
          {line.text || "\u00A0"}
        </div>
      ))}
    </pre>
  );
}
