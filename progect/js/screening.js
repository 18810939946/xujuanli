$(function () {
    //品牌
        var alink01 = $("#linktype01").find("span");
        alink01.click(function () {
        alink01.each(function () {
        $(this).removeClass("templinkactive").addClass("templink");
        });
    $(this).removeClass("templink").addClass("templinkactive");
    $("#Brand").val($(this).attr("tag"));
});

//价格
var alink02 = $("#linktype02").find("span");
    alink02.click(function () {
        alink02.each(function () {
            $(this).removeClass("templinkactive").addClass("templink");
        });
    $(this).removeClass("templink").addClass("templinkactive");
    $("#Price").val($(this).attr("tag"));
});

//尺寸
var alink03 = $("#linktype03").find("span");
    alink03.click(function () {
        alink03.each(function () {
            $(this).removeClass("templinkactive").addClass("templink");
        });
    $(this).removeClass("templink").addClass("templinkactive");
    $("#Size").val($(this).attr("tag"));
    })
});
//尺寸
var alink04 = $("#linktype04").find("span");
alink04.click(function () {
    alink04.each(function () {
        $(this).removeClass("templinkactive").addClass("templink");
    });
    $(this).removeClass("templink").addClass("templinkactive");
    $("#Number").val($(this).attr("tag"));
    SetPara();
});


function SetPara() {
    var a = $("#Brand").val();
    var b = $("#Price").val();
    var c = $("#Size").val();
    var d = $("#Number").val();
    //alert("1.aspx?a=" + a + "&b=" + b + "&c=" + c + "&d=" + d);
}