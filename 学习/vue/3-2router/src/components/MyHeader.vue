<template>
     <div class="header">
          <div class="container">
            <div class="logo"></div>
            <ul>
              <li><router-link to="/" exact>网站首页</router-link></li>
              <li><router-link to="/server" >服务范围</router-link></li>
              <li><a href="javascript:;" @click='block'>登录</a></li>
              <li><a href="javascript:;">服务范围</a></li>
              <li><a href="javascript:;">服务范围</a></li>
              <li><a href="javascript:;">服务范围</a></li>
              <li><a href="javascript:;">服务范围</a></li>
            </ul>
          </div>
      </div>
</template>
<script>
export default {
  methods: {
    block(){
      this.$emit('open')
    }
  }
}
</script>

