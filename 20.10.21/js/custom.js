
$(function(){
    
    var win_w = $(window).width();
    
    $(window).on('resize', function(){
        win_w = $(this).width();
        if(win_w >=980){
            $('.gnb_wrap').removeAttr('style');
        }
    });
    
    
    /*---GNB 메뉴-------------------------------------------------------*/
    $('.toggle').on('click', function(){
        $('.gnb_wrap').fadeToggle();
    });
    
    $('#gnb').on('mouseenter', function(){
        if(win_w >= 980){
            $('.submenu').stop(true, true).slideDown();
            $('.bgGnb').stop(true, true).slideDown();
        }else{
            $('#gnb>li>a').off('click');
            $('#gnb>li>a').on('click', function(){
                $('.submenu').stop().slideUp();
                $(this).next('.submenu').stop().slideToggle();
            });
        }
    });
    $('.bgGnb').on('mouseleave', function(){
        if(win_w >= 980){
            $('.submenu').stop(true, true).slideUp();
            $('.bgGnb').stop(true, true).slideUp();
        }
    });

});

/*---scroll 모션-------------------------------------------------------*/







