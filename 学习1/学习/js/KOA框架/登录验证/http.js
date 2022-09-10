const Koa = require('koa');
const Router = require('koa-router');
const koa = new Koa();
const router = new Router();
const fs = require('fs');

let check = ctx => {
   if( ctx.query.usename == 'xiaoge' && ctx.query.password == 123 ) {
       ctx.response.redirect('/');
   }else{
    ctx.response.redirect('/tip');
   }
}
let login = ctx =>{
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./login.html');
}
let tip = ctx =>{
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./tip.html');
}
let main = ctx =>{
    ctx.response.type = 'html';
    ctx.response.body = '登录成功  访问首页';
    console.log('登录成功 ');
}
router.get('/',main);
router.get('/login',login);
router.get('/tip',tip);
router.get('/check',check);
koa.use(router.routes());
koa.listen(3000);