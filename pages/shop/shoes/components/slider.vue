<template>
  <!-- Home slider -->
  <section class="p-0">
    <div class="slide-1 home-slider">
      <div>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div v-for="(item, index) in items" :key="index" class="swiper-slide">
              <div
                class="home text-center"
                :class="item.alignclass"
                :style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div>
                          <h4 style="color: white;">
                            {{ item.title }}
                          </h4>
                          <h1 style="color: white;">
                            {{ item.subtitle }}
                          </h1>
                          <p id="black-btn" v-scroll-to="'#element'" class="btn btn-solid black-btn">
                            shop now
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" />
        </div>
      </div>
    </div>
  </section>
  <!-- Home slider end -->
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      swiperOption: {
        slideSpeed: 5500,
        loop: true,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false
          },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/home-banner/banner1.jpg'),
          title: '',
          subtitle: '',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/banner2.jpg'),
          title: '',
          subtitle: '',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/banner3.jpg'),
          title: '',
          subtitle: '',
          alignclass: 'p-left'
        }
      ]
    }
  },
  method: {
    scrollDown() {
      window.scrollTo(0, 1000)
    }
  }
}
</script>

<style>
#black-btn {
  width: 150px;
  cursor: pointer;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  background-image: linear-gradient(30deg,#ff4c3b 50%,transparent 0);
  border: 2px solid #ff4c3b;
}
.slider-contain {
  justify-content: center !important;
}
</style>