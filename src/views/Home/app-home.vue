<template>
  <div class="home">
    home
  </div>
</template>
<script>
import {getUserInfo, getSmsCode} from '../../api/api'

export default {
  name: 'app-home',
  components: {},
  data () {
    return {}
  },
  created () {
    this.getData()
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    getData () {
      getUserInfo({
        uid: 4
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    sentSms () {
      getSmsCode({
        mobile: '13333767010',
        type: 3
      })
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/base";
</style>
