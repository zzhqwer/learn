// 获取mongoose模块
var mongoose = require('mongoose');
// 声明数据库位置
var DB_URL = 'mongodb://localhost:27017/test';
// 连接数据库
mongoose.connect(DB_URL);
//判断连接状态
mongoose.connection.on('connected',function(){
    console.log('Mongoose connection open in ' + DB_URL);
})
//异常
mongoose.connection.on('error',function(err){
    console.log('Mongoose connection err'+err);
})
// 断开
mongoose.connection.on('disconnected',function(){
    console.log('Mongoose disconnected');
})
module.exports = mongoose;