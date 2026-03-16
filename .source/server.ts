// @ts-nocheck
import * as __fd_glob_27 from "../content/docs/reference/targeting.mdx?collection=docs"
import * as __fd_glob_26 from "../content/docs/reference/extensions.mdx?collection=docs"
import * as __fd_glob_25 from "../content/docs/reference/configuration.mdx?collection=docs"
import * as __fd_glob_24 from "../content/docs/reference/cli.mdx?collection=docs"
import * as __fd_glob_23 from "../content/docs/reference/cache.mdx?collection=docs"
import * as __fd_glob_22 from "../content/docs/reference/bidding-strategies.mdx?collection=docs"
import * as __fd_glob_21 from "../content/docs/reference/api.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/guides/shared-config.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/guides/meta-campaigns.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/guides/meta-ads-setup.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/guides/google-shopping-campaigns.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/guides/google-search-campaigns.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/guides/google-pmax-campaigns.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/guides/google-other-campaigns.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/guides/google-display-campaigns.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/guides/google-ads-setup.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/guides/campaign-variants.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/guides/ai-generation.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/concepts/resource-identity.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/concepts/providers.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/concepts/how-it-works.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/concepts/diff-engine.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/getting-started.mdx?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/reference/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/guides/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/concepts/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "concepts/meta.json": __fd_glob_1, "guides/meta.json": __fd_glob_2, "reference/meta.json": __fd_glob_3, }, {"getting-started.mdx": __fd_glob_4, "index.mdx": __fd_glob_5, "concepts/diff-engine.mdx": __fd_glob_6, "concepts/how-it-works.mdx": __fd_glob_7, "concepts/providers.mdx": __fd_glob_8, "concepts/resource-identity.mdx": __fd_glob_9, "guides/ai-generation.mdx": __fd_glob_10, "guides/campaign-variants.mdx": __fd_glob_11, "guides/google-ads-setup.mdx": __fd_glob_12, "guides/google-display-campaigns.mdx": __fd_glob_13, "guides/google-other-campaigns.mdx": __fd_glob_14, "guides/google-pmax-campaigns.mdx": __fd_glob_15, "guides/google-search-campaigns.mdx": __fd_glob_16, "guides/google-shopping-campaigns.mdx": __fd_glob_17, "guides/meta-ads-setup.mdx": __fd_glob_18, "guides/meta-campaigns.mdx": __fd_glob_19, "guides/shared-config.mdx": __fd_glob_20, "reference/api.mdx": __fd_glob_21, "reference/bidding-strategies.mdx": __fd_glob_22, "reference/cache.mdx": __fd_glob_23, "reference/cli.mdx": __fd_glob_24, "reference/configuration.mdx": __fd_glob_25, "reference/extensions.mdx": __fd_glob_26, "reference/targeting.mdx": __fd_glob_27, });