$(document).ready(function(){
    var $header = $("#sub_header");
    var $gnb_li = $("#gnb>li");

    $gnb_li.on("mouseenter focusin",function(){
        openSub(this);
    });
    $gnb_li.on("mouseleave focusout",function(){
        closeSub(this);
    });   

    function openSub(el){
        //마우스가 올라간 li의 자식인 .sub 높이값 변수저장
        var ht = $(el).find(".sub").outerHeight();
        var bg = $(el).find(".sub").css("background-color");
        var posY = $header.outerHeight();
        var isBgGnb = $(".bgGnb").length;

        //bgGnb가 없을때에만 동적으로 생성
        if(!isBgGnb) $header.prepend("<div class='bgGnb'>");

        //bgGnb의 모양은 마우스를 올릴때마다 실시간으로 계속 변경
        $(".bgGnb").css({
            width:"100%", height:ht, position:"absolute",
            top:posY, left:0, backgroundColor:bg,
        })
        
        $(el).children(".sub").show();
        $(".bgGnb").show();
        $(el).children("a").addClass("on");
    }

    function closeSub(el){ 
        $(el).children(".sub").hide();
        $(".bgGnb").remove();   
        $(el).children("a").removeClass("on");
    }
});