<template>
    <div class="main">
        <form action="" @submit.prevent>
            <div class="column">
                <label for="usename">用户名:</label>
                <input :value= "username" type="text" id="usename" @input= "username = $event.target.value">
            </div>
             <div class="column">
                <label for="password">密码名:</label>
                <input v-model= "password" type="text" id="password">
            </div>
            <button @click='submit'>登录</button>
        </form>
    </div>
</template>

<script>

export default{
    data(){
       return {
            username:'',
            password: ''
            
       }
    },
    methods:{
        submit:function(){
            let u = this.username
            let p = this.password
            localStorage.setItem('username',u)
            localStorage.setItem('password',p)
            // this.$router.push('/')
            this.$router.push('/')

        }
    }

}
</script>



<style scoped>
     .main{flex: 1; width: 1000px;margin: 0 auto;background: #fff;padding: 15px;display: flex;flex-direction: column;justify-content: center;text-align: center;}
     
</style>