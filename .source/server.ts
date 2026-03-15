// @ts-nocheck
import * as __fd_glob_14 from "../content/docs/reference/configuration.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/reference/cli.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/reference/cache.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/reference/api.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/guides/writing-campaigns.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/guides/shared-config.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/guides/meta-ads-setup.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/guides/google-ads-setup.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/guides/campaign-variants.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/guides/ai-generation.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/getting-started.mdx?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/reference/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/guides/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "guides/meta.json": __fd_glob_1, "reference/meta.json": __fd_glob_2, }, {"getting-started.mdx": __fd_glob_3, "index.mdx": __fd_glob_4, "guides/ai-generation.mdx": __fd_glob_5, "guides/campaign-variants.mdx": __fd_glob_6, "guides/google-ads-setup.mdx": __fd_glob_7, "guides/meta-ads-setup.mdx": __fd_glob_8, "guides/shared-config.mdx": __fd_glob_9, "guides/writing-campaigns.mdx": __fd_glob_10, "reference/api.mdx": __fd_glob_11, "reference/cache.mdx": __fd_glob_12, "reference/cli.mdx": __fd_glob_13, "reference/configuration.mdx": __fd_glob_14, });