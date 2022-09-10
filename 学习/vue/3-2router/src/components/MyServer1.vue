<template>
    <div>
       <p>{{yuyan}}</p>
       <button @click = "update">点击</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[],
                yuyan:''
                
            }
        },
        methods:{
            update(){
                this.$http.get('/yiyan.php').then(response => {
                this.yuyan = response.data
                console.log(response)
                }).catch(error => {
                    console.log(error)
                })
               
            },

        },
        created(){
            this.$http.get('/yiyan.php').then(response => {
               console.log(response)
            }).catch(error => {
                console.log(error)
            })
        }
    }

</script>
