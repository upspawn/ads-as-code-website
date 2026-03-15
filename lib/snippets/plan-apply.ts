// Plan / Apply feature page content

export const heroCode = `$ ads plan

  Arcflow — AI Workflow Automation

+ campaign/brand-search                          create
+ campaign/brand-search/core-kw                 create
+ campaign/brand-search/core-kw/rsa             create
+ campaign/brand-search/competitor-kw           create
+ campaign/brand-search/competitor-kw/rsa       create
~ campaign/retarget/budget                       $20 → $35/day
~ campaign/retarget/broad-match/rsa             +3 headlines
- campaign/old-spring-promo                      delete

  5 to create · 2 to update · 1 to delete
  Run \`ads apply\` to execute.`;

export const problemLines = [
  "You've been clicking through the platform UI for 40 minutes making a budget change — only to realize you applied it to the wrong campaign.",
  "There's no preview, no audit trail, and no way to review changes before they go live. Mistakes cost money.",
  "Roll back? Copy the settings from memory, hope you got them right.",
  "Meanwhile the platform is drifting away from what you think it is.",
];

export const howSteps = [
  {
    title: "Plan — see everything before it happens",
    caption:
      "Run `ads plan` to diff your TypeScript campaign definitions against live platform state. Every create, update, and delete is listed before a single API call is made.",
    code: `$ ads plan

  Arcflow — AI Workflow Automation

+ campaign/brand-search                          create
+ campaign/brand-search/core-kw                 create
+ campaign/brand-search/core-kw/rsa             create
~ campaign/retarget/budget                       $20 → $35/day
~ campaign/retarget/broad-match/rsa             +3 headlines
- campaign/old-spring-promo                      delete

  4 to create · 2 to update · 1 to delete`,
    lang: "shellscript" as const,
  },
  {
    title: "Apply — execute in the right order",
    caption:
      "Mutations execute in dependency order: campaign → ad group → keyword → ad. Deletes go child-first. A failure stops execution immediately to avoid orphaned resources.",
    code: `$ ads apply

  Creating campaign/brand-search...               ✓
  Creating campaign/brand-search/core-kw...       ✓
  Creating campaign/brand-search/core-kw/rsa...   ✓
  Updating campaign/retarget/budget...             ✓  $20 → $35
  Updating campaign/retarget/broad-match/rsa...   ✓  +3 headlines
  Deleting campaign/old-spring-promo...            ✓

  Applied 7 changes in 2.4s.`,
    lang: "shellscript" as const,
  },
  {
    title: "Pull — detect drift",
    caption:
      "Someone changed a bid on the platform UI. `ads pull` detects the drift between your TypeScript definitions and live state so you can decide whether to re-apply or update your source.",
    code: `$ ads pull

  Checking live state against local definitions...

~ campaign/brand-search/budget         $40/day → $55/day  (platform ahead)
~ campaign/retarget/broad-match/rsa    final_url changed   (platform ahead)

  2 resources have drifted from local definitions.
  Run \`ads plan\` to re-apply, or update your campaign files.`,
    lang: "shellscript" as const,
  },
];

export const capabilities = [
  {
    title: "Preview before apply",
    description:
      "Full diff of creates, updates, and deletes before any API call is made.",
  },
  {
    title: "Dependency-ordered execution",
    description:
      "Campaigns before ad groups before keywords before ads. Deletes are reversed.",
  },
  {
    title: "Atomic rollback",
    description:
      "Failures stop execution immediately. Revert with git and re-apply.",
  },
  {
    title: "Drift detection",
    description:
      "Pull live state and see what diverged from your source definitions.",
  },
  {
    title: "Operation history",
    description:
      "Every apply is logged to a local SQLite cache with timestamps and diffs.",
  },
  {
    title: "Dry run mode",
    description:
      "`ads plan` never writes. Use it in CI to validate before merging.",
  },
];
