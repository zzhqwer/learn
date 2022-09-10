window.onload = function(){
 //    var clickNnm=0;
	// var box= document.querySelector(".box");
	// var btns= document.querySelector(".btns");
 //    var btn1 = document.querySelectorAll("button")[0];
 //    var btn2 = document.querySelectorAll("button")[1];
 //    var ul = document.querySelector("ul");
	// btn1.disabled = true;
 //    btn1.onclick = function(){
	// 	btn2.disabled = false;
 //        var left = ul.style.left
	// 	if(left == ""){
	// 		left=0;
	// 	}
	// 	ul.style.left = parseInt(left) + 300 + "px";
	// 	clickNnm--;
	// 	if(clickNnm==0){
	// 		btn1.disabled = true;
	// 	}
 //    }
	// btn2.onclick = function(){
	// 	btn1.disabled = false;
	//     var left = ul.style.left
	// 	if(left == ""){
	// 		left=0;
	// 	}
	// 	ul.style.left = parseInt(left) - 300 + "px";
	// 	clickNnm++;
	// 	if(clickNnm==6){
	// 		btn2.disabled = true;
	// 	}
	// }
	// // 按钮显示
	// box.onmousemove = function(){
	// 	btns.style.display = "block";
	// }
	// box.onmouseout = function(){
	// 	btns.style.display = "none";
	// }
	var ul = document.querySelector("ul");
	var timer = setInterval(move,3000)
	function move(){
		if(parseInt(ul.style.left)>-2700){
			ul.style.left = parseInt(ul.style.left)-300+"px"
			console.log(ul.style.left)
			ul.style.transition = "left 1s"
			if(parseInt(ul.style.left)<=-2700){
				ul.style.transition = "left 0s"
				ul.style.left = "0px"
			}
		}else{
			ul.style.left = "-300px"
			ul.style.transition = "left 0s"
		}
	}
}