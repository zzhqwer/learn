const Koa = require('koa');
const koa = new Koa();
const Router = require('koa-router');
const router = new Router();
const fs = require('fs');
var main = ctx =>{
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./demo.html');
}
var login = ctx =>{
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./index.html');
}
router.get('/',main);
router.get('/login',login);
koa.use(router.routes());
koa.listen(3000);