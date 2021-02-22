require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios"); 

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: '声優三姉妹【チームY】 非公式ウェブサイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit = no' },
      { hid: 'description', name: 'description', 
        content: '佐々木未来、伊藤彩沙、愛美からなる声優Youtuberグループ、声優三姉妹【チームY】の非公式ウェブサイト' 
      },
      { propaty:"og:title" , content:"声優三姉妹【チームY】非公式ウェブサイト"},
      { propaty:"og:description" , content:'佐々木未来、伊藤彩沙、愛美からなる声優Youtuberグループ、声優三姉妹【チームY】の非公式ウェブサイト' },
      { propaty:"og:type" , content: "website"},
      { propaty:"og:url" , content: "https://team-y.herokuapp.com/"},
      { propaty:"og:image" , content:'/assets/img/bgPc.png' },
      { propaty:"og:site_name" , content:"声優三姉妹【チームY】非公式ウェブサイト" },
      { propaty:"og:locale" , content:"ja_JP" },
      { name: "twitter:card", content: "summary_large_image"},
      { name: "twitter:creator", content: "@simosaomiya"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Sawarabi+Gothic&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=DM+Serif+Display:ital@1&display=swap" },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.15.2/css/all.css", integrity:"sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu",crossorigin:"anonymous" },
    ],
    script:[
      { src: "https://platform.twitter.com/widgets.js", async: true, charset: "utf-8", }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  loading: '~/components/loading.vue',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    ['bootstrap-vue/nuxt', {css:false}],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  env: { API_KEY },

  privateRuntimeConfig: {
    apiKey: API_KEY
  },
  publicRuntimeConfig: {
    apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined
  },

  // target: 'static',
  

  
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-avatar': 'src',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
    }
  },

  // generate: {
  //   routes() {
  //    const videos = axios
  //     .get("https://teamy-unofficial.microcms.io/api/v1/videos", {
  //      headers: { "X-API-KEY": process.env.API_KEY }
  //     })
  //     .then(res => {
  //      return res.data.contents.map(video => {
  //       return "/videos/" + video.slug;
  //      });
  //     });
  //    const news = axios
  //     .get("https://teamy-unofficial.microcms.io/api/v1/news", {
  //      headers: { "X-API-KEY": process.env.API_KEY }
  //     })
  //     .then(res => {
  //      return res.data.contents.map(news => {
  //       return "/news/" + news.id;
  //      });
  //     });
  //    return Promise.all([videos, news]).then(values => {
  //     return values.join().split(",");
  //    });
  //   }
  //  },
  
  //  router: {
  //   base: '/teamy/'
  // },

   
}
