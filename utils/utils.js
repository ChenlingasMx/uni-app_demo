/**
 * 图片预览
 * @param {arrany} urls 图片链接数组
 * @param {number} current 当前页
 */
export const previewImg = (urls, current) => {
	uni.previewImage({
		urls: urls,
		current: current || 0
	});
}


/**
 * 跳转指定页面
 */
export const navigateTo = page => {
	uni.navigateTo({
		url: page,
		fail: ({
			errMsg
		}) => {
			console.error(errMsg);
		}
	})
}

/**
 * 获取尺寸单位的值
 */
export const getSizeUnitValue = val => {
	const unit = getSizeUnit(val)
	return +(unit ? val.split(unit)[0] : 750)
}
/**
 * 获取尺寸单位
 */
export const getSizeUnit = val => {
	const unit = val.indexOf('rpx') !== -1 ? 'rpx' : val.indexOf('px') !== -1 ?
		'px' : val.indexOf('%') !== -1 ? '%' : ''
	return unit
}



/**
 * 延时提示
 * @param {String} title 标题
 * @param {String} icon 图标
 * @param {Number} delay 延迟时间
 */
export const delayToast = (title, icon = 'none', delay = 700) => {
	return new Promise((resolve, reject) => {
		uni.showToast({
			title,
			icon
		})
		const timer = setTimeout(() => {
			clearTimeout(timer);
			resolve()
		}, delay);
	})
}