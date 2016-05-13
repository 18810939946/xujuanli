$(function(){
//首页tab切换滑过效果
    $(".home-tab_menu ul li").click(function(){
        $(this).addClass("home-tab_selected").siblings().removeClass("home-tab_selected");
    });
//租车问答收缩
    $(".Rental-left dd").hide().first().show();
    $(".Rental-left dt").click(function(){
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

});
/*tab插件*/

$(function(){
    var tabs=function(){
        function tag(name,elem){
            return (elem||document).getElementsByTagName(name);
        }
        //获得相应ID的元素
        function id(name){
            return document.getElementById(name);
        }

        return {
            set:function(elemId,tabId){
                var elem=tag("li",id(elemId));
                var tabs=tag("div",id(tabId));
                var listNum=elem.length;
                var tabNum=tabs.length;
                for(var i=0;i<listNum;i++){
                    elem[i].onclick=(function(i){
                        return function(){
                            for(var j=0;j<tabNum;j++){
                                if(i==j){
                                    tabs[j].style.display="block";
                                    elem[j].className="selected";
                                }
                                else{
                                    tabs[j].style.display="none";
                                    elem[j].className="";
                                }
                            }
                        }
                    })(i)
                }
            }
        }
    }();
    tabs.set("payNav","payCon");//执行
});


