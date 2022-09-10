$(function(){
	$(window).on("scroll",function(){
		if($("body,html").scrollTop()>50){
			$("nav").addClass("scroll")
		}else{
			$("nav").removeClass("scroll")
		}	
	})
// 登录注册  
	function kk(){
		var login = $(".login")
		var reg = $(".register")
		var wrap = $(".wrap")
		var wrapa = $(".wrapa")
		var cuo =$(".cuo")
		var qu =$(".qu")
		var qua =$(".qua")
	    var btn1=$(".btn1")


		login.on("click",function(){
			wrap.slideDown(500)
		})
		cuo.on("click",function(){

			wrap.slideUp(500)
		})
		cuo.on("click",function(){

			wrapa.slideUp(500)
		})
		reg.on("click",function(){
			wrapa.slideDown(500)
		})
		qu.on("click",function(){
			wrapa.css({
				display:"block"
			})
			wrap.css({
				display:"none"
			})
		})
		qua.on("click",function(){
			wrap.css({
				display:"block"
			})
			wrapa.css({
				display:"none"
			})
		})
		var flag=false;
		btn1.on("click",function(){
			if (flag==false) {
				au.play();
				btn1.html("暂停")
				flag=true;
			}else{
				au.pause();
				btn1.html("播放")
				flag=false;
			}
			
		})
	}
	kk()
	// 1。设置类名
	// 2.获取每个标签距离顶部的高度 console.log($(".last").offset().top)
	//点击跳转
	function cl(){
		 var navoff = $(".lasta").offset().top;
		 var taoff = $(".lastb").offset().top;
		 var tboff = $(".lastc").offset().top;
		 var tcoff = $(".lastd").offset().top;
		$(window).on("scroll",function(){
			var sch = $("body,html").scrollTop()
			if(sch<navoff){
				$("nav li").removeClass("aa")
				 $("nav li").eq(0).addClass("aa")			
			}else if(sch>=navoff && sch<taoff){
				 $("nav li").removeClass("aa")
				 $("nav li").eq(1).addClass("aa")		
			}else if(sch>=taoff && sch<tboff){
				 $("nav li").removeClass("aa")
				 $("nav li").eq(2).addClass("aa")	
			}else if(sch>=tboff && sch<tcoff){
				 $("nav li").removeClass("aa")
				 $("nav li").eq(3).addClass("aa")
			}else if(sch>=tcoff){
				$("nav li").removeClass("aa")
				 $("nav li").eq(4).addClass("aa")
			}
		})
		var arr = [navoff,taoff,tboff,tcoff]
		$("nav li").click(function(){
			var i = $(this).index()

			$("body,html").stop().animate({
					scrollTop: arr[i]
			}, "slow")
		})
	}
	cl()
})
