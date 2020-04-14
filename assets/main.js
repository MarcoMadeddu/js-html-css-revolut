
var menuDropdown = $(".menu-dropdown");
var showDropdown = $(".f-dropdown");

showDropdown.mouseenter(function(){

  var current = $(this).next(".menu-dropdown");
  current.addClass("flex-active");
  console.log(current);

});

showDropdown.mouseleave(function(){
  var currentDropdown = $(this).next('li ul');
  currentDropdown.removeClass("flex-active");
});
