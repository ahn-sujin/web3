$(function(){

    var wid_w = $(window).width();

    $(window).on('resize',function(){
        wid_w = $(this).width();
    });


    $("#gnb>li").on('mouseenter',function(){
        if(wid_w >= 980){
            $(this).children('.submenu').stop(true,true).slideDown();
        } else{
            $("#gnb>li").off('click');
            $("#gnb>li").on('click',function(){
                $(".submenu").stop().slideUp();
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