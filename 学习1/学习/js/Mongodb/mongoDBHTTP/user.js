const { model } = require('mongoose');

//加载mongoose对象
var mongoose = require('./mongoose.js'),Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : {type:String},
    userpwd : {type : String},
    userage  : {type : Number},
    loginDate : {type : Date}
})

module.exports = mongoose.model('User',UserSchema)