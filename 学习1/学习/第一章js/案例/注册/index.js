window.onload=function(){
	var tel=document.querySelector(".tel");
	var QQ=document.querySelector(".QQ");
	var form=document.querySelector("form");
	var  telVal=tel.value;
	var   QQVal=QQ.value;
	form.onsubmit=function(){
		if(telVal.length>11){
			alert("请输入正确的手机号");
			return false;
		}/* else if(typeof(telVal)=='string'){
			alert("请输入正确的手机号");
			return false;
		} */
		else if(QQVal.length>10){
			alert("请输入正确QQ号")
			return false;
		}
	
	}
	
}