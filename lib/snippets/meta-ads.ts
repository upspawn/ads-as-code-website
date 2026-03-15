// Meta Ads feature page content

export const heroCode = `import { meta } from "@upspawn/ads/meta";
import { interests, lookalike, age, geo } from "@upspawn/ads/helpers/targeting";
import { image } from "@upspawn/ads/helpers/creatives";
import { daily, usd } from "@upspawn/ads/helpers/budget";

export const arcflowTraffic = meta.traffic({
  name: "Arcflow — Traffic — AI Enthusiasts",
  budget: daily(usd(60)),
})
  .adSet("AI Ops — USA", (s) =>
    s
      .targeting(
        age(28, 55),
        geo(["US"]),
        interests(["Artificial Intelligence", "SaaS", "Workflow Automation", "Zapier"]),
      )
      .placements(["feed", "reels", "stories"])
      .ad("Hero Creative", (a) =>
        a
          .headline("Automate Your Entire Workflow with AI")
          .body("Arcflow connects your tools and automates the work between them. No code. Deploy in minutes.")
          .creative(
            image("https://cdn.arcflow.io/ads/hero-workflow.jpg", { width: 1200, height: 628 })
          )
          .url("https://arcflow.io/lp/ai-workflow?utm_source=meta")
      )
  )
  .adSet("Lookalike — 1% Customers", (s) =>
    s
      .targeting(
        geo(["US"]),
        lookalike("customer-list-q1-2025", 0.01),
      )
      .placements(["feed"])
      .ad("Social Proof", (a) =>
        a
          .headline("Join 12,000+ Teams Using Arcflow")
          .body("From SaaS startups to enterprise ops teams — Arcflow automates the workflows that slow you down.")
          .creative(
            image("https://cdn.arcflow.io/ads/social-proof.jpg", { width: 1200, height: 628 })
          )
          .url("https://arcflow.io/lp/social-proof?utm_source=meta")
      )
  );`;

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
    code: `// Traffic campaign
export const arcflowTraffic = meta.traffic({
  name: "Arcflow — Traffic — Blog Readers",
  budget: daily(usd(30)),
}).adSet("Cold — US Tech", (s) =>
  s.targeting(age(25, 50), geo(["US"]), interests(["Software Engineering", "Productivity"]))
    .placements(["feed", "reels"])
    .ad("Blog CTA", (a) =>
      a.headline("Stop Manually Triggering Your Workflows")
        .body("Let Arcflow watch for events and act automatically. 500+ integrations.")
        .creative(image("https://cdn.arcflow.io/ads/blog-hero.jpg", { width: 1200, height: 628 }))
        .url("https://arcflow.io/blog/workflow-automation?utm_source=meta")
    )
);

// Conversions campaign
export const arcflowConversions = meta.conversions({
  name: "Arcflow — Conversions — Free Trial",
  budget: daily(usd(120)),
  pixel: "1234567890",
  event: "StartTrial",
}).adSet("Warm — Retarget Site Visitors", (s) =>
  s.targeting(geo(["US", "GB", "CA"]))
    .audience({ retarget: "site-visitors-30d" })
    .placements(["feed", "stories"])
    .ad("Trial Nudge", (a) =>
      a.headline("Still Thinking It Over?")
        .body("Try Arcflow free for 14 days. No credit card. Cancel any time.")
        .creative(image("https://cdn.arcflow.io/ads/trial-nudge.jpg", { width: 1080, height: 1080 }))
        .url("https://arcflow.io/trial?utm_source=meta_retarget")
    )
);

// Leads campaign
export const arcflowLeads = meta.leads({
  name: "Arcflow — Leads — Enterprise Demo",
  budget: daily(usd(80)),
  form: { title: "Book an Arcflow Demo", fields: ["email", "company", "job_title"] },
}).adSet("Enterprise — US Decision Makers", (s) =>
  s.targeting(age(30, 60), geo(["US"]), interests(["Enterprise Software", "Digital Transformation"]))
    .placements(["feed"])
    .ad("Demo CTA", (a) =>
      a.headline("See Arcflow in Action")
        .body("Book a 20-minute demo. We'll show you how to automate your top 3 workflows.")
        .creative(image("https://cdn.arcflow.io/ads/demo-cta.jpg", { width: 1200, height: 628 }))
    )
);`,
    lang: "typescript" as const,
  },
  {
    title: "Rich targeting: interests, lookalikes, exclusions, placements",
    caption:
      "Mix interest targeting, lookalike audiences, custom audience retargeting, and explicit exclusions. Control placements per ad set.",
    code: `export const arcflowProspecting = meta.traffic({
  name: "Arcflow — Prospecting — SaaS Founders",
  budget: daily(usd(50)),
})
  // Interest-based cold audience
  .adSet("Interest — SaaS Founders", (s) =>
    s
      .targeting(
        age(25, 50),
        geo(["US", "CA", "GB", "AU"]),
        interests([
          "Entrepreneurship",
          "Startup",
          "Software as a Service",
          "Artificial Intelligence",
          "Productivity",
        ]),
      )
      .exclude({ audience: "existing-customers" })
      .placements(["feed", "reels", "stories", "audience_network"])
      .ad("Cold — Value Prop", (a) =>
        a.headline("Your Workflows, Automated by AI")
          .body("Arcflow connects every tool in your stack. Zero code, instant deployment.")
          .creative(image("https://cdn.arcflow.io/ads/value-prop.jpg", { width: 1200, height: 628 }))
          .url("https://arcflow.io/?utm_source=meta_cold")
      )
  )
  // 1% lookalike of best customers
  .adSet("Lookalike 1% — Top Customers", (s) =>
    s
      .targeting(geo(["US"]))
      .targeting(lookalike("top-customers-ltv", 0.01))
      .exclude({ audience: "existing-customers" })
      .placements(["feed"])
      .ad("Lookalike — Social Proof", (a) =>
        a.headline("Used by 12,000+ Teams")
          .body("The fastest-growing teams use Arcflow to eliminate manual work. See why.")
          .creative(image("https://cdn.arcflow.io/ads/social-proof.jpg", { width: 1200, height: 628 }))
          .url("https://arcflow.io/customers?utm_source=meta_lookalike")
      )
  );`,
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
