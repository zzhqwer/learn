<template>
  <div>
    <div class="header">
      <em>影院</em>
      <span class="go-back"
        ><a href="javascript:;" @click="$router.back()"></a
      ></span>
    </div>
    <div class="m-title">
      <h3>
        {{ $route.query.name }}<em>{{ $route.query.rate }}分</em>
      </h3>
    </div>
    <div class="container">
      <div class="scene-item" v-for="item in dataList" :key="item.id">
        <span class="c-time">{{ item.Time.substring(0, 5) }}</span>
        <span class="c-type"
          >国语{{ item.RoomType }}<em>{{ item.Room }}</em></span
        >
        <span class="c-price">￥{{ item.Price.toFixed(2) }}</span>
        <span class="c-btn">
          <button @click="selectTick(item.TimeID)">选择购票</button></span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      dataList: [],
    };
  },
  mounted() {
    this.fetchDate();
  },
  methods: {
    fetchDate() {
      if (!localStorage.tokenID) {
        Toast({
          message: "尚未登录",
          position: "top",
          duration: 3000,
        });
        this.$router.push("/login");
        return;
      }
      this.$http
        .get("Movie/Shows?MovieID=" + this.$route.query.id)
        .then((res) => {
          this.dataList = res.data;
        })
        .catch((err) => {
          if (err.response.status === 401) {
            Toast({
              message: "无法访问",
              position: "top",
              duration: 3000,
            });
            return;
          }
          console.log(err);
        });
    },
    selectTick(TimeID) {
      this.$router.push({
        path: "/seat",
        query: {
          timeID: TimeID,
          movieName: this.$route.query.name,
        },
      });
    },
  },
};
</script>
