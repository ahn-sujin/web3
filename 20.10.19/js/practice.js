$(function(){
    
    var win_w = $(window).width();
    
    $(window).on('resize',function(){
        win_w = $(this).width();
    });
   
    $("#gnb>li").on('mouseenter',function(){
        if(win_w >= 980 ){
            $(this).children('.submenu').stop(true,true).slideDown(); 
        }else{
            $('#gnb>li').off('click')
            $('#gnb>li').on('click',function(){
                
            })
        }
        
        
    });
    
    $("#gnb>li").on('mouseleave',function(){
       $(this).children('.submenu').stop(true,true).slideUp(); 
    });
    
});