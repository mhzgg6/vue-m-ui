module.exports = {
  title: 'vue-m-ui',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  base: '/vue-m-ui/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/mhzgg6/vue-m-ui/tree/master/' },
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: true,
        children: [
          'views/guide/install.md',
          'views/guide/get-started.md'
        ]
      },
      {
        title: '组件',
        collapsable: true,
        children: [
          'views/components/basic/',
          'views/components/input/',
          'views/components/form/',
          'views/components/message/',
          'views/components/timeline/',
          'views/components/step/',
          'views/components/todo/',
        ]
      },
    ]
  }
}