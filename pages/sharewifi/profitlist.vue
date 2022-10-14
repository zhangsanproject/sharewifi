<template>
	<view>
		<uni-section title="我的收益" type="line">
			<uni-list v-for="(wifi,index) in list" :key="index">
				<!-- <uni-list-item title="暂无数据" /> -->
				<!--<uni-list-item title="" rightText="" />-->
				<uni-list-item :title="wifi.type_name" :note="wifi.cash_status_name" :rightText="wifi.addtime" />
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
