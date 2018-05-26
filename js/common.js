
$(document).ready(function(){


$('.menu-cont').on('click', function() {

  $('.menu').toggleClass('active');
  $('.fn-header__navigation').slideToggle(200);

});



  $('.fn-programm__slider').slick({
    autoplay: false,
    slidesToShow: 1,
    nextArrow: '<i class="fa fa-angle-right arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left arrow"></i>',

  });

  $('.slider').slick({
    autoplay: true,
    slidesToShow: 1,
    arrow: false

  });

    $(".fn-header__navbar").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;

      $('body,html').animate({scrollTop: top}, 1500);
    });
  });

