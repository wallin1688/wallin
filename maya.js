

$(document).click(function(){
  $(".Wlist").hide();
  $('.words').css({
    "background":"none"
  });
});


// 导航菜单悬停状态
$('.words').mouseover(function(){
  $(this).css({
    "background":"#5285a6"
  }).siblings().css({
    "background":"none"
  });
  $(this).parents('.Wnav').siblings().find('.words').css({
    "background":"none"
  });
})

$('.words').mouseout(function(){
  $(this).css({
    "background":"none"
  });
})

// 导航菜单点击事件
$('.words').click(function(event){
    if(!$(this).children(".Wlist").is(":visible")){
        $(this).children(".Wlist").show(); 
        $(this).css({
          "background":"#5285a6"
        }).siblings().css({
          "background":"none"
        })
       }else{ 
        $(this).children(".Wlist").hide(); 
        $(this).css({
          "background":"none"
        })
      }

    // $(this).children(".Wlist").toggle();
    // $(this).toggleClass('nav1bgChange');

    $(this).siblings().children(".Wlist").hide();
    $(this).parents('.Wnav').siblings().find('.Wlist').hide();
    $(this).parents('.Wnav').siblings().find('.words').css({
      "background":"none"
    });
    // $(this).children('.Wlist').show();
    // $(this).find('.Wlist').hide();
    event.stopPropagation();
})


// 二级页面悬停显示隐藏  以及图标高亮
$('.rightWord').mouseover(function(){
  $(this).children('div').show();
  $(this).css('background','#5285a6');
  $(this).parent('.rightWords').siblings('.leftImg').children('.iconImgs,.iconImgs1').eq($(this).index()).css('opacity','1');
})
$('.rightWord').mouseout(function(){
  $(this).children().eq(2).hide();
  $(this).css('background','none');
  $(this).parent('.rightWords').siblings('.leftImg').children('.iconImgs,.iconImgs1').eq($(this).index()).css('opacity','0.7');
})






// 菜单栏选项卡切换的点击事件
$('.nav1-1,.nav2-1').click(function(){
  $(this).children('.nav1-list,.nav2-list').toggle();
})

$('.tab').mouseover(function(){
  $(this).css('background',"#5285a6");
  $(this).siblings(".tab").css('background',"none")
})
 
// 点击切换选项卡
$('.tab').click(function(){
  $('.nav2-1-1').find('span').eq($(this).index()).show().siblings().hide();
  $('.nav1').find('.Wnav').eq($(this).index()+1).show().siblings('.changeAdd').hide();
})

$('.tab1').click(function(){
  $('.nav1-1-1').find('span').eq($(this).index()).show().siblings().hide();
})

$('.WordEstablish').click(function(){
  $('.Westablishs').toggle();
  $('.WdownTriangle1').toggleClass('WrightTransform');
})
$('.WordLead').click(function(){
  $('.Wleads').toggle();
  $('.WdownTriangle2').toggleClass('WrightTransform');
})
  

// 点击收起展开
$('.WiconClick').click(function(){
  $(this).siblings('.nav2Icons').toggle();
  $(this).toggleClass("clickCss");
  $(this).parent('.navBox').toggleClass("parentsBox");
})


// 点击nav2出现二级菜单
$('.nav2Icons').click(function(e){
  pageY=e.pageY;
  pageX=e.pageX;
  $(this).siblings('.Wlist').toggle();
  $(this).siblings('.Wlist').css({
      " top": pageY,
      "left": pageX,
  }
  );
  $(this).parent().siblings().children('.Wlist').hide();
  event.stopPropagation();
})







// $('.Wicon40').click(function(){
//   if(!$(this).siblings('.Wlist').is(":visible")){
//     $(this).siblings('.Wlist').show();
//     $(this).parent().siblings().children('.Wlist').hide();
//    }else{ 
//     $(this).siblings('.Wlist').hide();
//   }
// })

// 
$('.Wicon10').click(function(){
  $(".clickChange1").show();
  $(".clickChange1").siblings('.clickChange').hide();
  $(this).css('background-color','#5285a6');
  $(this).siblings().css('background-color','#444');
  $('.object').html('层级');
})
$('.Wicon11').click(function(){
  $(".clickChange2").show();
  $(".clickChange2").siblings('.clickChange').hide();
  $(this).css('background-color','#5285a6');
  $(this).siblings().css('background-color','#444');
  $('.object').html('对象');
})
$('.Wicon12').click(function(){
  $(".clickChange3").show();
  $(".clickChange3").siblings('.clickChange').hide();
  $(this).css('background-color','#5285a6');
  $(this).siblings().css('background-color','#444');
  $('.object').html('组件');
})



$('.logIn').click(function(){
  $('.logList').toggle();
})



// 右边选项卡点击切换
$('.WrightTab').click(function(){
  $('.WrightList').eq($(this).index()).show().siblings('.WrightList').hide();
  $(this).addClass('WrightAddclass').siblings().removeClass('WrightAddclass');
})

$('.WrightListTab').click(function(){
  // $('.WrightList').eq($(this).index()).show().siblings('.WrightList').hide();
  $(this).addClass('WrightAddclass').siblings().removeClass('WrightAddclass');
})