
$(document).ready(function(){
  $(body).css('background','red');
  $('html, body').localScroll({duration:800});

  // masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });
}); // end doc
