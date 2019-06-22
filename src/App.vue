<template>
  <div id="app">
    <Loading  :loading="loading" />
  </div>
</template>

<script>
import Loading from './components/Loading/Loading'

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
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
