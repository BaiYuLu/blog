<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<article>{{blog.content}}</article>
		<p>作者：{{blog.author}}</p>
		<p>分类：</p>
		<ul>
			<li v-for="item in blog.categories" :key="item">
				{{item}}
			</li>
		</ul>
		<button @click="del">删除</button>
		<router-link :to="'/edit/'+this.id" tag="button">编辑</router-link>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				id:this.$route.params.id,
				blog:{},
			};
		},
		created(){
			axios.get('/posts/'+this.id+".json").then(
				result=>{
					//console.log(data);
					return result.data;
				}).then(data=>{
					//console.log(data);
					this.blog=data;
				})				
		},
		methods:{
			del(){
				axios.delete('/posts/'+this.id+".json").then(response=>{
					this.$router.push({path:"/"});
				})
			}
		}
	}
</script>

<style lang="scss" scoped="">
	#single-blog{
		max-width: 960px;
		margin: 0 auto;
		padding: 20px;
		background: #eee;
		border: 1px dotted #aaa;
	}

</style>
