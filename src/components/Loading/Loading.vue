<template>
  <div class="bui-loading" v-show="loading">
    <div class="bui-loading-content">
      <i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>
      <slot>加载中...</slot>
    </div>
  </div>
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
    top 0
    left 0
    z-index 999
    display flex
    align-items center
    background #fff
    justify-content center

    .bui-loading-content
      background #000
      color #ffffff
      padding 10px
      border-radius 6px
      text-align center
      font-size 12px
</style>


