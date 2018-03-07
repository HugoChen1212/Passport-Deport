
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


//jquery for chinese visa
$('.hide-tourist-plant').hide();
$(".visa-type").click( function(){
  var self=$(this);
  var currentIndex = self.index();
  $(".visa-type").css({"border-right":"1px solid #e0e0e0"});
  $('.tourist-visa-plants').children().hide();
  $('.tourist-visa-plants').children().eq(currentIndex).show();
  $(self).css({"border-right": "1px solid #f9f9f9"});
});


//Jauery for chinese visa detial
$('.hide-visa-detail').hide();
$(".nav-visa-detail").click( function(){
  var self=$(this);
  var currentIndex = self.index();
  $(".nav-visa-detail").css({"border-bottom":"1px solid #f9f9f9"});
  $('.visa-detail-plants').children().hide();
  $('.visa-detail-plants').children().eq(currentIndex).show();
  $(self).css({"border-bottom": "3px solid #5f4696"});
});


//Jauery for Chinese visa details titel dropdown

$(".plus-side").closest(".dp-title").click( function(){
  $(".dp-title").hide();
  $(".dp-details").show();
});

$(".minus-side").closest(".dp-details").click( function(){
  $(".dp-details").hide();
  $(".dp-title").show();
});

//Jauery for Chinese visa details titel dropdown

$(".born-plus-side").closest(".born-title").click( function(){
  $(".born-title").hide();
  $(".born-details").show();
});

$(".born-minus-side").closest(".born-details").click( function(){
  $(".born-details").hide();
  $(".born-title").show();
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






// working from here
// (function() {
//     $('#selectCountries').change(function(){
//       var current_country=  $(this).val();
//         live(current_country);
//   });
// })();


// function live(current_country){

//   $('#selectLive').change(function(){
//       var current_live=  $(this).val();
//       three(current_country,current_live);
//     });
// }

// function three(current_country,current_live){

//   $('#visaType').change(function(){
//       var current_visa_type=  $(this).val();
//       type_passport(current_country,current_live,current_visa_type);
//     });
// }

// function type_passport(current_country,current_live,current_visa_type){

//     var current_passport_type=  $('input[name="us"]:checked').val();
//       console.log(current_passport_type);
//       console.log(current_country);
//       console.log(current_live);
//       console.log(current_visa_type);

// }









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





// (function() {
//   $('#selectCountries').change(function(){
//         $('.box').hide();
//         $('#' + $(this).val()).show();
//   });
// })();


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



