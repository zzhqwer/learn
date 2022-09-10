<template>
  <div>
    <div v-for="item in dataList" :key="item.id">
      <div class="header">
        <span class="go-back"><router-link to="/home"></router-link> </span>
        <em>{{ item.name }}</em>
      </div>
      <div class="container detail-container">
        <div class="banner">
          <div class="filter-box"></div>
          <div class="thumbnail">
            <img :src="imgUrl + item.imgUrl" />
          </div>
          <div class="movie-intr">
            <h1>{{ item.name }}</h1>
            <div class="star-level">
              <div id="star_con" class="star-vote">
                <span id="add_star" class="add-star"></span>
                <span id="del_star" class="del-star"></span>
              </div>
              <div class="point">{{ item.rate }}分</div>
            </div>
            <p>{{ item.type }}</p>
            <p>{{ item.actors }}</p>
            <p>上映时间：{{ item.releaseTime }}大陆</p>
          </div>
        </div>
        <div class="movie-recommend">
          <p>
            {{ item.intro }}
          </p>
        </div>
      </div>
      <div class="order-bar">
        <router-link
          :to="{
            path: '/cinema',
            query: {
              id: item.id,
              name: item.name,
              rate: item.rate,
            },
          }"
          >立即订购</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [this.$route.query],
    };
  },
  methods: {
    showStar(n) {
      let con_wid = document.querySelector("#star_con").offsetWidth;
      let del_star = document.querySelector("#del_star");
      //白色星星移动
      let del_move = (n * con_wid) / 10;
      del_star.style.left = del_move + "px";
      del_star.style.backgroundPosition = -del_move + "px 0px";
    },
  },
  mounted() {
    this.showStar(this.$route.query.rate);
  },
};
</script>
