(function(){
  var name = document.querySelector('.name');
  var claim = document.querySelector('.claim');
  var landingLine = document.querySelector('.landing-line');

  setTimeout(function(){
		name.classList.add("landed");
    claim.classList.add("landed");
    landingLine.classList.add("landed");
  }, 500)
})();
