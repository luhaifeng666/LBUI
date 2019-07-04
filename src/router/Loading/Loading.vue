<template>
  <div class="overlay">
    <lb-loading 
      :loading="loading" 
      :background="background"
      @handle="handle"
    >加载中</lb-loading> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      background: 'rgba(0,0,0,.6)'
    }
  },

  methods: {
    handle () {
      this.$router.replace('/')
    }
  }
}
</script>


