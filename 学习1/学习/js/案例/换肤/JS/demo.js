window.onload = function(){
    function change(){
        var img = document.querySelector('.box').querySelectorAll('img');

        var box= document.querySelector('.box');
        var btn = document.querySelector('.btn');
        for(let i = 0; i< img.length;i++) {
            img[i].onclick = function() {
            document.body.style.backgroundImage = 'url('+this.src+')';
            }
        }
        let falg = 0;
        btn.onclick = function(){
        if(falg === 0) {
            box.style.display = 'block';
            falg = 1;
        }else{
            box.style.display = 'none';
            falg = 0;
        }
        console.log(falg);
        }
        btn.onmouseover = function(){
            this.style.top = '0';
        }
        btn.onmouseout = function(){
            this.style.top = '-10px';

        }
    }
    change();
    var btnss = document.querySelector('.btns');
    var btns = document.querySelectorAll('.btns button');
    var btnsmask = document.querySelector('.btns div');

    for(let i = 0; i< btns.length; i++) {
        btns[i].onmouseover = function() {
            for(let i = 0;i<btns.length;i++){
                btns[i].style.backgroundColor = '';
            }
            switch(i){
                case 0: {
                    btns[i].style.backgroundColor = 'orange';
                }
                break;
                case 1: {
                    btns[i].style.backgroundColor = 'red';
                }
                break;
                case 2: {
                    btns[i].style.backgroundColor = 'green';
                }
                break;
                case 3: {
                    btns[i].style.backgroundColor = 'cyan';
                }
                break;
                case 4: {
                    btns[i].style.backgroundColor = 'blue';
                }
                break;
                default:{
                    btns[i].style.backgroundColor = 'purple';
                }
                break;
            }
           
           
        }
        btns[i].onmouseout = function(){
            this.style.backgroundColor = '';
        }
    }

}