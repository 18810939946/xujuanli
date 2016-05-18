$(function(){
//首页tab切换滑过效果
    $(".home-tab_menu ul li").click(function(){
        $(this).addClass("home-tab_selected").siblings().removeClass("home-tab_selected");
    });
//租车问答收缩
    $(".Rental-left dd").hide().first().show();
    $(".Rental-left dt").click(function(){
        if($(this).next().is(":visible")){
            $(this).removeClass("dtHigh");
        }
        else{
            $(this).addClass("dtHigh");
        }
        $(this).next().slideToggle(100);
    });
    /*首页选择城市-显示隐藏*/
    $(".pickup-main").click(function(e){
        if ($(".mod-pop-location").is(":hidden")) {
            $(".mod-pop-location").show();
            e?e.stopPropagation():event.cancelBubble = true;
        }
    });
    $(".mod-pop-location").click(function(e) {
        e?e.stopPropagation():event.cancelBubble = true;
    });
    $(document).click(function() {
        $(".mod-pop-location").hide();
    });
    $(".mod-close").click(function(){
        $(".mod-pop-location").hide();
    });
    /*返回顶部*/
    $(".topImg").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });
    /*我的订单-tab*/
    var timer=null;
    $(".ManyInfo>.InfoNav>dd").eq(0).addClass("InfoNavhigh");
    $(".ManyInfo>.InfoNav>dd").on("click",function(){
        if(timer){
            clearTimeout(timer);
            timer=null;
        }
        var _this=$(this);
        timer=setTimeout(function(){
            var i=_this.index();
            _this.addClass("InfoNavhigh").siblings().removeClass("InfoNavhigh");
            $(".InfoTwo").stop().animate({"left":(-i*1074)},2);
        },1);
    });
    /*我的订单左侧菜单栏颜色变换*/
    $(".orderMenu dl a").click(function(){
        $(this).addClass("fontHigh").parents("dl").siblings().find("a").removeClass("fontHigh");
        $(this).parent("dd").siblings().find("a").removeClass("fontHigh");
    });

    /*选择车型页-筛选框点击收回*/
    $(".screening .result-btn").click(function(){
        if($(".screening form").is(":visible")){
            $(".screening form").hide();
            $(".ManyCar .mainShow").hide();
        }else{
            $(".screening form").show();
            $(".ManyCar .mainShow").show();
        }
    });
});
/*判断多选框是否选中*/
$(document).ready(function(){
    var $cr = $("#cr");
    $cr.click(function(){
        if($cr.is(":checked")){
            $(".Multi").show();
        }else{
             $(".Multi").hide();
        }
    })
});


