//常量
import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED } from './constants.js'

//默认参数
const DEFAULTS = {
    method: HTTP_GET,
    //请求头携带的数据
    params: null,
    //params: {
    //   usename: 'alex',
    //   age: 18 
    // }
    // usename=alex&age=19
    // 请求体携带的数据
    data: null,
    //data: {
    //   usename: 'alex',
    //   age: 18 
    // } 
    //data: FormData数据

    //请求什么的格式
    contentType: CONTENT_TYPE_FORM_URLENCODED, // 名值对的格式
    responseType: 'text',
    timeoutTime: 0,
    withCredentials: false,


    //方法
    success() { },
    httpCodeError() { },
    error() { },
    abort() { },
    timeout() { }

}

export default DEFAULTS 