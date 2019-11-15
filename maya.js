// $('.words').mouseover(function(){
//   $(this).css({
//     "background":"#5285a6"
//   }).siblings().css({
//     "background":"none"
//   })
//   if($(this).show()){
     

//   }
// })

// $('.file').mouseover(function(){
//     $(".list1").show(); 
//     $(this).css({
//       "background":"#5285a6"
//     }).siblings().css({
//       "background":"none"
//     })

// $(".list1").siblings().hide();
// $(".nav1 ul").show();
// })
// $(".file").mouseout(function(){
//   $(".list1").hide(); 
//   $(this).css({
//     "background":"none"
//   })
// })

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
      event.stopPropagation();
    $(this).siblings().children(".Wlist").hide();
    $(this).parents('.Wnav').siblings().find('.Wlist').hide();
    $(this).parents('.Wnav').siblings().find('.words').css({
      "background":"none"
    })
})

// 二级页面
$('.rightWord').mouseover(function(){
  $(this).children('div').show();
  $(this).css('background','#5285a6');
})
$('.rightWord').mouseout(function(){
  $(this).children().eq(2).hide();
  $(this).css('background','none');
})


// 菜单栏切换的点击事件
$('.nav2-1').click(function(){
  if(!$('.nav2-list').is(":visible")){
    $('.nav2-list').show();
   }else{ 
    $('.nav2-list').hide();
  }
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


$(document).click(function(){
  $(".Wlist").hide();
  });
  