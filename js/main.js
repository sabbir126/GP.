// Aos Animation

AOS.init();

//  js for counts bar

$(".number").counterUp({ time: 3000 });

// ===== Scroll to Top ====

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// NavBar Color After Scrolling

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("#header").css("background", "rgba(0, 0, 0, 0.8)");
    } else {
      $("#header").css("background", "none");
    }
  });
});
