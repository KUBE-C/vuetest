<template>
  <div class="login">
    <div class="header-wrapper">
      <h1>综合实训之网上订餐平台系统</h1>
    </div>
    <div>
      <div class="fra">
        <div class="fratop">欢&nbsp;迎&nbsp;登&nbsp;录</div>
        <form @submit.prevent="login">
          <table>
            <tr>
              <td height="40">用&nbsp;户&nbsp;号：
                <input type="text" v-model.trim="userName" placeholder="请输入用户名">
              </td>
            </tr>
            <tr>
              <td height="40">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：
                <input type="password" v-model.trim="password" placeholder="请输入密码">
              </td>
            </tr>
            <tr>
              <td height="40">用户类型：
                <select size="1" v-model="kind">
                  <option value="管理员">管理员</option>
                  <option value="顾客">顾客</option>
                </select>
              </td>
            </tr>
            <tr>
              <td height="45">
                <button type="submit" style="background-color:white">登录</button>&nbsp;
                <button type="reset" style="background-color:yellow">重置</button>&nbsp;
                还没有账号？现在<router-link to="/register">注册</router-link>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "/src/assets/CSS/Web.css";

export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
      kind: "管理员",
      eleToken: null // 初始化eleToken为null
    };
  },
  methods: {
    login() {
      // 调用后端API验证用户名和密码
      // 比如发送POST请求到登录接口
      axios
          .post("http://localhost:3000/api/customers/login", {
            userName: this.userName,
            password: this.password,
            kind: this.kind,
          })
          .then((res) => {
            // 登录成功，根据用户类型进行跳转
            localStorage.setItem("eleToken", res.data.token);
            if (this.kind === "管理员") {
              // 跳转到管理员页面
              localStorage.setItem("kind", "管理员");
              this.$router.push("/admin");
            } else {
              // 跳转到顾客页面
              localStorage.setItem("kind", "顾客");
              this.$router.push("/customer");
            }
          })
          .catch((error) => {
            // 登录失败，进行相应的处理
            alert("用户名或密码错误");
          });
    },
  },
};
</script>
