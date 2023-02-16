let isMenuOpen = false;

$(document).ready(function(){
	sameHeight();
	window.addEventListener('load', AOS.refresh)
	console.log('init')
});


$(window).on('load', function () {
	Menu();
	AnchorLinks();
});

function AnchorLinks(){
	const url = window.location.href;

	if(url.indexOf('#') > 0){
		const anchor = url.substring(url.indexOf('#') + 1);
		console.log(anchor);

		jQuery([document.documentElement, document.body]).animate({
			scrollTop: jQuery('#' + anchor).offset().top
		}, 800);
	}
}

function sameHeight() {
	$('.sameheight').matchHeight();
}

function Menu(){
	if($('body.blog').length > 0 || $('body.single-post').length > 0 || $('body.error404').length > 0 || $('body.archive').length > 0 || $('body.search').length > 0 || $('body.woocommerce-checkout').length > 0){
		$('header').addClass('fixed');
		console.log('add fixed header');
	}
	else{

		if(!ismObile()){
			var waypoints = $('#trigger-menu').waypoint(function (direction) {
				//$('header').addClass('fixed');
				console.log(direction);
				console.log(isMenuOpen);
				
				if (direction == 'down') {
					if(!isMenuOpen){
						$('header').addClass('fixed animated slideInDown fast');
					}
					
				} else {
					if(!isMenuOpen){
						$('header').removeClass('fixed animated slideInDown fast');
					}
					
				}
			}, {
				offset: '0%'
			});
		}
		else{
			$('header').addClass('fixed');
		}

		
	}

	$('#sidebarCollapse').click(function(){
		console.log('click');
		$('#navbarToggler').toggleClass('show');
	});

	$('.overlay-menu').click(function(){
		$('.mobile-menu-wrapper').toggleClass('open');
	});
}

function ismObile(){
	let check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}


/*!
 * jquery.counterup.js 2.0.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Amended by Ciro Mattia Gonano and others
 *
 * Date: Mar 24, 2016
 */
(function ($) {
	"use strict";

	$.fn.counterUp = function (options) {

			// Defaults
			var settings = $.extend({
							'time': 400,
							'delay': 10,
							'formatter': false,
							callback: function () {
							}
					}, options),
					s;

			return this.each(function () {

					// Store the object
					var $this = $(this),
							counter = {
									time: $(this).data('counterup-time') || settings.time,
									delay: $(this).data('counterup-delay') || settings.delay
							};

					var counterUpper = function () {
							var nums = [];
							var divisions = counter.time / counter.delay;
							var num = $this.text();
							var isComma = /[0-9]+,[0-9]+/.test(num);
							num = num.replace(/,/g, '');
							var decimalPlaces = (num.split('.')[1] || []).length;

							var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);

							// Convert time to total seconds
							if (isTime) {
									var times = num.split(':'),
											m = 1;
									s = 0;
									while (times.length > 0) {
											s += m * parseInt(times.pop(), 10);
											m *= 60;
									}
							}

							// Generate list of incremental numbers to display
							for (var i = divisions; i >= 1; i--) {

									var newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);

									// Add incremental seconds and convert back to time
									if (isTime) {
											newNum = parseInt(s / divisions * i);
											var hours = parseInt(newNum / 3600) % 24;
											var minutes = parseInt(newNum / 60) % 60;
											var seconds = parseInt(newNum % 60, 10);
											newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
									}

									// Preserve commas if input had commas
									if (isComma) {
											while (/(\d+)(\d{3})/.test(newNum.toString())) {
													newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
											}
									}
									if (settings.formatter) {
											newNum = settings.formatter.call(this, newNum);
									}
									nums.unshift(newNum);
							}

							$this.data('counterup-nums', nums);
							$this.text('0');

							// Updates the number until we're done
							var f = function () {
									$this.html($this.data('counterup-nums').shift());
									if ($this.data('counterup-nums').length) {
											setTimeout($this.data('counterup-func'), counter.delay);
									} else {
											$this.data('counterup-nums', null);
											$this.data('counterup-func', null);
											settings.callback.call(this);
									}
							};
							$this.data('counterup-func', f);

							// Start the count up
							setTimeout($this.data('counterup-func'), counter.delay);
					};

					// Perform counts when the element gets into view
					$this.waypoint(function (direction) {
							counterUpper();
							this.destroy(); //-- Waypoint 3.0 version of triggerOnce
					}, {offset: '100%'});
			});

	};

})(jQuery);