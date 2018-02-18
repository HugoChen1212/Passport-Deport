
$(document).ready(function (){
  $('.passport').hover(
    function(){
    $(this).find('.sub-menu').show();},
    function(){
      $(this).find('.sub-menu').hide();
  });
});



var images = [
  "../img/flight.jpg",
  "../img/balloon.jpg",
  "../img/Travel-site.jpg"
]

var imageHead = document.getElementById("image-head");
var i = 0;

setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 5000);





