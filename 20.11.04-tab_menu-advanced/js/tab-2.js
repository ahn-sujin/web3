$(function(){
    
    $('.tab_menu>li').on('click', function(){
        var i = $(this).index();
        
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab_pannel>li').eq(i).fadeIn().siblings().fadeOut();    
        $('.tab_pannel>li').eq(i).addClass('on').siblings().removeClass('on');
        
    });
   
    // 강제로 컴퓨터가 이벤트 발생시켜주는 것 = trgger
    $('.tab_menu>li').first().trigger('click');
    
});