<template>
  <div id="app">
    <app-ad/>
    <app-error/>
    <app-loading/>
    <transition :name="transitionName">
      <navigation>
        <router-view class="child-view"></router-view>
      </navigation>
    </transition>
  </div>
</template>

<script>
/* eslint-disable*/
import AppAd from './components/Common/app-ad'
import AppError from './components/Common/app-error'
import AppLoading from './components/Common/app-loading'
export default {
  name: 'App',
  components: {
    AppAd,
    AppError,
    AppLoading
  },
  data(){
    return {
      transitionName: 'slide-left'
    }
  },
  created(){
    this.$navigation.on('forward', (to, from) => {
      this.transitionName = 'slide-left'
    })
    this.$navigation.on('back', (to, from) => {
      this.transitionName = 'slide-right'
    })
    this.$navigation.on('replace', (to, from) => {
      this.transitionName = 'slide-left'
    })
    this.$navigation.on('refresh', (to, from) => {
      this.transitionName = 'slide-left'
    })
    this.$navigation.on('reset', () => {
      this.transitionName = 'slide-left'
    })
    this.$navigation.once('forward', () => {
      this.transitionName = 'slide-left'
    })
    const off = () => {
      console.log('will not appear')
    }
    this.$navigation.on('forward', off)
    this.$navigation.off('forward', off)
  }
}
</script>

<style lang="less" scoped>
  html, body {
    width: 100%;
    height: 100%;
  }

  #app {
    width: 100%;
    min-height: 100vh;
    max-width: 768px;
    margin: 0 auto;
  }

  .child-view {
    position: absolute;
    width: 100%;
    max-width: 768px;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0
  }
  .clear-fiexd{
    position: fixed;
    right: 10px;
    z-index: 9999;
    bottom: 10px;
  }
</style>
