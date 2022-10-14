<template>
	<view class="container">
		<view class="banner">
				<view class="nav-box">
						<view class="nav-title">
								<text class="nav-text">WIFI免密一键连</text>
								<text class="nav-text">微信扫一扫连接WiFi</text>
						</view>
						<view class="nav-desc">
								<text class="nav-sub">一键连接·无需告知密码·安全防蹭网</text>
						</view>
				</view>
		</view>
		<view class="window">
				<view class="item">
						<view class="icon">
								<u-icon name="/static/wifi-i.png" size="48"></u-icon>
						</view>
						<view class="content" @click="oninfo('./create')">
								<view class="title">创建WiFi码</view>
								<view class="small">一键连接·安全防蹭网</view>
						</view>
				</view>
				<view class="item">
						<view class="icon">
								<u-icon name="/static/me.png" size="48"></u-icon>
						</view>
						<view class="content" @click="oninfo('./wifilist')">
								<view class="title">我的WiFi码</view>
								<view class="small">查看管理智能WiFi码</view>
						</view>
				</view>
		</view>
		<view class="blocks">
				<view class="head">
						<view class="title">
								<view class="line"></view>
								<view class="text">特色功能</view>
						</view>
				</view>
				<view class="function">
						<view class="item">
								<view class="icon">
										<u-icon name="/static/qudaoyinliu.png" style="width: 10px;"></u-icon>
								</view>
								<view class="content">
										<view class="title">扫码直连</view>
										<view class="small">无需输入密码，扫码就可以连接WiFi</view>
								</view>
						</view>
						<view class="item">
								<view class="icon">
										<u-icon name="/static/chuda.png" size="56"></u-icon>
								</view>
								<view class="content">
										<view class="title">广告分成</view>
										<view class="small">用户扫你的Wifi二维码,你可以获得广告分成</view>
								</view>
						</view>
						<view class="item">
								<view class="icon">
										<u-icon name="/static/hangyejiejuefangan.png" size="56"></u-icon>
								</view>
								<view class="content">
										<view class="title">每日结算</view>
										<view class="small">每日结算广告分成</view>
								</view>
						</view>
				</view>
		</view>
		
		<view class="blocks">
				<view class="head">
						<view class="title">
								<view class="line"></view>
								<view class="text">更多功能</view>
						</view>
				</view>
				<uni-grid :column="4" :highlight="true" :showBorder="false"  :square="false">
					<uni-grid-item v-for="(item, index) in miniprogram" :key="key">
						<navigator :appId="item.appid" openType="navigate" :path="item.pages" target="miniProgram">
						<view class="grid-item-box" style="background-color: #fff;">
								<image :src="item.icon_image" style="width: 40px;height: 40px;"></image>
								<text class="text">{{item.title}}</text>
						</view>
						</navigator>
					</uni-grid-item>
				</uni-grid>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gutter: 0,
				nvueWidth: 730,
				miniprogram:[]
			}
		},
		methods: {
		},
		onLoad(option) {
		}
	}
</script>

<style lang="scss">
	.demo-uni-row {
	}
	.topcard{
		background-color: #366af8;
		height: 120px;
	}
	.uni-h6{
		color:white;
	}
	.banner-title{
		height: 36px;
		background-color: #366af8;
		text-align: start;
		font-size: 20px;
		color: white;
	}
	.banner-des{
		height: 36px;
		text-align: start;
		color: white;
	}
	.button-des{
		font-size: 40rpx;
		width: 80px;
		background-color: #366af8;
		border-radius: 10rpx;
		color: white;
		height: 30px;
		text-align: center;
	}
	// 支付宝小程序没有 demo-uni-row 层级
	// 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级
	/* #ifdef MP-ALIPAY || MP-WEIXIN */
	::v-deep .uni-row {
		margin-bottom: 10px;
	}

	/* #endif */

	.demo-uni-col {
		height: 36px;
		border-radius: 5px;
	}

	.dark_deep {
		background-color: #99a9bf;
	}

	.dark {
		background-color: #d3dce6;
	}

	.light {
		background-color: #e5e9f2;
	}

	.example-body {
		margin-top: 15rpx;
			background-color: #fff;
			border-radius: 15rpx;
			font-size: 28rpx;
			margin: 0 auto 15rpx;
			padding: 30rpx;
			width: 88%;
	}
	.button-sp-area {
	    margin: 0 auto;
	    width: 100%;
	}.window {
    justify-content: space-around;
    margin: 40rpx 0rpx;
}

.window,.window .item {
    display: flex;
    flex-direction: row;
}

.window .item {
    align-items: center;
    background-color: #3669f8;
    border-radius: 20rpx;
    color: #fff;
    padding: 15rpx 20rpx;
}

.window .item .icon {
    margin-right: 15rpx;
}

.window .item .content .title {
    font-size: 32rpx;
    font-weight: bolder;
}

.window .item .content .small {
    font-size: 20rpx;
    margin-top: 10rpx;
}

.function .item {
    align-items: center;
    color: #595959;
    display: flex;
    flex-direction: row;
    margin: 40rpx 0rpx;
}

.function .item .icon {
    margin-right: 15rpx;
}

.function .item .content .title {
    font-size: 28rpx;
    font-weight: bolder;
    margin: 10rpx 0rpx;
}

.function .item .content .small {
    font-size: 26rpx;
}

.tool {
    background-color: #fff;
    border-radius: 5rpx;
    margin: 30rpx auto;
}

.tool .item {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.tool .item .text {
    font-size: 28rpx;
    margin-top: 15rpx;
}

.blocks {
    margin-top: 15rpx;
		background-color: #fff;
		border-radius: 15rpx;
		font-size: 28rpx;
		margin: 0 auto 15rpx;
		padding: 30rpx;
		width: 88%;
}

.blocks .head .title {
    color: #3669f8;
    font-weight: bolder;
		display: flex;
    flex-direction: row;
}

.blocks .head .title .line {
    border: 1rpx solid #3669f8;
		margin-right: 10rpx;
}

.banner_ad {
    height: auto!important;
    padding-top: 0rpx!important;
}

.banner,.banner_ad {
    background-color: #366af8;
    margin-bottom: 15rpx;
}

.banner {
    height: 350rpx;
    padding-top: 60rpx;
}

.banner .nav-box {
    position: absolute;
    width: 100%;
}

.banner .nav-box .nav-title {
    color: #fff;
    font-weight: 600;
    padding: 10%;
}

.banner .nav-box .nav-title .nav-text {
    float: left;
    font-size: 48rpx;
    width: 100%;
}

.banner .nav-box .nav-desc {
    color: #fff;
    font-size: 28rpx;
    padding: 10%;
}

.grid {
    background-color: #fff;
    border-radius: 10rpx;
    box-shadow: 0rpx 0rpx 10rpx #eee;
    margin: 0rpx auto;
    padding: 30rpx 0rpx;
    width: 96%;
}

.grid .item {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.grid .item .text {
    font-size: 28rpx;
    margin-top: 15rpx;
}
.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-item-box-row {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
</style>
