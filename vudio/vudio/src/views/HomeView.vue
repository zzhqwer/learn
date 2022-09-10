<template>
  <div>
    <div class="header">
      <em>小莱电影</em>
    </div>
    <div class="m-title">
      <h3>影片</h3>
    </div>
    <div class="container">
      <div class="movie-list" v-for="item in MovieList" :key="item.MovieLite">
        <router-link
          :to="{
            path: '/detail',
            query: {
              id: item.MovieID,
              actors: item.Actors,
              imgUrl: item.ImgUrl,
              intro: item.Intro,
              name: item.Name,
              rate: item.Rate,
              releaseTime: item.ReleaseTime,
              type: item.Type,
            },
          }"
        >
          <div class="movie-img"><img :src="imgUrl + item.ImgUrl" /></div>
          <div class="movie-info">
            <div class="hd">
              <h2>{{ item.Name }}</h2>
              <div class="movie-type"><span>2D</span><span>IMAX</span></div>
            </div>
            <p>{{ item.Type }}</p>
            <p>{{ item.Actors }}</p>
            <p>{{ (item.ReleaseTime = date) }}</p>
          </div>
          <div class="grade">{{ item.Rate }}分</div>
          <div class="buy"><a href="#">购票</a></div>
        </router-link>
      </div>
    </div>
    <MyFooter :Index="index"></MyFooter>
  </div>
</template>

<script>
import MyFooter from "@/components/common/MyFooter.vue";

export default {
  data() {
    return {
      index: 1,
      MovieList: [],
      date: new Date("2022-5-12 00:00:00").toLocaleString(),
    };
  },
  components: {
    MyFooter,
  },
  methods: {
    detail() {
      this.$router.push("/detail");
    },
  },
  mounted() {
    this.$http.get("/Movie/New").then((res) => {
      console.log(res.data);
      this.MovieList = res.data;
    });
  },
};
</script>
