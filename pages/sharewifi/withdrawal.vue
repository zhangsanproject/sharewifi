<!-- 提现 -->
<template>
	<view v-if="isshow">
		<view class="pop-view" >
			<view class="pop-titles">收入账户金额提现</view>
			<view class="pop-title">提现金额</view>
			<view class="pop-money">￥<input type="digit" :focus="true"  v-model="money"></view>
			<view class="pop-title">备注</view>
			<view class="pop-money"><input :focus="true"  v-model="remark"></view>
		</view>
		<view class="pop-btns">
			<view @click="outcashapply">确认发起提现</view>
		</view>
	</view>
	<view v-else>
		提现请联系管理员
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:'',
				remark:'',
				txzh:"",
				isshow:false
			};
		},
		methods:{
		}
	}
</script>
<style>
	page{
		background-color: #F8F8F8;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
	}
</style>
<style scoped lang="less">
.pop-view{
	width: 100%;
	padding: 20rpx 30rpx;
	box-sizing: border-box;
	background: #fff;
	border-radius: 20rpx;
	box-shadow: 0px 0px 40rpx 0px rgba(0, 0, 0, 0.12);
}
.pop-views{
	width: 100%;
	padding: 30rpx 27rpx 142rpx 27rpx;
	box-sizing: border-box;
	background: #fff;
}
.pop-titles{
	width: 100%;
	height: 39rpx;
	line-height: 39rpx;
	font-size: 28rpx;
	font-weight: 500;
	text-align: center;
}
.pop-title{
	width: 100%;
	height: 39rpx;
	line-height: 39rpx;
	font-size: 28rpx;
	font-weight: 500;
}
.pop-h2{
	width: 100%;
	height: 32rpx;
	line-height: 32rpx;
	font-size: 20rpx;
	color: #747474;
	text-align: center;
}
.pop-money{
	width: 100%;
	height: 103rpx;
	line-height: 103rpx;
	background: #fff;
	// border-radius: 20rpx;
	// margin-top: 77rpx;
	// padding: 0 32rpx;
	// box-sizing: border-box;
	// font-size: 30rpx;
	// font-weight: 500;
	display: flex;
	flex-flow:row wrap;
	justify-content: space-between;
	border-bottom: 1rpx solid #e3e3e3;
	font-size: 40rpx;
	font-weight: bold;
	input{
		width: 90%;
		height: 103rpx;
		line-height: 103rpx;
		font-size: 40rpx;
		font-weight: bold;
	}
}
.pop-info{
	width: 100%;
	height: 40rpx;
	line-height: 40rpx;
	font-size: 30rpx;
	text-align: right;
	color: #ccc;
	margin-top: 20rpx;
}
.pop-btns{
	position: fixed;
	left: 0;
	bottom: 50rpx;
	width: 100%;
	margin-top: 99rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	view{
		width: 408rpx;
		border-radius: 10rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 38rpx;
		background: #49c265;
		color: #fff;
	}
}
</style>
