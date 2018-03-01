
$(document).ready(function (){
  $('.passport').hover(
    function(){
    $(this).find('.sub-menu').show();},
    function(){
      $(this).find('.sub-menu').hide();
  });
});


//jquery for new_passport
 $('.panel').hide();
 $('.panels').children().first().show();
  $(".np-list-item").click( function(){
    var self = $(this);
    var currentIndex = self.index();
    $(".np-list-item").css({"background-color":"#e0e1e2","border-bottom":"1px solid #e0e0e0","height": "50px"});
     $('.panels').children().hide();
    $('.panels').children().eq(currentIndex).show();
    $(self).css({"background-color":"#f9f9f9", "border-bottom": "1px solid #f9f9f9","height": "60px"});
  });



//home-page header image

var images = [
  'img/flight.jpg',
  'img/balloon.jpg',
  'img/Travel-site.jpg'
]

var imageHead = document.getElementById("image-head");
// var i = 0;
// function setImage(){
// i = i + 1;
// console.log(i)
//  if (i === images.length) {
//         i =  0;
//       }
// imageHead.style.backgroundImage = "url(" + images[i] + ")";
// }

// setInterval(setImage, 1000);

// setInterval(setImage, 5000);

// var counter =0;
// setInterval(function(){
//   // counter++;
//    counter = (counter + 1) % images.length;
//   console.log(counter);
//   if(counter===images.length){
//     counter=0;
//   }
//   imageHead.style.backgroundImage = "url(" + images[counter] + ")";
// }, 2000);


(function() {
    var i = 0;
    var numberOfImages = 3; // Change this to the number of background images
    setInterval(function() {
        $('#image-head').css('background-image','url(' + images[i]  + ')');
        i = (i + 1) % numberOfImages;

    } , 5000);
})();



// var firstEl=$("#secondSelect option:selected").val();
// var firstEl=$("#secondSelect :selected").text();

 // var firstEl=fEl.this.value;
// console.log(firstEl);



var country;
(function () {
  $('#selectCountries').change(function(){
      var current_country=  $(this).val();
      country=current_country;
      console.log(current_country);
  });
})();

 console.log(country);



// (function() {
//   $('#selectCountries').change(function(){
//     firstEl = $(this).val();
//     console.log(firstEl);
//     $('#secondSelect').change(function(){

//        secondEl = $(this).val();
//        console.log(secondEl);
//    });
//   });
// })();





(function() {
  $('#selectCountries').change(function(){
        $('.box').hide();
        $('#' + $(this).val()).show();
  });
})();


// setInterval(setImage, 5000);

// var counter =0;
// var i =setInterval(function(){
//   counter++;
//   console.log(counter);
//   if(counter===10){
//     counter=0;
//   }
// }, 2000);




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



