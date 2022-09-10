var  Koa = require('koa');
var  app = new Koa();

var Router = require('koa-router');
var router = new Router();

var fs = require('fs');

var res = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./res.html');
}
var login = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./login.html');
}
router.get('/',login);
router.get('/res',res);

app.use(router.routes());
app.listen(3000);
