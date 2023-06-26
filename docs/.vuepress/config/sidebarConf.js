module.exports = {
  //only one of the following bars can be valid, 要么是数组要么是对象
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
  '/': ['' /* / */, 'contact' /* /contact.html */, 'about1' /* /about1.html */],
};
