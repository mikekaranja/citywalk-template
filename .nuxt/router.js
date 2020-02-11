import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bab9696e = () => interopDefault(import('../pages/landing.vue' /* webpackChunkName: "pages/landing" */))
const _1b2d89b2 = () => interopDefault(import('../pages/product/contact.vue' /* webpackChunkName: "pages/product/contact" */))
const _06894e10 = () => interopDefault(import('../pages/shop/shoes/index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _e72dfccc = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _0e7d46f4 = () => interopDefault(import('../pages/shop/shoes/components/about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
const _6f7d8c39 = () => interopDefault(import('../pages/shop/shoes/components/blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
const _19adf780 = () => interopDefault(import('../pages/shop/shoes/components/brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
const _0aa87415 = () => interopDefault(import('../pages/shop/shoes/components/category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
const _4a7db7ed = () => interopDefault(import('../pages/shop/shoes/components/category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
const _4a8bcf6e = () => interopDefault(import('../pages/shop/shoes/components/category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
const _13fcc34e = () => interopDefault(import('../pages/shop/shoes/components/checkSwiper.vue' /* webpackChunkName: "pages/shop/shoes/components/checkSwiper" */))
const _2aed0161 = () => interopDefault(import('../pages/shop/shoes/components/collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
const _ab4bced4 = () => interopDefault(import('../pages/shop/shoes/components/collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
const _04768730 = () => interopDefault(import('../pages/shop/shoes/components/collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
const _22a54dab = () => interopDefault(import('../pages/shop/shoes/components/instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
const _c121fdae = () => interopDefault(import('../pages/shop/shoes/components/productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
const _5af8776e = () => interopDefault(import('../pages/shop/shoes/components/service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
const _0eb45a38 = () => interopDefault(import('../pages/shop/shoes/components/slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
const _3557a1d6 = () => interopDefault(import('../pages/product/categories/_name.vue' /* webpackChunkName: "pages/product/categories/_name" */))
const _14d8ccce = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _4c9c2304 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/landing",
      component: _bab9696e,
      name: "landing"
    }, {
      path: "/product/contact",
      component: _1b2d89b2,
      name: "product-contact"
    }, {
      path: "/shop/shoes",
      component: _06894e10,
      name: "shop-shoes"
    }, {
      path: "/page/account/checkout",
      component: _e72dfccc,
      name: "page-account-checkout"
    }, {
      path: "/shop/shoes/components/about",
      component: _0e7d46f4,
      name: "shop-shoes-components-about"
    }, {
      path: "/shop/shoes/components/blog",
      component: _6f7d8c39,
      name: "shop-shoes-components-blog"
    }, {
      path: "/shop/shoes/components/brand",
      component: _19adf780,
      name: "shop-shoes-components-brand"
    }, {
      path: "/shop/shoes/components/category",
      component: _0aa87415,
      name: "shop-shoes-components-category"
    }, {
      path: "/shop/shoes/components/category2",
      component: _4a7db7ed,
      name: "shop-shoes-components-category2"
    }, {
      path: "/shop/shoes/components/category3",
      component: _4a8bcf6e,
      name: "shop-shoes-components-category3"
    }, {
      path: "/shop/shoes/components/checkSwiper",
      component: _13fcc34e,
      name: "shop-shoes-components-checkSwiper"
    }, {
      path: "/shop/shoes/components/collectionbanner",
      component: _2aed0161,
      name: "shop-shoes-components-collectionbanner"
    }, {
      path: "/shop/shoes/components/collectionslider",
      component: _ab4bced4,
      name: "shop-shoes-components-collectionslider"
    }, {
      path: "/shop/shoes/components/collectiontab",
      component: _04768730,
      name: "shop-shoes-components-collectiontab"
    }, {
      path: "/shop/shoes/components/instagram",
      component: _22a54dab,
      name: "shop-shoes-components-instagram"
    }, {
      path: "/shop/shoes/components/productSlider",
      component: _c121fdae,
      name: "shop-shoes-components-productSlider"
    }, {
      path: "/shop/shoes/components/service",
      component: _5af8776e,
      name: "shop-shoes-components-service"
    }, {
      path: "/shop/shoes/components/slider",
      component: _0eb45a38,
      name: "shop-shoes-components-slider"
    }, {
      path: "/product/categories/:name?",
      component: _3557a1d6,
      name: "product-categories-name"
    }, {
      path: "/product/sidebar/:id?",
      component: _14d8ccce,
      name: "product-sidebar-id"
    }, {
      path: "/",
      component: _4c9c2304,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
