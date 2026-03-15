// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"getting-started.mdx": () => import("../content/docs/getting-started.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "guides/ai-generation.mdx": () => import("../content/docs/guides/ai-generation.mdx?collection=docs"), "guides/campaign-variants.mdx": () => import("../content/docs/guides/campaign-variants.mdx?collection=docs"), "guides/google-ads-setup.mdx": () => import("../content/docs/guides/google-ads-setup.mdx?collection=docs"), "guides/meta-ads-setup.mdx": () => import("../content/docs/guides/meta-ads-setup.mdx?collection=docs"), "guides/shared-config.mdx": () => import("../content/docs/guides/shared-config.mdx?collection=docs"), "guides/writing-campaigns.mdx": () => import("../content/docs/guides/writing-campaigns.mdx?collection=docs"), "reference/api.mdx": () => import("../content/docs/reference/api.mdx?collection=docs"), "reference/cache.mdx": () => import("../content/docs/reference/cache.mdx?collection=docs"), "reference/cli.mdx": () => import("../content/docs/reference/cli.mdx?collection=docs"), "reference/configuration.mdx": () => import("../content/docs/reference/configuration.mdx?collection=docs"), }),
};
export default browserCollections;