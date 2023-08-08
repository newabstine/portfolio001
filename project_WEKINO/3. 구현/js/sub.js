$(document).ready(function(){


    let ht = $(window).height()
    let hht = $('header').height()
    $('section').eq(0).height(ht-hht)


    let i=0
    setInterval(function(){
        i++;
        if(i==4)i=0;

        $('.slide ul li').eq(i-1).css({'left':0}).stop().animate({'left':'-100%'},900)
        $('.slide ul li').eq(i).css({'left':'100%'}).stop().animate({'left':0},900)
        $('.bar .line2').css({'width': 100*i})
    },2000)

})