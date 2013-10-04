$(function(){
	$(window).scroll(windowScroll);
});


function windowScroll() {
  parallaxBackground(".background1", 0, 1000, 10, 300);
  // parallaxBackground(".background2", 1000, 1400, 10, 300);
  parallaxBackgroundStatic(".background2", 20, -700);
}

function parallaxBackground(selector, startPixelsDown, endPixelsDown, startBackgroundPosition, endBackgroundPosition) {
  var pixelsDown = $(window).scrollTop();
  var backgroundPosition = 0;
  
  var percentageWithinScrollRange = (pixelsDown - startPixelsDown)/(endPixelsDown - startPixelsDown);
  var maxScrollAmount = endBackgroundPosition - startBackgroundPosition;
  var backgroundPosition =  (startBackgroundPosition + (percentageWithinScrollRange * maxScrollAmount)) * (-1);

  $(selector).css("background-position", "50% " + backgroundPosition + "px");
  return false;
}

function parallaxBackgroundStatic(selector, startPixelsDown, startBackgroundPosition) {
  var pixelsDown = $(window).scrollTop();
  var backgroundPosition = 0;
  if(pixelsDown < startPixelsDown) {
    backgroundPosition = startBackgroundPosition;
  }
  else {
    backgroundPosition = startBackgroundPosition + (pixelsDown - startPixelsDown);
  }
  
  $(selector).css("background-position", "50% " + backgroundPosition + "px");
  return false;
}