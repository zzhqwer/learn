let http = require('http');
let server = http.createServer(function(request,reponse){
    if(request.url !== '/favtion.ico'){
        request.on('data',(data)=>{
            console.log('读取完成'+data);
        })
        request.on('end',() =>{
            console.log('');
        })
    }
});
server.listen(3000,'127.0.0.1');