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
        {text:'Pages',link:'/Pages/'},
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
        ]
      },
      sidebarDepth: 0,
      search: true,
      searchMaxSuggestions: 10,
      lastUpdated: '最后更新于：'
    }
  }