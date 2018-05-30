
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


//form 1

    $('.fn-contact__form-big, .fn-contact__form').each(function(){
        if(!$(this).val() || $(this).val() == ''){
           send = false;
        }
    });

    if(!send);

    var count = 0;
      $('.btn-form').on('click', function() {
        $(".fn-contact__form-big").trigger('reset');
        $('.mest__timer').html(function(i, val) { return val*1-1 });
      });


//form 2

    var count = 0;
      $('.btn-form-two').on('click', function() {
        $(".fn-contact__form-big").trigger('reset');
        $('.mest__timer-two').html(function(i, val) { return val*1-1 });
      });


//form2

    var count = 0;
      $('.btn-form-three').on('click', function() {
        $(".fn-contact__form").trigger('reset');
        $('.mest__timer-three').html(function(i, val) { return val*1-1 });
      });

      var count = 0;
        $('.btn-form-four').on('click', function() {
          $(".fn-contact__form-big").trigger('reset');
          $('.mest__timer-four').html(function(i, val) { return val*1-1 });
        });


});




