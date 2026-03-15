/**
 * All code snippets and terminal output for the landing page.
 * Sourced from ads-as-code example campaigns.
 * Source: example/campaigns/search-pdf-renaming.ts
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

export default google.search('Brand - PDF Renamer', {
  budget: daily(15),
  bidding: 'maximize-clicks',
})
  .group('core-keywords', {
    keywords: [
      ...exact('pdf renamer', 'rename pdf files'),
      ...broad('ai pdf rename'),
    ],
    ad: rsa(
      headlines(
        'AI PDF Renamer — Try Free',
        '50 Free Renames to Start',
        'Rename 1000 PDFs in Minutes',
      ),
      descriptions(
        'Upload PDFs. AI reads content, renames every file.',
        '95% accuracy on invoices. No install needed.',
      ),
      url('https://example.com/pdf-renamer'),
    ),
  })`;

// How It Works — Step 2: Plan (terminal output)
export const planSnippet = `$ ads plan

+ campaign/brand-pdf-renamer                         create
+ campaign/brand-pdf-renamer/core-keywords            create
+ campaign/brand-pdf-renamer/core-keywords/kw:...     create (4 keywords)
+ campaign/brand-pdf-renamer/core-keywords/rsa        create

  4 to create. Run ads apply to execute.`;

// How It Works — Step 3: Apply (terminal output)
export const applySnippet = `$ ads apply

✓ Created campaign/brand-pdf-renamer
✓ Created campaign/brand-pdf-renamer/core-keywords
✓ Created 4 keywords
✓ Created RSA ad

  4 resources created. 0 updated. 0 deleted.`;

// Code Example — full campaign (simplified from search-pdf-renaming.ts)
export const fullCampaignSnippet = `import {
  google, daily, exact, broad, phrase,
  headlines, descriptions, rsa, url,
  link,
} from '@upspawn/ads'

export default google.search('Search - PDF Renaming', {
  budget: daily(1.5),
  bidding: 'maximize-clicks',
  negatives: [
    ...broad('free', 'convert', 'tutorial', 'open source'),
    ...phrase('document management system', 'pdf compressor'),
  ],
})
  .group('pdf-renamer-de', {
    keywords: [
      ...exact('pdf automatisch umbenennen'),
      ...broad('pdf umbenennen'),
    ],
    ad: rsa(
      headlines(
        'PDF automatisch umbenennen',
        'KI liest Inhalte & benennt um',
        '50 kostenlose Umbenennungen',
        '95% Genauigkeit. Gratis Test',
        'Made in Germany. DSGVO-konform',
      ),
      descriptions(
        '95% Genauigkeit bei Rechnungen. 50 kostenlose Umbenennungen.',
        'PDFs hochladen. KI erkennt Daten, Betraege, Firmen.',
      ),
      url('https://www.renamed.to/de/pdf-renamer'),
    ),
  })
  .group('pdf-renamer-en', {
    keywords: [
      ...exact('auto rename pdf files', 'pdf file renamer'),
      ...broad('ai pdf renamer', 'rename pdf based on content'),
    ],
    ad: rsa(
      headlines(
        'AI PDF Renamer — Try Free',
        '50 Free Renames to Start',
        'Rename 1000 PDFs in Minutes',
        'AI Reads Content & Names Files',
        'Still Renaming PDFs by Hand?',
      ),
      descriptions(
        '95% accuracy on invoices & receipts. 50 free renames.',
        'Upload PDFs. AI reads dates, amounts, names — renames every file.',
      ),
      url('https://www.renamed.to/pdf-renamer'),
    ),
  })
  .sitelinks(
    link('See Pricing', 'https://www.renamed.to/pricing', {
      description1: '50 files free monthly',
      description2: 'Then $9 for 1,000 documents',
    }),
    link('Google Drive Integration', 'https://www.renamed.to/integrations/google-drive'),
    link('Dropbox Integration', 'https://www.renamed.to/integrations/dropbox'),
  )
  .callouts('No Credit Card Required', 'AI-Powered', '95% Accuracy')`;

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
