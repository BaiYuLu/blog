import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import axios from 'axios'


axios.defaults.baseURL='https://vue-blog-6b125.firebaseio.com'
// axios.defaults.headers.common['Authorization']='Token'
// axios.defaults.headers.post['content-type']='application/urlencode'
// axios.defaults.headers.get['Accepts']='application.json'

Vue.config.productionTip = false
Vue.use(VueResource)

Vue.directive('rainbow',{
	bind(el,binding){
		el.style.color="#"+Math.random().toString(16).slice(2,8);
		
	}
})
Vue.directive('theme',{
	bind(el,bingding){
		if(bingding.value=="wide"){
			el.style.maxWidth="1260px";
		}else if(bingding.value=="narrow"){
			el.style.maxWidth="560px";
		}
		if(bingding.arg=='column'){
			el.style.background='#6677cc';
			el.style.padding='20px'
		}
	}
})

Vue.filter("to-uppercase",value=>{
	return value.toUpperCase();
})

Vue.filter("snippet",value=>{
	return `${value.slice(0,20)}...`;
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
