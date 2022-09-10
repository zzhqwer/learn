
let that
//class对象
class Tab {
    constructor(box){
        that = this
        this.boxs = document.querySelector(box)
        //获取ul
        this.ul = this.boxs.querySelector('.header ul')
        this.contnet = this.boxs.querySelector('.content')
        //添加按钮
        this.btn  = this.boxs.querySelector('.header p')
        this.init()
        console.log(this.spans)
    }
    updateData(){
        this.lis = this.boxs.querySelectorAll('.header ul li')
        this.divs = this.boxs.querySelectorAll('.content div')
        this.close = this.boxs.querySelectorAll('.header ul li .close')
        this.spans = this.boxs.querySelectorAll('.header ul li span:first-child')
    }
    init(){
        // init 初始化绑定所有的事件
        this.updateData()
        this.btn.addEventListener('click',this.addTab)
        for(let i = 0; i < this.lis.length; i++){
            this.lis[i].index = i
            this.lis[i].addEventListener('click',this.toggleTab)
            this.close[i].addEventListener('click',this.clearTab)
            this.spans[i].addEventListener('dblclick',this.inTab)
            this.divs[i].addEventListener('dblclick',this.inTab)
        }
    }
    clearclass(){
        for(let i = 0; i < this.lis.length; i++) {
            this.lis[i].classList.remove('active')
            this.divs[i].classList.remove('active')
        }
    }
    // 1. tab切换
    toggleTab(){
     
        that.clearclass()
        this.classList.add('active')
        that.divs[this.index].classList.add('active')
    }
    // 2. 添加tab
    addTab(){
        that.clearclass()
      // (1) 创建li元素和div元素
        let li = ' <li class="active"><span>tab栏切换</span> <span class="close"> <img src="./images/icon-close.png" alt=""></span></li>'
        let div = '<div class="active">页面二</div>'
        // (2) 追加到父元素
        that.ul.insertAdjacentHTML('beforeend',li)
        that.contnet.insertAdjacentHTML('beforeend',div)
        that.init()
    }
    // 3. 删除tab              
    clearTab(e){
        e.stopPropagation()// 阻止冒泡 防止触发li的切换
        let index = this.parentNode.index
        console.log(index)
        //根据索引号删除对应的li和section
        that.lis[index].remove()  //remove 可以直接删除选定的元素
        that.divs[index].remove()
        that.init()

        //当我们删除了不是选中状态的li 的时候，原来的选中状态的li保持不变
        if(document.querySelector('.active')) return;
        //当我们的删除了选中状态的这个li的时候，让它的前一个li处于选中状态
        index--
        
        //手动调用我们的点击事件 不需要鼠标触发
        that.lis[index] && that.lis[index].click()
    }
    // 4. 改为输入框
    inTab(){
        let str = this.innerHTML
        console.log(this)
        //双击禁止选定文字
        this.innerHTML = '<input type = "text" />'
        let input = this.children[0]
        input.value = str
        input.select() // 文本框的文字处于选定状态
        //当我们离开文本框
        input.addEventListener('blur',function(){
            this.parentNode.innerHTML = this.value
        })
        //按下回车也可以把文本框里面的值给span
        input.addEventListener('keyup',function(e){
            if(e.key === 'Enter') {
                this.blur()
            }
        })
      
    }
}
new Tab('.box')