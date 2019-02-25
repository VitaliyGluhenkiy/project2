// $(document).ready(function(){
//     $('.count').each(function () {
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 5000,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.cell(now));
//             }
//         });
//     });
// });
// $(document).ready(function(){
//     $('.counter span').counterUp({
//         delay: 1,
//         time: 100
//     })
// })
$('.header-navbar').removeClass('default');
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100){
          $('.header-navbar').addClass('default').fadeIn('fast');
      } else {
          $('.header-navbar').removeClass('default').fadeIn('fast');
      };
  });
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[100])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})



$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
});

  
