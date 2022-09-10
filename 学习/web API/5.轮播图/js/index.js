import animate from '../js/animate.js'
//基础元素
import { box, next, previous } from '../js/base.js'


// 获取图片
const lis = document.querySelectorAll('.box ul li')
// 获取ul
const ul = document.querySelector('.box ul')
// 获取指标indicator的盒子
const circle = document.querySelector('.circle')
// 加载DOM结构在运行js
// 第一步进入盒子显示按钮    // 第一步进入盒子显示按钮
box.addEventListener('mouseenter', function () {
    previous.style.display = 'block'
    next.style.display = 'block'

    //停止播放
    clearInterval(timer)
    timer = null
})
// 离开盒子隐藏按钮
box.addEventListener('mouseleave', function () {
    previous.style.display = 'none'
    next.style.display = 'none'
    timer = setInterval(() => {
        next.click()
    }, 3000)
})

//第二步根据图片的多少来动态生成indicator 指标
for (let i = 0; i < lis.length; i++) {
    // 创建li节点
    let li = document.createElement('li')
    //li添加点击事件来 触发图片和添加样式current
    li.addEventListener('click', function () {
        // 根据querySelect()的特性 来删除current
        document.querySelector('.box ol .current').classList.remove('current')
        // 然后添加
        this.classList.add('current')
        // 根据上面的指标indicator来触发图片的移动
        // 必须给ul添加绝对定位
        ul.style.left = - i * box.offsetWidth + 'px'
    })
    circle.appendChild(li)
}
circle.children[0].classList.add('current')

//第三步点击按钮 需要创建个变量 = 0
// 实现无缝 需要赋值一个 第一个的位置
let clone = ul.children[0].cloneNode(true)
ul.appendChild(clone)
let index = 0
let num = 0
// 节流阀
let flag = true
// 右按钮
next.addEventListener('click', function () {
    if (flag) {
        flag = false
        if (index === ul.children.length - 1) {
            ul.style.left = 0
            index = 0
        }
        index++
        animate(ul, -index * box.offsetWidth, function () {
            flag = true
        })
        num++
        if (num === circle.children.length) {
            num = 0
        }
        getCircle()
    }
})

// 左按钮
previous.addEventListener('click', function () {
    if (flag) {
        flag = false

        if (index <= 0) {
            index = ul.children.length - 1
            ul.style.left = -index * box.offsetWidth + 'px'
        }
        index--
        animate(ul, -index * box.offsetWidth, function () {
            flag = true
        })
        num--
        if (num < 0) {
            num = circle.children.length - 1
        }
        getCircle()
    }
})
function getCircle() {
    document.querySelector('.circle .current').classList.remove('current')
    circle.children[num].classList.add('current')
}

// 自己轮播
let timer = setInterval(() => {
    next.click()
}, 3000)


