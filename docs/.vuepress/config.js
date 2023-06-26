const headConf = require('./config/headConf.js');
const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');
const pluginsConf = require('./config/pluginConf.js');

module.exports = {
  /**
   * 如果你打算发布到 https://<USERNAME>.github.io/，则可以省略这一步，因为 base 默认即是 "/"。
如果你打算发布到 https://<USERNAME>.github.io/<REPO>/
（也就是说你的仓库在 https://github.com/<USERNAME>/<REPO>），则将 base 设置为 "/<REPO>/"。
   */
  base: '/vuepress/',
  // title: 'Hello1 VuePress1',
  // description: 'Just playing around',

  /** seo */
  title: 'vuepress 256',
  description: 'if the girl can influence your emotion， you should delete she',
  head: headConf,
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  '/': {
    lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    title: 'VuePressen-US',
    description: 'Vue-powered Static Site Generator',
  },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "VuePresszh-CN",
  //     description: "Vue 驱动的静态网站生成器",
  //   },
  // },
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: navConf,
    sidebar: sidebarConf,
    // 加下面這句，上面對象方式不生效
    // sidebar: 'auto',

    //git commit time
    // lastUpdated: 'Last Updated', // string | boolean
    lastUpdated: true, // string | boolean

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL,顯示在導航欄nav
    repo: 'lmy668/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'lmy668/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'main',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
  },

  plugins: pluginsConf,
};
