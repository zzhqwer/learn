<template>
  <div @keyup.enter="right">
    <main class="login-main">
      <div class="login-logo"><img src="img/LOGO.png" /></div>
      <div class="login-from">
        <label>
          <input type="text" placeholder="请输入用户名" v-model="username" />
        </label>
        <label>
          <input type="password" placeholder="请输入密码" v-model="password" />
        </label>
      </div>
      <div class="login-btn">
        <a href="#" @click="right">登录</a>
      </div>
      <div class="link-reg">
        <a href="javascript:;" @click="register">还没账号？</a>
      </div>
      <div class="link-home">
        <a href="#" @click="toHome">暂不登录</a>
      </div>
    </main>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    right() {
      if (this.username.trim() === "" || this.password.trim() === "") {
        Toast({
          message: "用户名和密码不能为空",
          postion: "top",
          duration: 3000,
        });
        return;
      }
      this.$http
        .post(
          "/login",
          this.qs.stringify({
            UserName: this.username,
            PassWord: this.password,
          })
        )
        .then((res) => {
          console.log(res);
          localStorage.setItem("tokenID", res.data);
          Toast({
            message: "登录成功",
            postion: "top",
            duration: 3000,
          });
          this.$router.push("/home");
        })
        .catch((err) => {
          if (err.response.status === 401) {
            // throw new Error("There is no such account. Please re-enter it");
            Toast({
              message: "无法访问",
              postion: "top",
              duration: 3000,
            });
            return;
          }
          if (err.response.status === 404) {
            Toast({
              message: "网络请求失败，请稍后再试",
              postion: "top",
              duration: 3000,
            });
            return;
          }
          console.log(err.response.status);
        });
    },
    toHome() {
      this.$router.push("/home");
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>
