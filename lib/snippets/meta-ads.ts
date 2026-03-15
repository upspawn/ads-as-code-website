// Meta Ads feature page content

export const heroCode = `import { meta, daily, age, geo, interests, lookalike, image } from '@upspawn/ads'

export default meta.traffic('Acme — Traffic — AI Enthusiasts', {
  budget: daily(60),
})
  .adSet('AI Ops — USA', {
    targeting: [age(28, 55), geo(['US']), interests(['AI', 'SaaS', 'Zapier'])],
    placements: ['feed', 'reels', 'stories'],
    ad: {
      headline: 'Automate Your Entire Workflow with AI',
      body: 'Acme connects your tools. No code. Deploy in minutes.',
      creative: image('./assets/hero-workflow.jpg'),
      url: 'https://acme.dev/lp/ai-workflow',
    },
  })
  .adSet('Lookalike — 1% Customers', {
    targeting: [geo(['US']), lookalike('customer-list-q1', 0.01)],
    placements: ['feed'],
    ad: {
      headline: 'Join 12,000+ Teams Using Acme',
      body: 'The workflow automation platform ops teams swear by.',
      creative: image('./assets/social-proof.jpg'),
      url: 'https://acme.dev/lp/social-proof',
    },
  })`;

export const problemLines = [
  "Meta's Marketing API changes constantly. Rate limits, versioned endpoints, and breaking changes in ad object schemas — keeping up is a part-time job.",
  "The Ads Manager UI scatters campaign settings across three nested screens. Duplicating a campaign for a new market means clicking through every panel again.",
  "ads-as-code gives you a typed DSL for every objective — traffic, conversions, leads, video views — with audience targeting, placements, and creatives all in one file.",
];

export const howSteps = [
  {
    title: "Objective-typed campaigns",
    caption:
      "Each Meta objective gets its own builder: `meta.traffic()`, `meta.conversions()`, `meta.leads()`. The builder enforces the right fields for each objective at the type level.",
    code: `import { meta, daily, age, geo, interests, image } from '@upspawn/ads'

// Traffic
meta.traffic('Acme — Blog Readers', { budget: daily(30) })
  .adSet('Cold — US Tech', {
    targeting: [age(25, 50), geo(['US']), interests(['Productivity', 'SaaS'])],
    placements: ['feed', 'reels'],
    ad: { headline: 'Stop Manually Triggering Workflows', /* ... */ },
  })

// Conversions
meta.conversions('Acme — Free Trial', {
  budget: daily(120), pixel: '1234567890', event: 'StartTrial',
})
  .adSet('Retarget — Site Visitors', {
    targeting: [geo(['US', 'GB'])],
    audience: { retarget: 'site-visitors-30d' },
    ad: { headline: 'Still Thinking It Over?', /* ... */ },
  })`,
    lang: "typescript" as const,
  },
  {
    title: "Interests, lookalikes, exclusions",
    caption:
      "Mix interest targeting, lookalike audiences, custom audience retargeting, and explicit exclusions. Control placements per ad set.",
    code: `import { meta, daily, age, geo, interests, lookalike, image } from '@upspawn/ads'

meta.traffic('Acme — Prospecting', { budget: daily(50) })
  .adSet('Interest — SaaS Founders', {
    targeting: [
      age(25, 50), geo(['US', 'CA', 'GB']),
      interests(['Entrepreneurship', 'SaaS', 'Artificial Intelligence']),
    ],
    exclude: { audience: 'existing-customers' },
    placements: ['feed', 'reels'],
    ad: { headline: 'Your Workflows, Automated by AI', /* ... */ },
  })
  .adSet('Lookalike 1% — Top Customers', {
    targeting: [geo(['US']), lookalike('top-customers-ltv', 0.01)],
    exclude: { audience: 'existing-customers' },
    ad: { headline: 'Used by 12,000+ Teams', /* ... */ },
  })`,
    lang: "typescript" as const,
  },
];

export const capabilities = [
  {
    title: "7 objective types",
    description:
      "`traffic`, `conversions`, `leads`, `app_installs`, `video_views`, `brand_awareness`, `reach` — each enforces the right fields.",
  },
  {
    title: "Interest and behavior targeting",
    description:
      "First-class `interests()` and `behaviors()` helpers with autocompletion for common audience segments.",
  },
  {
    title: "Lookalike audiences",
    description:
      "`lookalike(sourceAudience, percentage)` — define lookalikes by source list and similarity percentage.",
  },
  {
    title: "Audience exclusions",
    description:
      "`.exclude()` per ad set to keep existing customers out of prospecting and cold audiences out of retargeting.",
  },
  {
    title: "Placement control",
    description:
      "Specify `feed`, `reels`, `stories`, `audience_network`, `marketplace` per ad set. Or use `advantage_plus` to let Meta optimize.",
  },
  {
    title: "Advantage+ support",
    description:
      "`.placements('advantage_plus')` defers placement selection to Meta's delivery system for maximum reach.",
  },
];
