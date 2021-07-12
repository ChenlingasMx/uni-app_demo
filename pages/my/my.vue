<template>
	<view class="container">
		<view style="font-size: 24px;">
			number:<text>{{this.$store.state.number}}</text>
		</view>
		<button @click="handleAdd('add')">+1</button>
		<button @click="handleAdd('del')">-1</button>
	</view>
</template>

<script>
	export default {
		created() {},
		data() {
			return {
			}
		},
		methods: {
			handleAdd(type) {
				// vuex异步调用actions
				if (type === 'add') {
					this.$store.dispatch("asyncUpdate", {
						type: "number",
						value: this.$store.state.number + 1
					})
				}
				// vuex同步调用mutations
				if (type === 'del') {
					this.$store.commit("update", {
						type: "number",
						value: this.$store.state.number - 1
					})
				}
			}
		},
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	.center {
		display: flex;
		align-items: center;
		justify-items: center;
	}
</style>

