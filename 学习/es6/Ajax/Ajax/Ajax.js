//默认值
import DEFAULTS from '../Ajax/default.js'
//工具类 utils 
import { serialize, addURLData, serializeJSON } from '../Ajax/utils.js'
//常量
import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED, CONTENT_TYPE_JSON } from '../Ajax/constants.js'



//创建一个Ajax类
class Ajax {
    constructor(url, options) {
        this.url = url
        this.options = Object.assign({}, DEFAULTS, options)


        //防止constructor太过拥挤 
        //初始化
        this.init()
    }
    //初始化
    init() {
        // 1.第一步创建一个XMLHttpRequest实例对象
        const xhr = new XMLHttpRequest()
        //添加到this 类上面
        this.xhr = xhr
        // 2.第二步监听事件
        this.bindEvents()

        // 3.第三步请求的格式和地址
        this.xhr.open(this.options.method, this.url + this.addParam(), true)

        // 设置responseType
        this.setResponseType()

        //设置是否带有cookie
        this.isCookie()

        //设置是否超时timeout
        this.setTimeOut()

        //发送请求
        this.sendData()


    }

    // 绑定响应事件处理程序
    bindEvents() {
        const xhr = this.xhr

        const { success, httpCodeError, error, abort, timeout } = this.options

        //load
        xhr.addEventListener('load', () => {
            if (this.ok()) {
                success(xhr.response, xhr)
            } else {
                httpCodeError(xhr.status, xhr)
            }
        }, false)
        //error
        xhr.addEventListener('error', () => {
            error(xhr)
        }, false)
        //abort
        xhr.addEventListener('abort', () => {
            abort(xhr)
        }, false)
        //timeout
        xhr.addEventListener('timeout', () => {
            timeout(xhr)
        }, false)
    }
    //检测响应的HTTP 状态码是否正常
    ok() {
        const xhr = this.xhr
        return (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)
    }

    //在地址上添加数据
    addParam() {
        const { params } = this.options
        if (!params) return ''
        return addURLData(this.url, serialize(params))
    }

    //设置responseType
    setResponseType() {
        this.xhr.responseType = this.options.responseType
    }

    //设置是否带有cookie
    isCookie() {
        if (this.options.withCredentials) {
            this.xhr.withCredentials = true
        }
    }

    //设置是否超时timeout
    setTimeOut() {
        if (this.options.timeout > 0) {
            this.xhr.timeout = this.options.timeout
        }
    }

    //发送请求
    sendData() {
        const xhr = this.xhr
        const { data } = this.options
        if (!this.isSendData()) {
            return xhr.send(null)
        }
        let resultData = null
        if (this.isFormData()) {
            //发送FormDta 格式的数据
            resultData = data

        } else if (this.isFormURLEncodedData()) {
            //发送URLEncoded 格式的数据
            this.setContentType(CONTENT_TYPE_FORM_URLENCODED)
            resultData = serialize(data)
        } else if (this.isJSONData()) {
            //发送application/JSON 格式的数据
            this.setContentType(CONTENT_TYPE_JSON)

            resultData = serializeJSON(data)
        } else {
            // 发送其他格式的数据
            this.setContentType()
            resultData = data
        }
        xhr.send(resultData)
    }

    //是否需要使用send 发送数据
    isSendData() {
        const { data, method } = this.options
        if (!data) return false
        if (method.toLowerCase() === HTTP_GET.toLowerCase()) return false
        return true
    }

    //是否发送FormData 格式的数据
    isFormData() {
        return this.options.data instanceof FormData
    }

    //是否发送application/x-www-form-urlencoded"格式的数据
    isFormURLEncodedData() {
        return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_FORM_URLENCODED)
    }

    // 是否发送application/json
    isJSONData() {
        return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON)
    }

    //设置 Content-Type
    setContentType(contentType = this.options.contentType) {
        if (!contentType) return
        this.xhr.setRequestHeader('CONTENT-TYPE', contentType)
    }

    //获取XHR对象
    getXHR() {
        return this.xhr
    }
}


export default Ajax