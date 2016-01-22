$(document).ready(function(){
  /* Fix menu position based on window height. */
  if($(window).height() < $("#menu").height()) {
    $("#menu").css("position", "absolute");
  }
  
  /* Show background image of active section */
  $(".active .menuImg").fadeTo(500, 1); 
  
  /* Fade in/out image on hover */ 
  $(".clip").hover(function() {
    $(this).find(".menuImg").fadeTo(500, 1);
  }, function() {
    if(!$(this).hasClass("active"))
      $(this).find(".menuImg").fadeTo(250, 0);
  });
  
  /* Scroll to section when menu option clicked. */
  $(".clip").on("click", function(){
    $('html,body').animate({
        scrollTop: $($(this).find("a").attr('href')).offset().top - 20},
        'slow');
  });
  
  /* Switch out active menu for new one */
  function switchActive(nowActive) {
    $(".active .menuImg").fadeTo(250, 0); 
    $(".active").removeClass("active");
    nowActive.addClass("active");
    $(".active .menuImg").fadeTo(500, 1); 
  }

  /* Detect which section page is current on, and show menu image accordingly */
  $(window).scroll(function(){
    if($(window).scrollTop() > $("#contact").offset().top - $("#contact").height()/2) {
      // In Contact
      if(!$("#contactMenu").hasClass("active")) {
        switchActive($("#contactMenu"));
      }
    } else if($(window).scrollTop() > $("#portfolio").offset().top - $("#portfolio").height()/2) {
      // In Portfolio
      if(!$("#portfolioMenu").hasClass("active")) {
        switchActive($("#portfolioMenu"));
      }
    } else {
      // In About
      if(!$("#aboutMenu").hasClass("active")) {
        switchActive($("#aboutMenu"));
      }
    }
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

