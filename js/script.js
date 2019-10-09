
// function input() {
//     var name =document.getElementById("name");
//     var name =document .getElementById("surname");
//     var inputAddress= document.getElementById("inputAddress");
//     var password =document.getElementById(" password");
//     alert(name + '' + surname +'' + inputAddress +  '' + password);
//     button.onclick = function() {
// }

$(document).ready(function () {
    $("#image1").click(function () {
      $(".p").toggle();
    });
    $(".image2").click(function () {
      $(".p").toggle();
    });
    $(".image3").click(function () {
      $(".p").toggle();
    });
    $(".image").hover(function () {
      $(this).css({ opacity: "0.7", "transition":"2s" });
    },
      function () {
        $(this).css({ opacity: "0.7" ,"transition":"2s" });
      });
  });
  