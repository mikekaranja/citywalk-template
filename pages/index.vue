<template>
  <div>
    <Shoes />
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
// const Shoes = () => import('./shop/shoes')
import Shoes from './shop/shoes'
export default {
  components: {
    Shoes
  },
  async fetch({ store, params }) {
    const products = store.getters['products/returnProducts']
    
    if (process.browser && products.length === 0) {
      store.dispatch('layout/setLayoutVersion')
      const shopid = 'citywalk-limited'
      return store.dispatch('products/loadData', shopid)
    }
  }
}
</script>
