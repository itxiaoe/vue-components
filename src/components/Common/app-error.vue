<template>
    <div class="app-error" v-if="error.show">
      <error-1/>
      <error-2/>
      <error-3/>
    </div>
</template>

<script>
import Error1 from './error/error-1'
import Error2 from './error/error-2'
import Error3 from './error/error-3'
export default {
  name: 'app-error',
  components: {
    Error1,
    Error2,
    Error3
  },
  computed: {
    error: {
      get () { return this.$store.state.error }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/base";
  .app-error{
    .fixed-full;
    z-index: 1000000;
  }

</style>
