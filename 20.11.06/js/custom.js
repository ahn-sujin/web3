$(function(){
    
    $('.tab>li>.menu').on('click',function(){
        var i = $(this).parents('li').index();

        $('.tab>li').eq(i).children('.pannel').fadeIn().parents('li').siblings().children('.pannel').fadeOut();
        $('.tab>li').eq(i).addClass('on').siblings().removeClass('on');

    });


    $('.tab>li>.menu').first().trigger('click');

});