//mobile gnb
// var btnCall = document.querySelector(".btnCall"); 
// var menuMo = document.querySelector(".menuMo");

// btnCall.onclick = function(){ //.btnCall 버튼을 누르면 
//     btnCall.classList.toggle("on"); //햄버거버튼에 on클래스를 추가 또는 제거
//     menuMo.classList.toggle("on");  //모바일메뉴상자에 on클래스를 추가 또는 제거
// }


//bgGnb
/*
var $header = $("#header");
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
        width: "100%", height:ht, position:"absolute",
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
*/

var $gnb_li = $("#gnb>li");     

     
$gnb_li.on("mouseenter ", function(){
    $(this).find(".sub").show();
    $(this).find("a").addClass("on");
});

$gnb_li.on("mouseleave ", function(){
    $(this).find(".sub").hide();
    $(this).find("a").removeClass("on");
});

//gnb_li의 갯수만큼 반복을 돌면서 이벤트 연결
$gnb_li.each(function(index){

    //gnb_li의 (index)번째 요소에 foucsin이벤트 연결
    $gnb_li.eq(index).find("a").first().on("focusin", function(){
        $gnb_li.eq(index).find(".sub").show();
    });

    //gnb_li의 (index)번째 요소에 focusout이벤트 연결
    $gnb_li.eq(index).find("a").last().on("focusout", function(){
        $gnb_li.eq(index).find(".sub").hide();      
    });
});