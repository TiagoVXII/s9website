// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sigma-9 Website',
  tagline: '',
  favicon: 'img/favicon.ico',
  
  

  // Set the production url of your site here
  url: 'https://s9website.pages.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
           'https://github.com/TiagoVXII/s9website/tree/main',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TiagoVXII/s9website/tree/main',
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
      // Replace with your project's social card
      image: 'img/favicon.ico',
      navbar: {
        title: 'Sigma-9 Website',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon-32x32.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Intro',
            position: 'left',
            label: '',
          },
          {
            href: 'https://github.com/TiagoVXII/s9website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentos',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'N/A',
                href: 'N/A',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/5aqZzygJmn',
              },
              {
                label: 'N/A',
                href: 'N/A',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Documentos',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/TiagoVXII/websiteafg',
              },
            ],
          },
        ],
      logo: {
      alt: '',
      src: '',
      href: '',
      },
        copyright: `Copyright © ${new Date().getFullYear()} Sigma-9 "Valkyries", Inc. Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
