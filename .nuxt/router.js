import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b82446f4 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages_checkout" */))
const _969cf6f2 = () => interopDefault(import('..\\pages\\landing.vue' /* webpackChunkName: "pages_landing" */))
const _1621f5a0 = () => interopDefault(import('..\\pages\\shop\\shoes\\index.vue' /* webpackChunkName: "pages_shop_shoes_index" */))
const _0f408c34 = () => interopDefault(import('..\\pages\\page\\account\\checkout.vue' /* webpackChunkName: "pages_page_account_checkout" */))
const _4a5fe4a2 = () => interopDefault(import('..\\pages\\page\\account\\contact.vue' /* webpackChunkName: "pages_page_account_contact" */))
const _fbe49cf6 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\about.vue' /* webpackChunkName: "pages_shop_shoes_components_about" */))
const _52e31b5a = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\blog.vue' /* webpackChunkName: "pages_shop_shoes_components_blog" */))
const _ba0b6702 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\brand.vue' /* webpackChunkName: "pages_shop_shoes_components_brand" */))
const _d700ea94 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category.vue' /* webpackChunkName: "pages_shop_shoes_components_category" */))
const _08ed1528 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category2.vue' /* webpackChunkName: "pages_shop_shoes_components_category2" */))
const _08d0e626 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category3.vue' /* webpackChunkName: "pages_shop_shoes_components_category3" */))
const _d9d80fd0 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\checkSwiper.vue' /* webpackChunkName: "pages_shop_shoes_components_checkSwiper" */))
const _0e57e702 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionbanner.vue' /* webpackChunkName: "pages_shop_shoes_components_collectionbanner" */))
const _e4760392 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionslider.vue' /* webpackChunkName: "pages_shop_shoes_components_collectionslider" */))
const _b34d25a2 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectiontab.vue' /* webpackChunkName: "pages_shop_shoes_components_collectiontab" */))
const _589de9ac = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\instagram.vue' /* webpackChunkName: "pages_shop_shoes_components_instagram" */))
const _4151e728 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\productSlider.vue' /* webpackChunkName: "pages_shop_shoes_components_productSlider" */))
const _7af8eea6 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\service.vue' /* webpackChunkName: "pages_shop_shoes_components_service" */))
const _a21ab5ce = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\slider.vue' /* webpackChunkName: "pages_shop_shoes_components_slider" */))
const _b87ab382 = () => interopDefault(import('..\\pages\\product\\categories\\_name.vue' /* webpackChunkName: "pages_product_categories__name" */))
const _130593fd = () => interopDefault(import('..\\pages\\product\\sidebar\\_id.vue' /* webpackChunkName: "pages_product_sidebar__id" */))
const _4ac393c2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/checkout",
      component: _b82446f4,
      name: "checkout"
    }, {
      path: "/landing",
      component: _969cf6f2,
      name: "landing"
    }, {
      path: "/shop/shoes",
      component: _1621f5a0,
      name: "shop-shoes"
    }, {
      path: "/page/account/checkout",
      component: _0f408c34,
      name: "page-account-checkout"
    }, {
      path: "/page/account/contact",
      component: _4a5fe4a2,
      name: "page-account-contact"
    }, {
      path: "/shop/shoes/components/about",
      component: _fbe49cf6,
      name: "shop-shoes-components-about"
    }, {
      path: "/shop/shoes/components/blog",
      component: _52e31b5a,
      name: "shop-shoes-components-blog"
    }, {
      path: "/shop/shoes/components/brand",
      component: _ba0b6702,
      name: "shop-shoes-components-brand"
    }, {
      path: "/shop/shoes/components/category",
      component: _d700ea94,
      name: "shop-shoes-components-category"
    }, {
      path: "/shop/shoes/components/category2",
      component: _08ed1528,
      name: "shop-shoes-components-category2"
    }, {
      path: "/shop/shoes/components/category3",
      component: _08d0e626,
      name: "shop-shoes-components-category3"
    }, {
      path: "/shop/shoes/components/checkSwiper",
      component: _d9d80fd0,
      name: "shop-shoes-components-checkSwiper"
    }, {
      path: "/shop/shoes/components/collectionbanner",
      component: _0e57e702,
      name: "shop-shoes-components-collectionbanner"
    }, {
      path: "/shop/shoes/components/collectionslider",
      component: _e4760392,
      name: "shop-shoes-components-collectionslider"
    }, {
      path: "/shop/shoes/components/collectiontab",
      component: _b34d25a2,
      name: "shop-shoes-components-collectiontab"
    }, {
      path: "/shop/shoes/components/instagram",
      component: _589de9ac,
      name: "shop-shoes-components-instagram"
    }, {
      path: "/shop/shoes/components/productSlider",
      component: _4151e728,
      name: "shop-shoes-components-productSlider"
    }, {
      path: "/shop/shoes/components/service",
      component: _7af8eea6,
      name: "shop-shoes-components-service"
    }, {
      path: "/shop/shoes/components/slider",
      component: _a21ab5ce,
      name: "shop-shoes-components-slider"
    }, {
      path: "/product/categories/:name?",
      component: _b87ab382,
      name: "product-categories-name"
    }, {
      path: "/product/sidebar/:id?",
      component: _130593fd,
      name: "product-sidebar-id"
    }, {
      path: "/",
      component: _4ac393c2,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
