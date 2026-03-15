// Developer Experience feature page content (aspirational)

export const heroCode = `import { google, daily, exact, phrase,
  headlines, descriptions, rsa, url } from '@upspawn/ads'

google.search('Brand - Arcflow', {
  budget: daily(40),
  //           ^ number (dollars, not micros)
  bidding: 'maximize-clicks',
  //        ^ "maximize-clicks" | "maximize-conversions" | "target-cpa"
})
  .group('Core Keywords', {
    keywords: [
      ...exact('arcflow'),       // [arcflow]
      ...phrase('arcflow app'),  // "arcflow app"
    ],
    ad: rsa(
      headlines('Arcflow — AI Workflow Automation', 'Automate Your Workflows'),
      //  ^ Headline — max 30 chars, enforced at build time
      descriptions('Build automations in minutes. No code required.'),
      url('https://arcflow.dev'),
    ),
  })`;

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

google.search('Arcflow Brand', {
  bidding: 'maximize-revenue',
  //        ^^^^^^^^^^^^^^^^^ Error: not assignable to
  //        '"maximize-clicks" | "maximize-conversions" | "target-cpa"'
})

headlines('This headline is way too long to fit in a Google ad')
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//         Error: Headline exceeds 30 characters`,
    lang: "typescript" as const,
  },
  {
    title: "Branded types catch errors at compile time",
    caption:
      "Headlines, descriptions, and keywords are branded string types. You can't accidentally pass a description where a headline is expected. Constraints are enforced at construction — not at API call time.",
    code: `// Can't mix up Headline and Description:
const ad = rsa(
  headlines(['Short headline']),
  descriptions(['My description text']),
  url('https://arcflow.dev'),
)

rsa(
  headlines([ad.descriptions[0]]),
  //         ^^^^^^^^^^^^^^^^^^^ Error: Argument of type 'Description'
  //         is not assignable to parameter of type 'Headline'
)`,
    lang: "typescript" as const,
  },
  {
    title: "AI tools work natively — no plugin needed",
    caption:
      "Because campaigns are TypeScript, any AI coding assistant can read, write, and reason about them. Ask your assistant to generate a campaign, add keywords, or rewrite headlines — it already knows the types.",
    code: `// Ask your AI: "Add a competitor ad group targeting Notion and Linear"

.group('Competitor Keywords', {
  keywords: [
    ...phrase('notion alternative'),
    ...phrase('linear alternative'),
    ...exact('arcflow vs notion'),
  ],
  ad: rsa(
    headlines('Better Than Notion for Teams', 'The Automation Tool Notion Lacks'),
    descriptions('Automate workflows Notion can\'t touch. Try free.'),
    url('https://arcflow.dev/compare'),
  ),
})`,
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
