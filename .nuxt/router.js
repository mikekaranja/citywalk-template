import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _555a1240 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _8b2aa0e6 = () => interopDefault(import('../pages/landing.vue' /* webpackChunkName: "pages/landing" */))
const _5254764c = () => interopDefault(import('../pages/shop/shoes/index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _e08cc244 = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _4e84d4b8 = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _7f8ff6ca = () => interopDefault(import('../pages/shop/shoes/components/about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
const _5b109975 = () => interopDefault(import('../pages/shop/shoes/components/blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
const _bf06dc78 = () => interopDefault(import('../pages/shop/shoes/components/brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
const _a18af95e = () => interopDefault(import('../pages/shop/shoes/components/category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
const _382d9031 = () => interopDefault(import('../pages/shop/shoes/components/category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
const _383ba7b2 = () => interopDefault(import('../pages/shop/shoes/components/category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
const _371c759d = () => interopDefault(import('../pages/shop/shoes/components/checkSwiper.vue' /* webpackChunkName: "pages/shop/shoes/components/checkSwiper" */))
const _3febd6c6 = () => interopDefault(import('../pages/shop/shoes/components/collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
const _5f772bd2 = () => interopDefault(import('../pages/shop/shoes/components/collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
const _6a389d74 = () => interopDefault(import('../pages/shop/shoes/components/collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
const _105525ef = () => interopDefault(import('../pages/shop/shoes/components/instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
const _0531176d = () => interopDefault(import('../pages/shop/shoes/components/productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
const _688990b2 = () => interopDefault(import('../pages/shop/shoes/components/service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
const _61b90874 = () => interopDefault(import('../pages/shop/shoes/components/slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
const _b0fd495e = () => interopDefault(import('../pages/product/categories/_name.vue' /* webpackChunkName: "pages/product/categories/_name" */))
const _2432b7dd = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _06906f70 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/checkout",
      component: _555a1240,
      name: "checkout"
    }, {
      path: "/landing",
      component: _8b2aa0e6,
      name: "landing"
    }, {
      path: "/shop/shoes",
      component: _5254764c,
      name: "shop-shoes"
    }, {
      path: "/page/account/checkout",
      component: _e08cc244,
      name: "page-account-checkout"
    }, {
      path: "/page/account/contact",
      component: _4e84d4b8,
      name: "page-account-contact"
    }, {
      path: "/shop/shoes/components/about",
      component: _7f8ff6ca,
      name: "shop-shoes-components-about"
    }, {
      path: "/shop/shoes/components/blog",
      component: _5b109975,
      name: "shop-shoes-components-blog"
    }, {
      path: "/shop/shoes/components/brand",
      component: _bf06dc78,
      name: "shop-shoes-components-brand"
    }, {
      path: "/shop/shoes/components/category",
      component: _a18af95e,
      name: "shop-shoes-components-category"
    }, {
      path: "/shop/shoes/components/category2",
      component: _382d9031,
      name: "shop-shoes-components-category2"
    }, {
      path: "/shop/shoes/components/category3",
      component: _383ba7b2,
      name: "shop-shoes-components-category3"
    }, {
      path: "/shop/shoes/components/checkSwiper",
      component: _371c759d,
      name: "shop-shoes-components-checkSwiper"
    }, {
      path: "/shop/shoes/components/collectionbanner",
      component: _3febd6c6,
      name: "shop-shoes-components-collectionbanner"
    }, {
      path: "/shop/shoes/components/collectionslider",
      component: _5f772bd2,
      name: "shop-shoes-components-collectionslider"
    }, {
      path: "/shop/shoes/components/collectiontab",
      component: _6a389d74,
      name: "shop-shoes-components-collectiontab"
    }, {
      path: "/shop/shoes/components/instagram",
      component: _105525ef,
      name: "shop-shoes-components-instagram"
    }, {
      path: "/shop/shoes/components/productSlider",
      component: _0531176d,
      name: "shop-shoes-components-productSlider"
    }, {
      path: "/shop/shoes/components/service",
      component: _688990b2,
      name: "shop-shoes-components-service"
    }, {
      path: "/shop/shoes/components/slider",
      component: _61b90874,
      name: "shop-shoes-components-slider"
    }, {
      path: "/product/categories/:name?",
      component: _b0fd495e,
      name: "product-categories-name"
    }, {
      path: "/product/sidebar/:id?",
      component: _2432b7dd,
      name: "product-sidebar-id"
    }, {
      path: "/",
      component: _06906f70,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
