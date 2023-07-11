<template>
  <div>
    <div id="top">&nbsp;网&nbsp;上&nbsp;订&nbsp;餐&nbsp;平&nbsp;台&nbsp;——&nbsp;管&nbsp;理&nbsp;员&nbsp;界&nbsp;面
      <div id="topright">欢迎&nbsp;&nbsp;管理员&nbsp;&nbsp;进入系统&nbsp;&nbsp;<!--<a href="login.jsp" id="w">退出</a>--></div>
    </div>
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
            <li id="line"><router-link to="/controlWeb">菜品管理</router-link></li>
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
      <div class="right">
        <p>当&nbsp;前&nbsp;位&nbsp;置&nbsp;>&nbsp;菜&nbsp;品&nbsp;管&nbsp;理</p>
        <hr color="darkgray">
        <table>
          <tr>
            <th>菜品型号</th>
            <th>菜品名称</th>
            <th>菜品类别</th>
            <th>价格</th>
            <th width="450px">菜品简介</th>
            <th>操作</th>
          </tr>
          <tr v-for="dish in dishes" :key="dish.dishid">
            <td>{{ dish.dishid }}</td>
            <td>{{ dish.dishname }}</td>
            <td>{{ dish.dishkind }}</td>
            <td>{{ dish.price }}</td>
            <td>{{ dish.content }}</td>
            <td>
              <a href="javascript:void(0);" @click="deleteDish(dish.dishid)">删除</a>
              <router-link :to="`/updateDish/${dish.dishid}`">修改</router-link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "/src/assets/CSS/administratorWeb.css";

export default {
  data() {
    return {
      dishes: [] // 菜品数据
    }
  },
  methods: {
    deleteDish(id) {
      if (confirm("你确定要删除菜品型号为 " + id + " 的信息吗？")) {
        // 调用删除菜品的接口
        this.$axios.delete(`/api/dishes/${id}`)
            .then(() => {
              // 删除成功后，重新加载菜品列表
              this.loadDishes();
            })
            .catch(error => {
              console.error(error);
            });
      }
    },
    loadDishes() {
      // 调用获取菜品列表的接口
      this.$axios.get('/api/dishes')
          .then(response => {
            this.dishes = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    }
  },
  mounted() {
    // 页面加载完成时，加载菜品列表
    this.loadDishes();
  }
}
</script>

<style scoped>
/* 样式表 */
</style>
