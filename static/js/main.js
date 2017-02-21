$(function() {
	initDropdowns();

	Waves.attach('.nav > li > a, .btn-plain', 'waves-primary');
	Waves.init({
		
	});

});

function initDropdowns(){
	$('.dropdown-toggle').each(function() {
		var parent = $(this).parent(),
			c_name = 'dropdown-container';

		(!parent.hasClass(c_name)) ? parent.addClass(c_name): '';
	});

	$('.dropdown-toggle').parent().mouseenter(function() {
		$(this).addClass('open').siblings().removeClass('open');
	});
	$('.dropdown-toggle').parent().mouseleave(function() {
		$(this).removeClass('open');
	});

	$('.dropdown-toggle').click(function(e) {
		e.preventDefault();
	});
}