<template>
  <!-- collection banner -->
  <section class="section-b-space p-t-0 ratio_40">
    <div class="container">
      <div class="row partition2">
        <div v-for="(item, index) in items" id="element" :key="index" class="col-md-6">
          <div>
            <div class="collection-banner p-right text-center">
              <div class="img-part">
                <img
                  :src="item.imagepath"
                  class="img-fluid bg-img"
                  alt
                >
              </div>
              <div class="contain-banner" @click="imagePath(item.link)">
                <div>
                  <!-- <h4 class="text-black">
                    {{ item.subtitle }}
                  </h4> -->
                  <h2 style="color: black;">
                    {{ item.title }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- collection banner end -->
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      items: [
        {
          imagepath: require('@/assets/images/home-banner/Men 540 x 360-min.jpg'),
          title: 'Men\'s',
          link: '/product/categories/Men\'s%20shoes'
        },
        {
          imagepath: require('@/assets/images/home-banner/Women 540 x 360-min.jpg'),
          title: 'Women\'s',
          link: '/product/categories/Women\'s%20shoes'
        }
      ]
    }
  },
  methods: {
    imagePath(title) {
      this.$router.push(title)
    }
  }
}
</script>
