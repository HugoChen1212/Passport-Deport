
$(document).ready(function (){
  $('.passport').hover(
    function(){
    $(this).find('.sub-menu').slideDown();},
    function(){
      $(this).find('.sub-menu').slideUp();
  });
});




