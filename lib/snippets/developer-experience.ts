// Developer Experience feature page content (aspirational)

export const heroCode = `import { google } from "@upspawn/ads";
import { daily, usd, exact, phrase, headlines, descriptions, rsa, url } from "@upspawn/ads/helpers";

export const brandSearch = google.search({
  name: "Arcflow — Brand Search",
  //     ^ string
  budget: daily(usd(40)),
  //           ^ number (dollars, not micros)
  bidding: "maximize-clicks",
  //        ^ "maximize-clicks" | "maximize-conversions" | "target-cpa"
})
  .group("Core Keywords", (g) =>
    g
      .keywords([
        exact("arcflow"),        // [arcflow]
        phrase("arcflow app"),   // "arcflow app"
        //  ^ Keyword — branded string, validates match type at construction
      ])
      .ad(rsa(
        headlines([
          "Arcflow — AI Workflow Automation",
          //  ^ Headline — max 30 chars, enforced at build time
          "Automate Your Workflows Today",
          "Connect Every Tool You Use",
        ]),
        descriptions([
          "Build automations in minutes. No code required.",
          //  ^ Description — max 90 chars, enforced at build time
        ]),
        url("https://arcflow.io"),
      ))
  );`;

export const problemLines = [
  "Ad platforms have GUIs. GUIs can't be linted, reviewed, or committed to git.",
  "Your AI assistant can suggest code, catch type errors, and generate entire campaign structures — but it can't click through a browser UI.",
  "When campaigns live in TypeScript, every tool in your development environment works. Your editor, your linter, your AI assistant, your CI pipeline.",
  "No plugin required. No MCP server to configure. Your AI already speaks TypeScript.",
];

export const howSteps = [
  {
    title: "Full autocomplete and type checking",
    caption:
      "Every property, every option, every helper is fully typed. Your editor knows what `bidding` accepts, how many headlines an RSA allows, and what the valid match types are — before you run a single command.",
    code: `// TypeScript catches this before it reaches the API:

const campaign = google.search({
  name: "Arcflow Brand",
  bidding: "maximize-revenue",
  //        ^^^^^^^^^^^^^^^^^ Error: Type '"maximize-revenue"' is not assignable
  //        to type '"maximize-clicks" | "maximize-conversions" | "target-cpa"'
  budget: daily(usd(40)),
});

// And this:
headlines([
  "This headline is way too long to fit in a Google ad",
  //  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // Error: Headline exceeds 30 characters
])`,
    lang: "typescript" as const,
  },
  {
    title: "Branded types catch errors at compile time",
    caption:
      "Headlines, descriptions, and keywords are branded string types. You can't accidentally pass a description where a headline is expected. Constraints are enforced at construction — not at API call time.",
    code: `// Branded types prevent entire classes of mistakes:

type Headline = string & { readonly __brand: "Headline" };
type Description = string & { readonly __brand: "Description" };

// This fails at compile time, not at runtime:
const myAd = rsa(
  headlines(["Short headline"]),
  descriptions(["My description text"]),
  url("https://arcflow.io"),
);

// Can't mix them up:
rsa(
  headlines([myAd.descriptions[0]]),
  //          ^^^^^^^^^^^^^^^^^^^^ Error: Argument of type 'Description'
  //          is not assignable to parameter of type 'Headline'
)`,
    lang: "typescript" as const,
  },
  {
    title: "AI tools work natively — no plugin needed",
    caption:
      "Because campaigns are TypeScript, any AI coding assistant can read, write, and reason about them. Ask your assistant to generate a campaign, add keywords, or rewrite headlines — it already knows the types.",
    code: `// Prompt to your AI assistant:
// "Add a new ad group targeting competitor keywords for Notion and Linear"

// AI generates valid TypeScript using the typed SDK:
.group("Competitor Keywords", (g) =>
  g
    .keywords([
      phrase("notion alternative"),
      phrase("linear alternative"),
      exact("arcflow vs notion"),
      exact("arcflow vs linear"),
    ])
    .ad(rsa(
      headlines([
        "Better Than Notion for Teams",
        "The Linear Alternative That Ships",
        "Arcflow — Built for Developers",
      ]),
      descriptions([
        "Automate workflows Notion can't touch. Try free.",
        "Sync Linear, Slack, and GitHub automatically.",
      ]),
      url("https://arcflow.io/compare"),
    ))
)`,
    lang: "typescript" as const,
  },
];

export const capabilities = [
  {
    title: "Full TypeScript autocomplete",
    description:
      "Every builder method, every option, every helper is typed. Your editor knows what's valid before you run anything.",
  },
  {
    title: "Branded type validation",
    description:
      "Headlines, descriptions, and keywords are distinct branded types. Constraint violations are compile-time errors.",
  },
  {
    title: "AI code tools work natively",
    description:
      "Copilot, Cursor, Claude — any AI assistant can read and write campaign TypeScript. No MCP server, no plugin, no configuration.",
  },
  {
    title: "Git-based review workflow",
    description:
      "Campaign changes go through the same pull request and code review process as your application code.",
  },
  {
    title: "No MCP or plugin required",
    description:
      "The SDK is just TypeScript. AI tools that understand TypeScript understand your campaigns out of the box.",
  },
  {
    title: "Deterministic, auditable control",
    description:
      "Every change is a diff in git. No mystery, no surprises — just a clear record of what changed, when, and why.",
  },
];
