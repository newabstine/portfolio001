$(document).ready(function(){


    let ht = $(window).height()
    let hht = $('header').height()
    $('section').eq(0).height(ht-hht)


    let i=0
    setInterval(function(){
        i++;
        if(i==4)i=0;

        $('.hero ul li').eq(i-1).css({'left':0}).stop().animate({'left':'-100%'},900)
        $('.hero ul li').eq(i).css({'left':'100%'}).stop().animate({'left':0},900)
        $('.bar .line2').css({'width': 100*i})
    },12000)


    $('.pro_title2 li').mousemove(function(e){

        let x = e.pageX;
        let y = e.pageY;
    
        $('.pro_title2 li').find('div').removeClass('on')
        $(this).find('div').addClass('on')
        $(this).find('div').css({'left':x })
    });

    $('.pro_title2 li').mouseleave(function(e){
        let x = e.pageX;
        let y = e.pageY;

        $('.pro_title2 li').find('div').removeClass('on')
    })



})