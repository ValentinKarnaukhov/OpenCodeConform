import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Open Code Conform',
  tagline: 'Same everywhere!',
  favicon: 'img/favicon.ico',

  url: 'https://valentinkarnaukhov.github.io',
  baseUrl: '/OpenCodeConform/',

  organizationName: 'ValentinKarnaukhov',
  projectName: 'OpenCodeConform',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/css/custom.css'
        },
      }
    ],
  ],

  themeConfig: {
    image: 'img/occ-logo.png',
    navbar: {
      logo: {
        alt: 'OpenCodeConform',
        src: 'img/occ-logo.png'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'languageSidebar',
          position: 'left',
          label: 'Languages'
        },
        {
          href: 'https://github.com/ValentinKarnaukhov/OpenCodeConform',
          label: 'GitHub',
          position: 'right'
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} OpenCodeConform. Built with Docusaurus.`
    }
  }
};

export default config;
