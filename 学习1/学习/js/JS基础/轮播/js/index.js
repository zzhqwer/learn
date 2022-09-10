window.onload = function (){
	var ul = document.querySelector("ul");
	var timer = setInterval(move,3000)
	function move(){
		if(parseInt(ul.style.left)>-2700){
		
			
			ul.style.left = parseInt(ul.style.left)-300+"px"
			ul.style.transition = "left 1s"
			console.log(ul.style.left)
		}else{
			ul.style.left = "-300px"
			ul.style.transition = "left 1s"
		}
	}
}