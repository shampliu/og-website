$('#avid').easyTicker({
	direction: 'up',
	easing: 'swing',
	speed: 'slow',
	interval: 2000,
	height: 'auto',
	visible: 1,
	mousePause: 0,
	controls: {
		up: '',
		down: '',
		toggle: '',
		playText: 'Play',
		stopText: 'Stop'
	}
});

$(document).ready(function(){
	var $square = $("#bounce");
	bounce();
	function bounce() {
	    $square.animate({
	        left: "+=10"
	    }, 800, function() {
	        $square.animate({
	            left: "-=10"
	        }, 800, function() {
	            bounce();
	        })
	    });
	}

})
