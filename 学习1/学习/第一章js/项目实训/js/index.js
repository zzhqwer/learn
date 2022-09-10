$(function() {
	var btn1 = $("#btn1")
	var span = $("#btn1 span")
	var num = false;
	btn1.click(function() {
		if (num == false) {
			span.removeClass("glyphicon-plus");
			span.addClass("glyphicon-minus");
			num = true;
		}else{
			span.removeClass("glyphicon-minus");
			span.addClass("glyphicon-plus");
			num = false;
		}
	})


})
