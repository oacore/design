const path = require('path')

module.exports = {
  title: 'CORE Design Elements',
  usageMode: 'expand',
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: './docs/intro.md',
    },
    {
      name: 'Foundation',
      content: 'src/foundation/README.md',
    },
    {
      name: 'DesignProvider',
      content: 'src/context.md',
    },
    {
      name: 'Elements',
      components:
        'src/elements/!(table|app-bar|forms|metadata-list|math-markdown|cookies)/**/*.{js,jsx,ts,tsx}',
      sections: [
        {
          name: 'App Bar',
          components: () => [
            'src/elements/app-bar/bar.jsx',
            'src/elements/app-bar/brand.jsx',
            'src/elements/app-bar/item.jsx',
          ],
        },
        {
          name: 'Math Markdown',
          components: () => ['src/elements/math-markdown/math-markdown.jsx'],
        },
        {
          name: 'Table',
          components: () => [
            'src/elements/table/table.jsx',
            'src/elements/table/head.jsx',
            'src/elements/table/head-cell.jsx',
            'src/elements/table/body.jsx',
            'src/elements/table/row.jsx',
            'src/elements/table/cell.jsx',
            'src/elements/table/footer.jsx',
          ],
        },
        {
          name: 'Forms',
          content: './src/elements/forms/forms.md',
          components: () => [
            'src/elements/forms/form.jsx',
            'src/elements/forms/addon.jsx',
            'src/elements/forms/control.jsx',
            'src/elements/forms/group.jsx',
            'src/elements/forms/text-field.jsx',
          ],
        },
        {
          name: 'MetadataList',
          components: () => [
            'src/elements/metadata-list/metadata-list.jsx',
            'src/elements/metadata-list/metadata-list-item.jsx',
          ],
        },
        {
          name: 'Cookies',
          components: () => ['src/elements/cookies/cookies.jsx'],
        },
      ],
    },
    {
      name: 'Modules',
      components:
        'src/modules/!(modal|select|search-result|header|documentation-membership|documentation-membership-nav)/**/*.{js,jsx,ts,tsx}',
      sections: [
        {
          name: 'Search result',
          components: ['src/modules/search-result/search-result.jsx'],
        },
        {
          name: 'Select',
          components: () => [
            'src/modules/select/select.jsx',
            'src/modules/select/option.jsx',
          ],
        },
        {
          name: 'Modal',
          components: () => [
            'src/modules/modal/modal.jsx',
            'src/modules/modal/title.jsx',
            'src/modules/modal/content.jsx',
            'src/modules/modal/footer.jsx',
          ],
        },
        {
          name: 'Header',
          components: () => ['src/modules/header/header.jsx'],
        },
        {
          name: 'DocumentationMembership',
          components: () => [
            'src/modules/documentation-membership/documentation-membership.jsx',
          ],
        },
        {
          name: 'DocumentationMembershipNav',
          components: () => [
            'src/modules/documentation-membership-nav/documentation-membership-nav.jsx',
          ],
        },
        {
          name: 'DocumentSelect',
          components: () => ['src/modules/docs-select/docs-select.jsx'],
        },
        {
          name: 'Video',
          components: () => ['src/modules/video/video.jsx'],
        },
      ],
    },
  ],
  theme: {
    color: {
      link: '#b75400',
      linkHover: '#924300',
    },
  },
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/index.{js,jsx,ts,tsx}',
  ],

  styleguideDir: 'public',
  styles: {
    Playground: {
      preview: {
        overflow: 'hidden',
        position: 'relative',
        transform: 'translate3d(0, 0, 0)',
      },
    },
  },
  assetsDir: ['public', 'assets'],

  require: [path.join(__dirname, 'src/index.css')],

  // eslint-disable-next-line global-require
  webpackConfig: require('./webpack.config'),

  getExampleFilename: (componentPath) =>
    componentPath.replace(/\.jsx?$/, '.md'),
}
