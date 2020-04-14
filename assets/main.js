// ** J A V A  S C R I P T **

$(document).ready(function () {

// ** M E N U  D R O P D O W N**
var toDropdown = $(".with-dropdown");


toDropdown.mouseenter(function(){

  var menuDropdown = $(this).next(".dropdown");
  menuDropdown.addClass("flex-active");
});

toDropdown.mouseleave(function(){

  var menuDropdown = $(this).next(".dropdown");
  menuDropdown.removeClass("flex-active");
});


//** L A N G U A G E  A R R O W **//
var choose = $(".language");
var arrow = $(".language > i")

choose.click(function(){
  arrow.removeClass("fas fa-angle-down");
  arrow.addClass("fas fa-angle-up");
})

choose.mouseleave(function(){
  arrow.removeClass("fas fa-angle-up");
  arrow.addClass("fas fa-angle-down");
})

});
