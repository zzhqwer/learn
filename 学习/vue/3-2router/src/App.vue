<template>
  <div id="app">
      <my-header @open="dakai"></my-header>
      <my-dialog @show="close" :isShow="flag"></my-dialog>
      <router-view></router-view>

  </div>
</template>
<script>
import MyHeader from '@/components/MyHeader.vue'
import MyDialog from './components/MyDialog.vue'

export default {
  components:{
    MyHeader,
    MyDialog
  },
  data(){
    return{
      flag : false
    }
  },
  methods: {
    close() {
      this.flag = false
    },
    dakai() {
      this.flag = true
    }
  }
}
   
</script>

<style>
*{margin: 0;padding:0;box-sizing: border-box;}
ul{list-style: none;}
a{text-decoration: none;}
body{height: 100vh;background: #eee;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header{width: 100%;min-width: 1000px;height: 80px;background: #000;}
.container{width: 1000px;margin: 0 auto;}
.header .container{display: flex;flex-direction: row;justify-content: space-between;}
.header .logo{width: 20%;background: #2c3e50;height: 80px;margin-right: 50px;}
.header ul{flex: 1;height: 80px;display: flex;justify-content: space-evenly;}
.header ul li{display: flex;flex: 1;text-align: center;}
.header ul li a{ flex:1;display: flex;flex-direction: column;justify-content: center;color: #fff;}

.active{background: orange;}
</style>
