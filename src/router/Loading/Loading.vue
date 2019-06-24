<template>
  <div class="loading-box">
    <Loading :loading="loading">加载中</Loading> 
  </div>
</template>

<script>
import Loading from '@/components/Loading/Loading'

export default {
  components: {
    Loading
  },

  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang="stylus">
  .loading-box
    position fixed
    width 100%
    height 100%
    top 0
    left 0
</style>


