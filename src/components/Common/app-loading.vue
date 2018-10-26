<template>
    <div class="app-loading" @touchmove.prevent>
      <loading-1 v-if="loading.type === 1"/>
      <loading-2 v-if="loading.type === 2"/>
      <loading-3 v-if="loading.type === 3"/>
    </div>
</template>

<script>
import Loading1 from './loading/loading-1'
import Loading2 from './loading/loading-2'
import Loading3 from './loading/loading-3'
export default {
  name: 'app-loading',
  components: {
    Loading1,
    Loading2,
    Loading3
  },
  computed: {
    loading: {
      get () { return this.$store.state.loading }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/base";
  .app-loading{
    .fixed-full;
    z-index: 100000;
  }
</style>
