// Used the logic of setInterval and clearInterval
// setInterval(callback, time-interval);
// animate(object, time-interval, callback); 
	 // callback is optional  in animate



$(function(){
	// configuration
	var width = 720;
	var animateSpeed = 1000;
	var waitTime = 2000;
	var currentSlide = 1;
	
	// cache DOM 
	var slider = $("#slider");
	var slideContainer = slider.find(".slides");
	var slides = slideContainer.find(".slide");

	var interval;

	function startSlider(){
		interval = setInterval(function(){
			$(slideContainer).animate({'margin-left':'-='+width}, animateSpeed, function(){
				currentSlide++;
				var totalSlides = $(slides).length;
				if (currentSlide == totalSlides){
					currentSlide = 1;
					$(slideContainer).css('margin-left', 0);
				}

			});
		}, waitTime);
	}

	function pauseSlider(){
		clearInterval(interval);
	}

	$(slider).on("mouseenter", pauseSlider).on("mouseleave", startSlider);
	startSlider();
});




