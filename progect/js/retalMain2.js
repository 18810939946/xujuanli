/*选择车型-滑过车辆位置固定并变小*/
$(function(){
    var showSmall01 = $(".showSmall01").offset().top-150;
    var showSmall02 = $(".showSmall02").offset().top-280;
    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop>showSmall01 ){
            $(".showSmall01").css({position:"fixed",top:"0",margin:"0","z-index":"999",display:"block"});
        }else{
            $(".showSmall01").css({position:"relative","z-index":"9",display:"none"});
        }
        if(this_scrollTop>showSmall02 ){
            $(".showSmall02").css({position:"fixed",top:"0",margin:"0","z-index":"999",display:"block"});
        }else{
            $(".showSmall02").css({position:"relative","z-index":"9",display:"none"});
        }
    });
});
