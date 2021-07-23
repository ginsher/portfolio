// //데이터 호출하여 배열값 리턴.
// var url = "data/board.json";

// var resultData = callData(url);
// console.log(resultData);

// var $frame = $(".community .inner")
// createTable($frame, resultData);

// //데이터호출 함수 정의
// function callData(url){
//     var result;

//     $.ajax({
//         url : url,
//         dataType : "json",
//         async : false
//     })

//     //성공
//     .success(function(data){
//         result = data.data;
//     })

//     //실패
//     .error(function(err){
//         console.log(err);
//     });

//     return result;
// }

// //테이블 생성 함수 정의
// function createTable(target, items){

//     //상단 thead와 tbody 생성.
//     target.append(
//         $("<table>")
//             .append(
//                 $("<thead>")
//                     .append(
//                         $("<tr>")
//                             .append(
//                                 "<th>No</th>",
//                                 "<th>제목</th>",
//                                 "<th>작성일</th>",
//                                 "<th>작성자</th>",
//                             )
//                     ),

//                 $("<tbody>")
//             )
//     );

//     $(items).each(function(index, data){
//         target.find("tbody")
//             .prepend(
//                 $("<tr>")
//                     .append(
//                         $("<td>").text(index+1),
//                         $("<td>")
//                             .append(
//                                 $("<a>").attr("href", data.link).text(data.title)
//                             ),
//                             $("<td>").text(data.writer),
//                             $("<td>").text(data.date)
//                     )
//             )
//     })
// }