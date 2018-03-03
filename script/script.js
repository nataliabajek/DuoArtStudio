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
            scrollTop: target.offset().top - 70
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
    if ($(window).scrollTop() > 500){
      $("nav").addClass("sticky");
    }
    else {
      $("nav").removeClass("sticky");
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

  //-----------------------------------------------------------
  // Hide navbar collapse after click
  //----------------------------------------------------------- 
  $('.nav a').on('click', function(){
      $('.navbar-toggle').click()
  });

});