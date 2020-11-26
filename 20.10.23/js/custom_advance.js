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
        if(win_w>=980){
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
        if(win_w>=980){
            $('.submenu').stop(true, true).slideUp();
            $('.bgGnb').stop(true, true).slideUp();
        }
    });
    
    
    /*---Scroll 모션-------------------------------------------------------*/
           
    /*
        변수 = 단독주택
        배열변수 = 아파트 - 여러개값 저장가능.
        - 배열이름[인덱스] - 개별적으로 출력가능.
        - 인덱스는 0번부터 시작
        * 변수 초기화x = undefined 값 들어있음.
        
        배열변수.push(값);
        - 마지막에 값 추가
    */
    /*
        $('선택자').each(function(){}); - 선택자만큼 반복
        $('선택자').offset().top; - 선택자의 위치값 - 문서 맨 앞을 기준으로 했을 때 거리.
        
    */    
   var last = 0;
   var sec_pos = [];
   var base_line = -300;

   $('section').each(function(){
       var this_offset = $(this).offset().top;
       sec_pos.push(this_offset); // 현재 위치값을 배열변수 마지막에 추가
   });
   
   last = $('section').last().offset().top + $('section').last().height();
   sec_pos.push(last);
 
       
   $(window).on('scroll', function(){    
       var scroll = $(this).scrollTop();
       
               
       $('section').each(function(index){
           if(scroll >=sec_pos[index] + base_line && scroll<sec_pos[index+1]){
               $('section').removeClass('on').eq(index).addClass('on');
               $('section').eq(index).addClass('on').siblings().removeClass('on');
           }
       });
       
       
   });
    
});











