jQuery(document).ready(function(){
    $('.mainMenu>li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.subMenu').stop().slideUp(500);
    });
    $('.notice li:first').click(function(){
        $("#modal").addClass("active");
    });
    $(".btn").click(function(){
        $("#modal").removeClass("active");
    });
    setInterval(function(){
        $('.imgSlideList').delay(2000);
    $('.imgSlideList').animate({ marginLeft: -750 });
    $('.imgSlideList').delay(2000);
    $('.imgSlideList').animate({ marginLeft: -1500 });
    $('.imgSlideList').delay(2000);
    $('.imgSlideList').animate({ marginLeft: 0 });
    $('.imgSlideList').delay(2000);
    });
});