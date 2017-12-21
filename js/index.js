/**
 * Created by hasee on 2017/11/3.
 */
$(function(){
    banner();
})

// 轮播图
function banner(){
    $('.img_box li:eq(0)').clone(true).appendTo($('.img_box'));
    var width = $('.banner').width();
    console.log(width);
    // 点击圆点
    $('.item').click(function(){
        var index = $(this).index();
        $(this).siblings().removeClass('active_li');
        $(this).addClass('active_li');
        $('.img_box').animate({left:-index * width}, 500);
        num = index;
        clearInterval(timer);
    });

    // 自动播放
    var num = 0;
    var flag = true;
    var timer = null;
    var autoPlay = function (){
        num++;
        if(num > 4){
            num = 0;
            $('.img_box').css("left","0").stop().animate({left:-width}, 500, function(){
                flag = true;
            });
            num = 1;
            $('.item').eq(1).addClass('active_li').siblings().removeClass('active_li');
        } else {
            $('.img_box').stop().animate({left:-num * width}, 500, function(){
                flag = true;
            });
            $('.item').eq(num).addClass('active_li').siblings().removeClass('active_li');
        }
        if(num == 4){
            $('.item').eq(0).addClass('active_li').siblings().removeClass('active_li');
        }
    }
    timer = setInterval(autoPlay,3000);
    var prevPlay = function(){
        num--;
        if(num < 0){
            num = 4;
            $('.img_box').css({left:-4*width}).stop().animate({left:-3 * width}, 500, function(){
                flag = true;
            });
            num = 3;
            $('.item').eq(3).addClass('active_li').siblings().removeClass('active_li');
        } else {
            $('.img_box').stop().animate({left:-num * width}, 500, function(){
                flag = true;
            });
            $('.item').eq(num).addClass('active_li').siblings().removeClass('active_li');
        }
        if(num == 4){
            $('.item').eq(0).addClass('active_li').siblings().removeClass('active_li');
        }
    }
        //下一张
    $('.arrow-r').click(function(){
        clearInterval(timer);
        if(flag){
            flag = false;
            autoPlay();
        }
    });

    $('.arrow-l').click(function(){
        clearInterval(timer);
        if(flag){
            flag = false;
            prevPlay();
        }
    });

    $('.banner').mouseenter(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        timer = setInterval(autoPlay,3000);
    });


}