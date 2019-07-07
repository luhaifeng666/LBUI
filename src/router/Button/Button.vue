<template>
  <div class="overlay">
    <lb-banner @handle="handle">Buttons</lb-banner>
    <p class="lb-title">按钮种类</p>
    <ul class="lb-button-list">
      <li v-for="(item, index) in buttons" :key="index">
        {{item}}: 
        <lb-button :type="item">{{item}}</lb-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttons: ['normal', 'primary', 'info', 'danger', 'success', 'warning']
    }
  },
  methods: {
    handle () {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .lb-title
    font-size 1.8rem
    color #333
    text-align left 
    margin 1rem

  .lb-button-list
    padding-left 1rem
    li 
      text-align left 
      border-bottom 1px solid #d2d2d2
      line-height: 3rem
      font-size: 1.4rem

      button
        float right 
        margin .3rem 1rem 0 0
</style>

