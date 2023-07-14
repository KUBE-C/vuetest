<template>
  <div class="box">
    <ul class="left">
      <li>
        <router-link to="/customerWeb">
          <div class="link-item">
            <img class="icon" src="../assets/CustomerImg/main.png">
            <span class="text">门店首页</span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/dishInfo">
          <div class="link-item">
            <img class="icon" src="../assets/CustomerImg/dish.png">
            <span class="text">菜品信息</span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/myBuy">
          <div class="link-item">
            <img class="icon" src="../assets/CustomerImg/buy.png">
            <span class="text">我的购物车</span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/myOrder">
          <div class="link-item">
            <img class="icon" src="../assets/CustomerImg/order.png">
            <span class="text">我的订单</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "CustomerLeft",
  data() {
    return {};
  }
};
</script>

<style scoped>
.left {
  margin-top: 0px;
  padding-left: 0px;
  background-color: #f5f5f5;
  width: 13%;
  height: 1000px;
}
.box{
  display: flex;
}
ul,li{
  list-style-type: none;
}
li a{
  padding: 23px;
  display: block;
  text-decoration: none;
  text-align: center;
}
li a:hover{
  background-color:darkgray;
}

.link-item {
  display: flex;
  align-items: center;
}

.icon {
  width: 22px;
  height: 22px;
  /* 缩小图片尺寸 */
  margin-right: 8px;
}

.text {
  /* 文字样式 */
}
</style>
