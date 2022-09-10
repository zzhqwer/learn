<template>
    <div class="header">
             <div class="logo"><img src="./../assets/logo-galaxy.png" alt=""></div>
            <div class="nav">
                <ul>
                    <li><a href="#">网站首页</a></li>
                    <li><a href="#">服务范围</a></li>
                    <li><a href="#">客户案例</a></li>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">资讯中心</a></li>
                    <li><a href="#">联系我们</a></li>
                </ul>
            </div>
    </div> 
</template>
<script>
    export default{
       data(){
           return{

           }
       }
    }
</script>
<style scoped>
.header{width: 100%;min-width: 1000px;height: 80px;background:#000;}
.container{width: 1000px;margin: 0 auto;overflow: hidden}
.logo{float: left;width: 186px;margin-right: 30px;margin-top: 15px}
.nav{float: right;width:600px}
.nav li{float: left;padding:0 20px;width: 10%;text-align: center;line-height: 80px}
.nav li:first-child{background: #f90}
</style>
