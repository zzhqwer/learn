window.onload = function() {
	function returntop() {
		let returnTop = document.querySelector(".returnTop");
		window.onscroll = function() {
			let scrollTop = document.documentElement.scrollTop;
			if (scrollTop > 0) {
				returnTop.style.display = "block";
			} else {
				returnTop.style.display = "none";
			}
		}
	}
	returntop();
	function times(){
		let trendsNewsspan = document.querySelector(".trendsNews p span");
		let time = new Date();
		trendsNewsspan.innerHTML = time.toLocaleString();
	}
	times()
}
