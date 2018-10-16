import './style.scss'
import DLoaing from './lib/d-loading'

document.getElementsByClassName('loading1')[0].onclick = () => {
	// 初始化  此时元素下已存在loading组件  但是还没显示 需要调用showLoading方法
	let loading = new DLoaing({
		ele: document.body,
		effect: 'fade',
		backgroundColor: 'rgba(255,255,255,0.3)',
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

	loading.showLoading()

	setTimeout(function () {
		loading.removeLoading()
	}, 2000)
}

document.getElementsByClassName('loading2')[0].onclick = () => {
	// 初始化  此时元素下已存在loading组件  但是还没显示 需要调用showLoading方法
	let loading = new DLoaing({
		ele: document.body,
		effect: 'fade',
		backgroundColor: 'rgba(255,255,255,0.3)',
		type: 'defalut',
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

	loading.showLoading()

	setTimeout(function () {
		loading.removeLoading()
	}, 2000)
}