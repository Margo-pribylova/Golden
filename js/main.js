
$('.button').click(() => {
    $('html, body').animate({
        scrollTop: $('.proin').offset().top
    }, 1000);
});

$(function () {
	$(window).scroll(function() {
	    $('#works .one').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('#works .three').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});

$(window).scroll(function() {
	    $('.july').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});

$(window).scroll(function() {
	    $('.january').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
$(window).scroll(function() {
	    $('.december').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
$(window).scroll(function() {
	    $('.february').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});

})
