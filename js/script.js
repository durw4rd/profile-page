(function(){
  var name = document.querySelector('.name');
  var claim = document.querySelector('.claim');
  var landingLine = document.querySelector('.landing-line');
  var logo = document.querySelector('.logo');
  var menu = document.querySelector('#popup-menu');
  var upArrow = document.querySelector('#up-arrow');
  var amountScrolled = 300;

  setTimeout(function(){
		name.classList.add("landed");
    claim.classList.add("landed");
    landingLine.classList.add("landed");
    logo.classList.add("landed");
  }, 500)

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

  $('a.back-to-top').click(function() {
  	$('html, body').animate({
  		scrollTop: 0
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

})();
