<template>
  <div id="top">&nbsp;网&nbsp;上&nbsp;订&nbsp;餐&nbsp;平&nbsp;台&nbsp;——&nbsp;顾&nbsp;客&nbsp;界&nbsp;面<div id="topright">欢迎&nbsp;&nbsp;<span>{{userName}}</span>&nbsp;&nbsp;进入系统&nbsp;&nbsp;<!--<a href="login.jsp" id="w">退出</a>--> </div></div>

</template>

<script>

export default {
  name: "CustomerHead",
  props: {
    userName:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
#top{
  width: 100%;
  height: 50px;
  background-color:#4CAF50;
  color: white;
  font-size: 25px;
  line-height: 50px;
  padding: 10px 20px;
}
#topright{
  color: white;
  font-size: 17px;
  float: right;
  margin-right: 20px;
}
</style>