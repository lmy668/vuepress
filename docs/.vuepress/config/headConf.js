module.exports = [
  ['link', { rel: 'icon', href: '/hero.png' }],
  [
    'meta',
    {
      name: 'author',
      content: '优雅的主页,bookbook,BookBook,bookbook.cc,.cc',
    },
  ],
  ['meta', { name: 'Keywords', content: 'java javascript python purl' }],
  // pwa
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: 'images/icons/icon-152x152.png' }],
  [
    'link',
    {
      rel: 'mask-icon',
      href: 'images/icons/safari-pinned-tab.svg',
      color: '#3eaf7c',
    },
  ],
  [
    'meta',
    {
      name: 'msapplication-TileImage',
      content: 'images/icons/icon-144x144.png',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
];
