import Vue from 'vue'
import Router from 'vue-router'
const AppHome = (resolve) => {
  import('@/views/Home/app-home').then((module) => {
    resolve(module)
  })
}

// eslint-disable-next-line
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome,
      meta: {
        title: 'Vue-components',
        auth: true
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      const hackIframe = document.createElement('iframe')
      hackIframe.style.display = 'none'
      hackIframe.src = './static/fixIosTitle.html?r=' + Math.random()
      document.body.appendChild(hackIframe)
      setTimeout(() => {
        document.body.removeChild(hackIframe)
      }, 30)
    }
  }
  next()
})
export default router
