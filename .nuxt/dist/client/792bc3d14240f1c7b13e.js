(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{316:function(t,e,r){"use strict";var o={props:["title"]},c=r(30),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"page-title"},[r("h2",[t._v(t._s(t.title))])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.title?r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])])])])])])}),[],!1,null,null,null);e.a=component.exports},381:function(t,e,r){var content=r(729);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("e001987a",content,!0,{sourceMap:!1})},728:function(t,e,r){"use strict";var o=r(381);r.n(o).a},729:function(t,e,r){(t.exports=r(44)(!1)).push([t.i,".mapouter{position:relative;text-align:right}.gmap_canvas,.mapouter{height:250px;width:600px}.gmap_canvas{overflow:hidden;background:none!important}",""])},738:function(t,e,r){"use strict";r.r(e);r(50);var o,c=r(14),n=r(317),l=r(318),d=r(316),m={components:{Header:n.a,Footer:l.a,Breadcrumbs:d.a},data:function(){return{phoneimage:r(391),emailimage:r(390),phone1:"0786400202",phone2:"0786400202",address:"Woodvale Grove, Nairobi",email1:"digital@citywalk.co.ke",email2:"digital@citywalk.co.ke",errors:[],fname:null,lname:null,email:null,phone:null,message:null}},created:function(){this.$store.dispatch("layout/setLayoutVersion")},fetch:(o=Object(c.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,e.params,0!==r.getters["products/returnProducts"].length){t.next=6;break}return r.dispatch("layout/setLayoutVersion"),t.abrupt("return",r.dispatch("products/loadData","citywalk-limited"));case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),methods:{checkForm:function(t){this.errors=[],this.message||this.errors.push("Message required."),this.errors.length||window.open("https://wa.me/254".concat(this.phone1,"?text=").concat(this.message,"."),"_blank"),t.preventDefault()},validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}}},v=(r(728),r(30)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Breadcrumbs",{attrs:{title:"Contact"}}),t._v(" "),r("section",{staticClass:"contact-page section-b-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row section-b-space"},[r("div",{staticClass:"col-lg-7 map"},[r("div",[t._v("Click view larger map to find the directions")]),t._v(" "),r("div",{staticClass:"mapouter"},[r("div",{staticClass:"gmap_canvas"},[r("iframe",{attrs:{width:"600",height:"500",id:"gmap_canvas",src:"https://maps.google.com/maps?q="+t.address+"&t=&z=13&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}}),r("a",{attrs:{href:"https://www.whatismyip-address.com"}},[t._v("whatismyip.net")])])])]),t._v(" "),r("div",{staticClass:"col-lg-5"},[r("div",{staticClass:"contact-right"},[r("ul",[r("li",[r("div",{staticClass:"contact-icon"},[r("img",{attrs:{src:t.phoneimage,alt:"Generic placeholder image"}}),t._v(" "),r("h6",[t._v("Contact Us")])]),t._v(" "),r("div",{staticClass:"media-body"},[r("p",[t._v(t._s(t.phone1))])])]),t._v(" "),r("li",[t._m(0),t._v(" "),r("div",{staticClass:"media-body"},[r("p",{domProps:{innerHTML:t._s(t.address)}})])]),t._v(" "),r("li",[r("div",{staticClass:"contact-icon"},[r("img",{attrs:{src:t.emailimage,alt:"Generic placeholder image"}}),t._v(" "),r("h6",[t._v("Email")])]),t._v(" "),r("div",{staticClass:"media-body"},[r("p",[t._v(t._s(t.email1))])])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("form",{staticClass:"theme-form",attrs:{method:"post"},on:{submit:t.checkForm}},[t.errors.length?r("div",[r("ul",{staticClass:"validation-error mb-3"},t._l(t.errors,(function(e,o){return r("li",{key:o},[t._v("\n                  "+t._s(e)+"\n                ")])})),0)]):t._e(),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-6"}),t._v(" "),r("div",{staticClass:"col-md-6"}),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"message"}},[t._v("What can we help you find?")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{id:"message",placeholder:"Write Your Message",name:"message",rows:"6"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),t._m(1)])])])])])]),t._v(" "),r("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-icon"},[e("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),this._v(" "),e("h6",[this._v("Address")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12"},[e("input",{staticClass:"btn btn-solid",attrs:{type:"submit",value:"Send Your Message"}})])}],!1,null,null,null);e.default=component.exports}}]);