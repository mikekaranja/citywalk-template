<template>
  <div>
    <nuxt />
    <layoutSetting v-if="this.$route.name !== 'landing'" />
  </div>
</template>

<script>
import layoutSetting from '../components/widgets/layout-setting'
export default {
  head() {
    return {
      title: 'Citywalk Limited'
    }
  },
  components: {
    layoutSetting
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
}
</script>
