//클릭한 위치의 위도는 37.51330114674214 이고, 경도는 127.05872089185836 입니다.

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.51330114674214,127.05872089185836), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


//opotion----------------------------------------------------------------------
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMRIGHT);


var markerOptions = [
    {
        title: "본점",
        latlng: new kakao.maps.LatLng(37.51330114674214,127.05872089185836),
        imgSrc: 'img/marker1.png',
        imgSize: new kakao.maps.Size(232,99),
        imgPos: { offset: new kakao.maps.Point(116,99)},
        button: document.querySelectorAll(".branch li")[0]
    },
    {
        title: "지점1",
        latlng: new kakao.maps.LatLng(38.51330114675214,127.05872089185846),
        imgSrc: 'img/marker2.png',
        imgSize: new kakao.maps.Size(232,99),
        imgPos: { offset: new kakao.maps.Point(116,99)},
        button: document.querySelectorAll(".branch li")[1]
    },
    {
        title: "지점2",
        latlng: new kakao.maps.LatLng(39.51330114676214,127.05872089185856),
        imgSrc: 'img/marker3.png',
        imgSize: new kakao.maps.Size(232,99),
        imgPos: { offset: new kakao.maps.Point(116,99)},
        button: document.querySelectorAll(".branch li")[2]
    }
];

for (var i = 0; i < markerOptions.length; i ++){
    new kakao.maps.Marker({
        map: map,
        position: markerOptions[i].latlng,
        title: markerOptions[i].title,
        image: new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
    });

    (function(index){
        markerOptions[index].button.onclick = function(){
            moveTo(markerOptions[index].latlng);
            //console.log(index);
        }
    })(i);
}

function moveTo(target){
    //이동할 위도 경도 위치를 생섭합니다.
    var moveLatLon =  target;
    //지도 중심을 이동 시킵니다.
    map.setCenter(moveLatLon);
}

// 마커가 지도 위에 표시되도록 설정합니다
//marker.setMap(map);

// 마커가 드래그 가능하도록 설정합니다 
//marker.setDraggable(false); 

// 아래 코드는 위에서 추가한 교통정보 지도타입을 제거합니다
// map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)

var t_on = document.querySelectorAll(".traffic li")[0];
var t_off = document.querySelectorAll(".traffic li")[1];

t_on.addEventListener("click", function(e){
    e.preventDefault();

    // 지도에 교통정보를 표시하도록 지도타입을 추가합니다
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    t_on.classList.add("on");
    t_off.classList.remove("on");
});

t_off.addEventListener("click", function(e){
    e.preventDefault();

    // 아래 코드는 위에서 추가한 교통정보 지도타입을 제거합니다
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
    t_on.classList.remove("on");
    t_off.classList.add("on");
});

//지도 드래그 기능
//켜기
setDraggable(true);

//끄기
//setDraggable(false);

// 버튼 클릭에 따라 지도 이동 기능을 막거나 풀고 싶은 경우에는 map.setDraggable 함수를 사용합니다
function setDraggable(draggable) {
    // 마우스 드래그로 지도 이동 가능여부를 설정합니다
    map.setDraggable(draggable);    
}


//지도 확대 기능
//켜기
setZoomable(true); 
//끄기
// setZoomable(false);

// 버튼 클릭에 따라 지도 확대, 축소 기능을 막거나 풀고 싶은 경우에는 map.setZoomable 함수를 사용합니다
function setZoomable(zoomable) {
    // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
    map.setZoomable(zoomable);    
}