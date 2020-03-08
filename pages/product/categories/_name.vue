<template>
  <!-- eslint-disable -->
  <div>
    <Header />
    <div class="title1 section-t-space">
      <h4>{{ title }}</h4>
      <h2 class="title-inner1">{{ subtitle }}</h2>
    </div>
    <section class="section-b-space p-t-0 ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="theme-tab">
              <b-tabs content-class="mt-3">
                <b-tab
                  v-for="(subcollection, index) in allsubcategories"
                  :title="subcollection"
                  :key="index"
                >
                  <div style="margin-bottom: 55px;" class="no-slider row">
                    <div
                      class="product-box"
                      v-for="(product, index) in getSubcategoryProducts(
                        subcollection
                      )"
                      :key="index"
                    >
                      <productBox1
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
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="alert"
    >
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
// import CategoryTab from './components/category_tab'
import productBox1 from '../../../components/product-box/product-box2'
import Header from '../../../components/header/header2'
import Footer from '../../../components/footer/footer2'

export default {
  components: {
    // CategoryTab,
    productBox1,
    Header,
    Footer
  },
  data() {
    return {
      itemsAvailable: false,
      collection: '',
      products: [],
      subcategories: [],
      title: 'category products',
      subtitle: this.$route.params.name,
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  async fetch({ store }) {
    const products = store.getters['products/returnProducts']
    if (process.browser && products.length === 0) {
      store.dispatch('layout/setLayoutVersion')
      try {
        const { data } = await axios.get(
          `https://e-merse.firebaseio.com/pwa/products.json?orderBy=%22shopid%22&equalTo=%22citywalk-limited%22`
        )

        const orderbydatearray = Object.values(data).sort((a, b) => {
          return new Date(b.date_created) - new Date(a.date_created)
        })
        const categories = orderbydatearray.filter(el => el.categoryname)
        store.dispatch('products/addCategories', categories)
        const items = orderbydatearray.filter(el => el.item)
        store.dispatch('products/addProducts', items)
        // set cateory nav links
        let categoriesarray = []
        categories.map(category => {
          let categorylink = {
            path: `/product/categories/${category.categoryname}`,
            title: category.categoryname,
            type: 'link'
          }
          categoriesarray.push(categorylink)
        })
        store.dispatch('products/setCategoriesLinks', categoriesarray)
      } catch (err) {
        console.log('===>', err)
      }
    }
  },
  computed: {
    allsubcategories() {
      const subcategItems = this.subcategories

      subcategItems && subcategItems.unshift('All')
      return subcategItems
    }
  },
  mounted() {
    this.collection = this.$route.params.name
    const products = this.$store.getters['products/returnProducts']
    if (products.length === 0) {
      this.$router.push('/')
      return
    }
    let allProducts
    if (this.collection === 'All') {
      allProducts = products.map(item => item)
    } else {
      allProducts = products.filter(
        product => product.category[0] === this.collection
      )
    }
    if (allProducts.length > 0) {
      this.itemsAvailable = true
    }
    this.products = allProducts

    const categories = this.$store.getters['products/returnCategories']
    const category = categories.filter(
      el => el.categoryname === this.collection
    )
    if (category[0].subcategories) {
      this.subcategories = category[0].subcategories
    } else {
      this.subcategories = []
    }
  },
  methods: {
    getSubcategoryProducts(subcollection) {
      if (subcollection === 'All') {
        const filteredproducts = this.products
        return filteredproducts
      } else {
        const filteredproducts = this.products
          .filter(item => {
            return item.category
              .toString()
              .toLowerCase()
              .includes(this.collection.toLowerCase())
          })
          .filter(item => {
            return item.subcategory
              .toString()
              .toLowerCase()
              .includes(subcollection.toLowerCase())
          })
        console.log(subcollection, filteredproducts)
        return filteredproducts
      }
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
      this.$emit(
        'openQuickview',
        this.showquickviewmodel,
        this.quickviewproduct
      )
    },
    showcomparemodal(item, productData) {
      this.showcomapreModal = item
      this.comapreproduct = productData
      this.$emit('openCompare', this.showcomapreModal, this.comapreproduct)
    }
  }
}
</script>

<style scoped></style>
