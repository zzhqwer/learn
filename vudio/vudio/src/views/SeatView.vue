<template>
  <div>
    <div class="header">
      <em>影院</em>
      <span class="go-back"
        ><a href="javascript:;" @click="$router.back()"></a
      ></span>
    </div>
    <div class="seat-title">
      <h2>{{ $route.query.movieName }}</h2>
      <h4>
        今天{{
          new Date().getMonth() + 1 + "月" + new Date().getDate() + "日"
        }}
        {{ $route.query.time }} 国语{{ dataList.RoomType }}
      </h4>
      <div class="lobby">
        <span>{{ dataList.Room }}银幕</span>
      </div>
    </div>
    <div class="container seat">
      <div class="seating">
        <ul>
          <li
            v-for="item in setList"
            :key="item.id"
            :class="item.status"
            @click="setSeat(item.id)"
          ></li>
        </ul>
      </div>
      <div class="tips-seat">
        <span class="selecting">可选</span><span class="selected">已选</span
        ><span class="selled">已售</span>
      </div>
      <div class="ticket">
        <h5>已选座位</h5>
        <div
          class="ticket-item"
          v-for="(item, index) in ticketArray"
          :key="item.id"
        >
          <a href="#" @click="close(index)">
            {{ item.Row }} 排 {{ item.Col }}座<em>￥{{ dataList.Price }}</em>
          </a>
        </div>
      </div>
    </div>
    <div class="seat-bar">
      <a href="#">￥140确认选座</a>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      TimeID: this.$route.query.timeID,
      dataList: [],
      setList: [],
      ticketArray: [],
    };
  },
  methods: {
    fetchData() {
      this.$http.get("Movie/showsDetail?TimeID=" + this.TimeID).then((res) => {
        this.dataList = res.data;
      });
    },
    setSeat(i) {
      if (this.ticketArray.length >= 4) {
        Toast({
          message: "一次只能选择四张",
          position: "top",
          duration: 3000,
        });
        return;
      } else {
        if (this.setList[i].status === "") {
          this.setList[i].status = "active";
          this.setList.splice(0, 0);
          let row = Math.floor(i / 10) + 1;
          let col = (i % 10) + 1;
          this.ticketArray.push({ Row: row, Col: col });
        }
      }
    },
    close(i) {
      let row = this.ticketArray[i].Row;
      let col = this.ticketArray[i].Col;
      let index = (row - 1) * 10 + col - 1;
      this.setList[index].status = "";
      this.ticketArray.splice(i, 1);
    },
  },
  mounted() {
    this.fetchData();
  },
  created() {
    //初始化座位
    for (let i = 0; i < 100; i++) {
      let item = { id: i, status: "" };
      this.setList[i] = item;
    }
  },
};
</script>
