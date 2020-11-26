$(function(){
   $('#gnb>li').on('mouseenter',function(){
      $(this).children('.submenu') 
   }); 
    
    $('#gnb>li').on('mouseleave',function(){
       $(this).children('.submenu').stop().slideUp() 
    });
});

