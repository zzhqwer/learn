<template>
  <main>
    <div class="container">
      <div class="mianL">
        <div class="hd">
          <h4>全部书籍</h4>
        </div>
        <div class="books-list" v-for = "(value,index) in list" :key="index"> 
          <h3>{{value.title}}}</h3>
          <ul>
            <li v-for="(item,i) in value.booksList" :key="i">
              <a href="javascript:;" >{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mianR">
          <div class="banner">
              <img src="img/banner01.png" alt="">
          </div>
          <div class="content">
              <div class="product" v-for="item in products" :key="item.id"> 
                <div class="imgBox">
                    <img :src="item.imgUrl" alt="">
                </div>
                  <div class="info">
                      <h4>{{ item.title }}</h4>
                      <p>{{ item.description }}</p>
                        <div class="btn">
                          <!--- 子路由 跳转:to="{ path：跳转路径 query：{参数 用于跳转到点击的页面然后 利用this.$route}} "  :to绑定---->
                          <router-link :to="{path: '/myma/' + item.name ,query:{id:item.id}}"> 立即购买</router-link>
                        </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
   data() {
     return {
            list:{
              soft:{
                  title:'移动互联网开发专业书籍',
                  booksList:[
                     { name:"Web标准网站设计之道"},
                     { name:"Photoshop商业网站设计"},
                     { name:"C#编程基础"},
                     { name:"SQL Server数据库基础"},
                     { name:"C#桌面应用程序开发"},
                     { name:"Java语言基础"},
                     { name:"Java面向对象编程"},
                     { name:"Java语言高级特性"}
                  ]},
              net:{
                  title:'移动互联网应用专业书籍',
                  booksList:[
                     { name:"计算机基础应用"},
                     { name:"Linux系统管理"},
                     { name:"企业网络互联技术"},
                     { name:"Windows网络服务管理"},
                     { name:"Windows系统管理"},
                     { name:"Windows活动目录管理"},
                     { name:"计算机网络技术"}
                  ]}
            },
    products:[
              {   
                  id:1,
                  title:'移动互联网开发全套书籍',
                  description:"高端专业独享教材,突破传统教与学,合理利用碎片化学习时间。",
                  imgUrl:"img/1.png",
                  name:'develop'
              },
              {
                  id:2,
                  title:'移动互联网应用全套书籍',
                  description:"内含丰富的课程资源，面试题库等企业必备信息库。",
                  imgUrl:"img/2.png",
                  name:'apply'
              },
              {
                  id:3,
                  title:'大数据全套书籍',
                  description:"正在到来的数据革命，以及它如何改变政府、商业与我们的生活。",
                  imgUrl:"img/3.png",
                  name:'bigdata'
              },
              {
                  id:4,
                  title:'人工智能全套书籍',
                  description:"你对人工智能的一切疑问，好读易懂，有趣有料。",
                  imgUrl:"img/4.png",
                  name:'ai'
              }
          ]
    }
   }
}
</script>

<style scoped>
    main .container {display: flex;justify-content: space-between;margin: 15px auto;background: #eee;}
    main .mianL{width: 30%;height: 50%; display: flex;flex-direction: column;background: #fff; margin-right:15px ;color: #000;}
    main .hd{background: #058;color: #fff;text-align: left;padding: 10px;font-size: 14px;}
    main .books-list{border-bottom:solid 1px #ccc ;}
    main .books-list h3{padding: 10px;font-weight: normal;font-size: 16px;}
    main .books-list li{margin-bottom: 15px ; }
    main .books-list li a{color: #333;padding: 10px;font-size: 14px; }
    main .books-list li a:hover{color: #058;}

    main .mianR{flex: 1;display: flex;flex-direction: column;}
    main .mianR .banner{width: 100%;height: 236px;}
    main .mianR .banner img{width: 100%;height: 100%;}
    main .mianR .content{width: 100%;display: flex;flex-flow: row wrap;}
    main .mianR .product{width: 49%;background: #fff; padding: 15px;margin-top:10px ; display: flex;justify-content: space-between;align-items: center;}
    main .mianR .product:nth-of-type(2n+1){margin-right:13px ;}
    main .mianR .product .imgBox{width: 90px;height: 90px;margin-right: 10px; padding: 0;}
    main .mianR .product .imgBox img{width: 90px;height: 90px;}
    main .mianR .product  .info{flex: 1;}
    main .mianR .product  .info h4{font-size: 18px;}
    main .mianR .product  .info p{font-size:15px ;text-indent: 2em;margin: 15px 0;}
    main .mianR .product  .info .btn{width: 100%;}
    main .mianR .product  .info .btn a{padding:0;display: block; color: #fff;background: #058;width: 100px;height: 50px;line-height: 50px;text-align:center;}
    main .mianR .product  .info .btn a:hover{background: orange;}
</style>