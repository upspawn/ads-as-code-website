// Creatives feature page content

export const heroCode = `import { meta, daily, age, geo, interests,
  image, video, carousel } from '@upspawn/ads'

meta.traffic('Arcflow — Product Tour', { budget: daily(80) })
  .adSet('Cold — US SaaS Buyers', {
    targeting: [age(28, 55), geo(['US']), interests(['SaaS', 'Workflow Automation'])],
    placements: ['feed', 'reels', 'stories'],
    ads: [
      {
        headline: 'Your Entire Workflow, Automated',
        creative: video('./assets/product-tour-30s.mp4', { thumbnail: './assets/tour-thumb.jpg' }),
        url: 'https://arcflow.dev/tour',
      },
      {
        headline: 'Everything Your Team Needs',
        creative: carousel([
          { image: './assets/feature-triggers.jpg', headline: 'Smart Triggers' },
          { image: './assets/feature-logic.jpg',    headline: 'If/Then Logic' },
          { image: './assets/integrations.jpg',     headline: '500+ Integrations' },
        ]),
      },
    ],
  })`;

export const problemLines = [
  "Your creative assets live in a shared Google Drive folder with names like 'final_v3_USE_THIS.jpg'. Nobody knows which image runs in which ad.",
  "Updating a hero image means clicking through five screens in Ads Manager, re-uploading the file, and hoping you didn't accidentally touch the wrong ad set.",
  "When a campaign ends, the assets vanish into the platform. Recreating it six months later means starting from scratch.",
  "ads-as-code puts creatives inside the ad definition. Images, videos, and carousels are versioned in git alongside the campaign they belong to.",
];

export const howSteps = [
  {
    title: "Reference local files — upload happens on apply",
    caption:
      "Point `image()` or `video()` at a local file path. When you run `ads apply`, the SDK uploads the asset to the platform and wires up the reference. No manual uploading.",
    code: `import { meta, daily, geo, image, video } from '@upspawn/ads'

meta.conversions('Arcflow — Free Trial', {
  budget: daily(100), pixel: '1234567890', event: 'StartTrial',
})
  .adSet('Retarget — Site Visitors', {
    targeting: [geo(['US', 'GB'])],
    audience: { retarget: 'site-visitors-30d' },
    ads: [
      {
        headline: 'Still Thinking It Over?',
        creative: image('./assets/trial-nudge.jpg'),  // uploaded on ads apply
      },
      {
        headline: 'See It in 60 Seconds',
        creative: video('./assets/demo-60s.mp4', { thumbnail: './assets/demo-thumb.jpg' }),
      },
    ],
  })`,
    lang: "typescript" as const,
  },
  {
    title: "Carousel ads — multiple cards, one definition",
    caption:
      "Use `carousel()` to define multi-card ads inline. Each card has its own image, headline, and destination URL. Cards are versioned alongside the campaign.",
    code: `import { carousel } from '@upspawn/ads'

creative: carousel([
  {
    image: './assets/trigger-card.jpg',
    headline: 'Smart Triggers',
    url: 'https://arcflow.dev/features/triggers',
  },
  {
    image: './assets/logic-card.jpg',
    headline: 'Branching Logic',
    url: 'https://arcflow.dev/features/logic',
  },
  {
    image: './assets/integrations-card.jpg',
    headline: '500+ Integrations',
    url: 'https://arcflow.dev/integrations',
  },
])`,
    lang: "typescript" as const,
  },
  {
    title: "Boosted posts — promote existing organic content",
    caption:
      "Use `boostedPost()` to promote an existing Facebook or Instagram post. The SDK wraps it in a campaign definition, so the boost is version-controlled and reproducible.",
    code: `import { meta, daily, geo, boostedPost } from '@upspawn/ads'

meta.traffic('Arcflow — Boost — Product Launch', { budget: daily(40) })
  .adSet('Warm — Page Followers', {
    targeting: [geo(['US', 'CA', 'GB'])],
    audience: { retarget: 'page-followers' },
    ad: {
      creative: boostedPost('https://www.facebook.com/arcflow/posts/123456789'),
      url: 'https://arcflow.dev/blog/launch',
    },
  })`,
    lang: "typescript" as const,
  },
];

export const capabilities = [
  {
    title: "Auto-upload on apply",
    description:
      "Reference local files with `image()` or `video()`. The SDK uploads assets during `ads apply` — no manual steps.",
  },
  {
    title: "Asset download on import",
    description:
      "`ads import` downloads live creative assets into your project so existing campaigns get the same local-file treatment.",
  },
  {
    title: "Carousel builder",
    description:
      "Define multi-card carousel ads inline with per-card images, headlines, and destination URLs.",
  },
  {
    title: "Boosted post support",
    description:
      "Promote existing organic posts by URL. Boosts are campaign definitions — versioned and reproducible.",
  },
  {
    title: "Local file references",
    description:
      "Relative paths from your project root. Commit the assets to git alongside the campaign definitions.",
  },
  {
    title: "Creative-per-ad-set",
    description:
      "Each ad set can have multiple ads with different creatives. Test static images, video, and carousels side by side.",
  },
];
