<template>
  <div>
    <Loading :loading="loading">加载中</Loading> 
  </div>
</template>

<script>
import Loading from '@/components/Loading/Loading'

export default {
  components: {
    Loading
  },

  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang="stylus">

</style>


