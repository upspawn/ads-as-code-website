import { type BundledLanguage, type Highlighter, createHighlighter } from "shiki";

let highlighter: Highlighter | null = null;

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["vesper"],
      langs: ["typescript", "shellscript", "yaml"],
    });
  }
  return highlighter;
}

export async function highlight(
  code: string,
  lang: BundledLanguage = "typescript"
) {
  const hl = await getHighlighter();
  return hl.codeToHtml(code, {
    lang,
    theme: "vesper",
  });
}
