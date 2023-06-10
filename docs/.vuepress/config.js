const moment = require('moment');
module.exports = {
  // title: 'Hello1 VuePress1',
  // description: 'Just playing around',

  /** seo */
  title: 'vuepress 25',
  description: 'if the girl can influence your emotion， you should delete she',
  head: [
    ['link', { rel: 'icon', href: '/hero.png' }],
    [
      'meta',
      {
        name: 'author',
        content: '优雅的主页,bookbook,BookBook,bookbook.cc,.cc',
      },
    ],
    ['meta', { name: 'Keywords', content: 'java javascript python purl' }],
  ],
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
    //only one of the following bars can be valid
    // sidebar: [
    //   ['/about/', '關于我'],
    //   ['https://google.com', 'google link'],
    //   {
    //     title: '美麗的css', // 必要的
    //     path: '/css/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: ['/css/css-a', '/css/css-b', '/css/css-c'],
    //   },
    //   'about1',
    //   '/',
    // ],

    sidebar: {
      '/foo/': [
        '/' /* 返回根目錄 */,
        '' /* /foo/ */,
        'one' /* /foo/one.html */,
        'two' /* /foo/two.html */,
      ],
      '/bar/': [
        '' /* /bar/ */,
        'three' /* /bar/three.html */,
        'four' /* /bar/four.html */,
      ],

      // fallback 确保 fallback 侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置
      '/': [
        '' /* / */,
        'contact' /* /contact.html */,
        'about1' /* /about1.html */,
      ],
    },
    // 加下面這句，上面對象方式不生效
    // sidebar: 'auto',

    //git commit time
    // lastUpdated: 'Last Updated', // string | boolean
    lastUpdated: true, // string | boolean
  },

  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment');
          // moment.locale(lang);
          //中文
          moment.locale('zh-cn');
          //fromNow相對時間
          // return moment(timestamp).fromNow();
          return moment(timestamp).format('LLLL');
        },
      },
    ],
  ],
};
