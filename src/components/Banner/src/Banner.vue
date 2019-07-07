<template>
  <div class="lb-banner">
    <i class="fa fa-angle-left fa-2x" aria-hidden="true" @click="handle"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'lb-banner',
  props: {
    
  },
  methods: {
    handle () {
      this.$emit('handle')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .lb-banner 
    line-height 5rem
    padding: 0 1rem
    text-align center
    position fixed
    top 0
    left 0
    width 100%
    background-color #fff
    font-size 1.5rem
    box-shadow 0 0.1rem 0.3rem #d2d2d2

    i 
      float left
      line-height 5rem
</style>


