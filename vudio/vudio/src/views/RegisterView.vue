<template>
  <div>
    <div class="header">
      <em>用户注册</em>
      <span class="go-back"><a href="home.html"></a></span>
      <span class="go-next"><a href="javascript:;">登录</a></span>
    </div>
    <div class="reg-main">
      <div class="reg-from">
        <label
          ><input type="text" placeholder="请输入用户名" v-model="username"
        /></label>
        <label
          ><input type="password" placeholder="请输入密码" v-model="password"
        /></label>
        <label
          ><input type="password" placeholder="请确认密码" v-model="password2"
        /></label>
      </div>
      <div class="treaty">
        <input type="checkbox" id="treaty" v-model="checked" />
        <label for="treaty">我已阅读并同意《格莱科技用户协议》</label>
      </div>
      <div class="login-btn reg-btn">
        <a href="#" @click="register">立即注册</a>
      </div>
      <div class="contact">
        <span>© 格莱科技 027-87229009</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      checked: true,
    };
  },
  methods: {
    register() {
      if (this.username === "") {
        Toast({
          message: "用户名不能为空",
          position: "top",
          duration: 3000,
        });
        return;
      } else if (this.password === "") {
        Toast({
          message: "密码不能为空",
          position: "top",
          duration: 3000,
        });
        return;
      } else if (this.password2 === "") {
        Toast({
          message: "确认密码不能为空",
          position: "top",
          duration: 3000,
        });
        return;
      } else if (this.password !== this.password2) {
        Toast({
          message: "两次密码不一致",
          position: "top",
          duration: 3000,
        });
        return;
      } else if (this.checked === false) {
        Toast({
          message: "请先勾选协议",
          position: "top",
          duration: 3000,
        });
        return;
      } //else if (!/^[a-zA-Z0-9]{6,16}$/.test(this.username)) {
      //   Toast({
      //     message: "请输入6到16位之间的字母或数字",
      //     position: "top",
      //     duration: 3000,
      //   });
      //   return;
      else {
        this.$http
          .post(
            "/Register",
            this.qs.stringify({
              UserName: this.username,
              PassWord: this.password,
            })
          )
          .then((res) => {
            console.log(res);
            Toast({
              message: "注册成功",
              position: "top",
              duration: 3000,
            });
            this.$router.push("/login");
          })
          .catch((err) => {
            if (err.response.status === 409) {
              Toast({
                message: "用户名已被注册",
                position: "top",
                duration: 3000,
              });
              return;
            }
            if (err.response.status === 404) {
              Toast({
                message: "网络请求失败,请稍后再试",
                position: "top",
                duration: 3000,
              });
              return;
            }
          });
      }
    },
  },
};
</script>
