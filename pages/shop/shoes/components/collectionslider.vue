<template>
  <!-- eslint-disable -->
<div>
  <!-- product slider -->
  <section  class="section-b-space">
    <div class="container">
      <div class="row multiple-slider">
        <div class="col-lg-3 col-sm-6" v-for="(collection,index) in cats" :key="index">
          <div class="theme-card">
            <h5 class="title-border" style="white-space: nowrap; width: 76%; overflow: hidden; textOverflow: ellipsis;">{{collection}}</h5>
            <div class="offer-slider slide-1">
              <div v-swiper:[index]="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div>
                      <div class="media" v-for="(product,index) in getCategoryProduct(collection).splice(0,3)" :key="index">
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.title}">
                          <img class="img-fluid" :src="product.imageUrls[0]" alt style="width: 110.8px; height: 160px; objectFit: contain;">
                        </nuxt-link>
                        <div class="media-body align-self-center">
                          <nuxt-link :to="{ path: '/product/sidebar/'+product.title}">
                            <h6 style="whiteSpace: nowrap; width: 90px; overflow: hidden; textOverflow: ellipsis;">{{product.name}}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
                            {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
                            <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
                          </h4>
                          <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide" v-if="getCategoryProduct(collection).length >= 4">
                    <div>
                      <div class="media" v-for="(product, index) in getCategoryProduct(collection).splice(3,3)" :key="index">
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.title}">
                          <img class="img-fluid" :src="product.imageUrls[0]" alt style="width: 110.8px; height: 160px; objectFit: contain;">
                        </nuxt-link>
                        <div class="media-body align-self-center">
                          <nuxt-link :to="{ path: '/product/sidebar/'+product.title}">
                            <h6 style="whiteSpace: nowrap; width: 90px; overflow: hidden; textOverflow: ellipsis;">{{product.name}}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
                            {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
                            <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
                          </h4>
                          <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div class="swiper-button-prev" slot="button-prev">
                <i class="fa fa-angle-left" aria-hidden="true" style="color: white"></i>
              </div>
              <div class="swiper-button-next" slot="button-next">
                <i class="fa fa-angle-right" aria-hidden="true" style="color: white"></i>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- product slider end -->
</div>
</template>
<script>
/* eslint-disable */
import { mapGetters } from 'vuex'
export default {
  props: ['products', 'cat'],
  data() {
    return {
      cats: ["NEW ARRIVALS", "Men's shoes", "Fragrances", "Women's shoes"],
      swiperOption: {
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      curr: 'products/changeCurrency'
    }),
    category() {
      this.cat.shift()
      return this.cat
    }
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    getCategoryProduct(collection) {
      return this.products.filter((item) => {
        if (item.category.find(i => i === collection)) {
          return item
        }
      })
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100)
      return price
    }
  }
}
</script>