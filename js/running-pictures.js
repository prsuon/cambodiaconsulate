var slideIndex = 0;
startSlides();
var globalTimeout;
function currentSlide(n) {
  slideIndex = n;
  $(".show-me").fadeOut(1000, function() {
    $(this).removeClass('show-me');
    $(".mySlides").each(function (index){
      if(index == n-1) {
        $(this).fadeIn(1000);
        $(this).addClass("show-me");
      }
    });
  });
}

function startSlides() {
  $(".mySlides").hide();
  $(".mySlides").first().show();
  $(".mySlides").first().addClass("show-me");
  showSlides();
}

function showSlides() {
    if (slideIndex >= $(".mySlides").length - 1) {
      slideIndex = -1;
    } else if (slideIndex < 0) {
      slideIndex = $(".mySlides").length - 1;
    }
    $(".show-me").fadeOut(3000, function () {
      $(this).removeClass('show-me');
      slideIndex++;
      $(".mySlides").each(function (index){
        if(index == slideIndex) {
          $(this).addClass("show-me");
          $(this).fadeIn(3000);
          return false;
        }
      });
    });
    globalTimeout = setTimeout(showSlides, 6000); // Change image every 2 seconds
}

function plusSlides(n) {
  currentSlide(slideIndex += n);
}
