(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{305:function(t,r,e){var content=e(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("2343c08d",content,!0,{sourceMap:!1})},307:function(t,r,e){"use strict";e(6),e(3),e(2),e(1),e(4);var o=e(0),c=e(31);function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}var d={props:["product","index"],data:function(){return{imageSrc:"",quickviewProduct:{},compareProduct:{},cartProduct:{},showquickview:!1,showCompareModal:!1,cartval:!1,variants:{productId:"",image:""},dismissSecs:5,dismissCountDown:0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(source,!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(source).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(c.c)({productslist:function(t){return t.products.productslist}}),{},Object(c.b)({curr:"products/changeCurrency"})),methods:{openWhatsAppForm:function(t){t.quantity=1,this.$store.dispatch("cart/addToCart",t),this.$router.push("/page/account/checkout")},getImgUrl:function(path){return e(306)("./"+path)},addToCart:function(t){this.cartval=!0,this.cartProduct=t,this.$emit("opencartmodel",this.cartval,this.cartProduct),this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},showQuickview:function(t){this.showquickview=!0,this.quickviewProduct=t,this.$emit("openquickview",this.showquickview,this.quickviewProduct)},addToCompare:function(t){this.showCompareModal=!0,this.compareProduct=t,this.$emit("showCompareModal",this.showCompareModal,this.compareProduct),this.$store.dispatch("products/addToCompare",t)},Color:function(t){for(var r=[],i=0;i<Object.keys(t).length;i++)-1===r.indexOf(t[i].color)&&r.push(t[i].color);return r},productColorchange:function(t,r){var e=this;r.variants.map((function(o){o.color===t&&r.images.map((function(img){img.image_id===o.image_id&&(e.imageSrc=img.src)}))}))},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},l=(e(310),e(30)),component=Object(l.a)(d,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"product-comp"}},[e("div",{staticClass:"img-wrapper"},[e("div",{staticClass:"lable-block"},[t.product.new?e("span",{staticClass:"lable3"},[t._v("new")]):t._e(),t._v(" "),t.product.sale?e("span",{staticClass:"lable4"},[t._v("on sale")]):t._e()]),t._v(" "),e("div",{staticClass:"front"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.title}}},[e("v-lazy-image",{staticClass:"img-fluid bg-img",attrs:{id:"product-img",src:t.product.imageUrls[0],alt:t.product.name}})],1)],1),t._v(" "),e("ul",{staticClass:"product-thumb-list"},t._l(t.product.images,(function(image,r){return e("li",{key:r,staticClass:"grid_thumb_img",class:{active:t.imageSrc==image.src}},[e("a",{attrs:{href:"javascript:void(0);"}},[e("img",{attrs:{src:t.getImgUrl(image.src)}})])])})),0),t._v(" "),e("div",{staticClass:"cart-info cart-wrap",staticStyle:{color:"white"}},[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-cart",modifiers:{"modal-cart":!0}}],attrs:{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart",variant:"primary"},on:{click:function(r){return t.addToCart(t.product)}}},[e("i",{staticClass:"ti-shopping-cart",staticStyle:{color:"white"}})]),t._v(" "),t._m(0),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(r){return t.showQuickview(t.product)}}},[e("i",{staticClass:"ti-search",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"}})]),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-compare",modifiers:{"modal-compare":!0}}],attrs:{href:"javascript:void(0)",title:"Comapre",variant:"primary"}},[e("i",{staticClass:"ti-reload",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"}})])])]),t._v(" "),e("div",{staticClass:"product-detail"},[e("div",{staticClass:"rating"}),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.title}}},[e("h6",{staticStyle:{"white-space":"nowrap",width:"100%",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n        "+t._s(t.product.name)+"\n      ")])]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.sale?e("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(t.product)*t.curr.curr,t.curr.symbol))+"\n      "),e("del",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),e("div",{staticStyle:{display:"flex","margin-top":"10px"}},[e("b-button",{staticClass:"whatsapp-btn",attrs:{pill:"",variant:"outline-success"},on:{click:function(r){return t.openWhatsAppForm(t.product)}}},[e("i",{staticClass:"fa fa-whatsapp",attrs:{"aria-hidden":"true"}}),t._v(" Talk To Us\n      ")])],1)],1)])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("a",{attrs:{href:"javascript:void(0)",title:"Wishlist"}},[r("i",{staticClass:"ti-heart",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);r.a=component.exports},310:function(t,r,e){"use strict";var o=e(305);e.n(o).a},311:function(t,r,e){(t.exports=e(44)(!1)).push([t.i,"#product-comp{margin-top:12px}.v-lazy-image{-webkit-filter:blur(10px);filter:blur(10px);transition:-webkit-filter .7s;transition:filter .7s;transition:filter .7s,-webkit-filter .7s}.v-lazy-image-loaded{-webkit-filter:blur(0);filter:blur(0)}#product-img{width:100%;height:285px;-o-object-fit:cover;object-fit:cover;border-radius:5px}.whatsapp-btn{width:100%;font-size:16px;border:1px solid #48f748;color:#48f748;text-transform:capitalize}.whatsapp-btn :hover{background:#48f748;color:#fff}@media only screen and (max-width:767px){#product-img{width:100%;height:400px;-o-object-fit:cover;object-fit:cover;border-radius:7px}}",""])},339:function(t,r,e){"use strict";e.r(r);e(46);var o={props:["products","catName"],components:{productBox2:e(307).a},data:function(){return{showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},cartproduct:{},dismissSecs:5,dismissCountDown:0,swiperOption:{slideSpeed:2e3,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},slidesPerView:4,spaceBetween:20,freeMode:!1,breakpoints:{1199:{slidesPerView:3,spaceBetween:20},991:{slidesPerView:2,spaceBetween:20},420:{slidesPerView:1,spaceBetween:20}}}}},computed:{category:function(){var t=this.cat;return t&&t.unshift({categoryname:"All"}),t},getSelectedPro:function(){var t=this;return function(r){return t.$store.getters["products/getcollectionProduct"](r)}}},methods:{getCategoryProduct:function(t){return"All"===t?this.products.map((function(t){return t})):this.products.filter((function(r){if(r.category.find((function(i){return i===t})))return r}))},alert:function(t){this.dismissCountDown=t},showCartModal:function(t,r){this.showCart=t,this.cartproduct=r,this.$emit("openCart",this.showCart,this.cartproduct)},showquickview:function(t,r){this.showquickviewmodel=t,this.quickviewproduct=r,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,r){this.showcomapreModal=t,this.comapreproduct=r,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)}}},c=e(30),component=Object(c.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[e("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(r,o){return e("div",{key:o,staticClass:"swiper-slide"},t._l(t.getCategoryProduct(t.catName),(function(t,r){return e("div",{key:r,staticClass:"product-box"},[e("productBox2",{attrs:{product:t,index:r}})],1)})),0)})),0)])}),[],!1,null,null,null);r.default=component.exports}}]);