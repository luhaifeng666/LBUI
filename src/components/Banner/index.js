import Banner from './src/Banner'

Banner.install = ((Vue, opt = {}) => {
  Vue.component(Banner.name, Banner)
})

export default Banner