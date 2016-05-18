/*在线支付tab插件*/
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


