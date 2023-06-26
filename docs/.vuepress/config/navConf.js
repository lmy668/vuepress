module.exports = [
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
  { text: '劝学', link: '/quanxue/' },
];
