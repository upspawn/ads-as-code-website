/**
 * All code snippets and terminal output for the landing page.
 * Uses a fictional SaaS product ("Arcflow" — AI workflow automation)
 * to demonstrate the DSL without promoting a real product.
 */

// Hero: diff output (shown in DiffOutput component with typewriter animation)
export const heroDiff = `$ ads plan

+ campaign/brand-search                    create
+ campaign/brand-search/core-keywords      create
+ campaign/brand-search/core-keywords/rsa  create
~ campaign/retarget/budget                 $15 → $25/day
~ campaign/retarget/broad/rsa             +2 headlines
- campaign/old-summer-promo                delete

  5 to create, 2 to update, 1 to delete.
  Run ads apply to execute.`;

// How It Works — Step 1: Define
export const defineSnippet = `import { google, daily, exact, broad,
  headlines, descriptions, rsa, url } from '@upspawn/ads'

export default google.search('Brand - Arcflow', {
  budget: daily(20),
  bidding: 'maximize-clicks',
})
  .group('core-keywords', {
    keywords: [
      ...exact('workflow automation', 'ai automation tool'),
      ...broad('automate business workflows'),
    ],
    ad: rsa(
      headlines(
        'Automate Any Workflow in Minutes',
        'AI-Powered. No Code Needed.',
        'Free 14-Day Trial — Start Now',
      ),
      descriptions(
        'Connect 200+ apps. Build workflows visually. Ship in minutes.',
        'Teams save 12 hrs/week on average. No engineering required.',
      ),
      url('https://arcflow.dev'),
    ),
  })`;

// How It Works — Step 2: Plan (terminal output)
export const planSnippet = `$ ads plan

+ campaign/brand-arcflow                         create
+ campaign/brand-arcflow/core-keywords            create
+ campaign/brand-arcflow/core-keywords/kw:...     create (4 keywords)
+ campaign/brand-arcflow/core-keywords/rsa        create

  4 to create. Run ads apply to execute.`;

// How It Works — Step 3: Apply (terminal output)
export const applySnippet = `$ ads apply

✓ Created campaign/brand-arcflow
✓ Created campaign/brand-arcflow/core-keywords
✓ Created 4 keywords
✓ Created RSA ad

  4 resources created. 0 updated. 0 deleted.`;

// Code Example — full campaign definition
export const fullCampaignSnippet = `import {
  google, daily, exact, broad, phrase,
  headlines, descriptions, rsa, url,
  link,
} from '@upspawn/ads'

export default google.search('Search - Workflow Automation', {
  budget: daily(25),
  bidding: { type: 'target-cpa', targetCpa: 18 },
  negatives: [
    ...broad('free', 'open source', 'tutorial', 'what is'),
    ...phrase('job posting', 'career', 'salary'),
  ],
})
  .group('automation-de', {
    keywords: [
      ...exact('workflow automatisierung'),
      ...broad('geschaeftsprozesse automatisieren'),
    ],
    ad: rsa(
      headlines(
        'Workflows automatisieren',
        'KI verbindet Ihre Tools',
        '200+ App-Integrationen',
        '14 Tage kostenlos testen',
        'Kein Code erforderlich',
      ),
      descriptions(
        'Teams sparen 12 Std/Woche. Visueller Editor. In Minuten live.',
        'Verbinden Sie Slack, Notion, Salesforce — alles automatisch.',
      ),
      url('https://arcflow.dev/de'),
    ),
  })
  .group('automation-en', {
    keywords: [
      ...exact('workflow automation tool', 'business process automation'),
      ...broad('ai automation platform', 'no code workflow builder'),
    ],
    ad: rsa(
      headlines(
        'Automate Any Workflow in Minutes',
        'AI-Powered. No Code Needed.',
        'Connect 200+ Apps Instantly',
        'Teams Save 12 Hrs/Week',
        'Still Building Workflows by Hand?',
      ),
      descriptions(
        'Visual builder. 200+ integrations. Ship workflows in minutes.',
        'Connect Slack, Notion, Salesforce — AI handles the rest.',
      ),
      url('https://arcflow.dev'),
    ),
  })
  .sitelinks(
    link('See Pricing', 'https://arcflow.dev/pricing', {
      description1: 'Free for small teams',
      description2: 'Pro from $29/month',
    }),
    link('Integrations', 'https://arcflow.dev/integrations'),
    link('Templates', 'https://arcflow.dev/templates'),
  )
  .callouts('No Credit Card Required', 'SOC 2 Certified', '99.9% Uptime')`;

// CLI Reference
export const cliCommands = [
  { cmd: "ads plan", desc: "Preview changes (diff code vs platform)" },
  { cmd: "ads apply", desc: "Apply changes to ad platforms" },
  { cmd: "ads import", desc: "Import existing campaigns as TypeScript" },
  { cmd: "ads pull", desc: "Pull live state, detect drift" },
  { cmd: "ads validate", desc: "Validate campaign files" },
  { cmd: "ads status", desc: "Show live platform state" },
  { cmd: "ads generate", desc: "Generate expanded campaign variants" },
  { cmd: "ads optimize", desc: "AI-powered campaign optimization" },
  { cmd: "ads doctor", desc: "Diagnostic checks on project setup" },
] as const;
