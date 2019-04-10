module.exports = {
    title: 'Vckkk',
    description: 'Do what you want',
    head:[
      ['link',{rel:'icon',href:'/favicon.png'}]
    ],
    base:'/',
    port:8085,
    serviceWorker:true,
    themeConfig:{
      activeHeaderLinks: false,
      nav:[
        {text:'Home',link:'/'},
        {text:'Pages',
          items:[
            {text:'JavaScript',link:'/Pages/'},
            {text:'Flutter',link:'/Flutter/'}
          ]
        },
        {text: 'About', link: "http://www.webhbz.com"}
      ],
      sidebar: {
        '/Pages/': [
          '',
          'ES6',
          'JavaScript',
          'Reactjs',
          'demo',
          'ali'
        ],
        '/Flutter/': [
          '',
          'Dart',
          'communication',
          'routenav'
        ]
      },
      sidebarDepth: 0,
      search: true,
      searchMaxSuggestions: 10,
      lastUpdated: '最后更新于：',
      repo: 'git@github.com:vckkk/blog.git',
      docsBranch: 'gh-pages'

    }
  }