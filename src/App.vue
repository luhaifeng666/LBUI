<template>
  <div id="app">
    <ul id="nav">
      <li v-for="(item, index) in menus" :key="index">
        <router-link :to="item.url">
          {{item.name}}
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </router-link>
      </li>
    </ul>
    
    <transition name="fade">
        <router-view name="lb-loading"></router-view>
        <router-view name="lb-buttons"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {name: 'Loading', url: '/loading'},
        {name: 'Button', url: '/Buttons'},
      ]
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
    padding 1.2rem 1rem
    a
      text-decoration none
      color #333
      font-size 1.5rem
      display block
      text-align left 

      i  
        float right 

      &.router-link-exact-active
       color #42b983

.fade-enter-active
.fade-leave-active 
  transition: all .3s ease

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform translateX(100%)
}
</style>
