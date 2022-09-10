let Koa = require('koa');
let app = new Koa();
// app.use(cxt => {cxt.response.body = 'body'})
let fs = require('fs');
app.use(cxt =>{
    cxt.response.type= 'html';
    cxt.response.body = fs.createReadStream('./index.html');
}
)
app.listen(3000);