// Pipelines feature page content (aspirational)

export const heroCode = `# .github/workflows/ads.yml
on:
  pull_request:
    paths: ['campaigns/**']
  push:
    branches: [main]
    paths: ['campaigns/**']

jobs:
  plan:
    if: github.event_name == 'pull_request'
    steps:
      - run: ads plan --ci
        # Posts diff as PR comment

  apply:
    if: github.event_name == 'push'
    steps:
      - run: ads apply
        # Executes on merge to main`;

export const problemLines = [
  "Your engineering team ships features through CI/CD — reviewed, tested, staged, then deployed.",
  "Your ad campaigns are managed in a browser tab. Changes are manual, untracked, and invisible to the rest of your team.",
  "There's no PR, no diff, no approval process. Anyone with access can change anything at any time.",
  "When ads live in code, your entire pipeline — CI, staging, automation, monitoring — becomes available to your ad campaigns.",
];

export const howSteps = [
  {
    title: "Plan on PR, apply on merge",
    caption:
      "Add ads to your CI/CD pipeline. When a campaign file changes, `ads plan --ci` posts the diff as a PR comment. Merging to main runs `ads apply`. The same workflow you use to ship software, now for ads.",
    code: `# PR comment posted by ads plan --ci

  ## Arcflow Ads — Planned Changes

  + campaign/q2-launch                      create
  + campaign/q2-launch/brand-kw             create
  + campaign/q2-launch/brand-kw/rsa         create
  ~ campaign/retarget/budget                $25 → $40/day
  - campaign/old-winter-promo               delete

  3 to create · 1 to update · 1 to delete
  These changes will apply when this PR is merged.`,
    lang: "shellscript" as const,
  },
  {
    title: "Image generation pipelines",
    caption:
      "Generate ad creatives programmatically and wire them directly into your campaigns. A script calls an image generation API, saves the assets, and updates the campaign files — all before `ads apply` runs.",
    code: `// scripts/generate-creatives.ts
import { fal } from "@fal-ai/client";

// Generate images for the Q2 launch campaign
const images = await fal.subscribe("fal-ai/flux/dev", {
  input: {
    prompt: "Arcflow app screenshot, clean SaaS UI, dark mode, product shot",
    num_images: 4,
  },
});

// Write asset paths into campaign files
await updateCampaignCreatives("q2-launch", images.map(i => i.url));

// Diff and apply
await exec("ads plan && ads apply");`,
    lang: "typescript" as const,
  },
  {
    title: "Staging accounts for safe testing",
    caption:
      "Run `ads apply --account staging` to apply changes to a test account first. Validate that everything looks right before touching production. The same campaign definitions target different accounts based on environment.",
    code: `$ ads apply --account staging

  Arcflow — AI Workflow Automation (staging)

  Creating campaign/q2-launch...               ✓
  Creating campaign/q2-launch/brand-kw...      ✓
  Creating campaign/q2-launch/brand-kw/rsa...  ✓

  Applied 3 changes. Staging account updated.
  Run \`ads apply --account production\` when ready.`,
    lang: "shellscript" as const,
  },
];

export const capabilities = [
  {
    title: "CI/CD integration",
    description:
      "Plan on pull request, apply on merge. The same git workflow you use for code, applied to ad campaigns.",
  },
  {
    title: "Image generation pipelines",
    description:
      "Generate creatives programmatically — fal.ai, DALL-E, Midjourney — and wire them directly into campaign files before apply.",
  },
  {
    title: "Staging account support",
    description:
      "Apply to a test account first. Validate changes before they touch your production campaigns.",
  },
  {
    title: "Cron-based drift detection",
    description:
      "Schedule `ads pull` in CI to catch manual UI changes before they cause problems.",
  },
  {
    title: "Budget automation",
    description:
      "Write scripts that adjust budgets based on performance data, season, or business events — then commit and apply.",
  },
  {
    title: "Monitoring and alerts",
    description:
      "Hook `ads plan` output into Slack, PagerDuty, or any webhook to get notified when campaigns drift.",
  },
];
