$(document).ready(function(){
  /* Fix menu position based on window height. */
  if($(window).height() < $("#menu").height()) {
    $("#menu").css("position", "absolute");
  }
  
  
  /* Fade in/out image on hover */ 
  $(".clip").hover(function() {
    $(this).find(".menuImg").fadeTo(500, 1);
  }, function() {
    $(this).find(".menuImg").fadeTo(250, 0);
  });
  
  /* Scroll to section when menu option clicked. */
  $(".clip").on("click", function(){
    $('html,body').animate({
        scrollTop: $($(this).find("a").attr('href')).offset().top - 20},
        'slow');
  });
  
  
  /* Show pop up div when project clicked and disable scrolling. */
  $(".project").on("click", function(){
    var height = $(window).height();
    $("#popUp").css("min-height", height);
    $("#projectName").text($(this).find("h1").text());
    $("#projectDescription").html($(this).find("p").html());
    $("#popUp").show();
    $("body").css("overflow", "hidden");
  });
  
  /* Close pop up div and re-enable scrolling. */
  $(".fa-close").on("click", function(){
    $("#popUp").hide();
    $("body").css("overflow", "visible");
  });
  
  /* Update menu scrollability if window resizes */
  $(window).resize(function(){
    if($(window).height() < $("#menu").height()) {
      $("#menu").css("position", "absolute");
    }
    else {
      $("#menu").css("position", "fixed");
    }
  });
  
});

