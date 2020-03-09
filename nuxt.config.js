
export default {
  mode: 'spa',
  env: {
    shopURL: 'https://www.chessa.co.ke/',
    shopNAME: 'Chessa Creations',
    shopID: 'chessa-creations',
    shopName: 'chessa',
    shopDescription: 'Authentic ankara wear for ladies and men.',
    shopNumber: '704233752',
    shopEmail: 'chessacreations@gmail.com',
    facebookPage: 'https://www.facebook.com/ChessaCreations/',
    twitterPage: '',
    instagramPage: ''
  },
  subdirectory: '/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Citywalk Kenya',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:image', content: 'https://scontent.fnbo3-1.fna.fbcdn.net/v/t1.0-9/49719514_1251452625004858_3587726254117224448_n.jpg?_nc_cat=111&_nc_ohc=Tw5NNMSRHPoAX9n6x9Z&_nc_ht=scontent.fnbo3-1.fna&oh=a2584b111b234451eda6a0f4e5622169&oe=5EB4C1CF' },
      { hid: 'description', name: 'description', content: 'Find a City Walk Store near you for the best value on shoes, sandals, boots, athletic shoes, and other footwear for men, women and kids!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/citycon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' }
    ],
    script: []
  },

  router: {
    base: '/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff4c3b', throttle: 200, height: '3px' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/collectchat.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/vue-scrollto.js', ssr: false },
    { src: '~/plugins/plugin.js', ssr: false },
    { src: '~/plugins/localStorage.js', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/eslint-module',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  generate: {
    fallback: true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
