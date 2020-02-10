<template>
<!-- eslint-disable -->

    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(product,index) in products"
          :key="index"
        >
          
          <div
            class="product-box"
            v-for="(product,index) in getCategoryProduct(catName)"
            :key="index"
          >
            <productBox2
              :product="product"
              :index="index"
            />
          </div>
        </div>
      </div>
    </div>

                      
  <!-- slider tab end -->
</template>

<script type="text/javascript">
/* eslint-disable */
import productBox2 from '../../../../components/product-box/product-box2'
export default {
  props: ['products', 'catName'],
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
