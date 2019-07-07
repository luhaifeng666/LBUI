<template>
  <div class="lb-loading" v-show="loading" :style="`background-color:${background}`">
    <lb-banner @handle="handle">Loading</lb-banner>
    <div class="lb-loading-content">
      <i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>
      <slot>加载中...</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lb-loading',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: '#fff'
    }
  },
  methods: {
    handle () {
      this.$emit('handle')
    }
  }
}
</script>

<style lang="stylus">
  .lb-loading
    position fixed
    width 100%
    height 100%
    top 0
    transform translateX(0)
    z-index 999
    display flex
    align-items center
    background #fff
    justify-content center

    .lb-loading-content
      background #000
      color #ffffff
      padding 1rem
      border-radius .6rem
      text-align center
      font-size 1.2rem
      i 
        margin-right: .6rem
</style>


