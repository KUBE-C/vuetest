<template>
  <div>
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
  </div>
</template>

<script>
import axios from "axios";
import "/src/assets/CSS/administratorWeb.css";

export default {
  data() {
    return {
   //  dishes: [] // 菜品数据
    }
  }
}
</script>

<style scoped>
/* 样式表 */
</style>
