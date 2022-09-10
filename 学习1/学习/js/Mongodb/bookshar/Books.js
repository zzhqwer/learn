
let mongoose = require('./mongoose.js'),Schema = mongoose.Schema;

let Books = new Schema({
    bookname    :   {type:String},
    booknum     :   {type:String},
    bookstatus  :   {type:String},
    time        :   {type : Date},
    lastuser    :   {type:String}
})


module.exports = mongoose.model('Books',Books);


