import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ede2b5b6 = () => interopDefault(import('../pages/landing.vue' /* webpackChunkName: "pages/landing" */))
const _befcc45e = () => interopDefault(import('../pages/blog/blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _db01d9b6 = () => interopDefault(import('../pages/blog/blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _557f99aa = () => interopDefault(import('../pages/blog/blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _7ee5f9c0 = () => interopDefault(import('../pages/blog/blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _056464a7 = () => interopDefault(import('../pages/collection/full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _6926fdb6 = () => interopDefault(import('../pages/collection/list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _c39a2c6c = () => interopDefault(import('../pages/collection/metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _7c88a222 = () => interopDefault(import('../pages/collection/no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _0c5a4f5c = () => interopDefault(import('../pages/collection/right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _b18d24a8 = () => interopDefault(import('../pages/collection/sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _4ba543a0 = () => interopDefault(import('../pages/collection/six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _16321998 = () => interopDefault(import('../pages/collection/three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _8a0ab9cc = () => interopDefault(import('../pages/page/404.vue' /* webpackChunkName: "pages/page/404" */))
const _2a47bf22 = () => interopDefault(import('../pages/page/about.vue' /* webpackChunkName: "pages/page/about" */))
const _da2a10a8 = () => interopDefault(import('../pages/page/collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _b805c5ae = () => interopDefault(import('../pages/page/coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _66eb45f8 = () => interopDefault(import('../pages/page/faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _13ff0396 = () => interopDefault(import('../pages/page/lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _8fac8834 = () => interopDefault(import('../pages/page/order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _a6030334 = () => interopDefault(import('../pages/page/review.vue' /* webpackChunkName: "pages/page/review" */))
const _18ab7694 = () => interopDefault(import('../pages/page/search.vue' /* webpackChunkName: "pages/page/search" */))
const _0b0c0dbd = () => interopDefault(import('../pages/page/typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _476c01a6 = () => interopDefault(import('../pages/product/bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _96b19414 = () => interopDefault(import('../pages/product/four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _09e37616 = () => interopDefault(import('../pages/shop/bags/index.vue' /* webpackChunkName: "pages/shop/bags/index" */))
const _75069f06 = () => interopDefault(import('../pages/shop/beauty/index.vue' /* webpackChunkName: "pages/shop/beauty/index" */))
const _1fea5567 = () => interopDefault(import('../pages/shop/electronics-1/index.vue' /* webpackChunkName: "pages/shop/electronics-1/index" */))
const _587f7a44 = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _57e7612e = () => interopDefault(import('../pages/shop/fashion-2/index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
const _68f1022a = () => interopDefault(import('../pages/shop/fashion-3/index.vue' /* webpackChunkName: "pages/shop/fashion-3/index" */))
const _21cb7e25 = () => interopDefault(import('../pages/shop/flower/index.vue' /* webpackChunkName: "pages/shop/flower/index" */))
const _58e2c884 = () => interopDefault(import('../pages/shop/furniture/index.vue' /* webpackChunkName: "pages/shop/furniture/index" */))
const _6a686707 = () => interopDefault(import('../pages/shop/gym/index.vue' /* webpackChunkName: "pages/shop/gym/index" */))
const _1e9c0acf = () => interopDefault(import('../pages/shop/jewellery/index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
const _48dd9f77 = () => interopDefault(import('../pages/shop/kids/index.vue' /* webpackChunkName: "pages/shop/kids/index" */))
const _7340cb7e = () => interopDefault(import('../pages/shop/pets/index.vue' /* webpackChunkName: "pages/shop/pets/index" */))
const _c0216898 = () => interopDefault(import('../pages/shop/shoes/index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _5cb6bee7 = () => interopDefault(import('../pages/shop/tools/index.vue' /* webpackChunkName: "pages/shop/tools/index" */))
const _a5b94008 = () => interopDefault(import('../pages/shop/vegetables/index.vue' /* webpackChunkName: "pages/shop/vegetables/index" */))
const _0da498db = () => interopDefault(import('../pages/shop/watch/index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _0d39ad84 = () => interopDefault(import('../pages/blog/widgets/blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _6135edec = () => interopDefault(import('../pages/blog/widgets/blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _d751b160 = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _47d82b14 = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _033293c0 = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _1fe82ed8 = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _4c798a0a = () => interopDefault(import('../pages/page/account/forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _f3fd222e = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _a76c06ca = () => interopDefault(import('../pages/page/account/login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _068e2f29 = () => interopDefault(import('../pages/page/account/profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _1f1ad553 = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _7345fb75 = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _47c2c981 = () => interopDefault(import('../pages/page/compare/compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _47d0e102 = () => interopDefault(import('../pages/page/compare/compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _4149e32d = () => interopDefault(import('../pages/page/element/banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _4683b1bf = () => interopDefault(import('../pages/page/element/category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _38ef174a = () => interopDefault(import('../pages/page/element/collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _d39a2a44 = () => interopDefault(import('../pages/page/element/home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _99023adc = () => interopDefault(import('../pages/page/element/logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _0ccf50b6 = () => interopDefault(import('../pages/page/element/multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _07d90500 = () => interopDefault(import('../pages/page/element/product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _7048fedd = () => interopDefault(import('../pages/page/element/product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _2d6c46f8 = () => interopDefault(import('../pages/page/element/service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _3a03542e = () => interopDefault(import('../pages/page/portfolio/masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _bc22b5f6 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _bc0686f4 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _bbea57f2 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _28446fbb = () => interopDefault(import('../pages/page/portfolio/portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _86ee4288 = () => interopDefault(import('../pages/page/portfolio/portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _50cd4dbd = () => interopDefault(import('../pages/page/portfolio/portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _180cc665 = () => interopDefault(import('../pages/product/sidebar/no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _59d907b4 = () => interopDefault(import('../pages/product/sidebar/right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _92a096f8 = () => interopDefault(import('../pages/product/three-column/thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _1c54c8a0 = () => interopDefault(import('../pages/product/three-column/thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _a8ed355a = () => interopDefault(import('../pages/product/three-column/thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _53eccb0c = () => interopDefault(import('../pages/product/thumbnail-image/image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _2d586de8 = () => interopDefault(import('../pages/product/thumbnail-image/left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _52e351fa = () => interopDefault(import('../pages/product/thumbnail-image/right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _54ad0b80 = () => interopDefault(import('../pages/page/account/auth/auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _21400a68 = () => interopDefault(import('../pages/shop/bags/components/banner.vue' /* webpackChunkName: "pages/shop/bags/components/banner" */))
const _f94a2e44 = () => interopDefault(import('../pages/shop/bags/components/blog.vue' /* webpackChunkName: "pages/shop/bags/components/blog" */))
const _018cf63a = () => interopDefault(import('../pages/shop/bags/components/category.vue' /* webpackChunkName: "pages/shop/bags/components/category" */))
const _30297a68 = () => interopDefault(import('../pages/shop/bags/components/category2.vue' /* webpackChunkName: "pages/shop/bags/components/category2" */))
const _7645be6a = () => interopDefault(import('../pages/shop/bags/components/categorytab.vue' /* webpackChunkName: "pages/shop/bags/components/categorytab" */))
const _08511026 = () => interopDefault(import('../pages/shop/bags/components/instagram.vue' /* webpackChunkName: "pages/shop/bags/components/instagram" */))
const _21300e82 = () => interopDefault(import('../pages/shop/bags/components/productcategoryslider.vue' /* webpackChunkName: "pages/shop/bags/components/productcategoryslider" */))
const _15459bf8 = () => interopDefault(import('../pages/shop/bags/components/productslider.vue' /* webpackChunkName: "pages/shop/bags/components/productslider" */))
const _02b2cccc = () => interopDefault(import('../pages/shop/bags/components/services.vue' /* webpackChunkName: "pages/shop/bags/components/services" */))
const _bea5bcc6 = () => interopDefault(import('../pages/shop/bags/components/slider.vue' /* webpackChunkName: "pages/shop/bags/components/slider" */))
const _7286f5d0 = () => interopDefault(import('../pages/shop/beauty/components/about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))
const _315aa1af = () => interopDefault(import('../pages/shop/beauty/components/blog.vue' /* webpackChunkName: "pages/shop/beauty/components/blog" */))
const _bbed9c16 = () => interopDefault(import('../pages/shop/beauty/components/instagram.vue' /* webpackChunkName: "pages/shop/beauty/components/instagram" */))
const _d6252e68 = () => interopDefault(import('../pages/shop/beauty/components/product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/product-slider" */))
const _64bc2ba4 = () => interopDefault(import('../pages/shop/beauty/components/slider.vue' /* webpackChunkName: "pages/shop/beauty/components/slider" */))
const _4a2b41c4 = () => interopDefault(import('../pages/shop/beauty/components/top-product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/top-product-slider" */))
const _bc68fd86 = () => interopDefault(import('../pages/shop/beauty/components/video-tutorial.vue' /* webpackChunkName: "pages/shop/beauty/components/video-tutorial" */))
const _434a262f = () => interopDefault(import('../pages/shop/electronics-1/components/collection_banner.vue' /* webpackChunkName: "pages/shop/electronics-1/components/collection_banner" */))
const _46f28e07 = () => interopDefault(import('../pages/shop/electronics-1/components/product_tab.vue' /* webpackChunkName: "pages/shop/electronics-1/components/product_tab" */))
const _7b6bd1e2 = () => interopDefault(import('../pages/shop/electronics-1/components/slider.vue' /* webpackChunkName: "pages/shop/electronics-1/components/slider" */))
const _c243f248 = () => interopDefault(import('../pages/shop/fashion-2/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
const _1299e14e = () => interopDefault(import('../pages/shop/fashion-2/components/collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
const _3a31bf8a = () => interopDefault(import('../pages/shop/fashion-2/components/collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
const _3c564f32 = () => interopDefault(import('../pages/shop/fashion-2/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
const _584287ef = () => interopDefault(import('../pages/shop/fashion-2/components/product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
const _1e4b1e11 = () => interopDefault(import('../pages/shop/fashion-2/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
const _2de0bfc6 = () => interopDefault(import('../pages/shop/fashion-3/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-3/components/banner" */))
const _70f5bba2 = () => interopDefault(import('../pages/shop/fashion-3/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_slider" */))
const _29b89fa4 = () => interopDefault(import('../pages/shop/fashion-3/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_tab" */))
const _687cb752 = () => interopDefault(import('../pages/shop/fashion-3/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/slider" */))
const _d00e7d92 = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _59bdf126 = () => interopDefault(import('../pages/shop/fashion/components/blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _0ef64e9c = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _6c9a9a12 = () => interopDefault(import('../pages/shop/fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _5326247a = () => interopDefault(import('../pages/shop/fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _082122bc = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _3e8bc26c = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _abe64eae = () => interopDefault(import('../pages/shop/fashion/components/services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _1765d86c = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _0ef333e4 = () => interopDefault(import('../pages/shop/flower/components/blog.vue' /* webpackChunkName: "pages/shop/flower/components/blog" */))
const _dec19380 = () => interopDefault(import('../pages/shop/flower/components/category_tab.vue' /* webpackChunkName: "pages/shop/flower/components/category_tab" */))
const _0877f09e = () => interopDefault(import('../pages/shop/flower/components/collection_banner.vue' /* webpackChunkName: "pages/shop/flower/components/collection_banner" */))
const _94975e14 = () => interopDefault(import('../pages/shop/flower/components/instagram.vue' /* webpackChunkName: "pages/shop/flower/components/instagram" */))
const _10bd6c1d = () => interopDefault(import('../pages/shop/flower/components/product_slider.vue' /* webpackChunkName: "pages/shop/flower/components/product_slider" */))
const _6b20026c = () => interopDefault(import('../pages/shop/flower/components/services.vue' /* webpackChunkName: "pages/shop/flower/components/services" */))
const _78ee12cd = () => interopDefault(import('../pages/shop/flower/components/slider.vue' /* webpackChunkName: "pages/shop/flower/components/slider" */))
const _40b7050c = () => interopDefault(import('../pages/shop/flower/components/top_products.vue' /* webpackChunkName: "pages/shop/flower/components/top_products" */))
const _77781867 = () => interopDefault(import('../pages/shop/furniture/components/blog.vue' /* webpackChunkName: "pages/shop/furniture/components/blog" */))
const _a0ed00ce = () => interopDefault(import('../pages/shop/furniture/components/category_tab.vue' /* webpackChunkName: "pages/shop/furniture/components/category_tab" */))
const _6e82a410 = () => interopDefault(import('../pages/shop/furniture/components/collection_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/collection_banner" */))
const _7245abc2 = () => interopDefault(import('../pages/shop/furniture/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/parallax_banner" */))
const _023c92e6 = () => interopDefault(import('../pages/shop/furniture/components/slider.vue' /* webpackChunkName: "pages/shop/furniture/components/slider" */))
const _3bf1c720 = () => interopDefault(import('../pages/shop/gym/components/blog.vue' /* webpackChunkName: "pages/shop/gym/components/blog" */))
const _dc515246 = () => interopDefault(import('../pages/shop/gym/components/collection-banner.vue' /* webpackChunkName: "pages/shop/gym/components/collection-banner" */))
const _151f7058 = () => interopDefault(import('../pages/shop/gym/components/instagram.vue' /* webpackChunkName: "pages/shop/gym/components/instagram" */))
const _71270c65 = () => interopDefault(import('../pages/shop/gym/components/logo-slider.vue' /* webpackChunkName: "pages/shop/gym/components/logo-slider" */))
const _264206ec = () => interopDefault(import('../pages/shop/gym/components/product-list.vue' /* webpackChunkName: "pages/shop/gym/components/product-list" */))
const _051ab8af = () => interopDefault(import('../pages/shop/gym/components/slider.vue' /* webpackChunkName: "pages/shop/gym/components/slider" */))
const _00cb2964 = () => interopDefault(import('../pages/shop/gym/components/top-collection.vue' /* webpackChunkName: "pages/shop/gym/components/top-collection" */))
const _701312d8 = () => interopDefault(import('../pages/shop/jewellery/components/category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
const _0f179b0c = () => interopDefault(import('../pages/shop/jewellery/components/instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
const _a7dcd408 = () => interopDefault(import('../pages/shop/jewellery/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
const _74b81615 = () => interopDefault(import('../pages/shop/jewellery/components/product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
const _168a9211 = () => interopDefault(import('../pages/shop/jewellery/components/product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
const _75dfcc18 = () => interopDefault(import('../pages/shop/jewellery/components/services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
const _6f621f12 = () => interopDefault(import('../pages/shop/jewellery/components/slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
const _2746ebc2 = () => interopDefault(import('../pages/shop/kids/components/collection_banner.vue' /* webpackChunkName: "pages/shop/kids/components/collection_banner" */))
const _6bc9a154 = () => interopDefault(import('../pages/shop/kids/components/collection_slider.vue' /* webpackChunkName: "pages/shop/kids/components/collection_slider" */))
const _56b52164 = () => interopDefault(import('../pages/shop/kids/components/instagram.vue' /* webpackChunkName: "pages/shop/kids/components/instagram" */))
const _ad72a8b2 = () => interopDefault(import('../pages/shop/kids/components/logo_slider.vue' /* webpackChunkName: "pages/shop/kids/components/logo_slider" */))
const _5e7c37f4 = () => interopDefault(import('../pages/shop/kids/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/kids/components/parallax_banner" */))
const _89189f22 = () => interopDefault(import('../pages/shop/kids/components/product_slider.vue' /* webpackChunkName: "pages/shop/kids/components/product_slider" */))
const _42626dc2 = () => interopDefault(import('../pages/shop/kids/components/slider.vue' /* webpackChunkName: "pages/shop/kids/components/slider" */))
const _49019827 = () => interopDefault(import('../pages/shop/pets/components/blog.vue' /* webpackChunkName: "pages/shop/pets/components/blog" */))
const _52f046f4 = () => interopDefault(import('../pages/shop/pets/components/collection-banner.vue' /* webpackChunkName: "pages/shop/pets/components/collection-banner" */))
const _e1197664 = () => interopDefault(import('../pages/shop/pets/components/logo-slider.vue' /* webpackChunkName: "pages/shop/pets/components/logo-slider" */))
const _b1612ea6 = () => interopDefault(import('../pages/shop/pets/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/pets/components/parallax-banner" */))
const _640ca944 = () => interopDefault(import('../pages/shop/pets/components/product-slider.vue' /* webpackChunkName: "pages/shop/pets/components/product-slider" */))
const _d135bab4 = () => interopDefault(import('../pages/shop/pets/components/slider.vue' /* webpackChunkName: "pages/shop/pets/components/slider" */))
const _6eb8a74a = () => interopDefault(import('../pages/shop/pets/components/top-collection.vue' /* webpackChunkName: "pages/shop/pets/components/top-collection" */))
const _7c793062 = () => interopDefault(import('../pages/shop/shoes/components/about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
const _94646646 = () => interopDefault(import('../pages/shop/shoes/components/blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
const _c5346948 = () => interopDefault(import('../pages/shop/shoes/components/brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
const _37dfc2b9 = () => interopDefault(import('../pages/shop/shoes/components/category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
const _779f846e = () => interopDefault(import('../pages/shop/shoes/components/category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
const _7783556c = () => interopDefault(import('../pages/shop/shoes/components/category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
const _06cd6c05 = () => interopDefault(import('../pages/shop/shoes/components/collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
const _f38af98c = () => interopDefault(import('../pages/shop/shoes/components/collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
const _990a81e8 = () => interopDefault(import('../pages/shop/shoes/components/collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
const _c75058f2 = () => interopDefault(import('../pages/shop/shoes/components/instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
const _4e733905 = () => interopDefault(import('../pages/shop/shoes/components/productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
const _5fea776c = () => interopDefault(import('../pages/shop/shoes/components/service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
const _01f701dc = () => interopDefault(import('../pages/shop/shoes/components/slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
const _22ffcf4f = () => interopDefault(import('../pages/shop/tools/components/about.vue' /* webpackChunkName: "pages/shop/tools/components/about" */))
const _03d820ac = () => interopDefault(import('../pages/shop/tools/components/category.vue' /* webpackChunkName: "pages/shop/tools/components/category" */))
const _4cc25a37 = () => interopDefault(import('../pages/shop/tools/components/logo_slider.vue' /* webpackChunkName: "pages/shop/tools/components/logo_slider" */))
const _5cc7ce2d = () => interopDefault(import('../pages/shop/tools/components/product-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-slider" */))
const _6a88a165 = () => interopDefault(import('../pages/shop/tools/components/product-tab-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-tab-slider" */))
const _b427748a = () => interopDefault(import('../pages/shop/tools/components/select-vehical.vue' /* webpackChunkName: "pages/shop/tools/components/select-vehical" */))
const _21354812 = () => interopDefault(import('../pages/shop/tools/components/service.vue' /* webpackChunkName: "pages/shop/tools/components/service" */))
const _2c44408f = () => interopDefault(import('../pages/shop/tools/components/slider.vue' /* webpackChunkName: "pages/shop/tools/components/slider" */))
const _99cc5a22 = () => interopDefault(import('../pages/shop/vegetables/components/banner.vue' /* webpackChunkName: "pages/shop/vegetables/components/banner" */))
const _df69b1b6 = () => interopDefault(import('../pages/shop/vegetables/components/blog.vue' /* webpackChunkName: "pages/shop/vegetables/components/blog" */))
const _e25e0718 = () => interopDefault(import('../pages/shop/vegetables/components/product_slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/product_slider" */))
const _fd9f473e = () => interopDefault(import('../pages/shop/vegetables/components/services.vue' /* webpackChunkName: "pages/shop/vegetables/components/services" */))
const _3286ea24 = () => interopDefault(import('../pages/shop/vegetables/components/slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/slider" */))
const _3c0b25a6 = () => interopDefault(import('../pages/shop/vegetables/components/special_products.vue' /* webpackChunkName: "pages/shop/vegetables/components/special_products" */))
const _8443d578 = () => interopDefault(import('../pages/shop/watch/components/blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _979100c0 = () => interopDefault(import('../pages/shop/watch/components/category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _8f63ffc4 = () => interopDefault(import('../pages/shop/watch/components/categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _ad26e692 = () => interopDefault(import('../pages/shop/watch/components/collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _aa109900 = () => interopDefault(import('../pages/shop/watch/components/instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _11a5b27a = () => interopDefault(import('../pages/shop/watch/components/logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _13c40fd3 = () => interopDefault(import('../pages/shop/watch/components/product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _9d5dba00 = () => interopDefault(import('../pages/shop/watch/components/services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _4716cc83 = () => interopDefault(import('../pages/shop/watch/components/slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _75986708 = () => interopDefault(import('../pages/shop/watch/components/timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _6c4c96b0 = () => interopDefault(import('../pages/shop/watch/components/top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _9f252fde = () => interopDefault(import('../pages/collection/leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _195b0975 = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _22e77840 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/landing",
      component: _ede2b5b6,
      name: "landing"
    }, {
      path: "/blog/blog-detail",
      component: _befcc45e,
      name: "blog-blog-detail"
    }, {
      path: "/blog/blog-leftsidebar",
      component: _db01d9b6,
      name: "blog-blog-leftsidebar"
    }, {
      path: "/blog/blog-nosidebar",
      component: _557f99aa,
      name: "blog-blog-nosidebar"
    }, {
      path: "/blog/blog-rightsidebar",
      component: _7ee5f9c0,
      name: "blog-blog-rightsidebar"
    }, {
      path: "/collection/full-width",
      component: _056464a7,
      name: "collection-full-width"
    }, {
      path: "/collection/list-view",
      component: _6926fdb6,
      name: "collection-list-view"
    }, {
      path: "/collection/metro",
      component: _c39a2c6c,
      name: "collection-metro"
    }, {
      path: "/collection/no-sidebar",
      component: _7c88a222,
      name: "collection-no-sidebar"
    }, {
      path: "/collection/right-sidebar",
      component: _0c5a4f5c,
      name: "collection-right-sidebar"
    }, {
      path: "/collection/sidebar-popup",
      component: _b18d24a8,
      name: "collection-sidebar-popup"
    }, {
      path: "/collection/six-grid",
      component: _4ba543a0,
      name: "collection-six-grid"
    }, {
      path: "/collection/three-grid",
      component: _16321998,
      name: "collection-three-grid"
    }, {
      path: "/page/404",
      component: _8a0ab9cc,
      name: "page-404"
    }, {
      path: "/page/about",
      component: _2a47bf22,
      name: "page-about"
    }, {
      path: "/page/collection",
      component: _da2a10a8,
      name: "page-collection"
    }, {
      path: "/page/coming-soon",
      component: _b805c5ae,
      name: "page-coming-soon"
    }, {
      path: "/page/faq",
      component: _66eb45f8,
      name: "page-faq"
    }, {
      path: "/page/lookbook",
      component: _13ff0396,
      name: "page-lookbook"
    }, {
      path: "/page/order-success",
      component: _8fac8834,
      name: "page-order-success"
    }, {
      path: "/page/review",
      component: _a6030334,
      name: "page-review"
    }, {
      path: "/page/search",
      component: _18ab7694,
      name: "page-search"
    }, {
      path: "/page/typography",
      component: _0b0c0dbd,
      name: "page-typography"
    }, {
      path: "/product/bundle-product",
      component: _476c01a6,
      name: "product-bundle-product"
    }, {
      path: "/product/four-image",
      component: _96b19414,
      name: "product-four-image"
    }, {
      path: "/shop/bags",
      component: _09e37616,
      name: "shop-bags"
    }, {
      path: "/shop/beauty",
      component: _75069f06,
      name: "shop-beauty"
    }, {
      path: "/shop/electronics-1",
      component: _1fea5567,
      name: "shop-electronics-1"
    }, {
      path: "/shop/fashion",
      component: _587f7a44,
      name: "shop-fashion"
    }, {
      path: "/shop/fashion-2",
      component: _57e7612e,
      name: "shop-fashion-2"
    }, {
      path: "/shop/fashion-3",
      component: _68f1022a,
      name: "shop-fashion-3"
    }, {
      path: "/shop/flower",
      component: _21cb7e25,
      name: "shop-flower"
    }, {
      path: "/shop/furniture",
      component: _58e2c884,
      name: "shop-furniture"
    }, {
      path: "/shop/gym",
      component: _6a686707,
      name: "shop-gym"
    }, {
      path: "/shop/jewellery",
      component: _1e9c0acf,
      name: "shop-jewellery"
    }, {
      path: "/shop/kids",
      component: _48dd9f77,
      name: "shop-kids"
    }, {
      path: "/shop/pets",
      component: _7340cb7e,
      name: "shop-pets"
    }, {
      path: "/shop/shoes",
      component: _c0216898,
      name: "shop-shoes"
    }, {
      path: "/shop/tools",
      component: _5cb6bee7,
      name: "shop-tools"
    }, {
      path: "/shop/vegetables",
      component: _a5b94008,
      name: "shop-vegetables"
    }, {
      path: "/shop/watch",
      component: _0da498db,
      name: "shop-watch"
    }, {
      path: "/blog/widgets/blog-list",
      component: _0d39ad84,
      name: "blog-widgets-blog-list"
    }, {
      path: "/blog/widgets/blog-sidebar",
      component: _6135edec,
      name: "blog-widgets-blog-sidebar"
    }, {
      path: "/page/account/cart",
      component: _d751b160,
      name: "page-account-cart"
    }, {
      path: "/page/account/checkout",
      component: _47d82b14,
      name: "page-account-checkout"
    }, {
      path: "/page/account/contact",
      component: _033293c0,
      name: "page-account-contact"
    }, {
      path: "/page/account/dashboard",
      component: _1fe82ed8,
      name: "page-account-dashboard"
    }, {
      path: "/page/account/forget-password",
      component: _4c798a0a,
      name: "page-account-forget-password"
    }, {
      path: "/page/account/login",
      component: _f3fd222e,
      name: "page-account-login"
    }, {
      path: "/page/account/login-firebase",
      component: _a76c06ca,
      name: "page-account-login-firebase"
    }, {
      path: "/page/account/profile",
      component: _068e2f29,
      name: "page-account-profile"
    }, {
      path: "/page/account/register",
      component: _1f1ad553,
      name: "page-account-register"
    }, {
      path: "/page/account/wishlist",
      component: _7345fb75,
      name: "page-account-wishlist"
    }, {
      path: "/page/compare/compare-1",
      component: _47c2c981,
      name: "page-compare-compare-1"
    }, {
      path: "/page/compare/compare-2",
      component: _47d0e102,
      name: "page-compare-compare-2"
    }, {
      path: "/page/element/banner",
      component: _4149e32d,
      name: "page-element-banner"
    }, {
      path: "/page/element/category",
      component: _4683b1bf,
      name: "page-element-category"
    }, {
      path: "/page/element/collection-banner",
      component: _38ef174a,
      name: "page-element-collection-banner"
    }, {
      path: "/page/element/home-slider",
      component: _d39a2a44,
      name: "page-element-home-slider"
    }, {
      path: "/page/element/logo-slider",
      component: _99023adc,
      name: "page-element-logo-slider"
    }, {
      path: "/page/element/multi-slider",
      component: _0ccf50b6,
      name: "page-element-multi-slider"
    }, {
      path: "/page/element/product-slider",
      component: _07d90500,
      name: "page-element-product-slider"
    }, {
      path: "/page/element/product-tabs",
      component: _7048fedd,
      name: "page-element-product-tabs"
    }, {
      path: "/page/element/service",
      component: _2d6c46f8,
      name: "page-element-service"
    }, {
      path: "/page/portfolio/masonary-fullwidth",
      component: _3a03542e,
      name: "page-portfolio-masonary-fullwidth"
    }, {
      path: "/page/portfolio/mesonary-grid-2",
      component: _bc22b5f6,
      name: "page-portfolio-mesonary-grid-2"
    }, {
      path: "/page/portfolio/mesonary-grid-3",
      component: _bc0686f4,
      name: "page-portfolio-mesonary-grid-3"
    }, {
      path: "/page/portfolio/mesonary-grid-4",
      component: _bbea57f2,
      name: "page-portfolio-mesonary-grid-4"
    }, {
      path: "/page/portfolio/portfolio-2-col",
      component: _28446fbb,
      name: "page-portfolio-portfolio-2-col"
    }, {
      path: "/page/portfolio/portfolio-3-col",
      component: _86ee4288,
      name: "page-portfolio-portfolio-3-col"
    }, {
      path: "/page/portfolio/portfolio-4-col",
      component: _50cd4dbd,
      name: "page-portfolio-portfolio-4-col"
    }, {
      path: "/product/sidebar/no-sidebar",
      component: _180cc665,
      name: "product-sidebar-no-sidebar"
    }, {
      path: "/product/sidebar/right-sidebar",
      component: _59d907b4,
      name: "product-sidebar-right-sidebar"
    }, {
      path: "/product/three-column/thumbnail-bottom",
      component: _92a096f8,
      name: "product-three-column-thumbnail-bottom"
    }, {
      path: "/product/three-column/thumbnail-left",
      component: _1c54c8a0,
      name: "product-three-column-thumbnail-left"
    }, {
      path: "/product/three-column/thumbnail-right",
      component: _a8ed355a,
      name: "product-three-column-thumbnail-right"
    }, {
      path: "/product/thumbnail-image/image-outside",
      component: _53eccb0c,
      name: "product-thumbnail-image-image-outside"
    }, {
      path: "/product/thumbnail-image/left-image",
      component: _2d586de8,
      name: "product-thumbnail-image-left-image"
    }, {
      path: "/product/thumbnail-image/right-image",
      component: _52e351fa,
      name: "product-thumbnail-image-right-image"
    }, {
      path: "/page/account/auth/auth",
      component: _54ad0b80,
      name: "page-account-auth-auth"
    }, {
      path: "/shop/bags/components/banner",
      component: _21400a68,
      name: "shop-bags-components-banner"
    }, {
      path: "/shop/bags/components/blog",
      component: _f94a2e44,
      name: "shop-bags-components-blog"
    }, {
      path: "/shop/bags/components/category",
      component: _018cf63a,
      name: "shop-bags-components-category"
    }, {
      path: "/shop/bags/components/category2",
      component: _30297a68,
      name: "shop-bags-components-category2"
    }, {
      path: "/shop/bags/components/categorytab",
      component: _7645be6a,
      name: "shop-bags-components-categorytab"
    }, {
      path: "/shop/bags/components/instagram",
      component: _08511026,
      name: "shop-bags-components-instagram"
    }, {
      path: "/shop/bags/components/productcategoryslider",
      component: _21300e82,
      name: "shop-bags-components-productcategoryslider"
    }, {
      path: "/shop/bags/components/productslider",
      component: _15459bf8,
      name: "shop-bags-components-productslider"
    }, {
      path: "/shop/bags/components/services",
      component: _02b2cccc,
      name: "shop-bags-components-services"
    }, {
      path: "/shop/bags/components/slider",
      component: _bea5bcc6,
      name: "shop-bags-components-slider"
    }, {
      path: "/shop/beauty/components/about",
      component: _7286f5d0,
      name: "shop-beauty-components-about"
    }, {
      path: "/shop/beauty/components/blog",
      component: _315aa1af,
      name: "shop-beauty-components-blog"
    }, {
      path: "/shop/beauty/components/instagram",
      component: _bbed9c16,
      name: "shop-beauty-components-instagram"
    }, {
      path: "/shop/beauty/components/product-slider",
      component: _d6252e68,
      name: "shop-beauty-components-product-slider"
    }, {
      path: "/shop/beauty/components/slider",
      component: _64bc2ba4,
      name: "shop-beauty-components-slider"
    }, {
      path: "/shop/beauty/components/top-product-slider",
      component: _4a2b41c4,
      name: "shop-beauty-components-top-product-slider"
    }, {
      path: "/shop/beauty/components/video-tutorial",
      component: _bc68fd86,
      name: "shop-beauty-components-video-tutorial"
    }, {
      path: "/shop/electronics-1/components/collection_banner",
      component: _434a262f,
      name: "shop-electronics-1-components-collection_banner"
    }, {
      path: "/shop/electronics-1/components/product_tab",
      component: _46f28e07,
      name: "shop-electronics-1-components-product_tab"
    }, {
      path: "/shop/electronics-1/components/slider",
      component: _7b6bd1e2,
      name: "shop-electronics-1-components-slider"
    }, {
      path: "/shop/fashion-2/components/banner",
      component: _c243f248,
      name: "shop-fashion-2-components-banner"
    }, {
      path: "/shop/fashion-2/components/collection",
      component: _1299e14e,
      name: "shop-fashion-2-components-collection"
    }, {
      path: "/shop/fashion-2/components/collection-banner",
      component: _3a31bf8a,
      name: "shop-fashion-2-components-collection-banner"
    }, {
      path: "/shop/fashion-2/components/instagram",
      component: _3c564f32,
      name: "shop-fashion-2-components-instagram"
    }, {
      path: "/shop/fashion-2/components/product",
      component: _584287ef,
      name: "shop-fashion-2-components-product"
    }, {
      path: "/shop/fashion-2/components/slider",
      component: _1e4b1e11,
      name: "shop-fashion-2-components-slider"
    }, {
      path: "/shop/fashion-3/components/banner",
      component: _2de0bfc6,
      name: "shop-fashion-3-components-banner"
    }, {
      path: "/shop/fashion-3/components/product_slider",
      component: _70f5bba2,
      name: "shop-fashion-3-components-product_slider"
    }, {
      path: "/shop/fashion-3/components/product_tab",
      component: _29b89fa4,
      name: "shop-fashion-3-components-product_tab"
    }, {
      path: "/shop/fashion-3/components/slider",
      component: _687cb752,
      name: "shop-fashion-3-components-slider"
    }, {
      path: "/shop/fashion/components/banner",
      component: _d00e7d92,
      name: "shop-fashion-components-banner"
    }, {
      path: "/shop/fashion/components/blog",
      component: _59bdf126,
      name: "shop-fashion-components-blog"
    }, {
      path: "/shop/fashion/components/collection_banner",
      component: _0ef64e9c,
      name: "shop-fashion-components-collection_banner"
    }, {
      path: "/shop/fashion/components/instagram",
      component: _6c9a9a12,
      name: "shop-fashion-components-instagram"
    }, {
      path: "/shop/fashion/components/logo_slider",
      component: _5326247a,
      name: "shop-fashion-components-logo_slider"
    }, {
      path: "/shop/fashion/components/product_slider",
      component: _082122bc,
      name: "shop-fashion-components-product_slider"
    }, {
      path: "/shop/fashion/components/product_tab",
      component: _3e8bc26c,
      name: "shop-fashion-components-product_tab"
    }, {
      path: "/shop/fashion/components/services",
      component: _abe64eae,
      name: "shop-fashion-components-services"
    }, {
      path: "/shop/fashion/components/slider",
      component: _1765d86c,
      name: "shop-fashion-components-slider"
    }, {
      path: "/shop/flower/components/blog",
      component: _0ef333e4,
      name: "shop-flower-components-blog"
    }, {
      path: "/shop/flower/components/category_tab",
      component: _dec19380,
      name: "shop-flower-components-category_tab"
    }, {
      path: "/shop/flower/components/collection_banner",
      component: _0877f09e,
      name: "shop-flower-components-collection_banner"
    }, {
      path: "/shop/flower/components/instagram",
      component: _94975e14,
      name: "shop-flower-components-instagram"
    }, {
      path: "/shop/flower/components/product_slider",
      component: _10bd6c1d,
      name: "shop-flower-components-product_slider"
    }, {
      path: "/shop/flower/components/services",
      component: _6b20026c,
      name: "shop-flower-components-services"
    }, {
      path: "/shop/flower/components/slider",
      component: _78ee12cd,
      name: "shop-flower-components-slider"
    }, {
      path: "/shop/flower/components/top_products",
      component: _40b7050c,
      name: "shop-flower-components-top_products"
    }, {
      path: "/shop/furniture/components/blog",
      component: _77781867,
      name: "shop-furniture-components-blog"
    }, {
      path: "/shop/furniture/components/category_tab",
      component: _a0ed00ce,
      name: "shop-furniture-components-category_tab"
    }, {
      path: "/shop/furniture/components/collection_banner",
      component: _6e82a410,
      name: "shop-furniture-components-collection_banner"
    }, {
      path: "/shop/furniture/components/parallax_banner",
      component: _7245abc2,
      name: "shop-furniture-components-parallax_banner"
    }, {
      path: "/shop/furniture/components/slider",
      component: _023c92e6,
      name: "shop-furniture-components-slider"
    }, {
      path: "/shop/gym/components/blog",
      component: _3bf1c720,
      name: "shop-gym-components-blog"
    }, {
      path: "/shop/gym/components/collection-banner",
      component: _dc515246,
      name: "shop-gym-components-collection-banner"
    }, {
      path: "/shop/gym/components/instagram",
      component: _151f7058,
      name: "shop-gym-components-instagram"
    }, {
      path: "/shop/gym/components/logo-slider",
      component: _71270c65,
      name: "shop-gym-components-logo-slider"
    }, {
      path: "/shop/gym/components/product-list",
      component: _264206ec,
      name: "shop-gym-components-product-list"
    }, {
      path: "/shop/gym/components/slider",
      component: _051ab8af,
      name: "shop-gym-components-slider"
    }, {
      path: "/shop/gym/components/top-collection",
      component: _00cb2964,
      name: "shop-gym-components-top-collection"
    }, {
      path: "/shop/jewellery/components/category",
      component: _701312d8,
      name: "shop-jewellery-components-category"
    }, {
      path: "/shop/jewellery/components/instagram",
      component: _0f179b0c,
      name: "shop-jewellery-components-instagram"
    }, {
      path: "/shop/jewellery/components/parallax-banner",
      component: _a7dcd408,
      name: "shop-jewellery-components-parallax-banner"
    }, {
      path: "/shop/jewellery/components/product-slider",
      component: _74b81615,
      name: "shop-jewellery-components-product-slider"
    }, {
      path: "/shop/jewellery/components/product-tab",
      component: _168a9211,
      name: "shop-jewellery-components-product-tab"
    }, {
      path: "/shop/jewellery/components/services",
      component: _75dfcc18,
      name: "shop-jewellery-components-services"
    }, {
      path: "/shop/jewellery/components/slider",
      component: _6f621f12,
      name: "shop-jewellery-components-slider"
    }, {
      path: "/shop/kids/components/collection_banner",
      component: _2746ebc2,
      name: "shop-kids-components-collection_banner"
    }, {
      path: "/shop/kids/components/collection_slider",
      component: _6bc9a154,
      name: "shop-kids-components-collection_slider"
    }, {
      path: "/shop/kids/components/instagram",
      component: _56b52164,
      name: "shop-kids-components-instagram"
    }, {
      path: "/shop/kids/components/logo_slider",
      component: _ad72a8b2,
      name: "shop-kids-components-logo_slider"
    }, {
      path: "/shop/kids/components/parallax_banner",
      component: _5e7c37f4,
      name: "shop-kids-components-parallax_banner"
    }, {
      path: "/shop/kids/components/product_slider",
      component: _89189f22,
      name: "shop-kids-components-product_slider"
    }, {
      path: "/shop/kids/components/slider",
      component: _42626dc2,
      name: "shop-kids-components-slider"
    }, {
      path: "/shop/pets/components/blog",
      component: _49019827,
      name: "shop-pets-components-blog"
    }, {
      path: "/shop/pets/components/collection-banner",
      component: _52f046f4,
      name: "shop-pets-components-collection-banner"
    }, {
      path: "/shop/pets/components/logo-slider",
      component: _e1197664,
      name: "shop-pets-components-logo-slider"
    }, {
      path: "/shop/pets/components/parallax-banner",
      component: _b1612ea6,
      name: "shop-pets-components-parallax-banner"
    }, {
      path: "/shop/pets/components/product-slider",
      component: _640ca944,
      name: "shop-pets-components-product-slider"
    }, {
      path: "/shop/pets/components/slider",
      component: _d135bab4,
      name: "shop-pets-components-slider"
    }, {
      path: "/shop/pets/components/top-collection",
      component: _6eb8a74a,
      name: "shop-pets-components-top-collection"
    }, {
      path: "/shop/shoes/components/about",
      component: _7c793062,
      name: "shop-shoes-components-about"
    }, {
      path: "/shop/shoes/components/blog",
      component: _94646646,
      name: "shop-shoes-components-blog"
    }, {
      path: "/shop/shoes/components/brand",
      component: _c5346948,
      name: "shop-shoes-components-brand"
    }, {
      path: "/shop/shoes/components/category",
      component: _37dfc2b9,
      name: "shop-shoes-components-category"
    }, {
      path: "/shop/shoes/components/category2",
      component: _779f846e,
      name: "shop-shoes-components-category2"
    }, {
      path: "/shop/shoes/components/category3",
      component: _7783556c,
      name: "shop-shoes-components-category3"
    }, {
      path: "/shop/shoes/components/collectionbanner",
      component: _06cd6c05,
      name: "shop-shoes-components-collectionbanner"
    }, {
      path: "/shop/shoes/components/collectionslider",
      component: _f38af98c,
      name: "shop-shoes-components-collectionslider"
    }, {
      path: "/shop/shoes/components/collectiontab",
      component: _990a81e8,
      name: "shop-shoes-components-collectiontab"
    }, {
      path: "/shop/shoes/components/instagram",
      component: _c75058f2,
      name: "shop-shoes-components-instagram"
    }, {
      path: "/shop/shoes/components/productSlider",
      component: _4e733905,
      name: "shop-shoes-components-productSlider"
    }, {
      path: "/shop/shoes/components/service",
      component: _5fea776c,
      name: "shop-shoes-components-service"
    }, {
      path: "/shop/shoes/components/slider",
      component: _01f701dc,
      name: "shop-shoes-components-slider"
    }, {
      path: "/shop/tools/components/about",
      component: _22ffcf4f,
      name: "shop-tools-components-about"
    }, {
      path: "/shop/tools/components/category",
      component: _03d820ac,
      name: "shop-tools-components-category"
    }, {
      path: "/shop/tools/components/logo_slider",
      component: _4cc25a37,
      name: "shop-tools-components-logo_slider"
    }, {
      path: "/shop/tools/components/product-slider",
      component: _5cc7ce2d,
      name: "shop-tools-components-product-slider"
    }, {
      path: "/shop/tools/components/product-tab-slider",
      component: _6a88a165,
      name: "shop-tools-components-product-tab-slider"
    }, {
      path: "/shop/tools/components/select-vehical",
      component: _b427748a,
      name: "shop-tools-components-select-vehical"
    }, {
      path: "/shop/tools/components/service",
      component: _21354812,
      name: "shop-tools-components-service"
    }, {
      path: "/shop/tools/components/slider",
      component: _2c44408f,
      name: "shop-tools-components-slider"
    }, {
      path: "/shop/vegetables/components/banner",
      component: _99cc5a22,
      name: "shop-vegetables-components-banner"
    }, {
      path: "/shop/vegetables/components/blog",
      component: _df69b1b6,
      name: "shop-vegetables-components-blog"
    }, {
      path: "/shop/vegetables/components/product_slider",
      component: _e25e0718,
      name: "shop-vegetables-components-product_slider"
    }, {
      path: "/shop/vegetables/components/services",
      component: _fd9f473e,
      name: "shop-vegetables-components-services"
    }, {
      path: "/shop/vegetables/components/slider",
      component: _3286ea24,
      name: "shop-vegetables-components-slider"
    }, {
      path: "/shop/vegetables/components/special_products",
      component: _3c0b25a6,
      name: "shop-vegetables-components-special_products"
    }, {
      path: "/shop/watch/components/blog",
      component: _8443d578,
      name: "shop-watch-components-blog"
    }, {
      path: "/shop/watch/components/category",
      component: _979100c0,
      name: "shop-watch-components-category"
    }, {
      path: "/shop/watch/components/categorytabs",
      component: _8f63ffc4,
      name: "shop-watch-components-categorytabs"
    }, {
      path: "/shop/watch/components/collectionbanners",
      component: _ad26e692,
      name: "shop-watch-components-collectionbanners"
    }, {
      path: "/shop/watch/components/instagram",
      component: _aa109900,
      name: "shop-watch-components-instagram"
    }, {
      path: "/shop/watch/components/logo_slider",
      component: _11a5b27a,
      name: "shop-watch-components-logo_slider"
    }, {
      path: "/shop/watch/components/product_slider",
      component: _13c40fd3,
      name: "shop-watch-components-product_slider"
    }, {
      path: "/shop/watch/components/services",
      component: _9d5dba00,
      name: "shop-watch-components-services"
    }, {
      path: "/shop/watch/components/slider",
      component: _4716cc83,
      name: "shop-watch-components-slider"
    }, {
      path: "/shop/watch/components/timer_banner",
      component: _75986708,
      name: "shop-watch-components-timer_banner"
    }, {
      path: "/shop/watch/components/top_products",
      component: _6c4c96b0,
      name: "shop-watch-components-top_products"
    }, {
      path: "/collection/leftsidebar/:id?",
      component: _9f252fde,
      name: "collection-leftsidebar-id"
    }, {
      path: "/product/sidebar/:id?",
      component: _195b0975,
      name: "product-sidebar-id"
    }, {
      path: "/",
      component: _22e77840,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
