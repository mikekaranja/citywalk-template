(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{315:function(t,e,r){"use strict";var o={props:["title"]},c=r(30),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"page-title"},[r("h2",[t._v(t._s(t.title))])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.title?r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])])])])])])}),[],!1,null,null,null);e.a=component.exports},372:function(t,e,r){var content=r(711);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("1161e29f",content,!0,{sourceMap:!1})},710:function(t,e,r){"use strict";var o=r(372);r.n(o).a},711:function(t,e,r){(t.exports=r(43)(!1)).push([t.i,".whatsapp-btn[data-v-24ac8500]{margin-top:5%;width:100%;font-size:16px;border:2px solid #48f748;color:#48f748;text-transform:capitalize}.whatsapp-btn[data-v-24ac8500] :hover{background:#48f748;color:#fff}",""])},717:function(t,e,r){"use strict";r.r(e);r(5),r(3),r(2),r(4),r(26),r(27),r(1),r(15),r(20);var o=r(0),c=r(709),n=r(31),l=r(313),d=r(314),v=r(315);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={components:{Header:l.a,Footer:d.a,Breadcrumbs:v.a,ValidationProvider:c.b,ValidationObserver:c.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({cart:"cart/whatsappCartItems",cartTotal:"cart/cartTotalAmount",curr:"products/changeCurrency"})),data:function(){return{user:{firstName:"",phone:"",email:"",address:"",city:"",state:"",pincode:""},isLogin:!1,paypal:{sandbox:"Your Sandbox ID"},payment:!1,environment:"sandbox",button_style:{label:"checkout",size:"medium",shape:"pill",color:"blue"},amtchar:""}},methods:{openWhatsApp:function(){window.open("https://wa.me/254786400202?text=Hi! My name is ".concat(this.user.firstName,". I am interested in this item ").concat(this.cart.name,". Please get back to me."),"_blank")},order:function(){this.isLogin=localStorage.getItem("userlogin"),this.isLogin?this.payWithStripe():this.$router.replace("/page/account/login-firebase")},payWithStripe:function(){var t=this,e=window.StripeCheckout.configure({key:"PUBLISHBLE_KEY",locale:"auto",closed:function(){e.close()},token:function(e){t.$store.dispatch("products/createOrder",{product:t.cart,userDetail:t.user,token:e.id,amt:t.cartTotal}),t.$router.push("/page/order-success")}});e.open({name:"Citywalk ",description:"Reach to your Dream",amount:100*this.cartTotal})},getamt:function(){return this.cartTotal.toString()},onPaymentComplete:function(data){this.$store.dispatch("products/createOrder",{product:this.cart,userDetail:this.user,token:data.orderID,amt:this.cartTotal}),this.$router.push("/page/order-success")},onCancelled:function(){console.log("You cancelled a window")},onSubmit:function(){console.log("Form has been submitted!")}}},h=(r(710),r(30)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Breadcrumbs",{attrs:{title:"Checkout"}}),t._v(" "),r("section",{staticClass:"section-b-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"checkout-page"},[r("div",{staticClass:"checkout-form"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.invalid;return[r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 col-sm-12 col-xs-12"},[r("div",{staticClass:"checkout-title"},[r("h3",[t._v("Customer Details")])]),t._v(" "),r("div",{staticClass:"column check-out"},[r("div",{staticClass:"form-group col-md-12 col-sm-12 col-xs-12"},[r("div",{staticClass:"field-label"},[t._v("\n                        Name\n                      ")]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"First name"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.firstName,expression:"user.firstName"}],attrs:{type:"text",name:"First name"},domProps:{value:t.user.firstName},on:{input:function(e){e.target.composing||t.$set(t.user,"firstName",e.target.value)}}}),t._v(" "),r("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"form-group col-md-12 col-sm-12 col-xs-12"},[r("ValidationProvider",{attrs:{rules:"required|digits:10",name:"phone Number"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"field-label"},[t._v("\n                          Phone\n                        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],attrs:{type:"text",name:"Phone"},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}}),t._v(" "),r("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])]}}],null,!0)}),t._v(" "),r("b-button",{staticClass:"whatsapp-btn",attrs:{type:"submit",pill:"",variant:"outline-success",disabled:o},on:{click:t.openWhatsApp}},[r("i",{staticClass:"fa fa-whatsapp",attrs:{"aria-hidden":"true"}}),t._v(" Talk To Us\n                      ")])],1)])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-sm-12 col-xs-12"},[r("div",{staticClass:"checkout-details"},[r("div",{staticClass:"order-box"},[r("div",{staticClass:"title-box"},[r("div",[t._v("\n                          Product\n                          "),r("span",[t._v("Total")])])]),t._v(" "),r("ul",{staticClass:"qty"},[r("li",[t._v("\n                          "+t._s(t._f("uppercase")(t.cart.name))+" X "+t._s(t.cart.quantity)+"\n                          "),r("span",[t._v(t._s(t._f("currency")(t.cart.price*t.curr.curr*t.cart.quantity,t.curr.symbol)))])])]),t._v(" "),r("ul",{staticClass:"sub-total"},[r("li",[t._v("\n                          Subtotal\n                          "),r("span",{staticClass:"count"},[t._v(t._s(t._f("currency")(t.cart.price*t.curr.curr,t.curr.symbol)))])])]),t._v(" "),r("ul",{staticClass:"sub-total"},[r("li",[t._v("\n                          Total\n                          "),r("span",{staticClass:"count"},[t._v(t._s(t._f("currency")(t.cart.price*t.curr.curr,t.curr.symbol)))])])])])])])])])]}}])})],1)])])]),t._v(" "),r("Footer")],1)}),[],!1,null,"24ac8500",null);e.default=component.exports}}]);