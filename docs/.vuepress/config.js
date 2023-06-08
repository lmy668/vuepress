module.exports = {
  title: 'Hello1 VuePress1',
  description: 'Just playing around',
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   "/": {
  //     lang: "en-US", // 将会被设置为 <html> 的 lang 属性
  //     title: "VuePressen-US",
  //     description: "Vue-powered Static Site Generator",
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "VuePresszh-CN",
  //     description: "Vue 驱动的静态网站生成器",
  //   },
  // },
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'about', link: '/about1' },
      { text: 'Guide', link: '/about/' },
      { text: 'External', link: 'https://google.com', target: '_blank' },
      {
        text: 'Language',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
        ],
      },
    ],
    sidebar: [
      '/',
      // 'about1',
      // ['/about/', '關于我'],
      // ['https://google.com', 'google link'],
      {
        title: '美麗的css', // 必要的
        path: '/css/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/css/css-a', '/css/css-b', '/css/css-c'],
      },
    ],
    //加下面這句，上面對象方式不生效
    // sidebar: 'auto',
  },
};
