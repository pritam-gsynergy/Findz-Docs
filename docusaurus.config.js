// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Findz',
  tagline: 'Get together to collect links, products and more from web, apps or your phone',
  url: 'https://findz.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Gsynergy LLC', // Usually your GitHub org/user name.
  projectName: 'Findz Doc', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Findz',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/create-a-findz-account',
            position: 'left',
            label: 'Getting Started',
          },

          {
            type: 'doc',
            docId: 'findz-mobile-app/meet-the-findz-app-interface',
            position: 'left',
            label: 'Findz Mobile App',
          },

          {
            type: 'doc',
            docId: 'findz-browser-extension/meet-the-findz-extension-interface',
            position: 'left',
            label: 'Findz Browser Extension',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact us',
            items: [
              {
                label: 'hi@findz.app',
                href: 'mailto: hi@findz.app',
              },
              {
                label: 'Alpharetta, Georgia',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://findz.app/privacy-policy/',
              },
              {
                label: 'Terms of Service',
                href: 'https://findz.app/terms-of-service/',
              },
              {
                label: 'Careers@Findz',
                href: 'https://findz.app/careers-at-findz/',
              },
              {
                label: 'Business Collaboration',
                href: 'https://findz.app/business-collaborations/',
              },
            ],
          },
          {
            title: 'Download Findz',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gsynergy, LLC. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;