$(function(){
    
    var win_w = $(window).width();
    
    $(".toggle").on('click',function(){
        $(".gnb_wrap").stop().fadeToggle();
    });
    
    $(window).on('resize',function(){
        win_w = $(this).width();
        
        if(win_w >= 980){
            $('.submenu').hide();
            $('.gnb_wrap').removeAttr('style');
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