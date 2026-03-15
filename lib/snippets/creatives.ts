// Creatives feature page content

export const heroCode = `import { meta } from "@upspawn/ads/meta";
import { image, video, carousel } from "@upspawn/ads/helpers/creatives";
import { age, geo, interests } from "@upspawn/ads/helpers/targeting";
import { daily, usd } from "@upspawn/ads/helpers/budget";

export const arcflowAwareness = meta.traffic({
  name: "Arcflow — Awareness — Product Tour",
  budget: daily(usd(80)),
})
  .adSet("Cold — US SaaS Buyers", (s) =>
    s
      .targeting(age(28, 55), geo(["US"]), interests(["SaaS", "Workflow Automation"]))
      .placements(["feed", "reels", "stories"])
      .ad("Video Tour", (a) =>
        a
          .headline("Your Entire Workflow, Automated")
          .body("Arcflow connects your tools and handles the work between them.")
          .creative(
            video("./assets/product-tour-30s.mp4", { thumbnail: "./assets/tour-thumb.jpg" })
          )
          .url("https://arcflow.io/tour?utm_source=meta")
      )
      .ad("Feature Carousel", (a) =>
        a
          .headline("Everything Your Team Needs")
          .body("One platform for triggers, logic, and integrations.")
          .creative(
            carousel([
              { image: "./assets/feature-triggers.jpg",  headline: "Smart Triggers",     url: "https://arcflow.io/features/triggers" },
              { image: "./assets/feature-logic.jpg",     headline: "If/Then Logic",       url: "https://arcflow.io/features/logic" },
              { image: "./assets/feature-integrations.jpg", headline: "500+ Integrations", url: "https://arcflow.io/integrations" },
            ])
          )
      )
  );`;

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
    code: `import { image, video } from "@upspawn/ads/helpers/creatives";

export const arcflowTrial = meta.conversions({
  name: "Arcflow — Trial — Free Signup",
  budget: daily(usd(100)),
  pixel: "1234567890",
  event: "StartTrial",
}).adSet("Warm — Retarget", (s) =>
  s.targeting(geo(["US", "GB", "CA"]))
    .audience({ retarget: "site-visitors-30d" })
    .placements(["feed", "stories"])
    // Local file — uploaded on \`ads apply\`
    .ad("Static Image", (a) =>
      a.headline("Still Thinking It Over?")
        .body("Try Arcflow free for 14 days. No credit card. Cancel any time.")
        .creative(image("./assets/trial-nudge.jpg", { width: 1080, height: 1080 }))
        .url("https://arcflow.io/trial?utm_source=meta_retarget")
    )
    // Video with explicit thumbnail
    .ad("Product Walkthrough", (a) =>
      a.headline("See It in 60 Seconds")
        .body("Watch how Arcflow automates your most common workflows.")
        .creative(
          video("./assets/demo-60s.mp4", { thumbnail: "./assets/demo-thumb.jpg" })
        )
        .url("https://arcflow.io/demo?utm_source=meta_retarget")
    )
);`,
    lang: "typescript" as const,
  },
  {
    title: "Carousel ads — multiple cards, one definition",
    caption:
      "Use `carousel()` to define multi-card ads inline. Each card has its own image, headline, and destination URL. Cards are versioned alongside the campaign.",
    code: `import { carousel } from "@upspawn/ads/helpers/creatives";

export const arcflowFeatures = meta.traffic({
  name: "Arcflow — Features — Cold Audience",
  budget: daily(usd(60)),
}).adSet("Interest — Automation Tools", (s) =>
  s.targeting(age(25, 50), geo(["US", "GB"]), interests(["Automation", "Productivity"]))
    .placements(["feed"])
    .ad("Feature Tour Carousel", (a) =>
      a.headline("One Platform. Every Workflow.")
        .body("Discover what Arcflow can automate for your team.")
        .creative(
          carousel([
            {
              image: "./assets/trigger-card.jpg",
              headline: "Smart Triggers",
              body: "React to events across 500+ apps instantly.",
              url: "https://arcflow.io/features/triggers",
            },
            {
              image: "./assets/logic-card.jpg",
              headline: "Branching Logic",
              body: "If/then conditions, filters, and delay steps.",
              url: "https://arcflow.io/features/logic",
            },
            {
              image: "./assets/integrations-card.jpg",
              headline: "500+ Integrations",
              body: "Slack, HubSpot, Notion, Stripe, and counting.",
              url: "https://arcflow.io/integrations",
            },
          ])
        )
    )
);`,
    lang: "typescript" as const,
  },
  {
    title: "Boosted posts — promote existing organic content",
    caption:
      "Use `boostedPost()` to promote an existing Facebook or Instagram post. The SDK wraps it in a campaign definition, so the boost is version-controlled and reproducible.",
    code: `import { boostedPost } from "@upspawn/ads/helpers/creatives";

export const arcflowBoostedLaunch = meta.traffic({
  name: "Arcflow — Boost — Product Launch Post",
  budget: daily(usd(40)),
}).adSet("Warm — Page Followers", (s) =>
  s.targeting(geo(["US", "CA", "GB", "AU"]))
    .audience({ retarget: "page-followers" })
    .placements(["feed"])
    .ad("Launch Announcement", (a) =>
      a.creative(
        // Reference an existing post by ID
        boostedPost("https://www.facebook.com/arcflow/posts/123456789")
      )
        .url("https://arcflow.io/blog/launch?utm_source=meta_boost")
    )
);`,
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
