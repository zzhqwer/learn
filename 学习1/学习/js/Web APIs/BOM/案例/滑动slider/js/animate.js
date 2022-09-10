//封装一个动画
    function animate(obj,target,callback){
        //清除点击带来的加速度 清除以前的定时器 只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            // 缓动效果  就是 拿(目标 - 当前位置 )/10;由快到慢
            // 匀速  就是拿固定值
            let step = (target - obj.offsetLeft) / 10; 
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if(obj.offsetLeft == target){
                clearInterval(obj.timer);
               if(callback){
                   callback();
               }
            }else{
                obj.style.left = obj.offsetLeft + step + 'px';
            }
        },15)
    }