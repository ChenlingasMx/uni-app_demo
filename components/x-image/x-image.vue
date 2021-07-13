<template>
	<view class="flex-center m-image-c" :style="[style]" @tap="handleTap">
		<view class="loading-icon" v-if="loading"></view>
		<image class="image" :class="[{ loaded: loaded }]" :src="formateSrc" :mode="mode" @load="
        loaded = true;
        loading = false;
      " @error="loading = false"></image>
		<view class="err-tips" v-if="!loaded && !loading">加载失败</view>
	</view>
</template>

<script>
	import {
		previewImg
	} from "../../utils/utils";
	export default {
		name: "x-image",
		props: {
			src: {
				type: String,
				default: "http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202012/b76356ccb8ff8d1cb94938f547b0f1ab--1446216259.jpg",
			},
			size: {
				type: String,
				default: "200rpx",
			},
			height: {
				type: String,
				default: "",
			},
			mode: {
				type: String,
				default: "aspectFill",
			},
			radius: {
				type: String,
				default: "10rpx",
			},
			/**点击预览图片 */
			preview: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				loaded: false,
				loading: true,
			};
		},
		computed: {
			/**
			 * OSS图片剪裁
			 */
			formateSrc() {
				const size =
					this.size.indexOf("rpx") !== -1 ?
					this.size.split("rpx")[0] :
					this.size.indexOf("px") !== -1 ?
					this.size.split("px")[0] :
					this.size.indexOf("%") !== -1 ?
					this.size.split("%")[0] :
					750;
				return `${this.src}?x-oss-process=image/resize,w_${size * 1.5}`;
			},
			style() {
				const {
					size: width,
					height,
					radius
				} = this;
				return {
					width,
					height: height || width,
					borderRadius: radius,
				};
			},
		},
		methods: {
			handleTap() {
				if (this.preview) {
					previewImg([this.src]);
				} else {
					this.$emit("click");
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.m-image-c {
		overflow: hidden;
		position: relative;

		.loading-icon {
			position: absolute;
			z-index: 10;
		}

		.err-tips {
			position: absolute;
			z-index: 10;
			font-size: 20rpx;
			color: #999;
		}

		.image {
			opacity: 0;
			transition: opacity 0.4s cubic-bezier(0.34, 1.19, 1, 1.38);
			width: 100%;
			height: 100%;
			will-change: transform;

			&.loaded {
				opacity: 1;
			}
		}
	}
</style>
