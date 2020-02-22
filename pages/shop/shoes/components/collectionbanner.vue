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
              <div class="contain-banner">
                <div>
                  <h4 class="text-white">
                    {{ item.subtitle }}
                  </h4>
                  <h2 style="color: white;">
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
          imagepath: require('@/assets/images/home-banner/menshoes.jpg'),
          title: 'men',
          subtitle: '50% off'
        },
        {
          imagepath: require('@/assets/images/home-banner/womenshoes.jpg'),
          title: 'women',
          subtitle: '20% save'
        }
      ]
    }
  }
}
</script>
