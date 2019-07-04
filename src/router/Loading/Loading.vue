<template>
  <div class="loading-box">
    <lb-loading 
      :loading="loading" 
      :background="background"
      @handle="handle"
    >加载中</lb-loading> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      background: 'rgba(0,0,0,.6)'
    }
  },

  methods: {
    handle () {
      this.$router.replace('/')
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


