window.onscroll=function(){//滚轮事件
    var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;//滚轮滚动的距离
    var node=document.getElementById('tm_top_rgba');//变化的菜单模块
    var homeFooter=document.getElementById('home-footer');
    if(top>440){//就是滚动条滚动到440px位置，显示菜单，并且可以修改它的样式。
        node.style.position='fixed';
        node.style.top='5px';
        node.style.zIndex="99";
        homeFooter.style.zIndex="100";
        homeFooter.style.position="relative";
    }else{//当鼠标滚动回初始位子样式变回。
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