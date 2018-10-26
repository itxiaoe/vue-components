/* eslint-disable*/
import 'babel-polyfill'
import Vue from 'vue'
import vuex from 'vuex'
import store from './store/index'
import * as types from './store/mutation-types'
import App from './App'
import router from './router'
import Navigation from 'vue-navigation'
import VueClipboard from 'vue-clipboard2'
import http from './utils/http'
import 'muse-ui/lib/styles/base.less'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import { Button,BottomSheet,Dialog,Snackbar,Helpers,Icon } from 'muse-ui'
import theme from 'muse-ui/lib/theme'
import Toast from 'muse-ui-toast'
import Loading from 'muse-ui-loading'
import 'muse-ui/lib/styles/theme.less'
// import WechatAuth from 'vue-wechat-auth'
import CONFIG from './config/index'
import './assets/less/app.less'
Vue.config.productionTip = false
Vue.use(vuex)
Vue.use(Navigation, {router})
theme.add('teal', {
  primary: '#EE332B',
  secondary: '#FDF9D7',
  success: '#2AC556',
  warning: '#F1AC16'
}, 'light')
theme.use('teal')
Vue.use(Button)
Vue.use(BottomSheet)
Vue.use(Dialog)
Vue.use(Snackbar)
Vue.use(Helpers)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(VueClipboard)
Vue.use(Loading,{
  overlayColor: 'hsla(0,0%,100%,.9)',        // 背景色
  size: 48,
  color: 'primary',                           // color
  className: ''                               // loading class name
})
Toast.config(CONFIG.UI.toast)
Vue.prototype.$http = http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  mounted () {
    store.commit(types.SET_LOADING,{
      type: 3,
      show: true
    })
  },
})
