import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../component/hello/Hello.vue'
import Bye from '../component/bye/Bye.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bye',
      name: 'Bye',
      component: Bye
    }

  ]
})
