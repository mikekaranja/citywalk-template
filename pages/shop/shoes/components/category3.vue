<template>
  <!-- category 3 -->
  <section class="p-0">
    <div class="container">
      <div class="row background">
        <div class="col" v-for="(item,index) in items" :key="index">
          <div>
            <div class="contain-bg">
              <h4>{{item.title}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- category 3 end-->
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'size 06' },
        { title: 'size 07' },
        { title: 'size 08' },
        { title: 'size 09' },
        { title: 'size 10' }
      ]
    }
  }
}
</script>
<style scoped>
@media (max-width: 991px){
  .background .contain-bg h4 {
    padding: 5%;
  }
}
</style>
