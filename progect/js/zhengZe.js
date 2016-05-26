$(function(){
    //验证姓名
    $("#xingMing").keyup(function(){
        if($(this).val().length<14){
            $(this).next(".error").text("")
        } else{
            $(this).next(".error").text("字符长度应小于等于14个")
        }
    });
});
/*验证手机号*/
function checkTel(tel){
    var reg = /^((13[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/;
    if(reg.test(tel) == false){
        $("#MyTel").next(".error").text("您的手机号输入有误");
    }else{
        $("#MyTel").next(".error").text("");
    }
}
/*验证邮箱*/
function checkEmail(email){
    var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(reg.test(email) == false){
        $("#MyEmail").next(".error").text("您的邮箱输入有误");
    }else{
        $("#MyEmail").next(".error").text("");
    }
}
/*验证姓名为中文字符*/
function checkName(name){
    var reg =/^[/u4e00-/u9fa5]+$/;
    if(reg.test(name) == false){
        $("#MyName").next(".error").text("您的姓名输入有误");
    }else{
        $("#MyName").next(".error").text("");
    }
}
/*验证拼音*/
function checkPin(pin){
    var reg =/^[a-zA-Z]+$/;
    if(reg.test(pin) == false){
        $("#MyPin2").next(".error").text("您的护照拼音输入有误");
    }else{
        $("#MyPin2").next(".error").text("");
    }
}
/*验证手机号2*/
function checkTel2(tel){
    var reg = /^((13[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/;
    if(reg.test(tel) == false){
        $("#MyTel2").next(".error").text("您的手机号输入有误");
    }else{
        $("#MyTel2").next(".error").text("");
    }
}
/*验证邮箱2*/
function checkEmail2(email){
    var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(reg.test(email) == false){
        $("#MyEmail2").next(".error").text("您的邮箱输入有误");
    }else{
        $("#MyEmail2").next(".error").text("");
    }
}
/*验证手机加邮箱*/
function checkTelEmail(TelEmail){
    var regTel = /^((13[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/;
    var regEmail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(regTel.test(TelEmail) == true || regEmail.test(TelEmail) == true){
        $("#MyTelEmail").next(".error").text("");
    }else{
        $("#MyTelEmail").next(".error").text("您的手机号或邮箱输入有误");
    }
}
