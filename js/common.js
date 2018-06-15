
$(document).ready(function(){


$('.menu-cont').on('click', function() {

  $('.menu').toggleClass('active');
  $('.fn-header__navigation').slideToggle(200);

});



$("#phone, #phone-two, #phone-three, #phone-four").mask("+7(999) 999-9999");

$("a[data-fancybox]").fancybox();


  $('.fn-student__slide-middle').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: '<i class="fa fa-angle-right arrow"></i>',
    prevArrow: '<i class="fa fa-angle-left arrow"></i>',
    responsive: [
       {
         breakpoint: 1200,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           infinite: true,
           dots: true,
           arrows: false
         }
       },

       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false
         }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
  });



    $(".fn-header__navbar").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;

      $('body,html').animate({scrollTop: top}, 1500);
    });


    // open modal
    var wrap = $('#wrapper'),
         btn = $('.open-modal-btn'),
         modal = $('.cover, .modal, .content');

    btn.on('click', function() {
      modal.fadeIn();
    });





});

//counter
$(function () {

    var counter = 8; //счетчик максимального количества мест

    /**
     * загоняем интервал в переменную что бы можно было его погасить
     * @type {number}
     */
    var showPopupInterval = setInterval(function () {
        $(".fn-form-popup").slideToggle(400); //показывает всплывашку в скобках скорость
        hideToggle(); // скрываем всплывашку
        changePlaceCounter(); //меняем счетчик

        if (counter === 1) {
            clearInterval(showPopupInterval); //если равен одному, выключаем интервал
        }
    }, 37000); //показываем всплывашку каждые 37 секунд 37 * 1000

    /**
     * функция которая скрывает всплывашку с изменением количества мест
     */
    function hideToggle() {
        setTimeout(function () {
            $(".fn-form-popup").slideToggle(400);

        }, 3000)//скрывать через 3 секунды всплывашку 3 * 1000
    }

    /**
     * меняем счетчик и апдейтим значение во всех местах где он используеться
     */
    function changePlaceCounter() {
        counter--;
        $('.mest__timer-two, .mest__timer-three, .mest__timer-four').html(counter);
        $('.timer').html(counter);
    }


});


$(document).ready(function () { // вся мaгия пoсле зaгрузки стрaницы
    $('form.fn-contact__form-big, form.fn-contact__form').submit(function (event) { // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function () { // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '5%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close, #overlay').click(function () { // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({opacity: 0, top: '5%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function () { // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
});
