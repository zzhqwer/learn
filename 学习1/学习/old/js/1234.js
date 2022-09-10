window.onload=function(){
	var  account=document.querySelector(".account")
	var  goods=document.querySelector(".goods")
	var  num=document.querySelector(".num")
	var  price=document.querySelector(".price")
	var  total=document.querySelector(".total")
	var  btn=document.querySelector(".btn")
	
	
	account.onfocus=function(){
		account.value=""
	}
	
	//选择商品时 显示价格
	//下拉菜单 只能使用onchange
	//普通输入框 onchange  和oninput  都能用
	goods.onchange=function(){
		var goodsv=goods.value
		console.log(goodsv)
		if(goodsv=="请选择"){
			price.value="0.00"
		}else if(goodsv=="瓜子"){
			price.value="2.00"
		}else if(goodsv=="矿泉水"){
			price.value="2.00"
		}else{
			price.value="10.00"
		}
	}
	// 输入数量时：显示总价
	// onchange：内容更改+失去焦点
	//oninput：每一次内容改变都可以触发
	num.onfocus=function(){
		num.value=""
	}
	num.oninput=function(){
		//获取单价   数量  乘法
		var  pricev=price.value
		var  numv=num.value
		
		var totalv=pricev*numv
		total.value=totalv.toFixed(2)
	}
	btn.onclick=function(){
		var accountv=account.value
		var totalv=total.value
		
		if(accountv==""){
			alert("请输入用户名")
		}
		else if(totalv=="0.00"){
			alert("你没有购买商品")
		}
		else {alert(`${account.value}购买了${total.value}￥的商品`)}
	}
}