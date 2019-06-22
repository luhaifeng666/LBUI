import Vue from 'vue'
import Loading from './Loading/Loading.vue'

const COMPONENTS = {
  Loading
}

Object.keys(COMPONENTS).forEach(item => {
  Vue.component(item, COMPONENTS[item])
})

export default COMPONENTS