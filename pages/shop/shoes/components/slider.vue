<template>
  <!-- Home slider -->
  <section class="p-0">
    <div class="slide-1 home-slider">
      <div>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
              <div
                class="home text-center"
                :class="item.alignclass"
                v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div>
                          <h4 style="color: white;">{{item.title}}</h4>
                          <h1 style="color: white;">{{item.subtitle}}</h1>
                          <p href="#" class="btn btn-solid black-btn">shop now</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
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
          imagepath: require('@/assets/images/home-banner/shoes3.jpg'),
          title: 'special offer',
          subtitle: 'men\'s shoes',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/shoes1.jpg'),
          title: 'special offer',
          subtitle: 'women\'s shoes',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/shoes2.jpg'),
          title: 'on sale',
          subtitle: 'latest shoes',
          alignclass: 'p-left'
        }
      ]
    }
  }
}
</script>
