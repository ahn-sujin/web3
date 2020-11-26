
/*
stop() : 이전 이펙트 효과 중지
stop([clearQue],[JumpToEnd])
stop()의 구성요소 
    -bool : true(1)와 flase(0)값을 취급
    -clearQue : 효과 지우기 
    -JumpToEnd : 효과 다음 실행
stop(true,false) : 기본값

mouseenter, mouseleave 일 때만 stop(true,true)
*/


$(function(){
    
    var wid_w = $(window).width();
    
    $(window).on('resize',function(){
        win_w = $(this).width();
    });
        
    $("#gnb>li").on('mouseenter',function(){    
       if(wid_w >= 980){
           $(this).children('.submenu').stop(true,true).slideDown();
       } else {
           $('#gnb>li').off('click');
           $('#gnb>li').on('click',function(){
               $('.submenu').stop().slideUp();
               $(this).children('.submenu').stop().slideToggle();
           });
       }
    });
    
   $("#gnb>li").on('mouseleave',function(){
       if(wid_w >= 980){
           $(this).children('.submenu').stop(true,true).slideUp(); 
       }
   });
    
    
    

});












