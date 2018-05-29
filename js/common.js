
$(document).ready(function(){


$('.menu-cont').on('click', function() {

  $('.menu').toggleClass('active');
  $('.fn-header__navigation').slideToggle(200);

});


$("#phone, #phone-two, #phone-three, #phone-four").mask("+7(999) 999-9999");

$("a[data-fancybox]").fancybox();

  $('.fn-programm__slider').slick({
    autoplay: false,
    slidesToShow: 1,
    nextArrow: '<i class="fa fa-angle-right arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left arrow"></i>',

  });


  $('.slider-left').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      fade: true,
      arrow: false,
      asNavFor: '.slider-right, .fn-student__slide-middle'
    });

  $('.slider-right').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: false,
    asNavFor: '.slider-left, .fn-student__slide-middle',

    });



   $('.fn-student__slide-middle').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-left',
  });



    $(".fn-header__navbar").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;

      $('body,html').animate({scrollTop: top}, 1500);
    });
  });




