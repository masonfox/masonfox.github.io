$('html, body').localScroll({duration:800});

new WOW().init();

$('#blog-trig').click(function() {
  $('.blog').addClass('blog-active');
  $('.overlay').fadeIn();
  $('body').addClass('lock');
});

$('.overlay').click(function() {
  $('.blog').removeClass('blog-active');
  $('.overlay').fadeOut();
  $('body').removeClass('lock');
});

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 1) {
        $('.nav').addClass('navScroll');
        console.log('working');
        // $('.wrapper section').each(function(i) {
        //     if ($(this).position().top <= windscroll - 100) {
        //         $('nav a.active').removeClass('active');
        //         $('nav a').eq(i).addClass('active');
        //     }
        // });

    } else {

        $('.nav').removeClass('navScroll');
        // $('nav a.active').removeClass('active');
        // $('nav a:first').addClass('active');
    }
});
