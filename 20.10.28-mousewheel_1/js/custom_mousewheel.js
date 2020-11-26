$(function(){
    
    //변수선언 
    var win_w = $(window).width();
    var sec_pos = [];
    var n = 0;
    var mvTrue = true;

    //화면크기에 따른 이벤트 실행 여부 
    $(window).on('resize',function(){

        win_w = $(this).width();
        if(win_w >= 1024){
            mouse_wheel_scroll();
        } else{
            $(window).off('mousewheel DOMMouseScroll');
        }
    });

    //화면크기 
    $(window).trigger('resize');

    //초기실행
    save_offset_top();
    
    //위치 값 구하는 함수 생성 
    function save_offset_top(){
        sec_pos = [];  //초기화

        $('section').each(function(){
            var this_offset =  $(this).offset().top;
            sec_pos.push(this_offset);
        });
    }

    //마우스 휠에 따른 section 이동 함수 생성 
    function mouse_wheel_scroll(){
        $(window).on('mousewheel DOMMouseScroll', function(e){
            e.bubbles == false;
            var evt = e.originalEvent;
            var result;

            result = (evt.wheelDelta) ? -evt.wheelDelta : evt.detail * 40 ;

            if(mvTrue){
                mvTrue = false;
                (result > 0) ? n += 1 : n -= 1 ;
                if(n>=$('section').length){
                    n = $('section').length;
                } else if(n<0){
                    n=0;
                }
                $('body, html').animate({scrollTop: sec_pos[n]},700,function(){
                    mvTrue=true;
                });
            }

        });
    }



    
    
});
