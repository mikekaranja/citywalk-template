(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{301:function(t,r,o){var content=o(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("44fe788c",content,!0,{sourceMap:!1})},303:function(t,r,o){"use strict";o(5),o(3),o(2),o(1),o(4),o(20);var e=o(0),c=o(31);function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,o)}return r}var d={props:["product","index"],data:function(){return{imageSrc:"",quickviewProduct:{},compareProduct:{},cartProduct:{},showquickview:!1,showCompareModal:!1,cartval:!1,variants:{productId:"",image:""},dismissSecs:5,dismissCountDown:0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(source,!0).forEach((function(r){Object(e.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(source).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(c.c)({productslist:function(t){return t.products.productslist}}),{},Object(c.b)({curr:"products/changeCurrency"})),methods:{openWhatsAppForm:function(){var t={name:this.product.name,id:this.product.id,price:this.product.price,image:this.product.imageUrls[0],quantity:1};this.$store.dispatch("cart/addItemToCart",t),this.$router.push("/page/account/checkout")},getImgUrl:function(path){return o(302)("./"+path)},addToCart:function(t){this.cartval=!0,this.cartProduct=t,this.$emit("opencartmodel",this.cartval,this.cartProduct),this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},showQuickview:function(t){this.showquickview=!0,this.quickviewProduct=t,this.$emit("openquickview",this.showquickview,this.quickviewProduct)},addToCompare:function(t){this.showCompareModal=!0,this.compareProduct=t,this.$emit("showCompareModal",this.showCompareModal,this.compareProduct),this.$store.dispatch("products/addToCompare",t)},Color:function(t){for(var r=[],i=0;i<Object.keys(t).length;i++)-1===r.indexOf(t[i].color)&&r.push(t[i].color);return r},productColorchange:function(t,r){var o=this;r.variants.map((function(e){e.color===t&&r.images.map((function(img){img.image_id===e.image_id&&(o.imageSrc=img.src)}))}))},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},l=(o(306),o(30)),component=Object(l.a)(d,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("div",{staticClass:"img-wrapper"},[o("div",{staticClass:"lable-block"},[t.product.new?o("span",{staticClass:"lable3"},[t._v("new")]):t._e(),t._v(" "),t.product.sale?o("span",{staticClass:"lable4"},[t._v("on sale")]):t._e()]),t._v(" "),o("div",{staticClass:"front"},[o("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[o("img",{key:t.index,staticClass:"img-fluid bg-img",staticStyle:{width:"100%",height:"285px",objectFit:"cover","border-radius":"7px"},attrs:{id:t.product.id,src:t.product.imageUrls[0],alt:t.product.name}})])],1),t._v(" "),o("ul",{staticClass:"product-thumb-list"},t._l(t.product.images,(function(image,r){return o("li",{key:r,staticClass:"grid_thumb_img",class:{active:t.imageSrc==image.src}},[o("a",{attrs:{href:"javascript:void(0);"}},[o("img",{attrs:{src:t.getImgUrl(image.src)}})])])})),0),t._v(" "),o("div",{staticClass:"cart-info",staticStyle:{color:"white"}},[o("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-cart",modifiers:{"modal-cart":!0}}],attrs:{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart",variant:"primary"},on:{click:function(r){return t.addToCart(t.product)}}},[o("i",{staticClass:"ti-shopping-cart",staticStyle:{color:"white"}})])]),t._v(" "),t._m(0),t._v(" "),o("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(r){return t.showQuickview(t.product)}}},[o("i",{staticClass:"ti-search",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"}})])],1)]),t._v(" "),o("div",{staticClass:"product-detail"},[o("div",{staticClass:"rating"}),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[o("h6",{staticStyle:{"white-space":"nowrap",width:"100%",overflow:"hidden",textOverflow:"ellipsis"}},[t._v("\n        "+t._s(t.product.name)+"\n      ")])]),t._v(" "),o("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.sale?o("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(t.product)*t.curr.curr,t.curr.symbol))+"\n      "),o("del",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])]):o("h4",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),o("div",{staticStyle:{display:"flex","margin-top":"10px"}},[o("b-button",{staticClass:"whatsapp-btn",attrs:{pill:"",variant:"outline-success"},on:{click:t.openWhatsAppForm}},[o("i",{staticClass:"fa fa-whatsapp",attrs:{"aria-hidden":"true"}}),t._v("\n        Talk To Us\n      ")])],1)],1)])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("a",{attrs:{href:"javascript:void(0)",title:"Wishlist"}},[r("i",{staticClass:"ti-heart",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"}})])}],!1,null,"c5738fd6",null);r.a=component.exports},306:function(t,r,o){"use strict";var e=o(301);o.n(e).a},307:function(t,r,o){(t.exports=o(43)(!1)).push([t.i,".whatsapp-btn[data-v-c5738fd6]{width:100%;font-size:16px;border:1px solid #48f748;color:#48f748;text-transform:capitalize}.whatsapp-btn[data-v-c5738fd6] :hover{background:#48f748;color:#fff}",""])},725:function(t,r,o){"use strict";o.r(r);o(45),o(20);var e=o(303),c=o(313),n=o(314),d={components:{productBox2:e.a,Header:c.a,Footer:n.a},data:function(){return{itemsAvailable:!1,collection:"",products:[],title:"special products",subtitle:this.$route.params.name,showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},cartproduct:{},dismissSecs:5,dismissCountDown:0}},created:function(){var t=this;this.collection=this.$route.params.name;var r,o=this.$store.getters["products/returnProducts"];0!==o.length?((r="all"===this.$route.params.name?o.map((function(t){return t})):o.filter((function(r){return r.category[0]===t.$route.params.name}))).length>0&&(this.itemsAvailable=!0),this.products=r):this.$router.push("/shop/shoes")},methods:{getCategoryProduct:function(t){return"all"===t?this.products.map((function(t){return t})):this.products.filter((function(r){if(r.category.find((function(i){return i===t})))return r}))},alert:function(t){this.dismissCountDown=t},showCartModal:function(t,r){this.showCart=t,this.cartproduct=r,this.$emit("openCart",this.showCart,this.cartproduct)},showquickview:function(t,r){this.showquickviewmodel=t,this.quickviewproduct=r,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,r){this.showcomapreModal=t,this.comapreproduct=r,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)}}},l=o(30),component=Object(l.a)(d,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("Header"),t._v(" "),o("div",{staticClass:"title1 section-t-space"},[o("h4",[t._v(t._s(t.title))]),t._v(" "),o("h2",{staticClass:"title-inner1"},[t._v(t._s(t.subtitle))])]),t._v(" "),o("section",{staticClass:"section-b-space p-t-0 ratio_asos"},[o("div",{staticClass:"container"},[t.itemsAvailable?o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("div",{staticClass:"theme-tab"},[o("div",{staticClass:"no-slider row"},t._l(t.getCategoryProduct(t.collection),(function(r,e){return o("div",{key:e,staticClass:"product-box"},[o("productBox2",{attrs:{product:r,index:e},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)})),0)])])]):o("div",{staticStyle:{textAlign:"center"}},[o("h3",[t._v("No item available")])])])]),t._v(" "),o("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(r){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[o("p",[t._v("Product Is successfully added to your wishlist.")])]),t._v(" "),o("Footer")],1)}),[],!1,null,"752a361e",null);r.default=component.exports}}]);