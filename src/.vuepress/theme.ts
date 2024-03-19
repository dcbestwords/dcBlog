import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar.js';
import sidebar from './sidebar.js';

export default hopeTheme({
  hostname: 'https://dcbestwords.gitee.io/',

  author: {
    name: 'Dachao',
    email: 'wyc168hard@163.com',
  },

  // iconAssets: 'iconfont', //字体图标资源链接
  iconAssets: ['iconfont', '//at.alicdn.com/t/c/font_4472470_m8s2vpe3bb9.css'],
  iconPrefix: 'iconfont icon-',

  logo: '/logo.png', // 博主头像

  repo: 'vuepress-theme-hope/vuepress-theme-hope',

  docsDir: 'src',

  // 导航栏
  navbar,
  navbarLayout: {
    start: ['Brand'],
    center: ['Links'],
    end: ['Language', 'Repo', 'Outlook', 'Search'],
  },

  // 侧边栏
  sidebar,

  // 页脚
  footer: '默认页脚',
  displayFooter: true,

  // 博客相关
  blog: {
    description: '努力做个好韭菜',
    intro: '/intro.html', // 个人介绍地址
    avatar: '/assets/images/avator.gif',
    roundAvatar: true,
    medias: {
      //博主的媒体链接配置
      BiliBili: 'https://space.bilibili.com/102455608',
      Email: 'mailto:wyc168hard@163.com',
      Gitee: 'https://gitee.com/dcbestwords/dcblog',
      GitHub: 'https://github.com/dcbestwords',
    },
  },

  // 加密配置
  encrypt: {
    config: {
      '/demo/encrypt.html': ['dachao'],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: '在 GitHub 上编辑此页',
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    searchPro: true,

    // 在启用之前需要安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务器，在生产环境中请自行部署并使用自己的服务器！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ['Badge', 'VPCard'],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true, //对齐
      attrs: true, // 自定义属性支持
      codetabs: true,
      component: true, //组件支持
      demo: true, // 代码案例支持
      figure: true, //图片 Figure 支持
      imgLazyload: true,
      imgSize: true, // 图片尺寸支持
      include: true,
      mark: true, // 标记格式支持
      stylize: [
        // 对行内语法进行样式化以创建代码片段
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true, // 下角标格式支持
      sup: true,
      tabs: true,
      vPre: true, //启用 v-pre 容器

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/assets/icon/apple-icon-152.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/assets/icon/ms-icon-144.png',
        color: '#ffffff',
      },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: 'Demo',
            short_name: 'Demo',
            url: '/demo/',
            icons: [
              {
                src: '/assets/icon/guide-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },
  },
});
