<template>
  <div id="app">
    <ul id="nav">
      <li><router-link to="/loading">Loading</router-link></li>  
    </ul>
    
    <transition name="fade">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
  li
    border-bottom 1px solid #ddd
    padding 1.2rem 0
    a
      text-decoration none
      color #333
      font-size 1.5rem

      &.router-link-exact-active
       color #42b983

.fade-enter-active
.fade-leave-active 
  transition: all .3s ease

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform translateX(100%)
}
</style>
