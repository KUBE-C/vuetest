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
            <td height="38" style="display: flex; align-items: center; justify-content: center;">
              <div style="width:46px;">
                <img src="src/assets/loginid.png" width="23">
              </div>
              <input type="text" :class="{ 'error-input': showError && !validateUserName() }"
                        v-model="userName" placeholder="请输入用户名" @input="showError = true">
            </td>
          </tr>
          <tr class="errors"><div class="error-message" v-if="showError && !validateUserName()">用户名不能为空</div></tr>
          <tr>
            <td height="38" style="display: flex; align-items: center; justify-content: center;">
              <div style="width:46px;">
                <img src="src/assets/loginsecret.png" width="23">
              </div>
              <input type="password" :class="{ 'error-input': showError && !validatePassword() }"
                        v-model="password" placeholder="请输入密码" @input="showError = true">
            </td>
          </tr>
          <tr class="errors"><div class="error-message" v-if="showError && !validatePassword()">长度应为4到20个字符</div></tr>
          <tr>
            <td height="38" style="display: flex; align-items: center; justify-content: center;">
              <div style="width:46px;">
                <img src="src/assets/loginsecret.png" width="23">
              </div>
              <input type="password" :class="{ 'error-input': showError && password !== password2 }"
                     v-model="password2" placeholder="请确认密码" @input="showError = true">
            </td>
          </tr>
          <tr class="errors"><div class="error-message" v-if="showError && password !== password2">两次输入的密码不一致</div></tr>
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
import {ElLoading,ElMessage} from "element-plus";
let elLoading;

export default {
  name: 'Register',
  data() {
    return {
      userName: '',
      password: '',
      password2: '',
      showError: false, // 控制错误提示语句的显示与隐藏
      showLoading:false // 控制加载动画的显示与隐藏
    };
  },
  methods: {
    validateUserName() {
      return this.userName.trim().length > 0;
    },
    validatePassword() {
      return this.password.length >= 4 && this.password.length <= 20;
    },
    startlEloading() {
      this.showLoading = true; // 显示加载动画
      elLoading = ElLoading.service({
        lock:true,
        text:'拼命加载中...',
        background:'rgba(0,0,0,0.7)'
      });
    },
    endEloading(){
      this.showLoading = false; // 隐藏加载动画
      elLoading.close();
    },
    registerInfo() {
      if (!this.validateUserName()) {
        ElMessage.warning('用户名不能为空');
        return;
      }
      if (!this.validatePassword()) {
        ElMessage.warning('密码长度不符合要求(4-20个字符)');
        return;
      }
      if (this.password !== this.password2) {
        ElMessage.warning('两次输入的密码不一致');
        return;
      }

      // 显示加载动画
      this.startlEloading();

      // 调用后端API进行用户注册
      axios.post('http://localhost:3000/api/users/register', {
        userName: this.userName,
        password: this.password,
      })
          .then((res) => {
           setTimeout(() =>{
             this.endEloading();
             ElMessage.success('注册成功');
             // 注册成功后，跳转到登录页面
             this.$router.push('/login');
           },1200);// 延迟执行
          })
          .catch((err) => {
            setTimeout(() => {
              ElMessage.error('注册失败');
              // 隐藏加载动画
              this.endEloading();
            },1200);
          });
    }
  },
};
</script>

<style scoped>
.errors{
  height: 4px;
  justify-content: center;
}
.error-input {
  border: 1px solid red;
}
.error-message {
  color: red;
  font-size: 10px;
}

</style>
