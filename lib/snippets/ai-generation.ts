// AI Copy Generation feature page content

export const heroCode = `$ ads generate --campaign campaigns/brand-search.ts \\
    --brief "Arcflow: AI workflow automation for ops teams.
             Zero code. 500+ integrations. Ship in minutes." \\
    --headlines 15 --descriptions 4

  Headlines (15/15):
  ✓  Automate Your Entire Workflow          28 chars · score 94
  ✓  AI Workflows, Zero Code Required       30 chars · score 91
  ✓  Connect Every Tool in Your Stack       29 chars · score 88
  ✓  From Trigger to Action in Seconds      30 chars · score 87
  … 11 more

  Descriptions (4/4):
  ✓  Arcflow automates the work between your tools. Triggers, logic, 500+ integrations. No code.

  Written to campaigns/brand-search.ts. Run \`ads plan\` to review.`;

export const problemLines = [
  "Writing 15 headline variations for a single RSA ad takes 20 minutes. A typical account has dozens of ad groups. The math doesn't work.",
  "Copy goes stale. What performed well six months ago may be missing current messaging, updated CTAs, or new product angles.",
  "Quality is inconsistent. Some ad groups get thoughtful, tested copy. Others get placeholder text that never gets updated.",
  "ads-as-code ships an `ads generate` command that writes RSA headlines and descriptions directly into your campaign files — in seconds, at scale.",
];

export const howSteps = [
  {
    title: "Generate from a brief — fill an RSA ad in seconds",
    caption:
      "Pass a product brief and `ads generate` writes up to 15 headlines and 4 descriptions for any ad group in your campaign. Copy is written directly into your TypeScript campaign file, ready to review and apply.",
    code: `$ ads generate --campaign campaigns/brand-search.ts --ad-group "Core KW" \\
    --brief "Arcflow: zero-code workflow automation. Key benefits: 500+ integrations,
             deploys in minutes. Tone: professional, outcome-focused."

  Headlines:
   1  Automate Your Entire Workflow          28 chars · score 94
   2  AI Workflows, Zero Code Required       30 chars · score 91
   3  Connect Every Tool in Your Stack       29 chars · score 88
   4  500+ Integrations, One Platform        28 chars · score 85
   5  Deploy in Minutes, Not Months          28 chars · score 80

  ✓ Written to campaigns/brand-search.ts`,
    lang: "shellscript" as const,
  },
  {
    title: "Optimize existing copy — score and improve what's there",
    caption:
      "`ads optimize` reads your existing headlines and descriptions, scores them against ad platform best practices, and rewrites low-scoring copy while keeping your best performers.",
    code: `$ ads optimize --campaign campaigns/retarget.ts --min-score 75

  Analyzing: retarget / Site Visitors / Trial Nudge

  ✓  Still Thinking It Over?           score 88  (keep)
  ✗  Arcflow Workflow Automation Tool  score 41  (rewrite)
  ✗  Click Here to Get Started        score 38  (rewrite)

  Rewrites:
  ✓  Automate Workflows — Free 14-Day Trial  score 91
  ✓  No-Code Automation for SaaS Teams       score 87

  ✓ Updated campaigns/retarget.ts  (2 headlines replaced)`,
    lang: "shellscript" as const,
  },
  {
    title: "Quality judging — score before you ship",
    caption:
      "`ads judge` scores your ad copy against platform best practices and your brand voice guide without rewriting anything. Use it in CI to catch weak copy before it goes live.",
    code: `$ ads judge --campaign campaigns/brand-search.ts

  brand-search / Core KW / RSA              avg score: 88  ✓
  brand-search / Competitor KW / RSA        avg score: 62  ⚠
    ✗ only 9/15 headlines filled (need ≥ 12)
    ✗ no CTA in descriptions

  1 ad group below quality threshold. Run \`ads optimize\` to fix.`,
    lang: "shellscript" as const,
  },
];

export const capabilities = [
  {
    title: "Generate from briefs",
    description:
      "Pass a product brief and get up to 15 headlines + 4 descriptions per RSA ad, written directly into your campaign files.",
  },
  {
    title: "`ads optimize` command",
    description:
      "Score existing copy and rewrite only the headlines and descriptions below your quality threshold.",
  },
  {
    title: "Quality judgment",
    description:
      "`ads judge` scores copy without rewriting. Run in CI to block low-quality ads before they go live.",
  },
  {
    title: "Brand voice configuration",
    description:
      "Define tone, vocabulary, and off-limits phrases in `ads.config.ts`. All AI generation respects these constraints.",
  },
  {
    title: "Batch generation",
    description:
      "Generate copy for every ad group in a campaign in one command. Scales from one ad to hundreds.",
  },
  {
    title: "Works with Google + Meta",
    description:
      "Generate RSA copy for Google Search ads and headline + body copy for Meta ads from the same brief.",
  },
];
