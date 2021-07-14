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
		<view class="padding30">
			<x-input @input="handleInput" v-model="value" />
		</view>
		
		<view class="default-title"> button-按钮 </view>
		<view class="padding30">
			<x-button  themeColor="red" disabled loading plain > 按钮 </x-button>
		</view>
		<view class="padding30">
			<x-button shapeStyle="circle" width="64px" height="32px" > 按钮 </x-button>
		</view>
		<view class="padding30">
			<x-button type="warning"> 按钮 </x-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: "我是input-demo",
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
