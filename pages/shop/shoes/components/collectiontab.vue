<template>
<!-- eslint-disable -->
<div>
  <!-- slider tab  -->
  <section class="section-b-space p-t-0 ratio_asos" style="marginTop: 5%;">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="theme-tab">
              <b-tabs content-class="mt-3">
                <!-- check with all -->
                <b-tab title="All">
                   <div style="margin: 3%;">
                    <nuxt-link :to="{ path: '/product/categories/all'}">
                      <h4 style="color: yellow">SEE ALL&nbsp; <i aria-hidden="true" class="fa fa-angle-right"></i></h4>
                    </nuxt-link>
                  </div>
                  <div class="no-slider row hide-mobile">
                    <div
                      class="product-box"
                      v-for="(product,index) in products.slice(0,8)"
                      :key="index"
                    >
                    <productBox2
                      @opencartmodel="showCartModal"
                      @showCompareModal="showcomparemodal"
                      @openquickview="showquickview"
                      @showalert="alert"
                      @alertseconds="alert"
                      :product="product"
                      :index="index"
                    />
                    </div>
                  </div>
                  <div class="row hide-all">
                    <div class="col">
                      <div class="product-4 product-m no-arrow">
                        <div v-swiper:mySwiper="swiperOption">
                          <div class="swiper-wrapper">
                            <div
                              class="swiper-slide"
                              v-for="(product,index) in products.slice(0,8)"
                              :key="index"
                            >
                              <div class="product-box">
                                <productBox2
                                  @opencartmodel="showCartModal"
                                  @showCompareModal="showcomparemodal"
                                  @openquickview="showquickview"
                                  @showalert="alert"
                                  @alertseconds="alert"
                                  :product="product"
                                  :index="index"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-tab>
                <!-- check all test -->
                <b-tab
                  v-for="(collection,index) in cat"
                  :title="collection.categoryname"
                  :key="index"
                >
                  <div style="margin: 3%; color: yellow">
                    <nuxt-link :to="{ path: '/product/categories/'+collection.categoryname}">
                      <h4 style="color: yellow">SEE ALL <i aria-hidden="true" class="fa fa-angle-right"></i></h4>
                    </nuxt-link>
                  </div>
                  <div class="no-slider row">
                    <div
                      class="product-box"
                      v-for="(product,index) in getCategoryProduct(collection.categoryname).slice(0,8)"
                      :key="index"
                    >
                    <productBox2
                      @opencartmodel="showCartModal"
                      @showCompareModal="showcomparemodal"
                      @openquickview="showquickview"
                      @showalert="alert"
                      @alertseconds="alert"
                      :product="product"
                      :index="index"
                    />
                    </div>
                  </div>
                </b-tab>
                <!-- check item -->
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
</div>
  <!-- slider tab end -->
</template>

<script type="text/javascript">
/* eslint-disable */
import checkSwiper from './checkSwiper'
import productBox2 from '../../../../components/product-box/product-box2'
export default {
  props: ['products', 'cat'],
  components: {
    productBox2,
    checkSwiper
  },
  data() {
    return {
      itemsAvailable: false,
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        slideSpeed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: false,
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    }
  },
  computed: {
    category(){
      const categItems = this.cat
      categItems && categItems.unshift({categoryname: "All"})
      return categItems
    },
    getSelectedPro() {
      return collection =>
        this.$store.getters['products/getcollectionProduct'](collection)
    }
  },
  methods: {
    getCategoryProduct(collection) {
      if(collection === 'All'){
        return this.products.map(item => item)
      }
      return this.products.filter((item) => {
        if (item.category.find(i => i === collection)) {
          if (item.length > 0) {
            this.itemsAvailable = true
          }
          return item
        }
      })
    },
    alert(item) {
      this.dismissCountDown = item
    },
    showCartModal(item, productData) {
      this.showCart = item
      this.cartproduct = productData
      this.$emit('openCart', this.showCart, this.cartproduct)
    },
    showquickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
      this.$emit('openQuickview', this.showquickviewmodel, this.quickviewproduct)
    },
    showcomparemodal(item, productData) {
      this.showcomapreModal = item
      this.comapreproduct = productData
      this.$emit('openCompare', this.showcomapreModal, this.comapreproduct)
    }
  }
}
</script>
<style scoped>
 .hide-all {
   display: none;
 }
 @media (max-width: 991px){
  .hide-mobile {
    display: none
  }
  .hide-all {
   display: block;
 }
}
</style>
