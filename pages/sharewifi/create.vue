<template>
  <view class="container">
  
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
				    <view class="form">
				        <view class="uni-list">
				        	<view class="uni-list-cell">
				        		<view class="uni-list-cell-left">
				        			个性标语
				        		</view>
				        		<view class="uni-list-cell-db">
				        			<input class="uni-input" name="nickname" placeholder="请输入个性标语" v-model="title"/>
				        		</view>
				        	</view>
				        </view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<view class="uni-list-cell-left">
									wifi名称
								</view>
								<view class="uni-list-cell-db" @click="getwifilist()">
										<view class="uni-input">{{wifiinfo}}</view>
								</view>
							</view>
						</view>
						<view class="uni-list">
							<view class="uni-list-cell">
								<view class="uni-list-cell-left">
									wifi密码
								</view>
								<view class="uni-list-cell-db">
									<input class="uni-input" name="wifipassword" placeholder="请输入wifi密码" v-model="password"/>
								</view>
							</view>
						</view>
				        <view class="item">
				            <view class="security">
				                <view class="text">WIFI密码不会被共享，请放心填写</view>
				            </view>
				        </view>
				    </view>
				    <view class="submit" v-if="wifiid" @click="submitinfo()">
				        <button type="primary">确认修改</button>
				    </view>
				    <view class="submit" v-else @click="addwifiinfo()">
				        <button type="primary" :disabled="btndisabled">生成我的二维码</button>
				    </view>
  </view>
</template>

<script>
export default {
  data() {
  	return {
  		title: '',
  		wifiinfo: '点击获取当前wifi信息',
		wifissid: '',
		wifibssid:'',
		wifiid:'',
  		index: 0,
		password:'',
		btndisabled:false,
		qrcodekey:''
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
