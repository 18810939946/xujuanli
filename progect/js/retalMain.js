window.onscroll=function(){//滚轮事件
    var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
    var node=document.getElementById('tm_top_rgba');
    if(top>440){
        node.style.position='fixed';
        node.style.top='5px';
        node.style.zIndex="99";
    }else{
        node.style.position='static';
        node.style.zIndex="0";
    }
};

$(function(){
    $(".RenNav li").click(function(){
        $(this).addClass("selectBod").siblings().removeClass("selectBod");
    });
    $(".Rental-left dl a").click(function(){
        $(this).css({color:"#e9b919"}).parents("dl").siblings().find("a").css({color:"#000"});
        $(this).css({color:"#e9b919"}).parent("p").siblings().find("a").css({color:"#000"});
    })
});