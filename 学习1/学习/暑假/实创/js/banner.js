$(function(){

    $(".banner").mouseover(function(event){
        $(".leftbtn").animate({left:"0"},100)
        $(".rightbtn").animate({right:"0"},100)
    })
    .mouseleave(function(event){
        $(".leftbtn").animate({left:"-45"},100)
        $(".rightbtn").animate({right:"-45"},100)
    })
    // 添加小圆点
    for(var i = 0; i<$(".banner li").length; i++)
    {
        $('.btn').append("<span></span>")
    }
    $('.btn span').eq(0).addClass('cur')
     var timer=null;//创建定时器
     clearInterval(timer);
    //按钮
    var i=0;
    $('.rightbtn').click(function(event){
        if(i >= $('.banner li').length-1)
        {   
            i=0;
            $('.banner ul').animate({ left:-$('.banner li').width()*i},"slow")
            $('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
            autoPlay();
        }
        else{
            i++;
            $('.banner ul').animate({ left:-$('.banner li').width()*i},"slow")
            $('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
            autoPlay();
        }
    })
    $('.leftbtn').click(function(event){
        if(i>0)
        {
            i--;
            $(".banner ul").animate({ left:-$(".banner li").width()*i},"slow")
            $('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
            autoplay();
        }
        else{
            i=$(".banner li").length-1;
            $(".banner ul").animate({ left:-$(".banner li").width()*i},"slow")
            $('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
            autoPlay();
        }
    })
    function autoPlay(){
        clearInterval(timer);
        timer=setInterval(function(event){
            if(i>=$('.banner li').length-1)
        {   
            i = 0;
            $(".banner ul").animate({ left:-$(".banner li").width()*i},"slow")
            $('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
        }else {
            i++;
            $(".banner ul").animate({ left:-$(".banner li").width()*i},"slow")
            $('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')

            }
        },3000)

    }
   autoPlay();//自动播放的调用
    
})

