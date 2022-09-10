<template>
  <div>
    <!-- 正文 -->
    <div class="content">
      <div class="detail-left">
        <div class="tipsImg">
          <img :src="changImg[this.$route.query.id - 1 ].imgUrl" alt="" />
        </div>
        <div class="menu">
          <ul>
            <li v-for="(major,index) in majors" :key="major.id" :class="isIndex === index ? 'active' : '' " @click="changIndex(index)">
                <router-link :to="{path: '/myma/' + major.name ,query: {id: major.id}}" >{{ major.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="detail-right">
        <router-view ></router-view>
      </div>
    </div>
  

  </div>
</template>

<script>


export default {
  data() {
    return {
      isIndex: this.$route.query.id - 1,
      majors: [
        {
          id: 1,
          title: "移动互联网开发书籍",
          name: "develop",
        },
        {
          id: 2,
          title: "移动互联网应用书籍",
          name: "apply",
        },
        {
          id: 3,
          title: "大数据书籍",
          name: "/",
        },
        {
          id: 4,
          title: "人工智能书籍",
          name: "/",
        },
      ], 
      changImg:[
        {imgUrl:"img/1.png"},
        {imgUrl:"img/2.png"},
        {imgUrl:"img/3.png"},
        {imgUrl:"img/4.png"}
      ],
    };
  },
  methods: {
    changIndex(index){
      this.isIndex = index
    }
  }
 
}
</script>
<style scoped>

</style>
