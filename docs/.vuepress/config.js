module.exports = {
  theme: 'ououe',
  title: `Vckkk's b1og`,
  description: 'Do what you want, So TMD what',
  evergreen: true,
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.png'
    }],
    ['script',{
      async,
      href:'//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    }]
  ],
  base: '/',
  port: 8086,
  serviceWorker: true,
  themeConfig: {
    defaultTheme: 'dark',
    showThemeButton: true,
    activeHeaderLinks: false,
    cover: {
      base: '/cover.jpg',
      '/Pages/': '/cover2.jpg',
      '/Daily/': '/cover3.jpg'
    },
    // displayAllHeaders: true,
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '文章归档',
        link: '/Pages/'
      },
      {
        text: '积累',
        link: '/Daily/'
      },
    ],
    footer: [{
        text: '浙ICP备19049217号',
        link: 'http://beian.miit.gov.cn'
      },
      {
        text: 'Power by VuePress',
        link: 'https://vuepress.vuejs.org/',
      },
      {
        text: 'Theme by ououe',
        link: 'https://tolking.github.io/vuepress-theme-ououe/zh/'
      }
    ],
    search: true,
    useVssue: true,
    searchMaxSuggestions: 10,
    backgroundImage: true,
    // lastUpdated: '最后更新于：',
    postTime: {
      createTime: '最早创建于',
      lastUpdated: '上次更新于'
    },
    repo: 'git@github.com:vckkk/blog.git',
    docsBranch: 'gh-pages'

  },
  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  },
  plugins: [
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'vckkk',
      repo: 'blog',
      clientId: '984053e0e793c132b63d',
      clientSecret: 'a3b10a20454f05e2089ea6b9b6551ad56afd68d6'
    }],
  ]
}
