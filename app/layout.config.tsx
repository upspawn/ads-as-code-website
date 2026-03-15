import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'ads-as-code',
  },
  links: [
    {
      text: 'Features',
      url: '/features/plan-apply',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/upspawn/ads-as-code',
      external: true,
    },
  ],
};
