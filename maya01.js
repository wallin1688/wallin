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
//         $(".sanJ").css({ /*"width": "100px", "height": "100px",*/ "position": "absolute", /*"left": e.pageX,*/ "top": e.pageY-80 });
//     }
    $(".GtabLi").click(function(e) {
        e.stopPropagation();
        //获取鼠标坐标：
        var X = e.pageX;
        var Y = e.pageY;
        $(".GtabDiV").show();
        $(".GtabDiV").css({ /*"width": "100px", "height": "100px",*/ "position": "absolute", "left": e.pageX, "top": e.pageY});
    })
    $(".GcurveList").click(function () {
        var ma=$(this).attr("name");
        switch(ma){
                case "1":
                        $(".GtabDiVLi1").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi1").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel00").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;
                case "2":
                        $(".GtabDiVLi2").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi2").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel01").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;
                case "3":
                        $(".GtabDiVLi3").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi3").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel02").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;
                case "4":
                        $(".GtabDiVLi4").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi4").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel03").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;
                case "5":
                        $(".GtabDiVLi5").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi5").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel04").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;
                case "6":
                        $(".GtabDiVLi6").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi6").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel05").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;
                case "7":
                        $(".GtabDiVLi7").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi7").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel06").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;
                case "8":
                        $(".GtabDiVLi8").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi8").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel07").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;
                case "9":
                        $(".GtabDiVLi9").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi9").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel08").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;
                case "10":
                        $(".GtabDiVLi10").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi10").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel09").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;  
                 case "11":
                        $(".GtabDiVLi11").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi11").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel10").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;
                case "12":
                        $(".GtabDiVLi12").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi12").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel11").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break; 
                case "13":
                        $(".GtabDiVLi13").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi13").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel12").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;
                case "14":
                        $(".GtabDiVLi14").find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
                        $(".GtabDiVLi14").siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
                $(".GcurveLabel13").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
                break;                                              
        }
    })
    // 判断选项卡

// $(".GtabLi").click(function () {
//     $(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
//     for(var i=0;i<$(".GtabDiV").find(".GtabDiVLi").length;i++){
//         if($(".GcurveListColor").attr("name")==$(".GtabDiV").find(".GtabDiVLi").eq(i).attr("name")){
//             $(".GtabDiV").find(".GtabDiVLi").eq(i).find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
//         }
//     }
// })
$(document).click(function () {
    $(".GtabDiV").hide();
})
// 选项卡点击事件
$(".GtabDiVLi").click(function () {
    $(this).find(".GtabDiVLiLeftA").addClass("GtabDiVLiRightD");
    $(this).siblings(".GtabDiVLi").find(".GtabDiVLiLeftA").removeClass("GtabDiVLiRightD");
    var ma=$(this).attr("name");
    switch(ma){
            case "1":
            $(".GcurveList1").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel00").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;
            case "2":
                    $(".GcurveList2").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel01").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;
            case "3":
                    $(".GcurveList3").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel02").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;
            case "4":
                    $(".GcurveList4").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel03").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;
            case "5":
                    $(".GcurveList5").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel04").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;
            case "6":
                    $(".GcurveList6").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel05").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;
            case "7":
                    $(".GcurveList7").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel06").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;
            case "8":
                    $(".GcurveList8").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel07").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;
            case "9":
                    $(".GcurveList9").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel08").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;
            case "10":
                    $(".GcurveList10").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel09").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;  
             case "11":
                    $(".GcurveList11").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel10").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;
            case "12":
                    $(".GcurveList12").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel11").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break; 
            case "13":
                    $(".GcurveList13").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel12").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;
            case "14":
                    $(".GcurveList14").addClass("GcurveListColor").siblings(".GcurveList").removeClass("GcurveListColor");
            $(".GcurveLabel13").addClass("GcurveLabelBlock").siblings(".GcurveLabel").removeClass("GcurveLabelBlock");
            break;                                              
    }
})
// 选择工具上点击事件
$(".GselectA").click(function () {
       $(this).addClass("GselectAbg").siblings(".GselectA").removeClass("GselectAbg");
})
// 选择工具下点击事件
$(".GselectB4").click(function () {
        $(this).parents(".GselectB").toggleClass("GselectAbg");
})
