function sum() {
	let str = '451sd1fdsf321321xcvxcvzxc'
	let o = {};
	for(let i = 0; i<str.length;i++) {
	//获取字符串中的每一个值 用charAt（）方法
		let  chars = str.charAt(i);
		 if(o[chars]){
		o[chars] ++;
		}
		else{
		o[chars] = 1;
		}	
		  }
	//遍历对象 forin
	let max = 0;
	let p;
	console.log(o);
	for(let k in o ){
		if(o[k] > max){
		max = o[k];
		p = k;
	}	
	}
	return `${max}+ ${p}`
	}	
	console.log(sum());