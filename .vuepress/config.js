module.exports = {
  "title": "Kian_",
  "description": "record something",
  "dest": "public",
  "head": [
    // ["script", { src: "https://cdn.jsdelivr.net/npm/bbtalk@0.1.5/dist/bbtalk.min.js" }],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌴</text></svg>' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'google-site-verification', content: 'NArLfFpk5oX0iEsmzxlFGCk6iyFH9MOmyTxk5k_rrno' }]
  ],
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/register-components': {
      componentsDir: './components'
    },
    '@vuepress-reco/extract-code': {

    },
    // 'ribbon': {
    //   size: 90, // width of the ribbon, default: 90
    //   opacity: 0.8, // opacity of the ribbon, default: 0.3
    //   zIndex: -1, // z-index property of the background, default: -1
    // }
  },
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Comment",
        "link": "/comments/",
        "icon": "reco-message"
      },
      // {
      //   "text": "Talk",
      //   "link": "/talk/",
      //   "icon": "reco-three"
      // },
      {
        "text": "About Me",
        "link": "/about/",
        "icon": "reco-account"
      },
    ],
    "sidebar": {
      "/docs/leetcode/": [
        {
          title: 'leetCode系列',
          collapsable: true,
          path: "/docs/leetcode/",
          children: [
            "find-the-difference",
            "climbing-stairs",
            "binary-search",
            "same-tree",
            "binary-tree-preorder-traversal"
            // "one",
            // "two",
            // "three"
          ]
        }
      ]
    },
    valineConfig: {
      showComment: false,
      appId: 'mwIruueiGynyrjgdrhV2jd6U-gzGzoHsz',// your appId
      appKey: 'EUjpEnScd7w04KsQvqAYn0S7', // your appKey
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      // "tag": {
      //   "location": 3,
      //   "text": "Tag"
      // }
    },
    // "logo": "/avatar.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Kian_",
    // "authorAvatar": "/avatar.jpg",
    // "record": "xxxx",
    "startYear": "2017",

    nextLinks: true,
    prevLinks: true,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // "repo": 'Kian-404/record',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    "repoLabel": 'GitHub',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    "docsRepo": 'Kian-404/record',
    // 假如文档不是放在仓库的根目录下：
    "docsDir": '',
    // 假如文档放在一个特定的分支下：
    "docsBranch": 'main',
    // 默认是 false, 设置为 true 来启用
    "editLinks": true,
    // 默认为 "Edit this page"
    "editLinkText": 'Edit this page'
  },
  "markdown": {
    "lineNumbers": true
  },

}