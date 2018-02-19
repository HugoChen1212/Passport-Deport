
$(document).ready(function (){
  $('.passport').hover(
    function(){
    $(this).find('.sub-menu').show();},
    function(){
      $(this).find('.sub-menu').hide();
  });
});



var images = [
  'img/flight.jpg',
  'img/balloon.jpg',
  'img/Travel-site.jpg'
]

var imageHead = document.getElementById("image-head");


var i = 0;
function setImage(){

imageHead.style.backgroundImage = "url(" + images[i] + ")";

i = i + 1;

 if (i === images.length) {
        i =  0;
      }

}

setInterval(setImage, 5000);





// $(document).ready(function(){
//   $('#image-head').fadeToggle(3000);

// });


// $(document).ready(function () {
//   var imagesfile=['../img/flight.jpg','../img/balloon.jpg','../img/Travel-site.jpg'];
//   var currentIddex =0;
//   setInterval (function(){
//     if(currentIndex==imageFile.length){
//       currentIndex =0;
//     }
//     $("#image-head").css('background-image', "url('" + imageFile[currentIndex++] + "')");
//   }, 2000);
// });


