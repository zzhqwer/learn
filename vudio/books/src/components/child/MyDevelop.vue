<template>
    <div>
        <div class="hd">
          <h3>移动互联网开发全套书籍</h3>
        </div>
        <div class="tips">
          <p>
            突破传统教与学，合理利用碎片化学习时间。在线课堂、视频课堂，论坛交流，提供课外知识补充。
          </p>
        </div>
        <div class="select-menus">
          <div class="form-item book-name">
            <label>书籍名称：</label>
            <button 
                v-for="(item,index) in books"
                :key="item.id"
                :class="isIndex === index? 'active':''"
                @click="changeIndex(index)"
             >{{ item.booksname }} </button>
          </div>
          <div class="form-item count">
            <label>购买数量：</label>
            <button @click="num <= 1 ? 1 : num--">-</button><input type="text" v-model="num" /><button  @click="num++">+</button>
          </div>
          <div class="form-item">
            <label>适用校区：</label>
            <select v-model="selected">
              <option value="" disabled>请选择所在校区</option>
              <option value="武汉校区">武汉校区</option>
              <option value="信阳校区">信阳校区</option>
              <option value="开封校区">开封校区</option>
              <option value="三门峡校区">三门峡校区</option>
            </select>
          </div>
          <div class="form-item">
            <label>总价：</label>
            <span>{{ total }}元</span>
          </div>
          <div class="form-item btn" >
            <input type="button" value="立即购买" @click=" selected === '' ? tishi() : open() " />
          </div>
          <my-dialog :isShow="isShow"  @dialog_close= "isShow = false"> 
              <my-order :params="[bookname,num,selected,total]"></my-order>
          </my-dialog>
        </div>

        <div class="illustrate">
          <div class="hd">
            <h3>书籍简介</h3>
          </div>
          <div class="describe">
            <p>
              高端专业独享教材：解决学生课堂知识理解及教师教学配套。教材所有内容都是以一个综合项目为目标，每学期的课程内容都是围绕综合项目开展的，同时内含丰富的课程资源及面试题库等企业必备信息库。编撰者均有相关专业多年授课及行业经验，且多为获得相关专业顶级认证的专业人士。
            </p>
          </div>
        </div>
    </div>
</template>

<script>
    import MyDialog from '../MyDialog.vue'
    import MyOrder from '../MyOrder.vue'
    export default {
        data() {
            return {
                isShow: false,
                isIndex: 0,
                num: 1,
                price: 35,
                selected: '',
                books: [
                    {
                        id:1,booksname: "C#编程基础",price: 35
                    },
                    {
                        id:2,booksname: "JAVA语言基础",price: 45
                    },
                    {
                        id:3,booksname: "C#桌面应用程序开发",price: 55
                    },
                ],
                bookname: 'C#编程基础'
            }
        },
        methods: {
            changeIndex(index) {
                this.isIndex = index
                this.price = this.books[index].price
                this.bookname = this.books[index].booksname
            },  
            open() {
            this.isShow = true
            },
            tishi() {
              alert('请选择校区')
              console.log(this.$route)
            }
           
        },
        computed: {
          total() {
            return this.num * this.price
          },
        
        },
        components: {
          MyDialog,
          MyOrder
        }
        
    }
</script>

