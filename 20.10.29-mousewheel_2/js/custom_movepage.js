$(function(){
    
//변수 선언
var last = 0;
var sec_pos = [];
var base_line = -300;
var html_tmp = '';

//창크기 조절 
$(window).trigger('resize');
    
//리사이즈 
    $(window).on('resize',function(){
       win_w =$(this).width();
       //최초실행
       save_offset_top();    
    });
    
//스크롤 모션
    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();
        
        $('section').each(function(index){
            if(scroll >= sec_pos[index] + base_line && scroll < sec_pos[index+1]){
                $('section').removeClass('on').eq(index).addClass('on');
                $('.pagenation').children('a').removeClass('on').eq(index).addClass('on');
                $('#gnb>li').removeClass('on').eq(index).addClass('on');
               }
        });
    });
    


//스크롤 위치 구하기 위한 함수 생성
function save_offset_top(){
    sec_pos = [];  //초기화 

    $('section').each(function(){
        var this_offset = $(this).offset().top;
        sec_pos.push(this_offset);
    });  //스크롤의 현재 위치를 알기 위한 반복문

    last = $('section').last().offset().top + $('section').last().height();
    sec_pos.push(last);  //스크롤 마지막 위치 구하기 
}

//페이지 이동 함수 생성 
function move_page(index){
    $('html, body').stop().animate({'scrollTop':sec_pos[index]},1000);
}

//gnb 이벤트 연결 
$('#gnb>li').on('click',function(){
    var gnb_i = $(this).index();
    move_page(gnb_i);
});

//pagenation 생성 
$('section').each(function(){
    var page_name = $(this).attr('data-page-name');
    html_tmp += '<a href="#">' + page_name + '</a>'
});

$('.pagenation').html(html_tmp);

//pagenation 이벤트 연결
$('.pagenation').on('click','a',function(){
    var page_i = $(this).index();
    move_page(page_i);
});
    
    
});
