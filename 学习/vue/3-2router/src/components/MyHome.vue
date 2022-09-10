<template>
    <div class="main">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor molestiae consectetur eum quae fugiat odio recusandae natus incidunt beatae, consequatur maxime minus rem dolore. Nam culpa aperiam minus nihil.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor molestiae consectetur eum quae fugiat odio recusandae natus incidunt beatae, consequatur maxime minus rem dolore. Nam culpa aperiam minus nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor molestiae consectetur eum quae fugiat odio recusandae natus incidunt beatae, consequatur maxime minus rem dolore. Nam culpa aperiam minus nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor molestiae consectetur eum quae fugiat odio recusandae natus incidunt beatae, consequatur maxime minus rem dolore. Nam culpa aperiam minus nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor molestiae consectetur eum quae fugiat odio recusandae natus incidunt beatae, consequatur maxime minus rem dolore. Nam culpa aperiam minus nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor molestiae consectetur eum quae fugiat odio recusandae natus incidunt beatae, consequatur maxime minus rem dolore. Nam culpa aperiam minus nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor molestiae consectetur eum quae fugiat odio recusandae natus incidunt beatae, consequatur maxime minus rem dolore. Nam culpa aperiam minus nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor molestiae consectetur eum quae fugiat odio recusandae natus incidunt beatae, consequatur maxime minus rem dolore. Nam culpa aperiam minus nihil.</p>
    </div>
</template>
<script>
export default{
    data(){
        return {
            
        }
     },
    beforeRouteEnter:(to,from,next)=>{
        let username=localStorage.getItem('username')
        if(username !== 'admit' ) {
            // this.$router.push('/')
            console.log(this)
        }
            console.log(23)

        next()

    }
}
</script>

<style scoped>
    .main{flex: 1; width: 1000px;margin: 0 auto;background: #fff;padding: 15px;}
    .main p{text-indent: 2em;line-height: 1.5em;font-size: 25px;}
</style>