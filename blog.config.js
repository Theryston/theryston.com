const BLOG = {
  title: 'Theryston',
  author: 'Theryston Santos',
  email: 'contato@theryston.com',
  link: 'https://theryston.com',
  description: 'O blog de programação mais legalzinho do universo',
  lang: 'pt-BR',
  appearance: 'auto',
  font: 'sans-serif',
  lightBackground: '#ffffff',
  darkBackground: '#18181B',
  path: '',
  since: 2022,
  postsPerPage: 10,
  sortByDate: false,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false,
  ogImageGenerateURL: 'https://og-image-craigary.vercel.app',
  socialLink: 'https://twitter.com/_theryston_',
  seo: {
    keywords: ['Blog', 'Programming', 'Code', 'Learn', 'nodejs']
    // googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID,
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN,
  analytics: {
    provider: 'ga',
    gaConfig: {
      measurementId: 'UA-180142011-1'
    }
  },
  // comment: {
  //   // support provider: gitalk, utterances, cusdis
  //   provider: '', // leave it empty if you don't need any comment plugin
  //   gitalkConfig: {
  //     repo: '', // The repository of store comments
  //     owner: '',
  //     admin: [],
  //     clientID: '',
  //     clientSecret: '',
  //     distractionFreeMode: false
  //   },
  //   utterancesConfig: {
  //     repo: ''
  //   },
  //   cusdisConfig: {
  //     appId: '', // data-app-id
  //     host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  //     scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
  //   }
  // },
  isProd: process.env.VERCEL_ENV === 'production'
}

module.exports = BLOG
