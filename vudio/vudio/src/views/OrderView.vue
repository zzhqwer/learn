<template>
  <div>
    <div class="header">
      <em>我的订单</em>
    </div>
    <div class="container">
      <div class="order-item">
        <dl>
          <dt><img src="img/movie.jpg" /></dt>
          <dd><em>芳华 4张</em></dd>
          <dd>10月24日 14:30</dd>
          <dd>3号厅10排12座,10排14座,10排15座,10排16座</dd>
        </dl>
        <div class="status"><em>总价：140元</em><span>已完成</span></div>
      </div>
    </div>
    <my-footer :Index="index"></my-footer>
  </div>
</template>

<script>
import MyFooter from "../components/common/MyFooter.vue";

export default {
  data() {
    return {
      index: 2,
    };
  },
  components: {
    MyFooter,
  },
};
</script>
