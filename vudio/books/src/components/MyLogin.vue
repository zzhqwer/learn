<template>
        <div >
            <form action="" @submit.prevent>
                <div class="form-grow">
                    <label for="">用户名</label>
                    <input type="text" name="" id="">
                </div>
                  <div class="form-grow">
                    <label for="">密码</label>
                    <input type="text" name="" id="">
                </div>
                <button class="btnDailog">登录</button>
            </form>
        </div>

</template>

<style>
  .form-grow{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
}
  .form-grow input{
    width: 200px;
    height: 30px;
    border: solid 1px #ccc;
}
  .form-grow label{
    display: block;
    width: 60px;
    text-align: right;
    margin-right: 5px;
}
 .btnDailog {
    width: 100px;
    height: 30px;
    background: skyblue;
    outline: none;
    border: none;
    border: solid 1px rgb(8, 28, 36);
    margin-bottom: 15px;
}
  button:hover{
    background: orange;
}
  .close{
    position: absolute;
    top: -20px;
    right: 5px;
    font-size: 40px;
    cursor: pointer;
}
</style>
