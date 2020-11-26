
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
    
    var win_w = $(window).width();
    
    $('.toggle').on('click',function(){
        $('.gnb_wrap').fadeToggle();
    });
    
    $(window).on('resize',function(){
        win_w = $(this).width();
        
        if(win_w >= 980 ){
            $('.submenu').hide();
            $('gnb_wrap').removeAttr('style');
        }
    });
    
    $("#gnb>li").on('mouseenter',function(){
        if(win_w >= 980){
            $(this).children('.submenu').stop(true,true).slideDown();
        } else {
            $("#gnb>li>a").off('click');
            $("#gnb>li>a").on('click',function(){
                $('.submenu').stop().slideUp();
                $(this).next('.submenu').stop().slideToggle();
            });
        }
        
    });
    $("#gnb>li").on('mouseleave',function(){
        if(win_w >= 980){
            $(this).children('.submenu').stop(true,true).slideUp();
        }
        
    });
    
});











