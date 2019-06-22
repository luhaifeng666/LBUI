<template>
  <div class="bui-loading" v-show="loading"></div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus">
  .bui-loading
    position fixed
    width 100%
    height 100%
    background rgba(0, 0, 0, .6)
    top 0
    left 0
    z-index 999
    display flex
    align-items center
    justify-content center
</style>


