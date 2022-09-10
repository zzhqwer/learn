<template>
    <div class="dialog-wrap">
        <!---遮罩层--->
        <div class="dialog-cover" v-if="isShow" @click="close"></div>
        <!--内容区---->
        <transition name="animate" >
            <div class = "dialog-content"  v-if="isShow">
                <p class="dialog-close" @click = "close">×</p>
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props: {
        isShow: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        close(){
            this.$emit('dialog_close')
        }
    }
}
</script>

<style scoped>
  
    .animate-enter-active{transition: all 0.5s ease;}
    .animate-leave-active{ transition: all 0.3s ease;}
    .animate-enter{transform: translateY(-500px);}
    .animate-leave-active{transform: translateY(-500px);}

    .dialog-cover{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .5);
    }
    .dialog-content{
        position: fixed;
        top: 20%;
        left: 40%;
        background: #fff;
        text-align: center;
        padding: 30px;
        border-radius: 10px;
        overflow: auto;

    }
    .dialog-close{
        position: absolute;
        top: 0;
        right:  15px;
        font-size: 30px;
        cursor: pointer;
    }
</style>