<template>
  <!-- eslint-disable -->
  <div>
    <Header />
    <div class="title1 section-t-space">
      <h4>{{title}}</h4>
      <h2 class="title-inner1">{{subtitle}}</h2>
    </div>
    <section class="section-b-space p-t-0 ratio_asos">
      <div class="container">
        <div v-if="!itemsAvailable" style="textAlign: center">
          <h3>No item available</h3>
        </div>
        <div v-else class="row">
          <div class="col">
            <div class="theme-tab">
              <div class="no-slider row">
                <div
                  class="product-box"
                  v-for="(product,index) in getCategoryProduct(collection)"
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
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import productBox2 from "../../../components/product-box/product-box2";
import Header from "../../../components/header/header2";
import Footer from "../../../components/footer/footer2";

export default {
  components: {
    productBox2,
    Header,
    Footer
  },
  data() {
    return {
      itemsAvailable: false,
      collection: "",
      products: [],
      title: "special products",
      subtitle: this.$route.params.name,
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0
    };
  },
  created() {
    this.collection = this.$route.params.name;
    const products = this.$store.getters["products/returnProducts"];
    if (products.length === 0) {
      this.$router.push("/shop/shoes");
      return;
    }
    let allProducts;
    if (this.$route.params.name === "all") {
      allProducts = products.map(item => item);
    } else {
      allProducts = products.filter(
        product => product.category[0] === this.$route.params.name
      );
    }
    if (allProducts.length > 0) {
      this.itemsAvailable = true;
    }
    this.products = allProducts;
  },
  methods: {
    getCategoryProduct(collection) {
      if (collection === "all") {
        return this.products.map(item => item);
      }
      return this.products.filter(item => {
        if (item.category.find(i => i === collection)) {
          return item;
        }
      });
    },
    alert(item) {
      this.dismissCountDown = item;
    },
    showCartModal(item, productData) {
      this.showCart = item;
      this.cartproduct = productData;
      this.$emit("openCart", this.showCart, this.cartproduct);
    },
    showquickview(item, productData) {
      this.showquickviewmodel = item;
      this.quickviewproduct = productData;
      this.$emit(
        "openQuickview",
        this.showquickviewmodel,
        this.quickviewproduct
      );
    },
    showcomparemodal(item, productData) {
      this.showcomapreModal = item;
      this.comapreproduct = productData;
      this.$emit("openCompare", this.showcomapreModal, this.comapreproduct);
    }
  }
};
</script>

<style scoped>
</style>