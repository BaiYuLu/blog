import Vue from 'vue'
import Router from 'vue-router'

import showBlogs from '@/components/showBlogs'
import addBlog from '@/components/addBlog'
import singleBlog from '@/components/singleBlog'
import editBlog from '@/components/editBlog'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:showBlogs},
		{path:'/add',component:addBlog},
		{path:'/blog/:id',component:singleBlog},
		{path:'/edit/:id',component:editBlog}
  ],
	mode:'history'
})
