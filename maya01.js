// 曲线选项卡切换
$(".GcurveList").click(function(){
    $(this).addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
})
// 鼠标点击事件的弹窗位置
// $(".GtabLi").on({
//     mouseenter: function(e){
//         $(".sanJ").show();
//         //获取鼠标坐标：
//         var X = e.pageX;
//         var Y = e.pageY;
//         //获取鼠标坐标e.pageX e.pageY，给图片添加绝对位置 position:absolute  改变图片大小
//         $(".sanJ").css({ /*"width": "100px", "height": "100px",*/ "position": "absolute", /*"left": e.pageX,*/ "top": e.pageY-80 });$(".sanJ").show();
//         //获取鼠标坐标：
//         var X = e.pageX;
//         var Y = e.pageY;
//         //获取鼠标坐标e.pageX e.pageY，给图片添加绝对位置 position:absolute  改变图片大小
//         $(".sanJ").css({ /*"width": "100px", "height": "100px",*/ "position": "absolute", /*"left": e.pageX,*/ "top": e.pageY-80 });
//     }
    $(".GtabLi").click(function() {
        $(".GtabDiV").show();
    })