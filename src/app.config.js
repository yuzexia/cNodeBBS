export default {
  pages: [
    'pages/index/index',
    'pages/detail/index',
    'pages/test/index',
    'pages/center/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '้ฆ้กต'
      },
      {
        pagePath: 'pages/center/index',
        text: 'ๆ็'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
