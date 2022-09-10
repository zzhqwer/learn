window.onload = function() {
	var account = document.querySelector(".account")
	var goods = document.querySelector(".goods")
	var price = document.querySelector(".price")
	var num = document.querySelector(".num")
	var total = document.querySelector(".total")
	var btn = document.querySelector(".btn")

	//账号
	account.onfocus = function() {
		account.value = ""
	}

	goods.onchange = function() {
		var goodsv = goods.value
		if (goodsv == "请选择") {
			price.value = "0.00"
		} else if (goodsv == "瓜子") {
			price.value = "5.00"
		} else if (goodsv == "火腿肠") {
			price.value = "10.00"
		} else {
			price.value = "8.00"
		}
	}
	num.onfocus = function() {
		num.value = ""
	}
	num.oninput = function() {
		var pricev = price.value
		var numv = num.value
		var totalv = pricev * numv
		total.value = (pricev * numv).toFixed(2)
	}
	btn.onclick = function() {
		var accountv=account.value
		var totalv=total.value
		if(accountv==""){
			alert("请输入你的账号")
		}else if(totalv=="0.00"){
			alert("请输入你要的数量")
		}else{
			alert(`${account.value}的账号购买了${total.value}￥的东西`)
		}
	}
}
