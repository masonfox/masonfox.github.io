$(document).ready(function(){

  function toggleNav() {
    $('.page').toggleClass('nav-active');
    $('.page-overlay').fadeToggle();
    $('body').toggleClass('lock-x');
  }

  function resetNav(){
    $('.page').removeClass('nav-active');
    $('.page-overlay').fadeOut();
    $('body').removeClass('lock-x');
  }

  $('.loader').fadeOut('slow');

  $('html, body').localScroll({duration:800});

  $('.nav-holder').on('click', function(){
    toggleNav();
  });

  $('.page-overlay').on('click', function(){
    resetNav();
  });

  $('nav.slideNav a').on('click', function(){
    resetNav();
  });
});
