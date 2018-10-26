<template>
    <div class="app-ad" v-if="ad.show">
      <ad-1/>
      <ad-2/>
      <ad-3/>
    </div>
</template>

<script>
import Ad1 from './ad/ad-1'
import Ad2 from './ad/ad-2'
import Ad3 from './ad/ad-3'
export default {
  name: 'app-ad',
  components: {
    Ad1,
    Ad2,
    Ad3
  },
  computed: {
    ad: {
      get () { return this.$store.state.ad }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/base";
  .app-ad{
    .fixed-full;
    z-index: 10000;
  }
</style>
