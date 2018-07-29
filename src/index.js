import './style.scss'
import DLoaing from './lib/d-loading'

// 初始化  此时元素下已存在loading组件  但是还没显示 需要调用showLoading方法
let loading = new DLoaing({
	ele: document.body,
	effect: 'fade',
	backgroundColor: 'green',
	type: 'circle',
	mainColor: '#ff5591',
	auxiliaryColor: '#ffa6c7',
	otherAuxiliaryColor: '#f3b0ff',
	// loading删除之前
	beforeLoadingRemoved: function () {
		console.log('dom此时还未删除')
	},
	// loading结束事件  （此时dom已删除）
	loadingRemoved: function () {
		console.log('dom已删除')
	}
})

setTimeout(function () {
	loading.showLoading()
}, 1000)

// setTimeout(function () {
// 	loading.removeLoading()
// }, 2000)