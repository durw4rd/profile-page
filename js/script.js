(function(){
  var name = document.querySelector('.name');
  var claim = document.querySelector('.claim');
  var landingLine = document.querySelector('.landing-line');
  var logo = document.querySelector('.logo');
  var menu = document.querySelector('#popup-menu');
  var upArrow = document.querySelector('#up-arrow');
  var hidcolItem1 = document.querySelector('#hidcol-item-1');
  var rightcolItem1 = document.querySelector('#rightcol-item-1');
  var hidcolItem2 = document.querySelector('#hidcol-item-2');
  var rightcolItem2 = document.querySelector('#rightcol-item-2');
  var hidcolItem3 = document.querySelector('#hidcol-item-3');
  var rightcolItem3 = document.querySelector('#rightcol-item-3');
  var hidcolItem4 = document.querySelector('#hidcol-item-4');
  var rightcolItem4 = document.querySelector('#rightcol-item-4');
  var hidcolItem5 = document.querySelector('#hidcol-item-5');
  var rightcolItem5 = document.querySelector('#rightcol-item-5');
  var hidcolItem6 = document.querySelector('#hidcol-item-6');
  var rightcolItem6 = document.querySelector('#rightcol-item-6');
  var hidcolItem7 = document.querySelector('#hidcol-item-7');
  var rightcolItem7 = document.querySelector('#rightcol-item-7');
  var hidcolItem8 = document.querySelector('#hidcol-item-8');
  var rightcolItem8 = document.querySelector('#rightcol-item-8');
  var hidcolItem9 = document.querySelector('#hidcol-item-9');
  var rightcolItem9 = document.querySelector('#rightcol-item-9');

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
  rightcolItem1.addEventListener('mouseover', function(){
    hidcolItem1.classList.add("loaded");
  });
  rightcolItem1.addEventListener('click', function(){
    if (hidcolItem1.classList.contains("loaded")) {
    hidcolItem1.classList.remove("loaded");
    } else {
      hidcolItem1.classList.add("loaded");
    };
  });

  rightcolItem2.addEventListener('mouseover', function(){
    hidcolItem2.classList.add("loaded");
  });
  rightcolItem2.addEventListener('click', function(){
    if (hidcolItem2.classList.contains("loaded")) {
    hidcolItem2.classList.remove("loaded");
    } else {
      hidcolItem2.classList.add("loaded");
    };
  });

  rightcolItem3.addEventListener('mouseover', function(){
    hidcolItem3.classList.add("loaded");
  });
  rightcolItem3.addEventListener('click', function(){
    if (hidcolItem3.classList.contains("loaded")) {
    hidcolItem3.classList.remove("loaded");
    } else {
      hidcolItem3.classList.add("loaded");
    };
  });

  rightcolItem4.addEventListener('mouseover', function(){
    hidcolItem4.classList.add("loaded");
  });
  rightcolItem4.addEventListener('click', function(){
    if (hidcolItem4.classList.contains("loaded")) {
    hidcolItem4.classList.remove("loaded");
    } else {
      hidcolItem4.classList.add("loaded");
    };
  });

  rightcolItem5.addEventListener('mouseover', function(){
    hidcolItem5.classList.add("loaded");
  });
  rightcolItem5.addEventListener('click', function(){
    if (hidcolItem5.classList.contains("loaded")) {
    hidcolItem5.classList.remove("loaded");
    } else {
      hidcolItem5.classList.add("loaded");
    };
  });

  rightcolItem6.addEventListener('mouseover', function(){
    hidcolItem6.classList.add("loaded");
  });
  rightcolItem6.addEventListener('click', function(){
    if (hidcolItem6.classList.contains("loaded")) {
    hidcolItem6.classList.remove("loaded");
    } else {
      hidcolItem6.classList.add("loaded");
    };
  });

  rightcolItem7.addEventListener('mouseover', function(){
    hidcolItem7.classList.add("loaded");
  });
  rightcolItem7.addEventListener('click', function(){
    if (hidcolItem7.classList.contains("loaded")) {
    hidcolItem7.classList.remove("loaded");
    } else {
      hidcolItem7.classList.add("loaded");
    };
  });

  rightcolItem8.addEventListener('mouseover', function(){
    hidcolItem8.classList.add("loaded");
  });
  rightcolItem8.addEventListener('click', function(){
    if (hidcolItem8.classList.contains("loaded")) {
    hidcolItem8.classList.remove("loaded");
    } else {
      hidcolItem8.classList.add("loaded");
    };
  });

  rightcolItem9.addEventListener('mouseover', function(){
    hidcolItem9.classList.add("loaded");
  });
  rightcolItem9.addEventListener('click', function(){
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

})();
