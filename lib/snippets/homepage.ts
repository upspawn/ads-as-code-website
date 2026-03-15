// Homepage content

export const heroDiff = `$ ads plan

+ campaign/brand-search                    create
+ campaign/brand-search/core-keywords      create
+ campaign/brand-search/core-keywords/rsa  create
~ campaign/retarget/budget                 $15 → $25/day
~ campaign/retarget/broad/rsa             +2 headlines
- campaign/old-summer-promo                delete

  5 to create, 2 to update, 1 to delete.
  Run ads apply to execute.`;

export const featureCards = [
  { title: "Plan / Apply", description: "Preview every change before it goes live. Rollback with git.", href: "/features/plan-apply" },
  { title: "Import", description: "Pull existing campaigns into TypeScript. Zero rewrite.", href: "/features/import" },
  { title: "Google Ads", description: "Search campaigns without the gRPC nightmares.", href: "/features/google-ads" },
  { title: "Meta Ads", description: "Facebook and Instagram campaigns that live in git.", href: "/features/meta-ads" },
  { title: "Creatives", description: "Images, videos, and carousels — versioned and deployed.", href: "/features/creatives" },
  { title: "AI Copy Generation", description: "Headlines, descriptions, keywords — generated in seconds.", href: "/features/ai-generation" },
  { title: "AI Variants", description: "One campaign, every market. Translations and ICP expansion.", href: "/features/ai-variants" },
  { title: "Pipelines", description: "CI/CD for ads. Deploy on merge. Test in staging.", href: "/features/pipelines" },
  { title: "Developer Experience", description: "Your AI already knows TypeScript.", href: "/features/developer-experience" },
] as const;

export const stats = [
  { value: "2", label: "Providers" },
  { value: "50+", label: "Helpers" },
  { value: "15", label: "CLI Commands" },
  { value: "100%", label: "Type-Safe" },
] as const;
