(function(){
  var name = document.querySelector('.name');
  var claim = document.querySelector('.claim');
  var landingLine = document.querySelector('.landing-line');
  var logo = document.querySelector('.logo');
  var menu = document.querySelector('#popup-menu');
  var upArrow = document.querySelector('#up-arrow');
  var hidcolItem1 = document.querySelector('#hidcol-item-1');
  var midcolItem1 = document.querySelector('#midcol-item-1');
  var hidcolItem2 = document.querySelector('#hidcol-item-2');
  var midcolItem2 = document.querySelector('#midcol-item-2');
  var hidcolItem3 = document.querySelector('#hidcol-item-3');
  var midcolItem3 = document.querySelector('#midcol-item-3');
  var hidcolItem4 = document.querySelector('#hidcol-item-4');
  var midcolItem4 = document.querySelector('#midcol-item-4');
  var hidcolItem5 = document.querySelector('#hidcol-item-5');
  var midcolItem5 = document.querySelector('#midcol-item-5');
  var hidcolItem6 = document.querySelector('#hidcol-item-6');
  var midcolItem6 = document.querySelector('#midcol-item-6');
  var hidcolItem7 = document.querySelector('#hidcol-item-7');
  var midcolItem7 = document.querySelector('#midcol-item-7');
  var hidcolItem8 = document.querySelector('#hidcol-item-8');
  var midcolItem8 = document.querySelector('#midcol-item-8');
  var hidcolItem9 = document.querySelector('#hidcol-item-9');
  var midcolItem9 = document.querySelector('#midcol-item-9');

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

// loading bars for individual rows in resume section
  midcolItem1.addEventListener('mouseover', function(){
    hidcolItem1.classList.add("loaded");
  });
  midcolItem1.addEventListener('click', function(){
    if (hidcolItem1.classList.contains("loaded")) {
      hidcolItem1.classList.remove("loaded");
    } else {
      hidcolItem1.classList.add("loaded");
    };
  });

  midcolItem2.addEventListener('mouseover', function(){
    hidcolItem2.classList.add("loaded");
  });
  midcolItem2.addEventListener('click', function(){
    if (hidcolItem2.classList.contains("loaded")) {
    hidcolItem2.classList.remove("loaded");
    } else {
      hidcolItem2.classList.add("loaded");
    };
  });

  midcolItem3.addEventListener('mouseover', function(){
    hidcolItem3.classList.add("loaded");
  });
  midcolItem3.addEventListener('click', function(){
    if (hidcolItem3.classList.contains("loaded")) {
    hidcolItem3.classList.remove("loaded");
    } else {
      hidcolItem3.classList.add("loaded");
    };
  });

  midcolItem4.addEventListener('mouseover', function(){
    hidcolItem4.classList.add("loaded");
  });
  midcolItem4.addEventListener('click', function(){
    if (hidcolItem4.classList.contains("loaded")) {
    hidcolItem4.classList.remove("loaded");
    } else {
      hidcolItem4.classList.add("loaded");
    };
  });

  midcolItem5.addEventListener('mouseover', function(){
    hidcolItem5.classList.add("loaded");
  });
  midcolItem5.addEventListener('click', function(){
    if (hidcolItem5.classList.contains("loaded")) {
    hidcolItem5.classList.remove("loaded");
    } else {
      hidcolItem5.classList.add("loaded");
    };
  });

  midcolItem6.addEventListener('mouseover', function(){
    hidcolItem6.classList.add("loaded");
  });
  midcolItem6.addEventListener('click', function(){
    if (hidcolItem6.classList.contains("loaded")) {
    hidcolItem6.classList.remove("loaded");
    } else {
      hidcolItem6.classList.add("loaded");
    };
  });

  midcolItem7.addEventListener('mouseover', function(){
    hidcolItem7.classList.add("loaded");
  });
  midcolItem7.addEventListener('click', function(){
    if (hidcolItem7.classList.contains("loaded")) {
    hidcolItem7.classList.remove("loaded");
    } else {
      hidcolItem7.classList.add("loaded");
    };
  });

  midcolItem8.addEventListener('mouseover', function(){
    hidcolItem8.classList.add("loaded");
  });
  midcolItem8.addEventListener('click', function(){
    if (hidcolItem8.classList.contains("loaded")) {
    hidcolItem8.classList.remove("loaded");
    } else {
      hidcolItem8.classList.add("loaded");
    };
  });

  midcolItem9.addEventListener('mouseover', function(){
    hidcolItem9.classList.add("loaded");
  });
  midcolItem9.addEventListener('click', function(){
    if (hidcolItem9.classList.contains("loaded")) {
    hidcolItem9.classList.remove("loaded");
    } else {
      hidcolItem9.classList.add("loaded");
    };
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
  });
  $('.work-item-1').mouseout(function() {
    $('.work-item-1-text').removeClass('loaded');
  });

  $('.work-item-2').mouseover(function() {
    $('.work-item-2-text').addClass('loaded');
  });
  $('.work-item-2').mouseout(function() {
    $('.work-item-2-text').removeClass('loaded');
  });

  $('.work-item-3').mouseover(function() {
    $('.work-item-3-text').addClass('loaded');
  });
  $('.work-item-3').mouseout(function() {
    $('.work-item-3-text').removeClass('loaded');
  });

  $('.work-item-4').mouseover(function() {
    $('.work-item-4-text').addClass('loaded');
  });
  $('.work-item-4').mouseout(function() {
    $('.work-item-4-text').removeClass('loaded');
  });

  $('.work-item-5').mouseover(function() {
    $('.work-item-5-text').addClass('loaded');
  });
  $('.work-item-5').mouseout(function() {
    $('.work-item-5-text').removeClass('loaded');
  });

  $('.work-item-6').mouseover(function() {
    $('.work-item-6-text').addClass('loaded');
  });
  $('.work-item-6').mouseout(function() {
    $('.work-item-6-text').removeClass('loaded');
  });

})();
