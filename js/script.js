(function(){
  var name = document.querySelector('.name');
  var claim = document.querySelector('.claim');
  var landingLine = document.querySelector('.landing-line');
  var logo = document.querySelector('.logo');
  var trigger = document.querySelector('#trigger');
  var menu = document.querySelector('#popup-menu');


  setTimeout(function(){
		name.classList.add("landed");
    claim.classList.add("landed");
    landingLine.classList.add("landed");
    logo.classList.add("landed");
  }, 500)

  new Waypoint({
    element: document.querySelector('#trigger'),
    handler: function(direction) {
	  	if ( direction === "down" ) {
	    	menu.classList.add("is-active");
	    } else {
	    	menu.classList.remove("is-active");
	    }
	  }
  });

})();
