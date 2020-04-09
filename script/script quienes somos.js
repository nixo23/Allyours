$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1600, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


document.addEventListener(
  "DOMContentLoaded",
  function() {
    setTimeout(function() {    document.getElementById("pre-load").className = "swipeIn";
    }, 4600);
  },
  false
);
