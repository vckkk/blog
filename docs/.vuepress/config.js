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
      nav:[
        {text:'Home',link:'/'},
        {text:'Pages',link:'/Pages/'}
      ]
    }
  }