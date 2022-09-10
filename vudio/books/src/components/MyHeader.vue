<template>
    <div class="header">
        <div class="container">
           <img src="img/logo.png" alt="">
           <ul>
                <li><router-link to="/">首页</router-link></li>|
                <li><a href="javascript:;" @click="show">登录</a></li>|
                <li><a href="javascript:;" @click="show1">注册</a></li>|
                <li><a href="javascript:;" @click="show2">关于</a></li>
           </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        },
        methods: {
            show(){
                this.$emit('dialog-open')
            },
            show1(){
                this.$emit('dialog-open1')
            },
            show2(){
                this.$emit('dialog-open2')
            }
          
        }
    }
</script>

<style scoped>
    .header{
        width: 100vw;
        background: #1c3870;
    }
    .header .container{width: 1000px;margin: 0 auto;display: flex;justify-content: space-between;height: 100px;align-items: center;}
    .header .container img{width: 186px;height: 48px;}
    .header .container ul{display: flex; align-items: center;} 
    .header .container ul li a{vertical-align: middle; padding: 15px;}
</style>