var main = function(){
  var name = document.querySelector('.name');
  var claim = document.querySelector('.claim');
  var landingLine = document.querySelector('.landing-line');
  var logo = document.querySelector('.logo');
  var menu = document.querySelector('#popup-menu');
  var upArrow = document.querySelector('#up-arrow');

//mobile version
  if ($(window).width() < 900) {
    $('.landing-head').addClass('mobile')
    $('.header-menu').addClass('mobile');
    $('.my-intro').addClass('mobile');
  } else {
    $('.landing-head').removeClass('mobile')
    $('.header-menu').removeClass('mobile');
    $('.my-intro').removeClass('mobile');
  };


// delayed loading of elements on landing page
  setTimeout(function(){
		name.classList.add("landed");
    claim.classList.add("landed");
    landingLine.classList.add("landed");
    logo.classList.add("landed");
  }, 500)

// scroll animations for navigation elements throughout the page
  $('a.back-to-top').click(function() {
  	$('html, body').animate({
  		scrollTop: 0
  	}, 1000);
  	return false;
  });

  $('a.down-arrow').click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000);
    return false;
  });

  $('a.about').click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000);
    return false;
  });

  $('a.contact').click(function() {
  	$('html, body').animate({
  		scrollTop: $("#contact").offset().top
  	}, 1000);
  	return false;
  });

  $('a.resume').click(function() {
  	$('html, body').animate({
  		scrollTop: $("#resume").offset().top
  	}, 1000);
  	return false;
  });

  $('a.work').click(function() {
  	$('html, body').animate({
  		scrollTop: $("#work").offset().top
  	}, 1000);
  	return false;
  });

// loading elements upon scrolldown
  new Waypoint({
    element: document.querySelector('.landing-line'),
    handler: function(direction) {
	  	if ( direction === "down" ) {
	    	menu.classList.add("is-active");
        upArrow.classList.add("is-active");
	    } else {
	    	menu.classList.remove("is-active");
        upArrow.classList.remove("is-active");
	    }
	  }
  });

// Moving flexboxes in 'about' section
  boxLoad = function(i) {
    $('.box' + i).mouseover(function() {
      $('.popup' + i).addClass('loaded');
      $('.box' + i + '-head').addClass('loaded');
      $('.box' + i + '-line').addClass('loaded');
    });
  };

  boxUnload = function(i) {
    $('.box' + i).mouseout(function() {
      $('.popup' + i).removeClass('loaded');
      $('.box' + i + '-head').removeClass('loaded');
      $('.box' + i + '-line').removeClass('loaded');
    });
  };

  for(i=1; i<=5; i++) {
    boxLoad([i]);
    boxUnload([i]);
  };

// loading bars for individual rows in resume section

  barLoad = function(i) {
    $('#midcol-item-' + i).mouseover(function() {
      $('#hidcol-item-' + i).addClass('loaded');
    });
    $('#midcol-item-' + i).click(function() {
      $('#hidcol-item-' + i).toggleClass('loaded');
    });
  };

  for(i=1; i<=9; i++) {
    barLoad([i]);
  };

  // efects for work-items in Work section

  workItemLoad = function(i) {
    $('.work-item-' + i).mouseover(function() {
      $('.work-item-' + i + '-text').addClass('loaded');
      $('.work-item-' + i + '-logo').addClass('loaded');
      $('.work-item-' + i + '-head').addClass('loaded');
    });
    $('.work-item-' + i).mouseout(function() {
      $('.work-item-' + i + '-text').removeClass('loaded');
      $('.work-item-' + i + '-logo').removeClass('loaded');
      $('.work-item-' + i + '-head').removeClass('loaded');
    });
  };

  for(i=1; i<=6; i++) {
    workItemLoad([i]);
  };

};

$(document).ready(main);
