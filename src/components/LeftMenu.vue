<template>
    <div class="box">
      <ul class="left">
        <li>门店管理
          <ul>
            <li><router-link to="/mainWeb">门店介绍</router-link></li>
          </ul>
        </li>
        <li>菜品管理
          <ul>
            <li><router-link to="/addWeb">添加菜品</router-link></li>
            <li><router-link to="/controlWeb">菜品管理</router-link></li>
          </ul>
        </li>
        <li>订单管理
          <ul>
            <li><router-link to="/oderWeb">顾客订单</router-link></li>
          </ul>
        </li>
        <li>配送管理
          <ul>
            <li><router-link to="/goInfoWeb">配送信息</router-link></li>
          </ul>
        </li>
        <li>管理员管理
          <ul>
            <li><router-link to="/administratorInfo">管理员信息</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  name: "LeftMenu",
  data() {
    return {
   //  dishes: [] // 菜品数据
    }
  }
}
</script>

<style scoped>
.box{
  display: flex;
}
ul,li{
  list-style-type: none;
  padding: 8px;
}
.left{
  margin-top: 0px;
  padding: 13px;
  background-color: #f5f5f5;
  width: 10%;
  height: 1000px;
}
li a{
  display: block;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
}
li a:hover{
  background-color:darkgray;
}
#line{
  text-decoration-line: underline;
  background-color: darkgray;
}

</style>
