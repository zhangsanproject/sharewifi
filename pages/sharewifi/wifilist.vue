<template>
  <view class="container">
		<template>
			<view class="wifi" v-if="list.length">
					<view class="item" v-for="(wifi,index) in list" :key="index">
							<view class="top">
									<view class="content">
											<view class="info">
													<view class="name">{{wifi.title}}</view>
													<view class="username">{{wifi.SSID}}</view>
											</view>
											<view class="link">
													<view class="yesterday">累计访问<text class="number">{{wifi.wifi_pv}}</text>次</view>
													<view class="cumulative">累计有效连接<text class="number">{{wifi.wifi_uv}}</text>次</view>
													<view class="cumulative">创建时间  {{wifi.addtime}}</view>
											</view>
									</view>
									<view class="qrcode">
											
									</view>
							</view>
							<view class="bottom">
									<view class="btn" @click="del(wifi.id)">
											<button type="primary"  plain>删除</button>
									</view>
									<view class="btn" @click="detailinfo(wifi.qrcodekey)">
											<button type="primary"  plain>管理</button>
									</view>
									<view class="btn" @click="edit(wifi.qrcodekey)">
											<button type="primary" >修改</button>
									</view>
							</view>
					</view>
			</view>
			<view class="wifi-none" v-else>
				<view class="t-vtext">暂无数据</view>
				
			</view>
		</template>
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

<style scoped lang="scss">
	.wifi-none{
		width: 94%;
		font-size: 15px;
		text-align: center;
		
	}
	.t-vtext{
		margin-top: 30px;
	}
.wifi {
    margin: 25rpx auto 0;
    width: 94%;
}

.wifi .item {
    background-color: #fff;
    border-radius: 15rpx;
    box-shadow: 10rpx 10rpx 20rpx #ccc;
    flex-direction: column;
    margin-bottom: 30rpx;
    padding: 30rpx;
}

.wifi .item,.wifi .item .top {
    display: flex;
}

.wifi .item .top {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.wifi .item .top .content .info .name {
    font-weight: bolder;
}

.wifi .item .top .content .info .username {
    margin-bottom: 30rpx;
}

.wifi .item .top .content .link {
    font-size: 28rpx;
}

.wifi .item .top .content .link .cumulative {
    margin: 15rpx 0rpx;
}

.wifi .item .top .content .link .number {
    color: #3669f8;
    font-size: 32rpx;
    font-style: italic;
    margin: 0rpx 15rpx;
}

.wifi .item .bottom {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.wifi .item .bottom .btn {
    margin-left: 15rpx;
    width: 180rpx;
}

.search {
    margin: 0 auto;
    padding: 15rpx;
    width: 90%;
}
</style>
