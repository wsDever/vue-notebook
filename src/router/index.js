import Vue from 'vue'
import Router from 'vue-router'
import Topbar from '@/components/Topbar'
import Lists from '@/components/Lists'
import Editor from '@/components/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      components: {
      	top:Topbar,
      	left:Lists,
      	right:Editor
      }
    }
  ]
})
