import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bab9696e = () => interopDefault(import('../pages/landing.vue' /* webpackChunkName: "pages/landing" */))
const _071ba02d = () => interopDefault(import('../pages/blog/blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _42d42a49 = () => interopDefault(import('../pages/blog/blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _9d0e7962 = () => interopDefault(import('../pages/blog/blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _4d9871c8 = () => interopDefault(import('../pages/blog/blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _948d086a = () => interopDefault(import('../pages/collection/full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _7645f581 = () => interopDefault(import('../pages/collection/list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _04ccec26 = () => interopDefault(import('../pages/collection/metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _7210c613 = () => interopDefault(import('../pages/collection/no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _0a6a35b8 = () => interopDefault(import('../pages/collection/right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _b56d57f0 = () => interopDefault(import('../pages/collection/sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _93342358 = () => interopDefault(import('../pages/collection/six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _b587eb50 = () => interopDefault(import('../pages/collection/three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _580a7d14 = () => interopDefault(import('../pages/page/404.vue' /* webpackChunkName: "pages/page/404" */))
const _7763d06a = () => interopDefault(import('../pages/page/about.vue' /* webpackChunkName: "pages/page/about" */))
const _121939d0 = () => interopDefault(import('../pages/page/collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _0a971f85 = () => interopDefault(import('../pages/page/coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _7feb6454 = () => interopDefault(import('../pages/page/faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _695f7eba = () => interopDefault(import('../pages/page/lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _3f66d17c = () => interopDefault(import('../pages/page/order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _01cb728a = () => interopDefault(import('../pages/page/review.vue' /* webpackChunkName: "pages/page/review" */))
const _487738da = () => interopDefault(import('../pages/page/search.vue' /* webpackChunkName: "pages/page/search" */))
const _eb8b603e = () => interopDefault(import('../pages/page/typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _bc8c61fc = () => interopDefault(import('../pages/product/bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _466bdd5c = () => interopDefault(import('../pages/product/four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _7a3c8719 = () => interopDefault(import('../pages/shop/bags/index.vue' /* webpackChunkName: "pages/shop/bags/index" */))
const _3ca62fac = () => interopDefault(import('../pages/shop/beauty/index.vue' /* webpackChunkName: "pages/shop/beauty/index" */))
const _1dfa3bc3 = () => interopDefault(import('../pages/shop/electronics-1/index.vue' /* webpackChunkName: "pages/shop/electronics-1/index" */))
const _febb54c0 = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _7ee5c3c5 = () => interopDefault(import('../pages/shop/fashion-2/index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
const _13ca7686 = () => interopDefault(import('../pages/shop/fashion-3/index.vue' /* webpackChunkName: "pages/shop/fashion-3/index" */))
const _e31c716e = () => interopDefault(import('../pages/shop/flower/index.vue' /* webpackChunkName: "pages/shop/flower/index" */))
const _7e68101a = () => interopDefault(import('../pages/shop/furniture/index.vue' /* webpackChunkName: "pages/shop/furniture/index" */))
const _7dd15f3a = () => interopDefault(import('../pages/shop/gym/index.vue' /* webpackChunkName: "pages/shop/gym/index" */))
const _6d1501aa = () => interopDefault(import('../pages/shop/jewellery/index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
const _6fe83cca = () => interopDefault(import('../pages/shop/kids/index.vue' /* webpackChunkName: "pages/shop/kids/index" */))
const _1b21e4bc = () => interopDefault(import('../pages/shop/pets/index.vue' /* webpackChunkName: "pages/shop/pets/index" */))
const _06894e10 = () => interopDefault(import('../pages/shop/shoes/index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _795e7d7a = () => interopDefault(import('../pages/shop/tools/index.vue' /* webpackChunkName: "pages/shop/tools/index" */))
const _5d787720 = () => interopDefault(import('../pages/shop/vegetables/index.vue' /* webpackChunkName: "pages/shop/vegetables/index" */))
const _743e9b37 = () => interopDefault(import('../pages/shop/watch/index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _53b0f69a = () => interopDefault(import('../pages/blog/widgets/blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _2522d310 = () => interopDefault(import('../pages/blog/widgets/blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _00fd7074 = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _e72dfccc = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _ad7fab08 = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _4a59b5f0 = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _32fed952 = () => interopDefault(import('../pages/page/account/forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _a3b76b76 = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _289228bf = () => interopDefault(import('../pages/page/account/login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _9d30b8f6 = () => interopDefault(import('../pages/page/account/profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _61202712 = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _239b1299 = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _bbded246 = () => interopDefault(import('../pages/page/compare/compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _bbc2a344 = () => interopDefault(import('../pages/page/compare/compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _1d827351 = () => interopDefault(import('../pages/page/element/banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _124e6e3a = () => interopDefault(import('../pages/page/element/category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _0bb7c8a6 = () => interopDefault(import('../pages/page/element/collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _d77a5d8c = () => interopDefault(import('../pages/page/element/home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _9ce26e24 = () => interopDefault(import('../pages/page/element/logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _5e87944c = () => interopDefault(import('../pages/page/element/multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _f7bd9db8 = () => interopDefault(import('../pages/page/element/product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _3435e401 = () => interopDefault(import('../pages/page/element/product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _d7b95e40 = () => interopDefault(import('../pages/page/element/service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _0bd5d70d = () => interopDefault(import('../pages/page/portfolio/masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _74b75661 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _74c56de2 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _74d38563 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _09e5bdd2 = () => interopDefault(import('../pages/page/portfolio/portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _e15cdfd0 = () => interopDefault(import('../pages/page/portfolio/portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _2395ff19 = () => interopDefault(import('../pages/page/portfolio/portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _5c86f47e = () => interopDefault(import('../pages/product/sidebar/no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _5e012f4a = () => interopDefault(import('../pages/product/sidebar/right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _904bf8b0 = () => interopDefault(import('../pages/product/three-column/thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _6d5090c4 = () => interopDefault(import('../pages/product/three-column/thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _7a06a1af = () => interopDefault(import('../pages/product/three-column/thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _55171a30 = () => interopDefault(import('../pages/product/thumbnail-image/image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _49272730 = () => interopDefault(import('../pages/product/thumbnail-image/left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _278a1f27 = () => interopDefault(import('../pages/product/thumbnail-image/right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _050222a4 = () => interopDefault(import('../pages/page/account/auth/auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _c4ef92e8 = () => interopDefault(import('../pages/shop/bags/components/banner.vue' /* webpackChunkName: "pages/shop/bags/components/banner" */))
const _4747ce02 = () => interopDefault(import('../pages/shop/bags/components/blog.vue' /* webpackChunkName: "pages/shop/bags/components/blog" */))
const _e70aad44 = () => interopDefault(import('../pages/shop/bags/components/category.vue' /* webpackChunkName: "pages/shop/bags/components/category" */))
const _02f22bc4 = () => interopDefault(import('../pages/shop/bags/components/category2.vue' /* webpackChunkName: "pages/shop/bags/components/category2" */))
const _083eeb27 = () => interopDefault(import('../pages/shop/bags/components/categorytab.vue' /* webpackChunkName: "pages/shop/bags/components/categorytab" */))
const _49cc7cfc = () => interopDefault(import('../pages/shop/bags/components/instagram.vue' /* webpackChunkName: "pages/shop/bags/components/instagram" */))
const _568d95de = () => interopDefault(import('../pages/shop/bags/components/productcategoryslider.vue' /* webpackChunkName: "pages/shop/bags/components/productcategoryslider" */))
const _31145540 = () => interopDefault(import('../pages/shop/bags/components/productslider.vue' /* webpackChunkName: "pages/shop/bags/components/productslider" */))
const _ecd76684 = () => interopDefault(import('../pages/shop/bags/components/services.vue' /* webpackChunkName: "pages/shop/bags/components/services" */))
const _1cf54dc1 = () => interopDefault(import('../pages/shop/bags/components/slider.vue' /* webpackChunkName: "pages/shop/bags/components/slider" */))
const _7f444e2c = () => interopDefault(import('../pages/shop/beauty/components/about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))
const _a4ba645a = () => interopDefault(import('../pages/shop/beauty/components/blog.vue' /* webpackChunkName: "pages/shop/beauty/components/blog" */))
const _352a075e = () => interopDefault(import('../pages/shop/beauty/components/instagram.vue' /* webpackChunkName: "pages/shop/beauty/components/instagram" */))
const _d3d09020 = () => interopDefault(import('../pages/shop/beauty/components/product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/product-slider" */))
const _588f9d52 = () => interopDefault(import('../pages/shop/beauty/components/slider.vue' /* webpackChunkName: "pages/shop/beauty/components/slider" */))
const _01915ee8 = () => interopDefault(import('../pages/shop/beauty/components/top-product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/top-product-slider" */))
const _ba145f3e = () => interopDefault(import('../pages/shop/beauty/components/video-tutorial.vue' /* webpackChunkName: "pages/shop/beauty/components/video-tutorial" */))
const _49724f5a = () => interopDefault(import('../pages/shop/electronics-1/components/collection_banner.vue' /* webpackChunkName: "pages/shop/electronics-1/components/collection_banner" */))
const _034ea9aa = () => interopDefault(import('../pages/shop/electronics-1/components/product_tab.vue' /* webpackChunkName: "pages/shop/electronics-1/components/product_tab" */))
const _de71592a = () => interopDefault(import('../pages/shop/electronics-1/components/slider.vue' /* webpackChunkName: "pages/shop/electronics-1/components/slider" */))
const _3b805d90 = () => interopDefault(import('../pages/shop/fashion-2/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
const _3dd1c4ac = () => interopDefault(import('../pages/shop/fashion-2/components/collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
const _593a845f = () => interopDefault(import('../pages/shop/fashion-2/components/collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
const _e55bd154 = () => interopDefault(import('../pages/shop/fashion-2/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
const _fdcbedda = () => interopDefault(import('../pages/shop/fashion-2/components/product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
const _61ace86d = () => interopDefault(import('../pages/shop/fashion-2/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
const _2c716a79 = () => interopDefault(import('../pages/shop/fashion-3/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-3/components/banner" */))
const _0b8569fe = () => interopDefault(import('../pages/shop/fashion-3/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_slider" */))
const _2ae2eec8 = () => interopDefault(import('../pages/shop/fashion-3/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_tab" */))
const _a842fca4 = () => interopDefault(import('../pages/shop/fashion-3/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/slider" */))
const _6ac17293 = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _4043406e = () => interopDefault(import('../pages/shop/fashion/components/blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _a02a1454 = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _1aeb97ca = () => interopDefault(import('../pages/shop/fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _b7bc26c4 = () => interopDefault(import('../pages/shop/fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _2c40b818 = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _31b5e6ee = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _2522b9f6 = () => interopDefault(import('../pages/shop/fashion/components/services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _2ba2ec70 = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _74ce9232 = () => interopDefault(import('../pages/shop/flower/components/blog.vue' /* webpackChunkName: "pages/shop/flower/components/blog" */))
const _3cca0338 = () => interopDefault(import('../pages/shop/flower/components/category_tab.vue' /* webpackChunkName: "pages/shop/flower/components/category_tab" */))
const _d35893e6 = () => interopDefault(import('../pages/shop/flower/components/collection_banner.vue' /* webpackChunkName: "pages/shop/flower/components/collection_banner" */))
const _0dd3c95c = () => interopDefault(import('../pages/shop/flower/components/instagram.vue' /* webpackChunkName: "pages/shop/flower/components/instagram" */))
const _11e7bb41 = () => interopDefault(import('../pages/shop/flower/components/product_slider.vue' /* webpackChunkName: "pages/shop/flower/components/product_slider" */))
const _50bd78ee = () => interopDefault(import('../pages/shop/flower/components/services.vue' /* webpackChunkName: "pages/shop/flower/components/services" */))
const _03dbc5f1 = () => interopDefault(import('../pages/shop/flower/components/slider.vue' /* webpackChunkName: "pages/shop/flower/components/slider" */))
const _30a0459e = () => interopDefault(import('../pages/shop/flower/components/top_products.vue' /* webpackChunkName: "pages/shop/flower/components/top_products" */))
const _4a40c9c3 = () => interopDefault(import('../pages/shop/furniture/components/blog.vue' /* webpackChunkName: "pages/shop/furniture/components/blog" */))
const _58add616 = () => interopDefault(import('../pages/shop/furniture/components/category_tab.vue' /* webpackChunkName: "pages/shop/furniture/components/category_tab" */))
const _3f12121c = () => interopDefault(import('../pages/shop/furniture/components/collection_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/collection_banner" */))
const _7e434743 = () => interopDefault(import('../pages/shop/furniture/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/parallax_banner" */))
const _459e5d42 = () => interopDefault(import('../pages/shop/furniture/components/slider.vue' /* webpackChunkName: "pages/shop/furniture/components/slider" */))
const _3fd1fa68 = () => interopDefault(import('../pages/shop/gym/components/blog.vue' /* webpackChunkName: "pages/shop/gym/components/blog" */))
const _d9fcb3fe = () => interopDefault(import('../pages/shop/gym/components/collection-banner.vue' /* webpackChunkName: "pages/shop/gym/components/collection-banner" */))
const _ff440a10 = () => interopDefault(import('../pages/shop/gym/components/instagram.vue' /* webpackChunkName: "pages/shop/gym/components/instagram" */))
const _1116f2ee = () => interopDefault(import('../pages/shop/gym/components/logo-slider.vue' /* webpackChunkName: "pages/shop/gym/components/logo-slider" */))
const _3040c6e6 = () => interopDefault(import('../pages/shop/gym/components/product-list.vue' /* webpackChunkName: "pages/shop/gym/components/product-list" */))
const _826b0fea = () => interopDefault(import('../pages/shop/gym/components/slider.vue' /* webpackChunkName: "pages/shop/gym/components/slider" */))
const _1a386680 = () => interopDefault(import('../pages/shop/gym/components/top-collection.vue' /* webpackChunkName: "pages/shop/gym/components/top-collection" */))
const _8be1cc20 = () => interopDefault(import('../pages/shop/jewellery/components/category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
const _60136330 = () => interopDefault(import('../pages/shop/jewellery/components/instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
const _6377b320 = () => interopDefault(import('../pages/shop/jewellery/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
const _0f47c471 = () => interopDefault(import('../pages/shop/jewellery/components/product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
const _17b4e135 = () => interopDefault(import('../pages/shop/jewellery/components/product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
const _91ae8560 = () => interopDefault(import('../pages/shop/jewellery/components/services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
const _0bb0bad3 = () => interopDefault(import('../pages/shop/jewellery/components/slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
const _107c1f7b = () => interopDefault(import('../pages/shop/kids/components/collection_banner.vue' /* webpackChunkName: "pages/shop/kids/components/collection_banner" */))
const _e02d92a0 = () => interopDefault(import('../pages/shop/kids/components/collection_slider.vue' /* webpackChunkName: "pages/shop/kids/components/collection_slider" */))
const _297dd2c0 = () => interopDefault(import('../pages/shop/kids/components/instagram.vue' /* webpackChunkName: "pages/shop/kids/components/instagram" */))
const _26af13fa = () => interopDefault(import('../pages/shop/kids/components/logo_slider.vue' /* webpackChunkName: "pages/shop/kids/components/logo_slider" */))
const _c181bf3c = () => interopDefault(import('../pages/shop/kids/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/kids/components/parallax_banner" */))
const _0c6f7893 = () => interopDefault(import('../pages/shop/kids/components/product_slider.vue' /* webpackChunkName: "pages/shop/kids/components/product_slider" */))
const _5b16f543 = () => interopDefault(import('../pages/shop/kids/components/slider.vue' /* webpackChunkName: "pages/shop/kids/components/slider" */))
const _0cee7d4b = () => interopDefault(import('../pages/shop/pets/components/blog.vue' /* webpackChunkName: "pages/shop/pets/components/blog" */))
const _0ab11c3c = () => interopDefault(import('../pages/shop/pets/components/collection-banner.vue' /* webpackChunkName: "pages/shop/pets/components/collection-banner" */))
const _5a55e1ac = () => interopDefault(import('../pages/shop/pets/components/logo-slider.vue' /* webpackChunkName: "pages/shop/pets/components/logo-slider" */))
const _75cca509 = () => interopDefault(import('../pages/shop/pets/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/pets/components/parallax-banner" */))
const _95ef1d30 = () => interopDefault(import('../pages/shop/pets/components/product-slider.vue' /* webpackChunkName: "pages/shop/pets/components/product-slider" */))
const _13ad4eca = () => interopDefault(import('../pages/shop/pets/components/slider.vue' /* webpackChunkName: "pages/shop/pets/components/slider" */))
const _199f747f = () => interopDefault(import('../pages/shop/pets/components/top-collection.vue' /* webpackChunkName: "pages/shop/pets/components/top-collection" */))
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
const _c170091a = () => interopDefault(import('../pages/shop/tools/components/about.vue' /* webpackChunkName: "pages/shop/tools/components/about" */))
const _52be5bf0 = () => interopDefault(import('../pages/shop/tools/components/category.vue' /* webpackChunkName: "pages/shop/tools/components/category" */))
const _7599db5b = () => interopDefault(import('../pages/shop/tools/components/logo_slider.vue' /* webpackChunkName: "pages/shop/tools/components/logo_slider" */))
const _2b450a89 = () => interopDefault(import('../pages/shop/tools/components/product-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-slider" */))
const _05184fc1 = () => interopDefault(import('../pages/shop/tools/components/product-tab-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-tab-slider" */))
const _74698217 = () => interopDefault(import('../pages/shop/tools/components/select-vehical.vue' /* webpackChunkName: "pages/shop/tools/components/select-vehical" */))
const _7a530f1b = () => interopDefault(import('../pages/shop/tools/components/service.vue' /* webpackChunkName: "pages/shop/tools/components/service" */))
const _390198eb = () => interopDefault(import('../pages/shop/tools/components/slider.vue' /* webpackChunkName: "pages/shop/tools/components/slider" */))
const _481d57da = () => interopDefault(import('../pages/shop/vegetables/components/banner.vue' /* webpackChunkName: "pages/shop/vegetables/components/banner" */))
const _1698a149 = () => interopDefault(import('../pages/shop/vegetables/components/blog.vue' /* webpackChunkName: "pages/shop/vegetables/components/blog" */))
const _46371998 = () => interopDefault(import('../pages/shop/vegetables/components/product_slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/product_slider" */))
const _5ba7b6f6 = () => interopDefault(import('../pages/shop/vegetables/components/services.vue' /* webpackChunkName: "pages/shop/vegetables/components/services" */))
const _5b5e6b48 = () => interopDefault(import('../pages/shop/vegetables/components/slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/slider" */))
const _584dd151 = () => interopDefault(import('../pages/shop/vegetables/components/special_products.vue' /* webpackChunkName: "pages/shop/vegetables/components/special_products" */))
const _778dd4a0 = () => interopDefault(import('../pages/shop/watch/components/blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _f1ff9e08 = () => interopDefault(import('../pages/shop/watch/components/category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _ab32b90c = () => interopDefault(import('../pages/shop/watch/components/categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _093fa2db = () => interopDefault(import('../pages/shop/watch/components/collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _31452da4 = () => interopDefault(import('../pages/shop/watch/components/instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _2004a7e7 = () => interopDefault(import('../pages/shop/watch/components/logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _3b7d67a2 = () => interopDefault(import('../pages/shop/watch/components/product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _f7cc5748 = () => interopDefault(import('../pages/shop/watch/components/services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _53d424df = () => interopDefault(import('../pages/shop/watch/components/slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _67b10a64 = () => interopDefault(import('../pages/shop/watch/components/timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _5e653a0c = () => interopDefault(import('../pages/shop/watch/components/top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _6a1d276d = () => interopDefault(import('../pages/collection/leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
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
      path: "/blog/blog-detail",
      component: _071ba02d,
      name: "blog-blog-detail"
    }, {
      path: "/blog/blog-leftsidebar",
      component: _42d42a49,
      name: "blog-blog-leftsidebar"
    }, {
      path: "/blog/blog-nosidebar",
      component: _9d0e7962,
      name: "blog-blog-nosidebar"
    }, {
      path: "/blog/blog-rightsidebar",
      component: _4d9871c8,
      name: "blog-blog-rightsidebar"
    }, {
      path: "/collection/full-width",
      component: _948d086a,
      name: "collection-full-width"
    }, {
      path: "/collection/list-view",
      component: _7645f581,
      name: "collection-list-view"
    }, {
      path: "/collection/metro",
      component: _04ccec26,
      name: "collection-metro"
    }, {
      path: "/collection/no-sidebar",
      component: _7210c613,
      name: "collection-no-sidebar"
    }, {
      path: "/collection/right-sidebar",
      component: _0a6a35b8,
      name: "collection-right-sidebar"
    }, {
      path: "/collection/sidebar-popup",
      component: _b56d57f0,
      name: "collection-sidebar-popup"
    }, {
      path: "/collection/six-grid",
      component: _93342358,
      name: "collection-six-grid"
    }, {
      path: "/collection/three-grid",
      component: _b587eb50,
      name: "collection-three-grid"
    }, {
      path: "/page/404",
      component: _580a7d14,
      name: "page-404"
    }, {
      path: "/page/about",
      component: _7763d06a,
      name: "page-about"
    }, {
      path: "/page/collection",
      component: _121939d0,
      name: "page-collection"
    }, {
      path: "/page/coming-soon",
      component: _0a971f85,
      name: "page-coming-soon"
    }, {
      path: "/page/faq",
      component: _7feb6454,
      name: "page-faq"
    }, {
      path: "/page/lookbook",
      component: _695f7eba,
      name: "page-lookbook"
    }, {
      path: "/page/order-success",
      component: _3f66d17c,
      name: "page-order-success"
    }, {
      path: "/page/review",
      component: _01cb728a,
      name: "page-review"
    }, {
      path: "/page/search",
      component: _487738da,
      name: "page-search"
    }, {
      path: "/page/typography",
      component: _eb8b603e,
      name: "page-typography"
    }, {
      path: "/product/bundle-product",
      component: _bc8c61fc,
      name: "product-bundle-product"
    }, {
      path: "/product/four-image",
      component: _466bdd5c,
      name: "product-four-image"
    }, {
      path: "/shop/bags",
      component: _7a3c8719,
      name: "shop-bags"
    }, {
      path: "/shop/beauty",
      component: _3ca62fac,
      name: "shop-beauty"
    }, {
      path: "/shop/electronics-1",
      component: _1dfa3bc3,
      name: "shop-electronics-1"
    }, {
      path: "/shop/fashion",
      component: _febb54c0,
      name: "shop-fashion"
    }, {
      path: "/shop/fashion-2",
      component: _7ee5c3c5,
      name: "shop-fashion-2"
    }, {
      path: "/shop/fashion-3",
      component: _13ca7686,
      name: "shop-fashion-3"
    }, {
      path: "/shop/flower",
      component: _e31c716e,
      name: "shop-flower"
    }, {
      path: "/shop/furniture",
      component: _7e68101a,
      name: "shop-furniture"
    }, {
      path: "/shop/gym",
      component: _7dd15f3a,
      name: "shop-gym"
    }, {
      path: "/shop/jewellery",
      component: _6d1501aa,
      name: "shop-jewellery"
    }, {
      path: "/shop/kids",
      component: _6fe83cca,
      name: "shop-kids"
    }, {
      path: "/shop/pets",
      component: _1b21e4bc,
      name: "shop-pets"
    }, {
      path: "/shop/shoes",
      component: _06894e10,
      name: "shop-shoes"
    }, {
      path: "/shop/tools",
      component: _795e7d7a,
      name: "shop-tools"
    }, {
      path: "/shop/vegetables",
      component: _5d787720,
      name: "shop-vegetables"
    }, {
      path: "/shop/watch",
      component: _743e9b37,
      name: "shop-watch"
    }, {
      path: "/blog/widgets/blog-list",
      component: _53b0f69a,
      name: "blog-widgets-blog-list"
    }, {
      path: "/blog/widgets/blog-sidebar",
      component: _2522d310,
      name: "blog-widgets-blog-sidebar"
    }, {
      path: "/page/account/cart",
      component: _00fd7074,
      name: "page-account-cart"
    }, {
      path: "/page/account/checkout",
      component: _e72dfccc,
      name: "page-account-checkout"
    }, {
      path: "/page/account/contact",
      component: _ad7fab08,
      name: "page-account-contact"
    }, {
      path: "/page/account/dashboard",
      component: _4a59b5f0,
      name: "page-account-dashboard"
    }, {
      path: "/page/account/forget-password",
      component: _32fed952,
      name: "page-account-forget-password"
    }, {
      path: "/page/account/login",
      component: _a3b76b76,
      name: "page-account-login"
    }, {
      path: "/page/account/login-firebase",
      component: _289228bf,
      name: "page-account-login-firebase"
    }, {
      path: "/page/account/profile",
      component: _9d30b8f6,
      name: "page-account-profile"
    }, {
      path: "/page/account/register",
      component: _61202712,
      name: "page-account-register"
    }, {
      path: "/page/account/wishlist",
      component: _239b1299,
      name: "page-account-wishlist"
    }, {
      path: "/page/compare/compare-1",
      component: _bbded246,
      name: "page-compare-compare-1"
    }, {
      path: "/page/compare/compare-2",
      component: _bbc2a344,
      name: "page-compare-compare-2"
    }, {
      path: "/page/element/banner",
      component: _1d827351,
      name: "page-element-banner"
    }, {
      path: "/page/element/category",
      component: _124e6e3a,
      name: "page-element-category"
    }, {
      path: "/page/element/collection-banner",
      component: _0bb7c8a6,
      name: "page-element-collection-banner"
    }, {
      path: "/page/element/home-slider",
      component: _d77a5d8c,
      name: "page-element-home-slider"
    }, {
      path: "/page/element/logo-slider",
      component: _9ce26e24,
      name: "page-element-logo-slider"
    }, {
      path: "/page/element/multi-slider",
      component: _5e87944c,
      name: "page-element-multi-slider"
    }, {
      path: "/page/element/product-slider",
      component: _f7bd9db8,
      name: "page-element-product-slider"
    }, {
      path: "/page/element/product-tabs",
      component: _3435e401,
      name: "page-element-product-tabs"
    }, {
      path: "/page/element/service",
      component: _d7b95e40,
      name: "page-element-service"
    }, {
      path: "/page/portfolio/masonary-fullwidth",
      component: _0bd5d70d,
      name: "page-portfolio-masonary-fullwidth"
    }, {
      path: "/page/portfolio/mesonary-grid-2",
      component: _74b75661,
      name: "page-portfolio-mesonary-grid-2"
    }, {
      path: "/page/portfolio/mesonary-grid-3",
      component: _74c56de2,
      name: "page-portfolio-mesonary-grid-3"
    }, {
      path: "/page/portfolio/mesonary-grid-4",
      component: _74d38563,
      name: "page-portfolio-mesonary-grid-4"
    }, {
      path: "/page/portfolio/portfolio-2-col",
      component: _09e5bdd2,
      name: "page-portfolio-portfolio-2-col"
    }, {
      path: "/page/portfolio/portfolio-3-col",
      component: _e15cdfd0,
      name: "page-portfolio-portfolio-3-col"
    }, {
      path: "/page/portfolio/portfolio-4-col",
      component: _2395ff19,
      name: "page-portfolio-portfolio-4-col"
    }, {
      path: "/product/sidebar/no-sidebar",
      component: _5c86f47e,
      name: "product-sidebar-no-sidebar"
    }, {
      path: "/product/sidebar/right-sidebar",
      component: _5e012f4a,
      name: "product-sidebar-right-sidebar"
    }, {
      path: "/product/three-column/thumbnail-bottom",
      component: _904bf8b0,
      name: "product-three-column-thumbnail-bottom"
    }, {
      path: "/product/three-column/thumbnail-left",
      component: _6d5090c4,
      name: "product-three-column-thumbnail-left"
    }, {
      path: "/product/three-column/thumbnail-right",
      component: _7a06a1af,
      name: "product-three-column-thumbnail-right"
    }, {
      path: "/product/thumbnail-image/image-outside",
      component: _55171a30,
      name: "product-thumbnail-image-image-outside"
    }, {
      path: "/product/thumbnail-image/left-image",
      component: _49272730,
      name: "product-thumbnail-image-left-image"
    }, {
      path: "/product/thumbnail-image/right-image",
      component: _278a1f27,
      name: "product-thumbnail-image-right-image"
    }, {
      path: "/page/account/auth/auth",
      component: _050222a4,
      name: "page-account-auth-auth"
    }, {
      path: "/shop/bags/components/banner",
      component: _c4ef92e8,
      name: "shop-bags-components-banner"
    }, {
      path: "/shop/bags/components/blog",
      component: _4747ce02,
      name: "shop-bags-components-blog"
    }, {
      path: "/shop/bags/components/category",
      component: _e70aad44,
      name: "shop-bags-components-category"
    }, {
      path: "/shop/bags/components/category2",
      component: _02f22bc4,
      name: "shop-bags-components-category2"
    }, {
      path: "/shop/bags/components/categorytab",
      component: _083eeb27,
      name: "shop-bags-components-categorytab"
    }, {
      path: "/shop/bags/components/instagram",
      component: _49cc7cfc,
      name: "shop-bags-components-instagram"
    }, {
      path: "/shop/bags/components/productcategoryslider",
      component: _568d95de,
      name: "shop-bags-components-productcategoryslider"
    }, {
      path: "/shop/bags/components/productslider",
      component: _31145540,
      name: "shop-bags-components-productslider"
    }, {
      path: "/shop/bags/components/services",
      component: _ecd76684,
      name: "shop-bags-components-services"
    }, {
      path: "/shop/bags/components/slider",
      component: _1cf54dc1,
      name: "shop-bags-components-slider"
    }, {
      path: "/shop/beauty/components/about",
      component: _7f444e2c,
      name: "shop-beauty-components-about"
    }, {
      path: "/shop/beauty/components/blog",
      component: _a4ba645a,
      name: "shop-beauty-components-blog"
    }, {
      path: "/shop/beauty/components/instagram",
      component: _352a075e,
      name: "shop-beauty-components-instagram"
    }, {
      path: "/shop/beauty/components/product-slider",
      component: _d3d09020,
      name: "shop-beauty-components-product-slider"
    }, {
      path: "/shop/beauty/components/slider",
      component: _588f9d52,
      name: "shop-beauty-components-slider"
    }, {
      path: "/shop/beauty/components/top-product-slider",
      component: _01915ee8,
      name: "shop-beauty-components-top-product-slider"
    }, {
      path: "/shop/beauty/components/video-tutorial",
      component: _ba145f3e,
      name: "shop-beauty-components-video-tutorial"
    }, {
      path: "/shop/electronics-1/components/collection_banner",
      component: _49724f5a,
      name: "shop-electronics-1-components-collection_banner"
    }, {
      path: "/shop/electronics-1/components/product_tab",
      component: _034ea9aa,
      name: "shop-electronics-1-components-product_tab"
    }, {
      path: "/shop/electronics-1/components/slider",
      component: _de71592a,
      name: "shop-electronics-1-components-slider"
    }, {
      path: "/shop/fashion-2/components/banner",
      component: _3b805d90,
      name: "shop-fashion-2-components-banner"
    }, {
      path: "/shop/fashion-2/components/collection",
      component: _3dd1c4ac,
      name: "shop-fashion-2-components-collection"
    }, {
      path: "/shop/fashion-2/components/collection-banner",
      component: _593a845f,
      name: "shop-fashion-2-components-collection-banner"
    }, {
      path: "/shop/fashion-2/components/instagram",
      component: _e55bd154,
      name: "shop-fashion-2-components-instagram"
    }, {
      path: "/shop/fashion-2/components/product",
      component: _fdcbedda,
      name: "shop-fashion-2-components-product"
    }, {
      path: "/shop/fashion-2/components/slider",
      component: _61ace86d,
      name: "shop-fashion-2-components-slider"
    }, {
      path: "/shop/fashion-3/components/banner",
      component: _2c716a79,
      name: "shop-fashion-3-components-banner"
    }, {
      path: "/shop/fashion-3/components/product_slider",
      component: _0b8569fe,
      name: "shop-fashion-3-components-product_slider"
    }, {
      path: "/shop/fashion-3/components/product_tab",
      component: _2ae2eec8,
      name: "shop-fashion-3-components-product_tab"
    }, {
      path: "/shop/fashion-3/components/slider",
      component: _a842fca4,
      name: "shop-fashion-3-components-slider"
    }, {
      path: "/shop/fashion/components/banner",
      component: _6ac17293,
      name: "shop-fashion-components-banner"
    }, {
      path: "/shop/fashion/components/blog",
      component: _4043406e,
      name: "shop-fashion-components-blog"
    }, {
      path: "/shop/fashion/components/collection_banner",
      component: _a02a1454,
      name: "shop-fashion-components-collection_banner"
    }, {
      path: "/shop/fashion/components/instagram",
      component: _1aeb97ca,
      name: "shop-fashion-components-instagram"
    }, {
      path: "/shop/fashion/components/logo_slider",
      component: _b7bc26c4,
      name: "shop-fashion-components-logo_slider"
    }, {
      path: "/shop/fashion/components/product_slider",
      component: _2c40b818,
      name: "shop-fashion-components-product_slider"
    }, {
      path: "/shop/fashion/components/product_tab",
      component: _31b5e6ee,
      name: "shop-fashion-components-product_tab"
    }, {
      path: "/shop/fashion/components/services",
      component: _2522b9f6,
      name: "shop-fashion-components-services"
    }, {
      path: "/shop/fashion/components/slider",
      component: _2ba2ec70,
      name: "shop-fashion-components-slider"
    }, {
      path: "/shop/flower/components/blog",
      component: _74ce9232,
      name: "shop-flower-components-blog"
    }, {
      path: "/shop/flower/components/category_tab",
      component: _3cca0338,
      name: "shop-flower-components-category_tab"
    }, {
      path: "/shop/flower/components/collection_banner",
      component: _d35893e6,
      name: "shop-flower-components-collection_banner"
    }, {
      path: "/shop/flower/components/instagram",
      component: _0dd3c95c,
      name: "shop-flower-components-instagram"
    }, {
      path: "/shop/flower/components/product_slider",
      component: _11e7bb41,
      name: "shop-flower-components-product_slider"
    }, {
      path: "/shop/flower/components/services",
      component: _50bd78ee,
      name: "shop-flower-components-services"
    }, {
      path: "/shop/flower/components/slider",
      component: _03dbc5f1,
      name: "shop-flower-components-slider"
    }, {
      path: "/shop/flower/components/top_products",
      component: _30a0459e,
      name: "shop-flower-components-top_products"
    }, {
      path: "/shop/furniture/components/blog",
      component: _4a40c9c3,
      name: "shop-furniture-components-blog"
    }, {
      path: "/shop/furniture/components/category_tab",
      component: _58add616,
      name: "shop-furniture-components-category_tab"
    }, {
      path: "/shop/furniture/components/collection_banner",
      component: _3f12121c,
      name: "shop-furniture-components-collection_banner"
    }, {
      path: "/shop/furniture/components/parallax_banner",
      component: _7e434743,
      name: "shop-furniture-components-parallax_banner"
    }, {
      path: "/shop/furniture/components/slider",
      component: _459e5d42,
      name: "shop-furniture-components-slider"
    }, {
      path: "/shop/gym/components/blog",
      component: _3fd1fa68,
      name: "shop-gym-components-blog"
    }, {
      path: "/shop/gym/components/collection-banner",
      component: _d9fcb3fe,
      name: "shop-gym-components-collection-banner"
    }, {
      path: "/shop/gym/components/instagram",
      component: _ff440a10,
      name: "shop-gym-components-instagram"
    }, {
      path: "/shop/gym/components/logo-slider",
      component: _1116f2ee,
      name: "shop-gym-components-logo-slider"
    }, {
      path: "/shop/gym/components/product-list",
      component: _3040c6e6,
      name: "shop-gym-components-product-list"
    }, {
      path: "/shop/gym/components/slider",
      component: _826b0fea,
      name: "shop-gym-components-slider"
    }, {
      path: "/shop/gym/components/top-collection",
      component: _1a386680,
      name: "shop-gym-components-top-collection"
    }, {
      path: "/shop/jewellery/components/category",
      component: _8be1cc20,
      name: "shop-jewellery-components-category"
    }, {
      path: "/shop/jewellery/components/instagram",
      component: _60136330,
      name: "shop-jewellery-components-instagram"
    }, {
      path: "/shop/jewellery/components/parallax-banner",
      component: _6377b320,
      name: "shop-jewellery-components-parallax-banner"
    }, {
      path: "/shop/jewellery/components/product-slider",
      component: _0f47c471,
      name: "shop-jewellery-components-product-slider"
    }, {
      path: "/shop/jewellery/components/product-tab",
      component: _17b4e135,
      name: "shop-jewellery-components-product-tab"
    }, {
      path: "/shop/jewellery/components/services",
      component: _91ae8560,
      name: "shop-jewellery-components-services"
    }, {
      path: "/shop/jewellery/components/slider",
      component: _0bb0bad3,
      name: "shop-jewellery-components-slider"
    }, {
      path: "/shop/kids/components/collection_banner",
      component: _107c1f7b,
      name: "shop-kids-components-collection_banner"
    }, {
      path: "/shop/kids/components/collection_slider",
      component: _e02d92a0,
      name: "shop-kids-components-collection_slider"
    }, {
      path: "/shop/kids/components/instagram",
      component: _297dd2c0,
      name: "shop-kids-components-instagram"
    }, {
      path: "/shop/kids/components/logo_slider",
      component: _26af13fa,
      name: "shop-kids-components-logo_slider"
    }, {
      path: "/shop/kids/components/parallax_banner",
      component: _c181bf3c,
      name: "shop-kids-components-parallax_banner"
    }, {
      path: "/shop/kids/components/product_slider",
      component: _0c6f7893,
      name: "shop-kids-components-product_slider"
    }, {
      path: "/shop/kids/components/slider",
      component: _5b16f543,
      name: "shop-kids-components-slider"
    }, {
      path: "/shop/pets/components/blog",
      component: _0cee7d4b,
      name: "shop-pets-components-blog"
    }, {
      path: "/shop/pets/components/collection-banner",
      component: _0ab11c3c,
      name: "shop-pets-components-collection-banner"
    }, {
      path: "/shop/pets/components/logo-slider",
      component: _5a55e1ac,
      name: "shop-pets-components-logo-slider"
    }, {
      path: "/shop/pets/components/parallax-banner",
      component: _75cca509,
      name: "shop-pets-components-parallax-banner"
    }, {
      path: "/shop/pets/components/product-slider",
      component: _95ef1d30,
      name: "shop-pets-components-product-slider"
    }, {
      path: "/shop/pets/components/slider",
      component: _13ad4eca,
      name: "shop-pets-components-slider"
    }, {
      path: "/shop/pets/components/top-collection",
      component: _199f747f,
      name: "shop-pets-components-top-collection"
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
      path: "/shop/tools/components/about",
      component: _c170091a,
      name: "shop-tools-components-about"
    }, {
      path: "/shop/tools/components/category",
      component: _52be5bf0,
      name: "shop-tools-components-category"
    }, {
      path: "/shop/tools/components/logo_slider",
      component: _7599db5b,
      name: "shop-tools-components-logo_slider"
    }, {
      path: "/shop/tools/components/product-slider",
      component: _2b450a89,
      name: "shop-tools-components-product-slider"
    }, {
      path: "/shop/tools/components/product-tab-slider",
      component: _05184fc1,
      name: "shop-tools-components-product-tab-slider"
    }, {
      path: "/shop/tools/components/select-vehical",
      component: _74698217,
      name: "shop-tools-components-select-vehical"
    }, {
      path: "/shop/tools/components/service",
      component: _7a530f1b,
      name: "shop-tools-components-service"
    }, {
      path: "/shop/tools/components/slider",
      component: _390198eb,
      name: "shop-tools-components-slider"
    }, {
      path: "/shop/vegetables/components/banner",
      component: _481d57da,
      name: "shop-vegetables-components-banner"
    }, {
      path: "/shop/vegetables/components/blog",
      component: _1698a149,
      name: "shop-vegetables-components-blog"
    }, {
      path: "/shop/vegetables/components/product_slider",
      component: _46371998,
      name: "shop-vegetables-components-product_slider"
    }, {
      path: "/shop/vegetables/components/services",
      component: _5ba7b6f6,
      name: "shop-vegetables-components-services"
    }, {
      path: "/shop/vegetables/components/slider",
      component: _5b5e6b48,
      name: "shop-vegetables-components-slider"
    }, {
      path: "/shop/vegetables/components/special_products",
      component: _584dd151,
      name: "shop-vegetables-components-special_products"
    }, {
      path: "/shop/watch/components/blog",
      component: _778dd4a0,
      name: "shop-watch-components-blog"
    }, {
      path: "/shop/watch/components/category",
      component: _f1ff9e08,
      name: "shop-watch-components-category"
    }, {
      path: "/shop/watch/components/categorytabs",
      component: _ab32b90c,
      name: "shop-watch-components-categorytabs"
    }, {
      path: "/shop/watch/components/collectionbanners",
      component: _093fa2db,
      name: "shop-watch-components-collectionbanners"
    }, {
      path: "/shop/watch/components/instagram",
      component: _31452da4,
      name: "shop-watch-components-instagram"
    }, {
      path: "/shop/watch/components/logo_slider",
      component: _2004a7e7,
      name: "shop-watch-components-logo_slider"
    }, {
      path: "/shop/watch/components/product_slider",
      component: _3b7d67a2,
      name: "shop-watch-components-product_slider"
    }, {
      path: "/shop/watch/components/services",
      component: _f7cc5748,
      name: "shop-watch-components-services"
    }, {
      path: "/shop/watch/components/slider",
      component: _53d424df,
      name: "shop-watch-components-slider"
    }, {
      path: "/shop/watch/components/timer_banner",
      component: _67b10a64,
      name: "shop-watch-components-timer_banner"
    }, {
      path: "/shop/watch/components/top_products",
      component: _5e653a0c,
      name: "shop-watch-components-top_products"
    }, {
      path: "/collection/leftsidebar/:id?",
      component: _6a1d276d,
      name: "collection-leftsidebar-id"
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
