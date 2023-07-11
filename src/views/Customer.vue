<template>
  <div class="customer">
    顾客页面
    <!-- <HeadNav></HeadNav> -->
    <!-- <LeftMenu></LeftMenu> -->
    <div class="rightContainer">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
/*
import HeadNav from "../components/HeadNav";
import LeftMenu from "../components/LeftMenu";
*/

export default {
  name: 'customer',
  components: {
    // HeadNav,  // 添加头部导航栏组件
    // LeftMenu,  // 添加左侧菜单栏组件
  },
  // 其他组件选项...
};

</script>
<style scoped>
.customer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>
