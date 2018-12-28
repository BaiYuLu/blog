<template>
  <div id="app">
		<blogHeader></blogHeader>
<router-view></router-view>
  </div>
</template>

<script>
	import addBlog from "./components/addBlog"
	import showBlogs from "./components/showBlogs"
	import blogHeader from './components/blogHeader'
export default {
  name: 'App',
	components:{
		blogHeader
	}
}
</script>

<style>

</style>
