<template>
  <div>
    <Shoes />
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
// const Shoes = () => import('./shop/shoes')
import Shoes from './shop/shoes'
export default {
  components: {
    Shoes
  },
  async created() {
    this.$store.dispatch('layout/setLayoutVersion')
    try {
      const { data } = await axios.get(
        `https://e-merse.firebaseio.com/pwa/products.json?orderBy=%22shopid%22&equalTo=%22citywalk-limited%22`
      );
      
      const orderbydatearray = Object.values(data).sort((a, b) => {
        return new Date(b.date_created) - new Date(a.date_created);
      });
      const categories = orderbydatearray.filter((el) => el.categoryname)
      this.$store.dispatch('products/addCategories', categories)
      const items = orderbydatearray.filter((el) => el.item)
      this.$store.dispatch('products/addProducts', items)
    } catch (err) {
      console.log("===>", err);
    }
  },
}
</script>
