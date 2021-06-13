var $header = $("#header");
var $gnb = $("#gnb"); 
var $gnb_li = $gnb.children("li"); 
var $gnb_ul = $gnb_li.children("ul"); 
var $skip_a = $("#skipNavi a"); 
var speed = 500; 

$skip_a.on("focusin", function(){
    $(this).css({top: 0}); 
}); 

$skip_a.on("focusout", function(){
    $(this).css({top: -30}); 
}); 

$header.on("mouseenter focusin", function(){
    openSub();
}); 

$header.on("mouseleave focusout", function(){
    closeSub();
});

$gnb_li.on("mouseenter", function(){
    $(this).children("a").addClass("on"); 
});
$gnb_li.on("mouseleave", function(){
    $(this).children("a").removeClass("on"); 
});

function openSub(){   
    var ht = $header.outerHeight(); 
    var bg = $gnb_ul.find("a").css("background-color"); 
     
    $header.prepend(
        $("<div class='bgGnb'>")
            .css({
                width:"100%", 
                height:getMax(), 
                position:"absolute", 
                left:0,
                top:ht, 
                backgroundColor:bg, 
                display:"none"
            })
    )
    $gnb_ul.stop().slideDown(speed); 
    $(".bgGnb").stop().slideDown(speed); 
}

function closeSub(){
    $gnb_ul.stop().slideUp(speed / 2); 
    $(".bgGnb").stop().slideUp(speed / 2, function(){
        $(this).remove(); 
    }); 
}

function getMax(){
    var ht_max = 0;
    
    $gnb_li.each(function(){
        var ht = $(this).children("ul").outerHeight(); 
        ht_max = Math.max(ht_max, ht);
    }); 

    return ht_max; 
}



/*
//함수선언
var $header = $("#header");
var $gnb = $("#gnb");
var $gnb_li = $gnb.children("li");
var $gnb_li_a = $gnb_li.children("a");
var $gnb_li_ul = $gnb_li.children("ul");
var speed = 500;
var ht_max = 0;
var doneClose = true;

//브라우저 로딩시 2depth메뉴의 최대높이값 계산
getSubMaxHeight();

//header에 마우스 오버시
$header.on("mouseenter", openSub);

//header에 마우스 아웃 시
$header.on("mouseleave", closeSub);

//2depth메뉴에 마우스 이동시 1depth메뉴 활성화 유지 
$gnb_li.on("mouseenter", function(){
    $(this).children("a").addClass("on"); 
});

$gnb_li.on("mouseleave", function(){
    $(this).children("a").removeClass("on"); 
})

//1dipth메뉴에 포커스 이벤트 연결(접근성)
$gnb_li_a.on("focusin", openSub);
$gnb_li.last().find("a").last().on("focusout", closeSub);

// function openSub(){
//     $header.prepend(
//         $("<div class='bgGnb'>").css({
//             width: "100%",
//             height: ht_max, //gnb li ul의 높이를 비교하여 최고값 가져옴.
//             position: "absolute",
//             top: 110,
//             left: 0, 
//             backgroundColor: '#999',
//             zIndex: 2, 
//             display: 'none'
//         }) //여긴 ; 금지
//     );

//     if(doneClose){
//         $(".bgGnb").stop().slideDown(speed);
//         $gnb_li_ul.stop().slideDown(speed);
//         doneClose = false;
//     }
    
// }

function openSub(){
    $gnb_li_ul.append(
        $("div")
    )
}

function closeSub(){
    $(".bgGnb").stop().slideUp(speed / 2, function(){
        $(this).remove();
        doneClose = true;
    });
    $gnb_li_ul.stop().slideUp(speed / 2);
}

function getSubMaxHeight(){
    $gnb_li.each(function(index){
        var current_ht  = $(this).children("ul").height();
        ht_max = Math.max(ht_max, current_ht);
    });

    //반복을 첫번째 돌 때 비교값 0, 200 - > 200
    //반복을 두번째 돌 때 비교값 200, 250 - > 250
    //반복을 세번째 돌 때 비교값 250, 300 - > 300
    //반복을 네번째 돌 때 비교값 300, 200 - > 300
    //반복을 다섯번째 돌 때 비교값 300, 200 - > 300
}







// // #gnb
// $(function(){
//     var menu = $('#gnb > li');

    
// });
*/