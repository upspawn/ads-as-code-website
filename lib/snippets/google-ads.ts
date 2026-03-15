// Google Ads feature page content

export const heroCode = `import { google } from "@upspawn/ads/google";
import { exact, phrase } from "@upspawn/ads/helpers/keywords";
import { headlines, descriptions, rsa } from "@upspawn/ads/helpers/ads";
import { daily, usd } from "@upspawn/ads/helpers/budget";
import { url } from "@upspawn/ads/helpers/url";

export const arcflowSearch = google.search({
  name: "Arcflow — Brand Search",
  budget: daily(usd(45)),
  bidding: "maximize-clicks",
})
  .group("Core Keywords", (g) =>
    g
      .keywords([
        exact("arcflow"),
        exact("arcflow ai"),
        phrase("ai workflow automation"),
        phrase("workflow automation software"),
      ])
      .ad(
        rsa(
          headlines(
            "Arcflow — AI Workflow Automation",
            "Automate Any Workflow in Minutes",
            "Connect Your Tools Instantly",
            "No-Code AI Automation",
          ),
          descriptions(
            "Build and deploy automated workflows with AI. 500+ integrations, zero code required.",
            "From lead capture to onboarding — automate it all. Start free, no credit card.",
          ),
          url("https://arcflow.io/", "AI Automation"),
        )
      )
  );`;

export const problemLines = [
  "The Google Ads gRPC API returns numeric enums everywhere. Status 2 means ENABLED. Bidding strategy 10 is TARGET_SPEND, which is actually Maximize Clicks. Good luck remembering that.",
  "Budget is a separate resource that has to be created before the campaign that references it. The REST API is broken for mutations. Manually constructing operation arrays is tedious and error-prone.",
  "ads-as-code wraps all of this: type-safe builders, human-readable enums, dependency-ordered mutations, and branded types that catch mistakes at construction time.",
];

export const howSteps = [
  {
    title: "Campaigns and ad groups",
    caption:
      "Chain `.group()` calls to define ad groups with keywords and RSA ads. Each group can have its own keyword list, negative keywords, and multiple ads. Add a second language group in the same campaign.",
    code: `export const arcflowSearch = google.search({
  name: "Arcflow — EU Search",
  budget: daily(usd(80)),
  bidding: "maximize-conversions",
})
  // German market
  .group("DE — Core", (g) =>
    g
      .locale("de", ["DE", "AT", "CH"])
      .keywords([
        exact("arcflow"),
        phrase("ki workflow automatisierung"),
        broad("workflow software"),
      ])
      .ad(
        rsa(
          headlines(
            "Arcflow — KI-Automatisierung",
            "Workflows automatisch erstellen",
            "500+ Integrationen, kein Code",
          ),
          descriptions(
            "Automatisieren Sie jeden Workflow mit KI. Keine Programmierkenntnisse nötig.",
            "Jetzt kostenlos starten — keine Kreditkarte erforderlich.",
          ),
          url("https://arcflow.io/de/", "KI Automatisierung"),
        )
      )
  )
  // English market
  .group("EN — Core", (g) =>
    g
      .locale("en", ["GB", "IE", "NL"])
      .keywords([
        exact("arcflow"),
        phrase("ai workflow automation"),
        broad("workflow automation tool"),
      ])
      .ad(
        rsa(
          headlines(
            "Arcflow — AI Workflow Automation",
            "Automate Any Workflow in Minutes",
            "500+ Integrations, Zero Code",
          ),
          descriptions(
            "Build automated workflows with AI. Drag, drop, deploy in minutes.",
            "Start free. No credit card required.",
          ),
          url("https://arcflow.io/", "AI Automation"),
        )
      )
  );`,
    lang: "typescript" as const,
  },
  {
    title: "Extensions: sitelinks and callouts",
    caption:
      "Add sitelinks and callout extensions to your campaign. Extensions are versioned alongside your campaign definitions and diffed independently.",
    code: `import { link, sitelinks, callouts } from "@upspawn/ads/helpers/extensions";

export const arcflowSearch = google.search({
  name: "Arcflow — Brand Search",
  budget: daily(usd(45)),
  bidding: "maximize-clicks",
})
  .sitelinks(
    sitelinks([
      link("Pricing", "https://arcflow.io/pricing", "Simple, transparent plans"),
      link("Integrations", "https://arcflow.io/integrations", "500+ apps supported"),
      link("Templates", "https://arcflow.io/templates", "Start from a template"),
      link("Docs", "https://arcflow.io/docs", "Full API reference"),
    ])
  )
  .callouts(
    callouts(["No-Code Required", "Free 14-Day Trial", "SOC 2 Certified", "GDPR Compliant"])
  )
  .group("Core Keywords", (g) =>
    g.keywords([exact("arcflow"), phrase("ai workflow automation")]).ad(/* ... */)
  );`,
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
      "`daily(usd(45))` or `monthly(eur(1200))` — human-readable, converts to micros automatically.",
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
