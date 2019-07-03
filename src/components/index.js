import Loading from './Loading/index'

const components = [
  Loading
]

const install = function(Vue, opt = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 单个引入
export {
  install, 
  Loading
}

// 整体引入
export default {
  install,
  Loading
}
