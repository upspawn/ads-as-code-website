// Google Ads feature page content

export const heroCode = `import { google, daily, exact, phrase,
  headlines, descriptions, rsa, url } from '@upspawn/ads'

export default google.search('Brand - Arcflow', {
  budget: daily(45),
  bidding: 'maximize-clicks',
})
  .group('core-keywords', {
    keywords: [...exact('arcflow'), ...phrase('ai workflow automation')],
    ad: rsa(
      headlines('Automate Any Workflow', 'AI-Powered', 'Free Trial'),
      descriptions('Connect 200+ apps. Ship workflows in minutes.'),
      url('https://arcflow.dev'),
    ),
  })`;

export const problemLines = [
  "The Google Ads gRPC API returns numeric enums everywhere. Status 2 means ENABLED. Bidding strategy 10 is TARGET_SPEND, which is actually Maximize Clicks. Good luck remembering that.",
  "Budget is a separate resource that has to be created before the campaign that references it. The REST API is broken for mutations. Manually constructing operation arrays is tedious and error-prone.",
  "ads-as-code wraps all of this: type-safe builders, human-readable enums, dependency-ordered mutations, and branded types that catch mistakes at construction time.",
];

export const howSteps = [
  {
    title: "Campaigns and ad groups",
    caption:
      "Chain `.group()` calls to define ad groups with keywords and RSA ads. Each group can have its own keyword list, targeting locale, and ad.",
    code: `import { google, daily, exact, phrase, broad,
  headlines, descriptions, rsa, url } from '@upspawn/ads'

google.search('EU Search - Arcflow', { budget: daily(80), bidding: 'maximize-conversions' })
  .group('DE — Core', {
    locale: { language: 'de', geo: ['DE', 'AT', 'CH'] },
    keywords: [...exact('arcflow'), ...phrase('ki workflow automatisierung')],
    ad: rsa(
      headlines('Arcflow — KI-Automatisierung', 'Workflows automatisch erstellen'),
      descriptions('Automatisieren Sie jeden Workflow mit KI. Kein Code nötig.'),
      url('https://arcflow.dev/de/'),
    ),
  })
  .group('EN — Core', {
    locale: { language: 'en', geo: ['GB', 'IE'] },
    keywords: [...exact('arcflow'), ...broad('workflow automation tool')],
    ad: rsa(
      headlines('Automate Any Workflow', '500+ Integrations, Zero Code'),
      descriptions('Build workflows with AI. Deploy in minutes.'),
      url('https://arcflow.dev/'),
    ),
  })`,
    lang: "typescript" as const,
  },
  {
    title: "Extensions: sitelinks and callouts",
    caption:
      "Add sitelinks and callout extensions to your campaign. Extensions are versioned alongside your campaign definitions and diffed independently.",
    code: `import { google, daily, exact, phrase, link, sitelinks, callouts } from '@upspawn/ads'

google.search('Brand - Arcflow', { budget: daily(45), bidding: 'maximize-clicks' })
  .sitelinks(sitelinks([
    link('Pricing',      'https://arcflow.dev/pricing'),
    link('Integrations', 'https://arcflow.dev/integrations'),
    link('Templates',    'https://arcflow.dev/templates'),
  ]))
  .callouts(callouts(['No-Code Required', 'Free 14-Day Trial', 'SOC 2 Certified']))
  .group('core-keywords', { /* ... */ })`,
    lang: "typescript" as const,
  },
];

export const capabilities = [
  {
    title: "Type-safe builders",
    description:
      "`.search()`, `.group()`, `.ad()` — chained builders with TypeScript inference at every step.",
  },
  {
    title: "Branded types",
    description:
      "Headlines, descriptions, and callout text are branded strings. Constraints (e.g. ≤30 chars) are enforced at construction time.",
  },
  {
    title: "Budget helpers",
    description:
      "`daily(45)` or `monthly(1200)` — human-readable, converts to micros automatically.",
  },
  {
    title: "All keyword match types",
    description:
      "`exact()`, `phrase()`, `broad()` — the helper functions produce correctly-typed keyword objects.",
  },
  {
    title: "Bidding strategies",
    description:
      "`maximize-clicks`, `maximize-conversions`, `target-cpa` — human-readable aliases for gRPC numeric enums.",
  },
  {
    title: "Sitelinks and callouts",
    description:
      "Extensions are versioned alongside campaign definitions and diffed independently from ad changes.",
  },
];
