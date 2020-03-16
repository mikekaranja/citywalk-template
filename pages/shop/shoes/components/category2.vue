<template>
  <!-- category 2 -->
  <section class="p-0 ratio2_1">
    <div class="container-fluid">
      <div class="row category-border">
        <div v-for="(item, index) in items" :key="index" class="col-sm-4 border-padding">
          <div class="category-banner">
            <div>
              <img :src="item.imagepath" class="img-fluid bg-img" alt="">
            </div>
            <div class="category-box" style="cursor:pointer;" @click="imagePath(item.link)">
              <h2>{{ item.title }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- category 2 end -->
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          imagepath: require('@/assets/images/Men 430 x 280-min.jpg'),
          title: 'men',
          link: '/product/categories/Men\'s%20shoes'
        },
        {
          imagepath: require('@/assets/images/Women 430 x 280-min.jpg'),
          title: 'women',
          link: '/product/categories/Women\'s%20shoes'
        },
        {
          imagepath: require('@/assets/images/Kids 430 x 280-min.jpg'),
          title: 'kids',
          link: '/product/categories/Back%20To%20School'
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
