//引用
const express = require('express')
// 实例化express
const app = new express()

// 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server',(request,response) => {
    //响应头部 跨域问题
    response.setHeader('Access-Control-Allow-Origin','*')
    //响应体
    response.send('HOLLE AJAX')
})
app.listen('8000',()=>{
    console.log('监听成功')
})