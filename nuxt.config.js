export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '研发管理体系咨询,IPD体系咨询,企业管理咨询，专注于产品创新与研发管理咨询领域-中天华夏研发管理咨询公司',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { name: 'keywords', content: '' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'author', content: '深圳中天华夏企业管理咨询有限公司 www.ztchina.com.cn' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/tailwind.css',
    'swiper/dist/css/swiper.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  imgUrl: { limit: 1 },
  generate: {
    dir: 'docs',
    subFolders: false
  },
  router: {
    base: '/zt/'
  }
}
