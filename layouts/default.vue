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

    // Initialize firebase
    setTimeout(() => {
      if (!window.firebase.apps.length) {
        const config = {
          apiKey: 'AIzaSyC76Juw8rMxbeVDbIm_ABL-IIhssVDDDn8',
          authDomain: 'e-merse.firebaseapp.com',
          databaseURL: 'https://e-merse.firebaseio.com',
          projectId: 'e-merse',
          storageBucket: 'e-merse.appspot.com',
          messagingSenderId: '662994060989',
          appId: '1:662994060989:web:1d12d6821c656a54'
        }
        window.firebase.initializeApp(config)
      }
    }, 500)
  }
}
</script>
