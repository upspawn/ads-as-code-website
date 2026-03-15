// AI Copy Generation feature page content

export const heroCode = `$ ads generate --campaign campaigns/brand-search.ts \\
    --brief "Arcflow is an AI workflow automation SaaS. \\
             Target ops managers at B2B SaaS companies. \\
             Focus on time savings and zero-code setup." \\
    --headlines 15 --descriptions 4

  Generating ad copy for: brand-search / Core KW
  Model: gpt-5 · Brand voice: professional, direct, outcome-focused

  Headlines (15/15):
  ✓  Automate Your Entire Workflow          [28 chars] — score 94
  ✓  AI Workflows, Zero Code Required       [30 chars] — score 91
  ✓  Connect Every Tool in Your Stack       [29 chars] — score 88
  ✓  From Trigger to Action in Seconds      [30 chars] — score 87
  ✓  500+ Integrations, One Platform        [28 chars] — score 85
  … 10 more

  Descriptions (4/4):
  ✓  Arcflow automates the work between your tools — triggers, logic, and 500+ integrations. No code. [90 chars]
  … 3 more

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
    code: `$ ads generate \\
    --campaign campaigns/brand-search.ts \\
    --ad-group "Core KW" \\
    --brief "Arcflow is an AI workflow automation SaaS for ops teams.
             Key benefits: zero code, 500+ integrations, deploys in minutes.
             Tone: professional, outcome-focused. CTA: start free trial." \\
    --headlines 15 --descriptions 4

  Generating for: brand-search / Core KW
  ─────────────────────────────────────────────────────────────────
  Headlines:
   1  Automate Your Entire Workflow          28 chars · score 94
   2  AI Workflows, Zero Code Required       30 chars · score 91
   3  Connect Every Tool in Your Stack       29 chars · score 88
   4  From Trigger to Action in Seconds      30 chars · score 87
   5  500+ Integrations, One Platform        28 chars · score 85
   6  Eliminate Manual Handoffs with AI      30 chars · score 83
   7  Your Ops Team Will Thank You           27 chars · score 82
   8  Deploy in Minutes, Not Months          28 chars · score 80
   9  Stop Doing Work Your Tools Can Do      29 chars · score 79
  10  Built for Ops-Heavy SaaS Teams         28 chars · score 78
  11  AI-Powered Workflow Automation         28 chars · score 77
  12  Arcflow: Workflows That Run Themselves 30 chars · score 76
  13  Less Manual Work, More Output          28 chars · score 75
  14  One Platform for Every Workflow        29 chars · score 74
  15  The Automation Layer for Modern SaaS   30 chars · score 72

  Descriptions:
   1  Arcflow connects your tools and automates the work between them. Triggers, logic, integrations. No code.  [90 chars · score 96]
   2  500+ integrations, zero-code setup, and AI-driven logic that runs 24/7. Start your free trial today.      [88 chars · score 92]

  ✓ Written to campaigns/brand-search.ts`,
    lang: "shellscript" as const,
  },
  {
    title: "Optimize existing copy — score and improve what's there",
    caption:
      "`ads optimize` reads your existing headlines and descriptions, scores them against ad platform best practices, and rewrites low-scoring copy while keeping your best performers.",
    code: `$ ads optimize --campaign campaigns/retarget.ts --min-score 75

  Analyzing: retarget / Site Visitors / Trial Nudge
  ─────────────────────────────────────────────────────────────────
  Current headlines (11):
  ✓  Still Thinking It Over?                score 88  (keep)
  ✓  Try Arcflow Free for 14 Days           score 85  (keep)
  ✗  Arcflow Workflow Automation Tool       score 41  (rewrite)
  ✗  Click Here to Get Started             score 38  (rewrite)
  ✗  Arcflow - Best Automation Platform    score 35  (rewrite)

  Rewriting 3 low-scoring headlines...

  Rewrites:
  ✓  Automate Workflows — Free 14-Day Trial  30 chars · score 91
  ✓  No-Code Automation for SaaS Teams       30 chars · score 87
  ✓  See Why 12,000+ Teams Use Arcflow       29 chars · score 84

  ✓ Updated campaigns/retarget.ts  (3 headlines replaced)
  Run \`ads plan\` to review the diff before applying.`,
    lang: "shellscript" as const,
  },
  {
    title: "Quality judging — score before you ship",
    caption:
      "`ads judge` scores your ad copy against platform best practices and your brand voice guide without rewriting anything. Use it in CI to catch weak copy before it goes live.",
    code: `$ ads judge --campaign campaigns/brand-search.ts

  Judging: brand-search (3 ad groups, 3 RSA ads)
  ─────────────────────────────────────────────────────────────────

  brand-search / Core KW / RSA                    avg score: 88
  ✓ headline coverage: 15/15
  ✓ description coverage: 4/4
  ✓ keyword inclusion: present in 4 headlines
  ✓ CTA present in descriptions

  brand-search / Competitor KW / RSA              avg score: 62  ⚠
  ✗ only 9/15 headlines filled (need ≥ 12)
  ✗ no CTA in descriptions
  ⚠ low-score headlines: 3 below 60

  retarget / Site Visitors / Trial Nudge          avg score: 91
  ✓ All checks passed

  ─────────────────────────────────────────────────────────────────
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
