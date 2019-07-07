<template>
  <button class="lb-button" :class="type" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'lb-button',
  props: {
    text: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'normal'
    },
    size: {
      type: String,
      default: 'sm'
    }
  },

  methods: {
    handle() {
      this.$emit('handle')
    }
  }
}
</script>

<style lang="stylus">
  .lb-button
    padding .6rem 2rem
    border-radius .4rem
    border 1px solid
    display inline-block
    line-height 1
    cursor pointer
    outline none

    &.normal
      border-color #dcdfe6

    &.primary
      color #fff
      background #409eff

    &.success
      color #fff
      background #67c23a

    &.info
      color #fff
      background #909399

    &.warning
      color #fff
      background #e6a23c
    
    &.danger
      color #fff
      background #f56c6c 
</style>