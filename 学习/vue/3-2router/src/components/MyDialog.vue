<template>
    <div class="dialog-wrap">
        <!-- 遮影层 -->
        <div class="dailog-cover" v-if="isShow" @click="show"></div>
        <transition name="drap">
            <!-- 内容区 -->
            <div class="dialog-content" v-if="isShow">
                <p class="dialog-close" @click="show">X</p>
                <div class="dialog-main">
                    登录
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default{
    props: { 
        isShow:{
            type: Boolean,
            default: true
        }
    },
    methods: {
        show(){
            this.$emit('show')
        }
    }

}
</script>
<style scoped>
    .drap-enter-active{transition: all .3s ease;}
    .drap-leave-active{transition: all .3s ease;}
    .drap-enter{transform: translateY(-500px);}
    .drap-leave-active{transform: translateY(-500px);}

    .dailog-cover{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
    }
    .dialog-content{
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        width: 500px;
        height: 500px;
        background: #fff;
    }
</style>
