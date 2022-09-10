var Books = require('./Books.js');

// 插入文档
function insert(){
    var bookArray = [
        {
           bookname: 'C#编程基础',
           booknum : 'A001',
           bookstatus : '在馆',
           time : '2018-01-13T03:51:27.833Z',
           lastuser : '王小双'
        }, {
            bookname: 'Java语言',
            booknum : 'A002',
            bookstatus : '借出',
            time : '2017-12-19T03:51:27.833Z',
            lastuser : '张媛媛'
         }, {
            bookname: '计算机基础',
            booknum : 'A003',
            bookstatus : '借出',
            time : '2018-01-13T03:51:27.833Z',
            lastuser : '何勤勤'
         }, {
            bookname: 'Photoshop商业网站设计',
            booknum : 'A004',
            bookstatus : '借出',
            time : '2018-01-13T03:51:27.833Z',
            lastuser : '何勤勤'
         }, {
            bookname: 'SQL Server数据库',
            booknum : 'A005',
            bookstatus : '在馆',
            time : '2018-01-13T03:51:27.833Z',
            lastuser : '张松'
         }, {
            bookname: 'H5 + CSS3 web开发',
            booknum : 'B001',
            bookstatus : '借出',
            time : '2018-01-13T03:51:27.833Z',
            lastuser : '李清清'
         }, {
            bookname: '响应式前端框架 Bootstrap应用',
            booknum : 'B002',
            bookstatus : '在馆',
            time : '2018-01-13T03:51:27.833Z',
            lastuser : '钟鹏'
         }, {
            bookname: 'JavaScript&JQuery应用指南',
            booknum : 'B003',
            bookstatus : '借出',
            time : '2018-01-13T03:51:27.833Z',
            lastuser : '张媛媛'
         }, {
            bookname: 'VUE.js混合APP开发',
            booknum : 'B004',
            bookstatus : '借出',
            time : '2018-01-13T03:51:27.833Z',
            lastuser : '方芳'
         }, {
            bookname: '企业级全栈开发',
            booknum : 'B004',
            bookstatus : '在馆',
            time : '2018-01-13T03:51:27.833Z',
            lastuser : '袁丽丽'
         },
    ];
    Books.create(bookArray,function(err,res){
        if(err){
            console.log('error:'+err)
        }else{
            console.log('Res' + res)
        }
    })
}
insert();
// 删除文档
   // function dedate() {
   //    let wherestr = {'bookname':'C#编程基础'};
   //    Books.deleteMany(wherestr,function(err,res){
   //       if(err){
   //          console.log(err);
   //       }else{
   //          console.log(res);
   //       }
   //    })
   // }
   // dedate()
//查找文档