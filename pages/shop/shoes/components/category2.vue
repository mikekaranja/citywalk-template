<template>
    <!-- category 2 -->
<section class="p-0 ratio2_1">
    <div class="container-fluid">
        <div class="row category-border">
            <div class="col-sm-4 border-padding" v-for="(item, index) in items" :key="index">
                <div class="category-banner">
                    <div>
                        <img :src="item.imagepath" class="img-fluid bg-img" alt="">
                    </div>
                    <div class="category-box">
                      <h2>{{item.title}}</h2>
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
          imagepath: require('@/assets/images/men.jpg'),
          title: 'men'
        },
        {
          imagepath: require('@/assets/images/women.jpg'),
          title: 'women'
        },
        {
          imagepath: require('@/assets/images/children.jpg'),
          title: 'kids'
        }
      ]
    }
  }
}
</script>
