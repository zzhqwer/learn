<template>
  <div class="nav-bar">
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        <router-link
          :to="{ path: '/' + item.name }"
          :class="Index - 1 == index ? `active0${Index}` : ''"
        >
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    Index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      list: [
        {
          id: 1,
          text: "主页",
          name: "home",
        },
        {
          id: 2,
          text: "订单",
          name: "order",
        },
        {
          id: 3,
          text: "我的",
          name: "user",
        },
      ],
    };
  },
};
</script>

<style scoped>
li {
  height: 60px;
}
</style>
