// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navig").offset().top > 50) {
    $(".navig").removeClass("navbar");
    $(".navig").addClass("navbar2");

  } else {
    $(".navig").removeClass("navbar2");
    $(".navig").addClass("navbar");
  }
});