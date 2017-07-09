$(function(){
	var duration = $('audio')[0].duration;
	$('.content').hide();
	$('.pre-content').fadeIn(2000,function(){
		setTimeout(function(){
			$('.pre-content').fadeOut(2000, function(){
				$('audio')[0].play();
				$('.image').css({'display': 'block'});
				$('#container').addClass('has-stars');
				$('.image img').addClass('animate-logo');
				setTimeout(function(){
					$('.content').show();
					$('.amazing-credits').addClass('animate');
					setTimeout(function(){
						$('audio')[0].pause();
						$('.content').hide();
					}, 87000);
				}, 6000);
			});
		}, 2000);		
	});
});
