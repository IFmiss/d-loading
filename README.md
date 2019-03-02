# d-loading


一个通用的loading效果
### 使用方式
引入
<pre>
npm install @dw/d-loading
</pre>

调用
<pre>
import Loading from '@dw/d-loading'
import '@dw/lib/index.css'

let dloading = new Loading(document.body)
dloading.showLoading()

dloading.hideLoading()

dloading.removeLoading()
</pre>
