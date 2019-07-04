import Loading from './Loading/index'
import Button from './Button/index'

const components = [
  Loading,
  Button
]

const install = function(Vue, opt = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 单个引入
export {
  install, 
  Loading,
  Button
}

// 整体引入
export default {
  install,
  Loading,
  Button
}
