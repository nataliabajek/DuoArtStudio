$(document).ready(function() {
  //-----------------------------------------------------------
  // Smooth scroll
  //-----------------------------------------------------------
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  //-----------------------------------------------------------
  // Sticky Navbar - fixed on scroll functionality
  //----------------------------------------------------------- 
  $(window).scroll(function(){
    if ($(window).scrollTop() > 740){
      $("nav").addClass("sticky");
       $(".nav-logo").addClass("logo-min-sticky");
       $(".nav-logo").removeClass("logo-min");
       $(".img-logo").addClass("img-logo-sticky");
      // $(".img-logo").removeClass("img-logo-min");
      // $(".nav-list").addClass("nav-list-sticky");
      // $(".navbar-header").addClass("navbar-header-sticky");
      //$(".nav-links").removeClass("col-lg-7 col-lg-offset-5 col-md-offset-3 col-md-9");
      //$(".nav-links").addClass("col-lg-12 col-md-12");
      //$(".nav-a").css("margin", "0 15px");
      $(".nav-a").addClass("nav-a-sticky");
      //$(".nav-list").css("justify-content", "center");
    }
    else {
      $("nav").removeClass("sticky");
      $(".nav-logo").removeClass("logo-min-sticky");
      $(".nav-logo").addClass("logo-min");
      $(".img-logo").removeClass("img-logo-sticky");
      $(".img-logo").addClass("img-logo-min");
      $(".nav-list").removeClass("nav-list-sticky");
      $(".navbar-header").removeClass("navbar-header-sticky");
      //$(".nav-links").addClass("col-lg-7 col-lg-offset-5 col-md-offset-3 col-md-9");
      //$(".nav-links").removeClass("col-lg-12 col-md-12");
      //$(".nav-a").css("margin", "0 5px");
      $(".nav-a").removeClass("nav-a-sticky");
      //$(".nav-list").css("justify-content", "space-between");
    }
  });
  //-----------------------------------------------------------
  // Google Maps
  //----------------------------------------------------------- 
  // function initMap() {
  //   var uluru = {lat: 50.514640867230305, lng: 22.145334830688526};
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 16,
  //     center: uluru
  //   });
  //   var marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map
  //   });
  // }

  //-----------------------------------------------------------
  // Fade In
  //----------------------------------------------------------- 
  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        if (objectBottom < windowBottom) { 
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { 
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); 
  });

});