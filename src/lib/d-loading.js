/**
 * loading组件
 */
// 这是loading的类型
import { type } from './type.js'
// 引入dom的操作
import {dom} from './../commonjs/dom'

// 引入样式
import './d-loading.scss'

class Dloading {
  constructor(options) {
    // 默认配置
    let defaultOptions = {
      // dom对象或者  元素的id字符
      ele: 'loading',
      // 提示的名字
      name: '请稍等...',
      // 类型 loading 的类型
      type: 'default',
      // 背景色（整体的背景色）
      backgroundColor: 'transparent',
      // 主色调
      mainColor: '#aaa',
      // 辅色
      auxiliaryColor: '#aaa',
      // 其他辅色（具体看loading的svg使用几种颜色控制， 这里最多三种）
      otherAuxiliaryColor: '#aaa',

      // loading进入的类型  none  或者  fade 的效果 （无效果 和 渐变）
      effect: 'none',

      // loading中间区域的背景色
      contentBackgroundColor: 'rgba(0,0,0,0.7)',
      // loading中间区域的宽度
      contentWidth: '100px',
      // loading中间的高度
      contentHeight: '100px',

      // timer 时长
      // timer: 3000,
      
      // 事件
      // 删除loading之前执行的代码
      beforeLoadingRemoved: () => {},
      // 删除loading之后执行的代码
      loadingRemoved: () => {}
    }

    if (!options.ele) options.ele = options

    // 拿到数据
    this.options = Object.assign({}, defaultOptions, options)

    // 判断元素  如果给的是string则  通过getElementById查找到元素
    if (typeof this.options.ele === 'string') {
      this.options.ele = document.getElementById(this.options.ele)
    }

    // 判断元素是否是body
    this.options._isbody = (this.options.ele === document.body)

    this._initLoadingEle()
  }

  // 这时候需要给元素添加loading的组件，需要存放到ele之中，此时不显示loading
  _initLoadingEle () {
    this.elements = {}
    // 初始化大的遮罩层
    this.elements.dLoading = document.createElement('div')
    this.elements.dLoading.className = 'd-loading ' + (this.options._isbody ? 'fix-loading ' : ' ') + this.options.effect
    this.elements.dLoading.style.backgroundColor = this.options.backgroundColor
    this.options.ele.appendChild(this.elements.dLoading)

    // 初始化中间层
    this.elements.contentLoading = document.createElement('div')
    this.elements.contentLoading.className = 'd-loading-content'
    this.elements.contentLoading.style.cssText = `width: ${this.options.contentWidth};
                                    height: ${this.options.contentHeight};
                                    background-color: ${this.options.contentBackgroundColor}`
    this.elements.dLoading.appendChild(this.elements.contentLoading)

    // loading 的svg
    let svg = type(this.options.type, this.options.mainColor, this.options.auxiliaryColor, this.options.otherAuxiliaryColor)
    this.elements.loadingSvg = document.createElement('div')
    this.elements.loadingSvg.className = 'd-loading-svg'
    this.elements.loadingSvg.innerHTML = svg
    this.elements.contentLoading.appendChild(this.elements.loadingSvg)

    // loading 的提示信息
    // 如果name没有内容或者有些type不适合有name我们则不显示name
    if (this.options.name === '') return
    this.elements.loadingName = document.createElement('p')
    this.elements.loadingName.className = 'd-loading-name'
    this.elements.loadingName.innerText = this.options.name
    this.elements.contentLoading.appendChild(this.elements.loadingName)
  }

  showLoading (timer) {
    const _this = this
    dom.addClass(this.elements.dLoading, 'show')
    if (timer) {
      this.t = setTimeout(function () {
        _this.removeLoading()
      }, timer)
    }
  }

  hideLoading () {
    dom.removeClass(this.elements.dLoading, 'show')
  }

  removeLoading () {
    let _this = this
    this.options.beforeLoadingRemoved()
    this.hideLoading()
    clearTimeout(this.t)
    let nt = setTimeout(function () {
      _this.options.ele.removeChild(_this.elements.dLoading)
      _this.options.loadingRemoved()
      clearTimeout(nt)
    }, 300)
  }
}

export default Dloading