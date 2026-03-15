import { CodeBlock } from "./CodeBlock";

export function HowItWorksStep({
  number,
  title,
  caption,
  code,
  lang = "typescript",
}: {
  number: string;
  title: string;
  caption: string;
  code: string;
  lang?: "typescript" | "shellscript";
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-accent text-sm font-bold">
          {number}
        </span>
        <h3 className="font-heading text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-text-muted text-base leading-relaxed">{caption}</p>
      <CodeBlock code={code} lang={lang} />
    </div>
  );
}
