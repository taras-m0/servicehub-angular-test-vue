import Vue from 'vue'
import Router from 'vue-router'
import result from "@/components/result";
import bookmarks from "@/components/bookmarks";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: result
    },{
      path: '/bookmarks',
      component: bookmarks
    }
  ]
})
