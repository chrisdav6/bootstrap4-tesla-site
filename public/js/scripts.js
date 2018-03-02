$(function() {
  
  //Initialize Smooth Scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
  });
  
  //Fade In Animations
  $("#title").delay(250).animate({
    top: "0",
    opacity: 1
  }, 300);
  
  $("#subtitle").delay(350).animate({
    top: "0",
    opacity: 1
  }, 300);
  
  $(".col1").delay(450).animate({
    top: "0",
    opacity: 1
  }, 300);
  
  $(".col2").delay(550).animate({
    top: "0",
    opacity: 1
  }, 300);
 
  $(".col3").delay(650).animate({
    top: "0",
    opacity: 1
  }, 300);
  
  $(".col4").delay(750).animate({
    top: "0",
    opacity: 1
  }, 300);
  
  $(".col5").delay(850).animate({
    top: "0",
    opacity: 1
  }, 300);
  
});

