let mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost:27017/test';
mongoose.connect(DB_URL);

mongoose.connection.on('connected',function(){
    console.log('MongoDB connection opan to');
})

mongoose.connection.on('error',function(err){
    console.log('MongoDB connection err' + err);
})
mongoose.connection.on('disconnected',function(){
    console.log('MongoDB connection disconnection');
})

module.exports = mongoose;