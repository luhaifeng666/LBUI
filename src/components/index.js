import Loading from './Loading/index'
import Button from './Button/index'
import Banner from './Banner/index'

const components = [
  Loading,
  Button,
  Banner
]

const install = function(Vue, opt = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$handle = Banner.handle
}

// 单个引入
export {
  install, 
  Loading,
  Button,
  Banner
}

// 整体引入
export default {
  install,
  Loading,
  Button,
  Banner
}
