$(document).ready(function(){

  $("#titulo").mouseenter(function(){
    $("#titulo").css("background-color" , "blue");
    $("#titulo").css("color", "black");
  });

  $("#titulo").mouseleave(function(){
   $("#titulo").css("background-color" , "red");
   $("#titulo").css("color", "blue");
  });
  
});