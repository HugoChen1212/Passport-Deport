
//jquery for chinese Tourist visa

$('.hide-tourist-plant').hide();
$(".visa-type").click( function(){
  var self=$(this);
  var currentIndex = self.index();
  $(".visa-type").css({"border-right":"1px solid #e0e0e0"});
  $('.tourist-visa-plants').children().hide();
  $('.tourist-visa-plants').children().eq(currentIndex).show();
  $(self).css({"border-right": "1px solid #f9f9f9"});
});


//Jauery for chinese Tourist visa detial
$('.hide-visa-detail').hide();
$(".nav-visa-detail").click( function(){
  var self=$(this);
  var currentIndex = self.index();
  $(".nav-visa-detail").css({"border-bottom":"1px solid #f9f9f9"});
  $('.visa-detail-plants').children().hide();
  $('.visa-detail-plants').children().eq(currentIndex).show();
  $(self).css({"border-bottom": "3px solid #5f4696"});
});


//Jauery for chinese Business visa detial

$('.hide-visa-detail').hide();
$(".nav-visa-detail").click( function(){
  var self=$(this);
  var currentIndex = self.index();
  $(".nav-visa-detail").css({"border-bottom":"1px solid #f9f9f9"});

  $(".bv-detail-plants").children().hide();
  $(".bv-detail-plants").children().eq(currentIndex).show();
  $(self).css({"border-bottom": "3px solid #5f4696"});
});

//Jauery for chinese work visa detial

$('.hide-visa-detail').hide();
$(".nav-visa-detail").click( function(){
  var self=$(this);
  var currentIndex = self.index();
  $(".nav-visa-detail").css({"border-bottom":"1px solid #f9f9f9"});

  $(".wv-detail-plants").children().hide();
  $(".wv-detail-plants").children().eq(currentIndex).show();
  $(self).css({"border-bottom": "3px solid #5f4696"});
});


//Jauery for chinese student visa detial

$('.hide-visa-detail').hide();
$(".nav-visa-detail").click( function(){
  var self=$(this);
  var currentIndex = self.index();
  $(".nav-visa-detail").css({"border-bottom":"1px solid #f9f9f9"});

  $(".sv-detail-plants").children().hide();
  $(".sv-detail-plants").children().eq(currentIndex).show();
  $(self).css({"border-bottom": "3px solid #5f4696"});
});

//jQuery for Chinese Tourist visa details titel dropdown

$(".plus-side").closest(".dp-title").click( function(){
  $(".dp-title").hide();
  $(".dm-details").show();
});

$(".minus-side").closest(".dm-details").click( function(){
  $(".dm-details").hide();
  $(".dp-title").show();
});

//jQuery for Chinese Tourist visa born dropdown

$(".born-plus-side").closest(".born-title").click( function(){
  $(".born-title").hide();
  $(".born-details").show();
});

$(".born-minus-side").closest(".born-details").click( function(){
  $(".born-details").hide();
  $(".born-title").show();
});


//jQuery for Chinese Tourist visa adopted dropdown

$(".adopted-plus-side").closest(".adopted-title").click( function(){
  $(".adopted-title").hide();
  $(".adopted-details").show();
});

$(".adopted-minus-side").closest(".adopted-details").click( function(){
  $(".adopted-details").hide();
  $(".adopted-title").show();
});

//jQuery for Chinese Tourist visa tibetan dropdown

$(".tibetan-plus-side").closest(".tibetan-title").click( function(){
  $(".tibetan-title").hide();
  $(".tibetan-details").show();
});

$(".tibetan-minus-side").closest(".tibetan-details").click( function(){
  $(".tibetan-details").hide();
  $(".tibetan-title").show();
});

//jQuery for Chinese Tourist visa media dropdown

$(".media-plus-side").closest(".media-title").click( function(){
  $(".media-title").hide();
  $(".media-details").show();
});

$(".media-minus-side").closest(".media-details").click( function(){
  $(".media-details").hide();
  $(".media-title").show();
});


//jQuery for select box's display
$(".select-icon").closest(".select-box").click(
  function(){
    $(".select-box").hide();
    $("#select-div").show();
  });

$("#select-div").find(".icon-div").click(
  function(){
    $("#select-div").hide();
    $(".select-box").show();
  });

//jQuery for select box's select element
// $(".search-item").find('.select-link').click(function(){
//   var self = this;
//   console.log(self);
//   var item = self.val();
//   console.log(item);
// });
