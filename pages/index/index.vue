<template>
	<view class="container">
		<text>首页</Text>
		<uni-table stripe emptyText="暂无更多数据">
			<uni-tr>
				<uni-th v-for="(item,index)  in title" :id="item.id" align="center">{{item.name}}</uni-th>
			</uni-tr>
			<uni-tr v-for="(item,index)  in data" :id="item.id">
				<uni-td align="center">{{item.name}}</uni-td>
				<uni-td align="center">{{item.age}}</uni-td>
				<uni-td align="center">{{item.sex}}</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:[
					{name:"姓名",id:1},
					{name:"年龄",id:2},
					{name:"性别",id:3},
				],
				data:[
					{name:'腾仔',sex:"男",age:1,id:1},
					{name:'腾龙',sex:"男",age:12,id:2},
					{name:'腾龙',sex:"男",age:12,id:3},
					{name:'腾龙',sex:"男",age:12,id:4},
				]
			}
		},
		methods: { }
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
