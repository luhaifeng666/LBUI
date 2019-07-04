import Loading from './src/Loading.vue';

Loading.install = (Vue, opt = {}) => {
  Vue.component(Loading.name, Loading)
};

export default Loading