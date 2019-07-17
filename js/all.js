$(function() {
  $(".nav_t").click(function(e) {
    e.preventDefault();
    $(".page_t")
      .siblings()
      .css("transform", "translateX(100%)");
    $(".page_t").css("transform", "translateX(0%)");
    $(".nav_btn").removeClass("active");
    $(".nav_t").addClass("active");
  });
  $(".nav_a").click(function(e) {
    e.preventDefault();
    $(".page_t").css("transform", "translateX(-100%)");
    $(".page_r,.page_s").css("transform", "translateX(100%)");
    $(".page_a").css("transform", "translateX(0%)");
    $(".nav_btn").removeClass("active");
    $(".nav_a").addClass("active");
  });
  $(".nav_r").click(function(e) {
    e.preventDefault();
    $(".page_t,.page_a").css("transform", "translateX(-100%)");
    $(".page_s").css("transform", "translateX(100%)");
    $(".page_r").css("transform", "translateX(0%)");
    $(".nav_btn").removeClass("active");
    $(".nav_r").addClass("active");
  });
  $(".nav_s").click(function(e) {
    e.preventDefault();
    $(".page_s")
      .siblings()
      .css("transform", "translateX(-100%)");
    $(".page_s").css("transform", "translateX(0%)");
    $(".nav_btn").removeClass("active");
    $(".nav_s").addClass("active");
  });

  $(".start button").click(function(e) {
    e.preventDefault();
    $(".work")
      .siblings()
      .fadeOut(300);
    $(".work")
      .delay(300)
      .fadeIn(500);
  });
  $(".work span,.break span").click(function(e) {
    e.preventDefault();
    $(".start")
      .siblings()
      .fadeOut(300);
    $(".start")
      .delay(300)
      .fadeIn(500);
  });
});
