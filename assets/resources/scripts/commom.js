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

	$('main.user-registration-main .user-registration .user-registration-form form input[type="submit"]').click(function(e){
		e.preventDefault();
		window.location.href = 'http://localhost/smartrent-system/';
	});

	// let inputs = document.querySelectorAll( 'input[type="file"]' );
	// Array.prototype.forEach.call( inputs, function( input )
	// {
	// 	let label	 = input.previousElementSibling;
	// 	let labelVal = label.innerHTML;

	// 	input.addEventListener( 'change', function( e )
	// 	{
	// 		let fileName = '';
	// 		if( this.files && this.files.length > 1 ){
	// 			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
	// 		}
	// 		else{
	// 			fileName = e.target.value.split( '/' ).pop();

	// 			if( fileName ){
	// 				label.querySelector( 'span' ).innerHTML = fileName;
	// 			}
	// 			else{
	// 				label.innerHTML = labelVal;
	// 			}
	// 		}
	// 	});
	// });

	$('main.main-single .vehicle-info span.maintancement-button a').click(function(e){
		e.preventDefault();
		$('main.main-single .pop-up-maintancement').addClass('active-pop-up');
		$('body').addClass('stop-scroll');
	});

	$('main.main-single .pop-up-maintancement .maintancement span.close-pop-up').click(function(){
		$('main.main-single .pop-up-maintancement').removeClass('active-pop-up');
		$('body').removeClass('stop-scroll');
	});

}());