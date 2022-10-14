<template>
	<view>
		<uni-section title="我的邀请" type="line">
			<uni-list v-for="(wifi,index) in list" :key="index">
				<!-- <uni-list-item title="暂无数据" /> -->
				<uni-list-item :title="wifi.uname" :rightText="wifi.invite_time" />
				<!-- <uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" /> -->
			</uni-list>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ismore:true,
				currpage:1,
				pagesize:5,
				list:[],
				userinfo:''
			}
		},
		methods: {
			
		},
		onLoad(option) {			
		}
	}
</script>

<style>

</style>
