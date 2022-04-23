// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'renovate-issue-action',
  tagline: 'Create, update, and close GitHub Issues with GitHub Actions according to Renovate Pull Requests',
  url: 'https://suzuki-shunsuke.github.io',
  baseUrl: '/renovate-issue-action/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'suzuki-shunsuke', // Usually your GitHub org/user name.
  projectName: 'renovate-issue-action', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/suzuki-shunsuke/renovate-issue-action-docs/edit/main',
          routeBasePath: '/',
        },
        pages: false,
        blog: false,
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
        title: 'renovate-issue-action',
        items: [
          {
            href: 'https://github.com/suzuki-shunsuke/renovate-issue-action',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/suzuki-shunsuke/renovate-issue-action',
              },
              {
                label: 'Document Repository',
                href: 'https://github.com/suzuki-shunsuke/renovate-issue-action-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 Shunsuke Suzuki. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
