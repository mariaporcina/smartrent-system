(function(){

	$(document).ready(function(){
		$('.slider').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 450,
			arrows: false,
			dots: true
		});
	});

	$('main.login-main .login .login-form form input[type="submit"]').click(function(e){
		e.preventDefault();
		window.location.href = window.location.href + 'initial';
	});

}());