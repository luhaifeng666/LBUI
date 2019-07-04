import Button from './src/Button'

Button.install = (Vue, opt = {}) => {
  Vue.component(Button.name, Button)
}

export default Button