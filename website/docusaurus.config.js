/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nemathode',
  tagline: 'Math libs manager with single syntax',
  customFields: {
    syntaxExample: '[a, \'+\', b, \'*\', [c, \'/\', d, \'-\', e]]',
  },
  url: 'https://nemathode.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kas-elvirov', // Usually your GitHub org/user name.
  projectName: 'nemathode', // Usually your repo name.
  /* i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      ru: {
        label: 'Русский',
        direction: 'ltr',
      },
    },
  }, */
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F60A}',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    gtag: {
      trackingID: 'G-KJ7JJ57CJD',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
    navbar: {
      style: 'dark',
      title: 'Nemathode',
      logo: {
        alt: 'Nemathode Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        /* {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        }, */
        /* {
          type: 'localeDropdown',
          position: 'right',
        }, */
        {
          href: 'https://kas-elvirov.com/',
          label: 'Kas Elvirov',
          position: 'right',
        },
        /* {
          href: 'https://github.com/kas-elvirov/nemathode',
          label: 'GitHub',
          position: 'right',
        }, */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction (medium)',
              to: 'https://kas-elvirov.medium.com/one-lib-to-rule-them-all-nemathode-js-7474359d8484',
            },
            {
              label: 'Nemathode syntax',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/nemathode',
            },
            {
              label: 'Github',
              href: 'https://github.com/kas-elvirov/nemathode/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            /* {
              label: 'Blog',
              to: '/blog',
            }, */
            /* {
              label: 'GitHub',
              href: 'https://github.com/kas-elvirov/nemathode',
            }, */
            {
              label: 'Kas Elvirov',
              href: 'https://kas-elvirov.com/',
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/package/nemathode',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nemathode, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          theme: require('prism-react-renderer/themes/github'),
          darkTheme: require('prism-react-renderer/themes/dracula'),
        },
      },
    ],
  ],
};
