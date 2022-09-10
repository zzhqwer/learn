window.addEventListener('DOMContentLoaded', function () {
    let lis = document.querySelectorAll('.indicator li')
    let list = document.querySelectorAll('.focus li')
    let text = document.querySelector('.text')
    // 获取点击按钮
    //   右按钮
    let next = document.querySelector('.next')
    //   左按钮

    let prev = document.querySelector('.previous')
    let box = document.querySelector('.box')
    for (let i = 0; i < lis.length; i++) {
        // 指标移动
        lis[i].addEventListener('mouseenter', function () {
            // 找到 indicator指标的 active删除
            document.querySelector('.indicator .active').classList.remove('active')
            // 添加类名 active
            this.classList.add('active')
            text.innerHTML = `第${i+1}个图片的提示信息`
            // 找到 focus下的 active删除
            document.querySelector('.focus .active').classList.remove('active')
            list[i].classList.add('active')

            // 移动 点击事件的index 则会出BUG 解决这个方法 是把i 给index
            index = i

        })
    }

    let index = 0
    // 点击按钮 图片和下面indicator 指标 移动   
    // 需要有一个变量 来当他们的下标
    // 右点击
    next.addEventListener('click', function () {
        index++
        // 需要加一个判断 如果到图片的最后一张则跳到0 index = 0  
        // if(index === lis.length) {
        //     index = 0
        // }
        index = index % lis.length
        // 找到 indicator指标的 active删除
        document.querySelector('.indicator .active').classList.remove('active')
        // 添加类名 active
        lis[index].classList.add('active')
        // 找到 focus下的 active删除
        document.querySelector('.focus .active').classList.remove('active')
        list[index].classList.add('active')
        text.innerHTML = `第${index+1}个图片的提示信息`

    })

    // 左按钮
    prev.addEventListener('click', function () {
        index--
        // 需要加一个判断 如果到图片的最后一张则跳到0 index = 0  
      
        if( index < 0) {
            index = lis.length - 1
        }
        // index = (lis.length + index) % lis.length
        // 找到 indicator指标的 active删除
        document.querySelector('.indicator .active').classList.remove('active')
        // 添加类名 active
        lis[index].classList.add('active')
        // 找到 focus下的 active删除
        document.querySelector('.focus .active').classList.remove('active')
        list[index].classList.add('active')
        text.innerHTML = `第${index+1}个图片的提示信息`

    })


    box.addEventListener('mouseenter', function() {
        clearInterval(timer)
        timer = null
    })
    box.addEventListener('mouseleave', function() {
        timer = setInterval(() => {
            next.click()
        }, 1000);
    })

    let timer = setInterval(() => {
        next.click()
    }, 1000);
})