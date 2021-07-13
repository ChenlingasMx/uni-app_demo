<template>
	<view class="container">
		
		<view class="default-title"> image-图片 </view>
		<view class="padding30-lr flex-space-between">
			<x-image preview
				src="http://cdn-ali-img-staticbz.shanhutech.cn/bizhi/staticwp/201711/e2fdd69e2fb6facee2cdabefceb7c13b.jpg">
			</x-image>
			<x-image preview
				src="http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202105/7d5bf46cd468a1192bf2b51a99fb7a3c--1041061742.jpg">
			</x-image>
			<x-image src=""></x-image>
		</view>
		
		<view class="default-title"> input-输入框 </view>
		<view class="padding30-lr">
			<x-input @input="handleInput" v-model="value" />
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: "我是input-demo"
			}
		},
		methods: {
			handleInput(e) {
				console.log('e', e)
			}
		}
	}
</script>

<style>
	@import "~@/assets/scss/mixin.scss";

	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
