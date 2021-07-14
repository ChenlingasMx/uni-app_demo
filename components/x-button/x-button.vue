<template>
	<button
		class="flex-center m-btn-c"
		:class="[{ plain, disabled }]"
		hover-class="opacity-hover"
		:style="[style]"
		:open-type="openType"
		@tap.stop="handleClick"
		@getphonenumber="bindgetphonenumber"
	>
		<view class="loading-icon" v-if="loading" :style="[{ borderColor: plain ? (themeColor ? themeColor : '') : '#ffffff' }]"></view>
		<slot></slot>
	</button>
</template>

<script>
import { getSizeUnitValue, getSizeUnit } from '../../utils/utils.js';
export default {
	name: 'm-button',
	props: {
		width: { type: String, default: '92%' },
		height: { type: String, default: '96rpx' },
		fontSize: { type: String, default: '32rpx' },
		fontWeight: { type: String, default: '500' },
		//形状 circle(圆角), square(方形)
		shapeStyle: {
			type: String,
			default: 'square'
		},
		themeColor: { type: String, default: '' },
		plain: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
		loading: { type: Boolean, default: false },
		//是否需要阻止重复点击【默认300ms】
		preventClick: {
			type: Boolean,
			default: false
		},
		openType: { type: String, default: '' },
	},
	data() {
		return {
			timer: 0
		};
	},
	computed: {
		style() {
			const { width, height, fontSize, fontWeight, shapeStyle, themeColor, plain } = this;
			return {
				width,
				height,
				fontSize,
				fontWeight,
				borderRadius: shapeStyle === 'square' ? '12rpx' : `${getSizeUnitValue(height) / 2}${getSizeUnit(height)}`,
				backgroundColor: plain ? 'transparent' : themeColor ? themeColor : '',
				borderColor: plain ? (themeColor ? themeColor : '') : '',
				color: plain ? (themeColor ? themeColor : '') : ''
			};
		}
	},
	methods: {
		handleClick() {
			if (this.disabled) return;
			if (this.preventClick) {
				if (new Date().getTime() - this.time <= 300) return;
				this.timer = new Date().getTime();
				const timer = setTimeout(() => {
					clearTimeout(timer);
					this.timer = 0;
				}, 300);
			}
			this.$emit('click');
		},
		bindgetphonenumber({ detail }) {
			if (this.disabled) return;
			this.$emit('getphonenumber', detail);
		}
	}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/common.scss";
.m-btn-c {
	margin: 0 auto;
	padding: 0;
	background-color: $uni-color-primary;
	border: none;
	color: #ffffff;
	box-shadow: 0 10rpx 14rpx 0 rgba(191, 191, 191, 0.2);
	&:after {
		content: '';
		border: none;
	}
	&.disabled {
		opacity: 0.5;
	}
	&.plain {
		background-color: transparent;
		box-shadow: none;
		color: $uni-color-primary;
		border: 1px solid $uni-color-primary;
	}
}
</style>
