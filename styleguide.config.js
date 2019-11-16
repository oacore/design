module.exports = {
  title: 'OACore Design',
  usageMode: 'expand',
  sections: [
    {
      name: 'Introduction',
      content: './docs/intro.md',
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'Utilities',
          components: ['src/components/icon/index.jsx'],
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
}
