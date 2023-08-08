$(document).ready(function(){

    // 햄버거 설정
    $('.menu-trigger').click(function(){
        $('.side').css({'left':0})
    });
    $('.menu-trigger2').click(function(){
        $('.side').css({'left':'100%'})
    })

    // 앨범 설정
    $('.title ul li').eq(0).click(function(){
        $('.txt1').show()
    })




})