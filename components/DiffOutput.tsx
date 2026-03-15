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
  add: "text-[#A8DB8F]",
  change: "text-[#E5C07B]",
  remove: "text-[#E06C75]",
  muted: "text-[#6B6560]",
  plain: "text-[#D4CECB]",
};

const bgMap: Record<string, string> = {
  add: "bg-[#A8DB8F]/8",
  change: "bg-[#E5C07B]/8",
  remove: "bg-[#E06C75]/8",
};

export function DiffOutput({ content }: { content: string }) {
  const lines = parseDiffLines(content);
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden shadow-lg"
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#1E1B18]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3632]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3632]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3632]" />
        </div>
        <span className="text-xs text-[#6B6560] font-mono">Terminal</span>
      </div>

      {/* Diff body */}
      <div className="bg-[#101010] px-5 py-5 overflow-x-auto">
        <pre className="font-mono text-[13px] leading-[1.75]">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`${colorMap[line.type]} ${bgMap[line.type] || ""} transition-opacity duration-300 px-1 -mx-1 rounded-sm`}
              style={{ opacity: i < visibleCount ? 1 : 0 }}
            >
              {line.text || "\u00A0"}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
