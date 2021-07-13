<template>
  <view class="m-input-c">
    <input
      class="input"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      placeholder-class="placeholder"
      :value="value"
      :password="password"
      :maxlength="maxlength"
      :cursor-spacing="10"
      :focus="focus"
      :confirm-type="confirmType"
      @input="input"
    />
  </view>
</template>

<script>
export default {
  name: "x-input",
  props: {
    value: {
      type: String | Number,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    password: {
      type: Boolean,
      default: false,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: -1,
    },
    confirmType: {
      type: String,
      default: "done",
    },
  },
  methods: {
    input({ detail: { value } }) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.m-input-c {
  flex: 1;
  min-height: 100rpx;
  padding: 0 10rpx;

  .placeholder {
    font-size: 26rpx;
    font-family: PingFang SC;
    font-weight: 400;
    color: #999999;
  }

  .input {
    width: 100%;
    min-height: 100rpx;
    font-size: 26rpx;
    font-family: PingFang SC;
    font-weight: 400;
    color: #333;
  }
}
</style>
