<template>
  <!-- about section-->
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="title3">
            <h4>about us</h4>
            <h2 class="title-inner3">{{title}}</h2>
            <div class="line"></div>
          </div>
          <div class="about-text">
            <p>{{text}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- about section end -->
</template>
<script>
export default {
  data() {
    return {
      title: 'welcome to city walk',
      text: 'We are a brand committed to delivering unique, elegant and stylish shoes for the whole family as well as bags, fragrances and other accessories.'
    }
  }
}
</script>
