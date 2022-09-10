window.addEventListener('DOMContentLoaded', function() {
    // 获取indicator指令下的所有li
    let lis = document.querySelectorAll('.indicator li')
    // 获取focus的li
    let list = document.querySelectorAll('.focus li')
    let text = document.querySelector('.text')
    // 获取按钮
    let next = document.querySelector('.next')
    let previous = document.querySelector('.previous')
    // 获取大盒子
    let box = document.querySelector('.box')

    // 遍历每一个li添加 移动事件
    for(let i= 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function() {
            //删除高亮 就是找到 indicator 下的 active
            document.querySelector('.indicator .active').classList.remove('active')
            // 给移动的li加高亮
            this.classList.add('active')
            // 移动下面指标上面的图片动 也是添加active里有一个opacity 控制显示
            document.querySelector('.focus .active').classList.remove('active')
            list[i].classList.add('active')
            text.innerHTML = `第${i+1}个提示信息`
            // 需要叫index = i 那着这样 你鼠标移动到那个位置 就叫这个位置的下标给index
            index = i
        })
    }
    let index = 0
    //添加点击按钮 移动图片 需要有一个数自增或自减 来控制indicator指标和focus的下标
    // 右按钮
    next.addEventListener('click', function() {
        // 每点击一次就会加一 正好和下标相等
        index++
        // 需要添加个判断 如果下标和图片的最后一个相等则跳回第一个
        if(index === lis.length) {
            index = 0
        }
        getToggle()

    })
    // 左按钮
      previous.addEventListener('click', function() {
        // 每点击一次就会加一 正好和下标相等
        index--
        if(index < 0) {
            index = lis.length - 1
        }
        // index = index % lis.length
        getToggle()
    })
    // 由于右和左的内容有相同之处 可以封装一个函数
    function getToggle() {
        document.querySelector('.indicator .active').classList.remove('active')
        lis[index].classList.add('active')
        document.querySelector('.focus .active').classList.remove('active')
        list[index].classList.add('active')
        text.innerHTML = `第${index+1}个提示信息`
    }

    //自动播放
    let timer = setInterval(() => {
        // 可让右按钮 自动点击  next.click()
        next.click()
    },3000)

    // 进入大盒子停止 
    box.addEventListener('mouseenter', function() {
        clearInterval(timer)
    })
    // 离开大盒子开始    
    box.addEventListener('mouseleave', function() {
        timer = setInterval(() => {
            // 可让右按钮 自动点击  next.click()
            next.click()
        },3000)
    })                          
})