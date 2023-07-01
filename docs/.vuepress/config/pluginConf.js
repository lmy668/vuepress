const moment = require('moment');
module.exports = {
  //babel式
  // [
  //   '@vuepress/last-updated',
  //   {
  //     transformer: (timestamp, lang) => {
  //       // 不要忘了安装 moment
  //       const moment = require('moment');
  //       // moment.locale(lang);
  //       //中文
  //       moment.locale('zh-cn');
  //       //fromNow相對時間
  //       // return moment(timestamp).fromNow();
  //       return moment(timestamp).format('LLLL');
  //     },
  //   },
  // ],
  // [
  //   '@vuepress/pwa',
  //   {
  //     serviceWorker: true,
  //     updatePopup: {
  //       // message: '发现新内容可用',
  //       // buttonText: '刷新',
  //       '/': {
  //         message: 'New content is available.',
  //         buttonText: 'Refresh',
  //       },
  //       // '/zh/': {
  //       //   message: '发现新内容可用',
  //       //   buttonText: '刷新',
  //       // },
  //     },
  //   },
  // ],
  '@vuepress/last-updated': {
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
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      // message: '发现新内容可用',
      // buttonText: '刷新',
      '/': {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
      // '/zh/': {
      //   message: '发现新内容可用',
      //   buttonText: '刷新',
      // },
    },
  },
  '@vuepress/google-analytics': {
    ga: 'UA-274781547-1',
  },
  '@vuepress/back-to-top': true,
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'lmy668',
    repo: 'vuepress',
    clientId: 'aa8f6d061a72ae2f082b',
    //github OAuth Apps
    clientSecret: 'f5cda3db655fe9003948649589ffd1a7b3dde912',
    autoCreateIssue: true,
  },
  '@vuepress/medium-zoom': {
    selector: 'img.zoom',
    // medium-zoom options here
    // See: https://github.com/francoischalifour/medium-zoom#options
    options: {
      margin: 0,
      background: '#BADA55',
      //图片放大后允许上下滚动的偏移量，超过偏移量会自动退出
      scrollOffset: 10000,
      // container: '#zoom-container',
      // template: '#zoom-template',
    },
  },
};
