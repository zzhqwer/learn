window.addEventListener('load', function () {
    let box = document.querySelector('.box');
    let boxWidht = box.offsetWidth;
    let arrL = document.querySelector('.arr-l');
    let arrR = document.querySelector('.arr-r');
    let ul = document.querySelector('.box ul');
    let lis = document.querySelectorAll('.box ul li');
    let ol = document.querySelector('.box .circle')

    box.addEventListener('mouseenter', function () {
        arrL.style.display = 'block';
        arrR.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    box.addEventListener('mouseleave', function () {
        arrL.style.display = 'none';
        arrR.style.display = 'none';
        timer = setInterval(() => {
            //手动调用点击事件
            arrR.click();
        }, 2000)
    })
    // 动态生成小点
    for (let i = 0; i < lis.length; i++) {
        // 创建节点
        let li = this.document.createElement('li');
        //添加节点
        ol.appendChild(li);
        //li设置自定义属性 和图片相匹配
        li.setAttribute('data-index', i)
        // 添加节点点击事件
        li.addEventListener('click', function () {
            index = li.getAttribute('data-index')
            // 图片移动距离 获得自定义属性的下标 * 盒子的宽度 
            animate(ul, -index * boxWidht)
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //当点击每个li 都会把索引号获取过来 赋
            cir = num = index;
        })
        // 需要第一个小点添加类名 现在的currend
        ol.children[0].className = 'current';


    }
    // 右点击移动图片
    // 需要定义一个全局变量来计算 
    var num = 0;
    var cir = 0;
    let clone = ul.children[0].cloneNode(true);
    ul.appendChild(clone);
    var flag = true;
    arrR.addEventListener('click', function () {
        //要实现无缝滚动  需要复制第一张图片的节点 实现跳转 cloneNode（） true 深拷贝 false或省略是浅拷贝
        if (flag) {
               // 关闭节流阀
            flag = false;
            if (num === ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * boxWidht,function(){
                // 打开节流阀
                flag = true;
            } );
            // 要想圆圈跟着片动 需要添加个变量  是全局变量
            cir++;
            // 如果cir走到了 最后一张克隆的的这种图片了 我们就复原；
            // if(cir == ol.children.length ){
            //     cir = 0;
            // }
            cir = cir === ol.children.length ? cir = 0 : cir;
            circleChange(cir);

        }
    })


    arrL.addEventListener('click', function () {
        if(flag){
            flag = false;
            if (num <= 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * boxWidht + 'px';
            }
            num--;
            animate(ul, -num * boxWidht,function(){
                flag = true;
            });
            // 要想圆圈跟着片动 需要添加个变量  是全局变量
            cir--;
            // 如果cir < 0 说明第一张图片，则小圆圈要给改为最后一张；
            // if(cir < 0 ){
            //     cir = ol.children.length - 1 ;
            // }
            cir = cir < 0 ? ol.children.length - 1 : cir;
            circleChange(cir);
        }
        
    })

    function circleChange(cir) {
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[cir].className = 'current';
    }

    // 10.自动播放轮播图
    var timer = setInterval(() => {
        //手动调用点击事件
        arrR.click();
    }, 2000)
})


