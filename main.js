console.log("我是js");


// 定義渲染區域
// 變數 vue vun1 = new Vue(); - 要新增一個Vue物件
// el 指定元素 "選取器"
// data 資料
// {物件名稱：物件值}
var vue1 = new Vue({
    el: "#vue1",
    data: {
        text: "嗨嗨！我是Vue～！！"
    }
})