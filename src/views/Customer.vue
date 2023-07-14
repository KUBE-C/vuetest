<template>
  <div class="custom">
    <CustomerHead :userName="this.$route.query.userName"></CustomerHead>
    <CustomerLeft></CustomerLeft>
    <div class="rightContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CustomerHead from "../components/CustomerHead.vue";
import CustomerLeft from "../components/CustomerLeft.vue";

export default {
  name: "Customer",
  components: {
    CustomerHead,
    CustomerLeft
  }
};
</script>
<style scoped>
.custom {
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
