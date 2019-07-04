<template>
  <span class="lb-button">
    <slot></slot>
  </span>
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
    padding 1.2rem 2rem
    border-radius .4rem
    border 1px solid #333
    display inline-block
    line-height 1
    cursor pointer
</style>