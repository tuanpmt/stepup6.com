import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'StepUp6',
  tagline: 'Bộ tài liệu luyện thi toàn diện vào lớp 6 trường chuyên',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://stepup6.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tuanpmt', // Usually your GitHub org/user name.
  projectName: 'stepup6.com', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tuanpmt/stepup6.com/tree/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Cấu hình cho Mermaid
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
      options: {
        maxTextSize: 50000,
        flowchart: {
          htmlLabels: true,
          curve: 'linear',
        },
      },
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'StepUp6',
      logo: {
        alt: 'StepUp6 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tài liệu',
        },
        {
          href: 'https://github.com/tuanpmt/stepup6.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tài liệu',
          items: [
            {
              label: 'Giới thiệu',
              to: '/docs/intro',
            },
            {
              label: 'Đọc hiểu',
              to: '/docs/exam_preparation/1_Reading_Comprehension',
            },
            {
              label: 'Toán và Logic',
              to: '/docs/exam_preparation/2_Math_and_Logic',
            },
            {
              label: 'Kỹ năng thực hành',
              to: '/docs/exam_preparation/5_Practical_Skills',
            },
          ],
        },
        {
          title: 'Đề thi',
          items: [
            {
              label: 'Trần Đại Nghĩa',
              to: '/docs/exams/tran-dai-nghia',
            },
            {
              label: 'Trần Quốc Toản',
              to: '/docs/exams/tran-quoc-toan',
            },
            {
              label: 'Đề thi thử',
              to: '/docs/exam_preparation/6_Full_Mock_Exams',
            },
          ],
        },
        {
          title: 'Liên hệ',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tuanpmt/stepup6.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StepUp6. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
