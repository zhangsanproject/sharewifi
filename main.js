import App from './App'
import store from './store'
// #ifndef VUE3
import Vue from 'vue'

const islogin = ()=>{
	let userinfo = uni.getStorageSync('wxuserinfo') || null;
	if (userinfo == null)
	{
		uni.navigateTo({
		    url: '../sharewifi/login'
		});
	}
	return userinfo; 
}

const apiurl = ()=>{
	return "https://tn.51tunan.com";
}
Vue.prototype.$api = {islogin,apiurl};

const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.config.globalProperties.$adpid = "1111111111"
	app.config.globalProperties.$backgroundAudioData = {
		playing: false,
		playTime: 0,
		formatedPlayTime: '00:00:00'
	}
	return {
		app
	}
}
// #endif
