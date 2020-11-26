$(function(){
    
    $('.tab_menu').click('on',function(){
       var i = $(this).index();
        
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab_pannel>li').eq(i).fadeIn().siblings().fadeOut();
    });
    
    
    
    
    
    
    
});