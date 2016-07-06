(function(){
  var name = document.querySelector('.name');
  var claim = document.querySelector('.claim');
  var landingLine = document.querySelector('.landing-line');
  var logo = document.querySelector('.logo');
  var menu = document.querySelector('#popup-menu');
  var upArrow = document.querySelector('#up-arrow');
  
// delayed loading of elements on landing page
  setTimeout(function(){
		name.classList.add("landed");
    claim.classList.add("landed");
    landingLine.classList.add("landed");
    logo.classList.add("landed");
  }, 500)

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

// Hidden elements in about section

$('.box1').mouseover(function() {
  $('.popup1').addClass('loaded');
  $('.box1-head').addClass('loaded');
  $('.box1-line').addClass('loaded');
});
$('.box1').mouseout(function() {
  $('.popup1').removeClass('loaded');
  $('.box1-head').removeClass('loaded');
  $('.box1-line').removeClass('loaded');
});

$('.box2').mouseover(function() {
  $('.popup2').addClass('loaded');
  $('.box2-head').addClass('loaded');
  $('.box2-line').addClass('loaded');
});
$('.box2').mouseout(function() {
  $('.popup2').removeClass('loaded');
  $('.box2-head').removeClass('loaded');
  $('.box2-line').removeClass('loaded');
});

$('.box3').mouseover(function() {
  $('.popup3').addClass('loaded');
  $('.box3-head').addClass('loaded');
  $('.box3-line').addClass('loaded');
});
$('.box3').mouseout(function() {
  $('.popup3').removeClass('loaded');
  $('.box3-head').removeClass('loaded');
  $('.box3-line').removeClass('loaded');
});

$('.box4').mouseover(function() {
  $('.popup4').addClass('loaded');
  $('.box4-head').addClass('loaded');
  $('.box4-line').addClass('loaded');
});
$('.box4').mouseout(function() {
  $('.popup4').removeClass('loaded');
  $('.box4-head').removeClass('loaded');
  $('.box4-line').removeClass('loaded');
});

$('.box5').mouseover(function() {
  $('.popup5').addClass('loaded');
  $('.box5-head').addClass('loaded');
  $('.box5-line').addClass('loaded');
});
$('.box5').mouseout(function() {
  $('.popup5').removeClass('loaded');
  $('.box5-head').removeClass('loaded');
  $('.box5-line').removeClass('loaded');
});


// loading bars for individual rows in resume section

  $('#midcol-item-1').mouseover(function() {
    $('#hidcol-item-1').addClass('loaded');
  });
  $('#midcol-item-1').click(function() {
    $('#hidcol-item-1').toggleClass('loaded');
  });

  $('#midcol-item-2').mouseover(function() {
    $('#hidcol-item-2').addClass('loaded');
  });
  $('#midcol-item-2').click(function() {
    $('#hidcol-item-2').toggleClass('loaded');
  });

  $('#midcol-item-3').mouseover(function() {
    $('#hidcol-item-3').addClass('loaded');
  });
  $('#midcol-item-3').click(function() {
    $('#hidcol-item-3').toggleClass('loaded');
  });

  $('#midcol-item-4').mouseover(function() {
    $('#hidcol-item-4').addClass('loaded');
  });
  $('#midcol-item-4').click(function() {
    $('#hidcol-item-4').toggleClass('loaded');
  });

  $('#midcol-item-5').mouseover(function() {
    $('#hidcol-item-5').addClass('loaded');
  });
  $('#midcol-item-5').click(function() {
    $('#hidcol-item-5').toggleClass('loaded');
  });

  $('#midcol-item-6').mouseover(function() {
    $('#hidcol-item-6').addClass('loaded');
  });
  $('#midcol-item-6').click(function() {
    $('#hidcol-item-6').toggleClass('loaded');
  });

  $('#midcol-item-7').mouseover(function() {
    $('#hidcol-item-7').addClass('loaded');
  });
  $('#midcol-item-7').click(function() {
    $('#hidcol-item-7').toggleClass('loaded');
  });

  $('#midcol-item-8').mouseover(function() {
    $('#hidcol-item-8').addClass('loaded');
  });
  $('#midcol-item-8').click(function() {
    $('#hidcol-item-8').toggleClass('loaded');
  });

  $('#midcol-item-9').mouseover(function() {
    $('#hidcol-item-9').addClass('loaded');
  });
  $('#midcol-item-9').click(function() {
    $('#hidcol-item-9').toggleClass('loaded');
  });

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

  // efects for work-items in Work section
  $('.work-item-1').mouseover(function() {
    $('.work-item-1-text').addClass('loaded');
    $('.work-item-1-logo').addClass('loaded');
    $('.work-item-1-head').addClass('loaded');
  });
  $('.work-item-1').mouseout(function() {
    $('.work-item-1-text').removeClass('loaded');
    $('.work-item-1-logo').removeClass('loaded');
    $('.work-item-1-head').removeClass('loaded');
  });

  $('.work-item-2').mouseover(function() {
    $('.work-item-2-text').addClass('loaded');
    $('.work-item-2-logo').addClass('loaded');
    $('.work-item-2-head').addClass('loaded');
  });
  $('.work-item-2').mouseout(function() {
    $('.work-item-2-text').removeClass('loaded');
    $('.work-item-2-logo').removeClass('loaded');
    $('.work-item-2-head').removeClass('loaded');
  });

  $('.work-item-3').mouseover(function() {
    $('.work-item-3-text').addClass('loaded');
    $('.work-item-3-logo').addClass('loaded');
    $('.work-item-3-head').addClass('loaded');
  });
  $('.work-item-3').mouseout(function() {
    $('.work-item-3-text').removeClass('loaded');
    $('.work-item-3-logo').removeClass('loaded');
    $('.work-item-3-head').removeClass('loaded');
  });
})();
