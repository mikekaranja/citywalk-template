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
                <b-tab title="All">
                  <div class="no-slider row">
                    <div
                      class="product-box"
                      v-for="(product,index) in products"
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
                <b-tab
                  v-for="(collection,index) in cat"
                  :title="collection.categoryname"
                  :key="index"
                >
                  <div class="no-slider row">
                    <div
                      class="product-box"
                      v-for="(product,index) in getCategoryProduct(collection.categoryname)"
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
import productBox2 from '../../../../components/product-box/product-box2'
export default {
  props: ['products', 'cat'],
  components: {
    productBox2
  },
  data() {
    return {
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: false
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
