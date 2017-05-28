import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Backend from '../../config/backend'

import Home from '@/components/Home'
import Post from '@/components/Post'
import NotFound from '@/components/404'

Vue.use(Router)
Vue.use(Resource)

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
    Vue.http.get(`${Backend()}/wp-json/headless/v1/type-by-url${to.path}`)
      .then(response => {
        switch(response.body) {
          case 'post':
          case 'page':
            router.addRoutes([{path: to.path, component: Post}])
          default:
            router.addRoutes([{path: to.path, component: NotFound}])
        }
      })
      .catch(() => {
        router.addRoutes([{path: to.path, component: NotFound}])
      })
      .finally(() => {
        next(to.path)
        return
      })
  }
  else {
    next()
  }
})

export default router

