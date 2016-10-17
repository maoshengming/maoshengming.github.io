/**
 * Created by Administrator on 2016/10/7.
 */

$(function () {
    var cur = 0,cru = 0,urc = 0;
    $('#lul').append($('#lul li').first().clone(true));
    var timeV = setInterval(fn,2000);
    var len = $('#lul>li').length;

    function fn() {
        cur++;
        if (cur == len) {
            cur = 1;
            $('#lul').css('left','0')
        }
        $('#lul').stop().animate({left: -1200 * cur})
    }

    $('#oneBtn').click(function () {
        cur--;
        if (cur ==  - 1) {
            cur = len - 2 ;
            $('#lul').css({left:-1200 * (len - 1)})
        }
        $('#lul').stop().animate({left: -1200 * cur})
    });


    $('#twoBtn').click(function () {
        cur++;
        if (cur ==  len) {
            cur = 1;
            $('#lul').css('left','0')
        }
        $('#lul').stop().animate({left: -1200 * cur})
    });


    $('#lul li').hover(function () {
        clearInterval(timeV)
    },function () {
        timeV = setInterval(fn,2000)
    });

    $('#twoBtn').hover(function () {
        clearInterval(timeV)
    },function () {
        timeV = setInterval(fn,2000)
    });

    $('#oneBtn').hover(function () {
        clearInterval(timeV)
    },function () {
        timeV = setInterval(fn,2000)
    });


    $('#body-7-00').append($('#body-7-00 li:lt(4)').clone(true));
    var len2 = $('.body-7-0').length;
    $('.body-6-1-1').click(function () {
        cru--;
        if (cru ==  - 1) {
            cru = len2 - 5 ;
            $('#body-7-00').css({left:-305 * (len2 - 4 )})
        }
        $('#body-7-00').stop().animate({left: -305 * cru})

    });
    
    $('.body-6-1-2').click(function () {
        cru++;
        if (cru ==  len2 - 3) {
            cru = 1 ;
            $('#body-7-00').css({left: 0})
        }
        $('#body-7-00').stop().animate({left: -305 * cru})
    });
    
    $('.li-div-div').hover(function () {

        $(this).stop().animate({top: 0})

    },function () {
        $(this).stop().animate({top: 169})
    });
    
    
    
    

    $('.body-10-1>ul').append($('.body-10-1>ul>li').first().clone(true));
    var timeM = setInterval(fun,2000);
    var len3 = $('.body-10-1 ul li').length;

    function fun() {
        urc++;
        if (urc == len3) {
            urc = 1;
            $('.body-10-1 ul').css('left','0')
        }
        $('.body-10-1 ul').stop().animate({left: -1098 * urc})
    }

    $('.body-10-2-left').click(function () {
        urc--;
        if (urc ==  - 1) {
            urc = len3 - 2 ;
            $('.body-10-1 ul').css({left:-1098 * (len3 - 1)})
        }
        $('.body-10-1 ul').stop().animate({left: -1098 * urc})
    });


    $('.body-10-2-right').click(function () {
        urc++;
        if (urc ==  len3) {
            urc = 1;
            $('.body-10-1 ul').css('left','0')
        }
        $('.body-10-1 ul').stop().animate({left: -1098 * urc})
    });


    $('.body-10-1>ul>li').hover(function () {
        clearInterval(timeM)
    },function () {
        timeM = setInterval(fun,2000)
    });

    $('.body-10-2-right').hover(function () {
        clearInterval(timeM)
    },function () {
        timeM = setInterval(fun,2000)
    });

    $('.body-10-2-left').hover(function () {
        clearInterval(timeM)
    },function () {
        timeM = setInterval(fun,2000)
    });
    
    
    
    $('.body-3-3').click(function () {
        $('.body-3').css({'display':'none'})
    });



});