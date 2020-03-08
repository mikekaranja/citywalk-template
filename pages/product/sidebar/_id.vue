<template>
  <!-- eslint-disable -->
  <div>
    <Header />
    <Breadcrumbs :title="getDetail.name" />
    <section class="section-b-space">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <productSidebar />
            </div>
            <div class="col-lg-9 col-sm-12 col-xs-12 productdetail">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6">
                    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                      <div class="swiper-wrapper">
                        <div
                          class="swiper-slide"
                          v-for="(product, index) in getDetail.imageUrls"
                          :key="index"
                        >
                          <img
                            :src="product"
                            :id="product"
                            class="img-fluid bg-img"
                            alt="productImage"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 slider-nav-images">
                        <div v-swiper:mySwiper1="swiperOption1">
                          <div class="swiper-wrapper">
                            <div
                              class="swiper-slide"
                              v-for="(product, index) in getDetail.imageUrls"
                              :key="index"
                            >
                              <img
                                :src="product"
                                :id="product"
                                class="img-fluid bg-img"
                                alt="productImage"
                                @click="slideTo(index)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 rtl-text">
                    <div class="product-right">
                      <h2>{{ getDetail.name }}</h2>
                      <h3>Ksh {{ getDetail.price * curr.curr }}</h3>
                      <div class="pro_inventory">
                        <p class="active">
                          Hurry! We have few products in stock.
                        </p>
                        <div class="inventory-scroll">
                          <span style="width: 95%;"></span>
                        </div>
                      </div>
                      <div class="product-description border-product">
                        <h5 class="avalibility">
                          <span>In Stock</span>
                        </h5>
                        <div class="qty-box">
                          <div class="input-group"></div>
                        </div>
                      </div>
                      <div class="product-buttons">
                        <nuxt-link :to="{ path: '/checkout' }">
                          <button
                            class="btn btn-solid"
                            title="Add to cart"
                            @click="openWhatsAppForm(getDetail)"
                          >
                            Order on whatsapp
                          </button>
                        </nuxt-link>
                      </div>
                      <div class="border-product">
                        <h6 class="product-title">product details</h6>
                        <p>
                          {{
                            getDetail.description
                              ? getDetail.description + '....'
                              : ''
                          }}
                        </p>
                      </div>
                      <div class="border-product">
                        <h6 class="product-title">share this product on</h6>
                        <div class="product-icon">
                          <ul class="product-social">
                            <li>
                              <a
                                href="javascript:void(0)"
                                @click="facebookShare"
                              >
                                <i id="icons" class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                @click="whatsappShare"
                              >
                                <i id="icons" class="fa fa-whatsapp"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="border-product"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <relatedProduct :productTYpe="productTYpe" :productId="productId" />
      <b-modal id="modal-1" size="md" centered hide-footer>
        <template v-slot:modal-title>{{ getDetail.name }}</template>
      </b-modal>
    </section>
    <Footer />
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapGetters } from 'vuex'
import axios from 'axios'
import Header from '../../../components/header/header2'
import Footer from '../../../components/footer/footer2'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
import Timer from '../../../components/widgets/timer'
import productSidebar from '../../../components/widgets/product-sidebar'
import relatedProduct from '../../../components/widgets/related-products'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    Timer,
    productSidebar,
    relatedProduct
  },
  data() {
    return {
      getDetail: {},
      counter: 1,
      activeColor: '',
      selectedSize: '',
      qty: '',
      size: [],
      productTYpe: '',
      productId: '',
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true
      },
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        centeredSlides: false
      }
    }
  },
  computed: {
    ...mapState({
      currency: state => state.products.currency
    }),
    ...mapGetters({
      curr: 'products/changeCurrency'
    }),
    // getDetail(){
    //   const products = this.$store.getters['products/returnProducts']
    //   const singleProduct = products.filter(product => {
    //     return product.id === this.$route.params.id})
    //   return singleProduct[0];
    // },
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  async fetch({ store, params }) {
    const products = store.getters['products/returnProducts']
    
    if (process.browser && products.length === 0) {
      store.dispatch('layout/setLayoutVersion')
      const shopid = 'citywalk-limited'
      return store.dispatch('products/loadData', shopid)
    }
  },
  mounted() {
    const products = this.$store.getters['products/returnProducts']
    console.log('juice', products) 
    if (products.length === 0) {
      // this.$router.push('/')
      return
    }
    const singleProduct = products.filter(item => {
      return item.title === this.$route.params.id
    })
    this.getDetail = singleProduct[0]

    this.$store.dispatch(
      'products/addDetailCategory',
      this.getDetail.category[0]
    )
    this.$store.dispatch('products/addDetailId', this.getDetail.title)
    this.productTYpe = this.getDetail.category[0]
    this.productId = this.getDetail.title
    this.activeColor = this.uniqColor
  },
  methods: {
    facebookShare: function() {
      let siteorigin = window.location.origin
      window.open(
        'https://www.facebook.com/sharer/sharer.php?u=' +
          `${siteorigin}/.netlify/functions/product?title=${this.$route.params.id}`,
        'facebook-popup',
        'height=350,width=600'
      )
    },
    whatsappShare: function() {
      let siteorigin = window.location.origin
      window.open(
        `https://wa.me/?text=Have a look! ${siteorigin}/.netlify/functions/product?title=${this.$route.params.id}`,
        '_blank'
      )
    },
    priceCurrency: function() {
      this.$store.dispatch('products/changeCurrency')
    },
    addToWishlist: function(product) {
      this.$store.dispatch('products/addToWishlist', product)
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100
      return price
    },
    // Related Products display
    relatedProducts() {
      this.productTYpe = this.getDetail.category[0]
      this.productId = this.getDetail.id
    },
    // Display Unique Color
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    // add to cart
    addToCart: function(product, qty) {
      product.quantity = qty || 1
      this.$store.dispatch('cart/addToCart', product)
    },
    openWhatsAppForm(product) {
      product.quantity = 1
      this.$store.dispatch('cart/addToCart', product)
      this.$router.push('/checkout')
    },
    buyNow: function(product, qty) {
      product.quantity = qty || 1
      this.$store.dispatch('cart/addToCart', product)
      this.$router.push('/checkout')
    },
    // Item Count
    increment() {
      this.counter++
    },
    decrement() {
      if (this.counter > 1) this.counter--
    },
    // Change size variant
    changeSizeVariant(variant) {
      this.selectedSize = variant
    },
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false)
    },
    sizeVariant(id, slideId, color) {
      this.swiper.slideTo(slideId, 1000, false)
      this.size = []
      this.activeColor = color
      this.getDetail.variants.filter(item => {
        if (id === item.image_id) {
          this.size.push(item.size)
        }
      })
    }
  }
}
</script>

<style scoped>
#icons {
  font-size: 36px;
}
@media only screen and (max-width: 767px) {
  #icons {
    margin: 18px;
  }
}
</style>
