<template>
  <div id="app">
      <my-header @dialog-open="openLogin" @dialog-open1="openRegist" @dialog-open2="openAbout"></my-header>
      <!--登录-->
      <my-dialog :isShow="isShowLogin" @dialog_close = "close" >
        <my-login></my-login>
      </my-dialog>
      <!--注册-->
      <my-dialog :isShow="isShowRegist" @dialog_close = "close" >
        <my-regist></my-regist>
      </my-dialog>
      <!--内容-->
       <my-dialog :isShow="isShowAbout" @dialog_close = "close" >
        <my-about></my-about>
      </my-dialog>
      <router-view></router-view>
      <my-footer></my-footer>

  </div>
</template>
<script>
  import './assets/style.css'
  import MyHeader from './components/MyHeader.vue'
  import MyFooter from './components/MyFooter.vue'
  import MyDialog from './components/MyDialog.vue'
  import MyLogin from './components/MyLogin.vue'
  import MyRegist from './components/MyRegist.vue'
  import MyAbout from './components/MyAbout.vue'


  export default{
    data(){
      return {
        isShowLogin: false,
        isShowRegist: false,
        isShowAbout: false
      }
    },
    methods: {
        close(){
         this.isShowRegist = this.isShowAbout =  this.isShowLogin = false
        },
        openLogin(){
          this.isShowLogin = true
        },
         openRegist(){
          this.isShowRegist = true
        },
         openAbout(){
          this.isShowAbout = true
        },
    },
    components: {
      MyHeader,
      MyFooter,
      MyDialog,
      MyRegist,
      MyAbout,
      MyLogin
 
    }
  }

</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
*{margin: 0;padding: 0;box-sizing: border-box;}
ul,ol{list-style: none;color: #fff;}
a{text-decoration: none;color: #fff;}
.container{width: 1000px;margin: 0 auto;}
</style>
