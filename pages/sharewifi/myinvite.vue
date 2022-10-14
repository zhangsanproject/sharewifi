<template>
	<view class="container">
		<uni-section :title="title" type="line">
			<uni-card padding="0" spacing="0">
				<template v-slot:cover>
					<view class="custom-cover">
						<image class="cover-image" mode="aspectFill" :src="cover">
						</image>
					</view>
				</template>
				<view slot="actions" class="card-actions no-border">
					<view class="card-actions-item">
						<uni-icons type="redo" size="18" color="#999"></uni-icons>
						<button open-type='share' class="share" :data-coupon="userid">分享</button>
					</view>
					<view class="card-actions-item" @click="saveimg()">
						<uni-icons type="download" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">保存</text>
					</view>
				</view>
			</uni-card>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				cover: '',
				title: '我的邀请码',
				userid: ''
			}
		},
		methods: {
		},
		onLoad(option) {
		}
	}
</script>

<style lang="scss">
	.container {
		overflow: hidden;
	}
	.share{
		margin-left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		border: none;
		background-color: transparent;
		padding-left: 1rpx;
		&::after{
			border:none;
		}
	}
	.custom-cover {
		flex: 1;
		flex-direction: row;
		position: relative;
		text-align: center;
	}

	.cover-content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40px;
		background-color: rgba($color: #000000, $alpha: 0.4);
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 15px;
		font-size: 14px;
		color: #fff;
	}

	.card-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 45px;
		border-top: 1px #eee solid;
	}

	.card-actions-item {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.card-actions-item-text {
		font-size: 12px;
		color: #666;
		margin-left: 5px;
	}

	.cover-image {
		flex: 1;
		height: 310px;
		width: 310px;
	}

	.no-border {
		border-width: 0;
	}
</style>
