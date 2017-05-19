import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import Home from '@/components/Home'
import Post from '@/components/Post'
import Page from '@/components/Page'
import NotFound from '@/components/404'

Vue.use(Router)
Vue.use(Resource)

const api = 'http://snowdog.dev/wp-json/snowdog/type-by-url'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    Vue.http.get(`${api}${to.path}`)
      .then(response => {
        switch(response.body) {
          case 'post':
            router.addRoutes([{path: to.path, component: Post}])
          case 'page':
            router.addRoutes([{path: to.path, component: Page}])
          default:
            router.addRoutes([{path: to.path, component: NotFound}])
        }
        next(to.path)
        return
      })
  }
  else {
    next()
  }
})

export default router

