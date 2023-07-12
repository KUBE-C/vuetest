<template>
  <div class="login">
    <div class="header-wrapper">
      <h1>综合实训之网上订餐平台系统</h1>
    </div>
    <div>
      <div class="fra">
        <div class="fratop">注&nbsp;册&nbsp;信&nbsp;息</div>
        <table>
          <tr>
            <td height="40" style="display: flex; align-items: center; justify-content: center;">
              <div style="width:46px;">
                <img src="src/assets/loginid.png" width="23">
              </div>
              <input type="text" v-model="userName" :class="{ 'error-input': showError && !validateUserName() }"
                     placeholder="请输入用户名" @input="showError = true">
              <div class="error-message" v-if="showError && !validateUserName()">用户名不能为空</div>
            </td>
          </tr>
          <tr>
            <td height="40" style="display: flex; align-items: center; justify-content: center;">
              <div style="width:46px;">
                <img src="src/assets/loginsecret.png" width="23">
              </div>
              <input type="password" v-model="password" :class="{ 'error-input': showError && !validatePassword() }"
                     placeholder="请输入密码" @input="showError = true">
              <div class="error-message" v-if="showError && !validatePassword()">密码长度应为4到20个字符</div>
            </td>
          </tr>
          <tr>
            <td height="40" style="display: flex; align-items: center; justify-content: center;">
              <div style="width:46px;">
                <img src="src/assets/loginsecret.png" width="23">
              </div>
              <input type="password" v-model="password2" :class="{ 'error-input': showError && password !== password2 }"
                     placeholder="请确认密码" @input="showError = true">
              <div class="error-message" v-if="showError && password !== password2">两次输入的密码不一致</div>
            </td>
          </tr>
          <tr>
            <td height="45">
              <input type="button" @click="registerInfo" value="注册" style="background-color:white">&nbsp;
              <input type="reset" value="重置" style="background-color:yellow">&nbsp;
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import '/src/assets/CSS/Web.css';

export default {
  name: 'Register',
  data() {
    return {
      userName: '',
      password: '',
      password2: '',
      showError: false, // 控制错误提示语句的显示与隐藏
    };
  },
  methods: {
    validateUserName() {
      return this.userName.trim().length > 0;
    },
    validatePassword() {
      return this.password.length >= 4 && this.password.length <= 20;
    },
    registerInfo() {
      if (!this.validateUserName()) {
        alert('用户名不能为空');
        return;
      }
      if (!this.validatePassword()) {
        alert('密码长度不符合要求(4-20个字符)');
        return;
      }
      if (this.password !== this.password2) {
        alert('两次输入的密码不一致');
        return;
      }
      // 调用后端API进行用户注册
      axios.post('http://localhost:3000/api/customers/register', {
            userName: this.userName,
            password: this.password,
          })
          .then((res) => {
            // 注册成功，进行相应的处理
            alert('注册成功');
            // 注册成功后，跳转到登录页面
            this.$router.push('/login');
          })
          .catch((err) => {
            // 注册失败，进行相应的处理
            alert('注册失败');
          });
    },
  },
};
</script>

<style scoped>
.error-input {
  border: 1px solid red;
}
.error-message {
  color: red;
  font-size: 10px;
  margin-bottom: 3px; /* 修改为 margin-bottom ，保持在输入框的上方 */
}
</style>
