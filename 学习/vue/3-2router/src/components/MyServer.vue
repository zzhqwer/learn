<template>
    <div class="main">
        <section>
            <ul>
                <li><router-link to="/server/server1" >服务范围</router-link></li>
                <li><router-link to="/server/server2">服务范围</router-link></li>
                <li><a href="javascript:;">服务范围</a></li>
                <li><a href="javascript:;">服务范围</a></li>

            </ul>
            <div class="content">
                <h2>服务范围</h2>
                <router-view></router-view>
            </div>

        </section>

    </div>
</template>
<style scoped>
    .main{flex: 1; width: 1000px;margin: 0 auto;background: #fff;padding: 15px;}
    .main section{display: flex;}
    .main ul{width: 20%;}
    .main ul li{display: flex;}
    .main ul li a{flex: 1; color: #fff;background: rgba(41, 36, 198, 0.438);border-radius:5px ; margin: 0 15px 5px 0; padding: 15px 10px 15px;}
    .main .content{flex: 1; background: #ccc;border-radius:5px ; height: 500px;}
    .main .content h2{margin: 10px;color: #fff;}

</style>