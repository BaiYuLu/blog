<template>
	<div v-theme:column="'narrow'" id="show-blogs">
		<h1>博客总览</h1>
		<input type="text" v-model="search" placeholder="搜索">
		<div class="single-blog" v-for="item in filteredBlogs" :key="item.id">
			<router-link :to="'/blog/'+item.id"><h2 v-rainbow>{{item.title|to-uppercase|snippet}}</h2></router-link>
			<article>{{item.content|snippet}}</article>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				blogs:[],
				search:""
			};
		},
		created(){
			axios.get('/posts.json').then(
				result=>{
					//console.log(data);
					return result.data;
				}).then(data=>{
					//console.log(data);
					var blogsArray=[];
					for(let key in data){
						data[key].id=key;
						blogsArray.push(data[key]);
					}
					this.blogs=blogsArray;
				})
		},
		computed:{
			filteredBlogs(){
				return this.blogs.filter(blog=>{
					return blog.title.match(this.search);
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
	.single-blog{
		padding: 20px;
		margin: 20px 0;
		box-sizing: border-box;
		background: #eee;
		border: 1px dotted #aaa;
	}
	a{
		color: #444;
		text-decoration: none;
		
	}
	input[type="text"]{
		padding: 8px;
		width: 100%;
		box-sizing: border-box;
	}
}

</style>
