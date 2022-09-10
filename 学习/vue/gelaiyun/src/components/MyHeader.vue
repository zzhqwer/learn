<template>
    <div class="header">
        <div class="container">
          <div class="nav">
              <ul>
                <li><a href="javascript:;">你好</a></li>
                <li><a href="javascript:;">你好</a></li>
                <li><a href="javascript:;">你好</a></li>
                <li><a href="javascript:;">你好</a></li>
                <li><a href="javascript:;">你好</a></li>
              </ul>
          </div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
     return {

     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav{width: 600px;margin:  0 auto;background-color: rgb(0, 187, 255); }
    .nav ul{display: flex;justify-content: space-around;}
    .nav li{width: 20%;height: 50px;text-align: center;line-height: 50px;}
    .nav li:hover{background-color: orange;}
</style>