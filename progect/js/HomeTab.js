$(function(){
//首页tab切换滑过效果
    $(".home-tab_menu ul li").click(function(){
        $(this).addClass("home-tab_selected").siblings().removeClass("home-tab_selected");
        // 根据选择Tab，来切换热门城市车型
        str = $(this).attr("id");
        foldObjekt = str.substring(0,str.length-3);
        $("div.home-tab_box").hide();
        $("div#" + foldObjekt + "box").show();
        //$("div#" + foldObjekt + "box").slideDown("slow");
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
            $(this).addClass("result-btnHigh");
        }else{
            $(".screening form").show();
            $(".ManyCar .mainShow").show();
            $(this).removeClass("result-btnHigh");
        }
    });
    /*关于公司点击按钮样式*/
    $(".usNav li").click(function(){
        $(this).addClass("usHigh").siblings().removeClass("usHigh");
        var sort=$(this).index();
        $(".usNum").eq(sort).show().siblings().hide();
    });

});
/*判断多选框是否选中*/
$(document).ready(function(){
    var $cr = $("#cr");
    $cr.click(function(e){
        if($cr.is(":checked")){
            $(".Multi").show();
            e.stopPropagation();
        }else{
            $(".Multi").hide();
            e.stopPropagation();
        }
    });
    $(document).click(function(){
        if(!$(".Multi").hide()){
            $(".Multi").hide();
        }
    });
});
/*返回顶部图标滑动隐藏/显示*/
$(window).scroll(function(){
    var this_scrollTop = $(this).scrollTop();
    var topImg=document.getElementById('topImg');
    if(this_scrollTop>window.screen.availHeight){
        $(".topImg").show();
    }else{
        $(".topImg").hide();
    }
});
/*注册/登录页tab切换*/
$(document).ready(function(){
    var $tab_li = $('.Regtab ul li');
    $tab_li.click(function(){
        $(this).addClass('Reg-selected').siblings().removeClass('Reg-selected');
        var index = $tab_li.index(this);
        $('div.tab_box > div').eq(index).show().siblings().hide();
    });
});

/*百度统计*/
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?a10c79a000267efd6ec3811930d07720";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();




