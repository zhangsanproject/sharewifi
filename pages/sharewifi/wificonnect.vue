<template>
  <view class="container">
	  <uni-section class="mb-10" :title="title" :sub-title="wifiinfo"></uni-section>
				 <u-toast ref="uToast"></u-toast>
				    <view class="tips">
				        <view class="item">
				            <view class="icon">
								<image src="/static/i/Wi-Fi.png" style="height: 20px;width: 20px;"></image>
				            </view>
				            <view class="text">一键快速连接</view>
				        </view>
				        <view class="item">
				            <view class="icon">
				                <image src="/static/i/lock.png" style="height: 20px;width: 20px;"></image>
				            </view>
				            <view class="text">无需告知密码</view>
				        </view>
				        <view class="item">
				            <view class="icon">
				                <image src="/static/i/isoc.png" style="height: 20px;width: 20px;"></image>
				            </view>
				            <view class="text">安全防蹭网</view>
				        </view>
				    </view>
					
				    <view class="submit" @click="connectwifi()">
				        <button type="primary" :disabled="btndisabled">{{btninfo}}</button>
				    </view>
  </view>
</template>

<script>
export default {
  data() {
  	return {
		title:'',
		wifiinfo:'',
  		wificonnect: false,
		btndisabled:false,
		wifissid:'',
		password:'',
		btninfo:'一键连接wifi',
		wifibssid:'',
		nowSSID:'',
		nowBSSID:'',
		wifiid:''
  	}
  },  
  methods: {
  },
  onLoad(option) {
  }
};
</script>

<style scoped lang="scss">
.ad {
    margin-top: 30rpx;
}
.mb-10{
	text-align: center;
}
.submit {
    margin: 30rpx;
}

.tips {
    justify-content: space-around;
    margin: 30rpx 0rpx;
}

.tips,.tips .item {
    display: flex;
    flex-direction: row;
}

.tips .item {
		justify-content: center;
    align-items: center;
}

.tips .item .text {
    font-size: 24rpx;
    margin-left: 10rpx;
}

.form {
    background-color: #fff;
    border-radius: 15rpx;
    margin: 30rpx;
    padding: 15rpx 15rpx 50rpx 15rpx;
}

.form .item .security {
    align-items: center;
    display: flex;
		margin-left: 140rpx;
}

.form .item .security .text {
    color: #23ac3a;
    font-size: 20rpx;
    margin-left: 10rpx;
}
</style>
