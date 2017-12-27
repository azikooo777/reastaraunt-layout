$(document).ready(function() {

	// Мобильное меню

	$('#menu-button').click(function(event) {
		event.preventDefault();

		if ($('#menu-x1').is(':checked')) {
			$('input').attr('checked', false);
		}
		else {
			$('#menu-x1').attr('checked', true);
		}

		$('#show-hide').slideToggle( "slow" );
	});

	// -------------------------

	// Табы
	var tab = $('#tabs-link a').attr('href');

	// Показываем первый активный блок
	$('#tabs '+tab).show().css('display', 'flex');

	var allTabsLink = $('#tabs-link a');

	var nameActiveClass = 'menu__link_active';

	// При клике меняем активный блок
	allTabsLink.click(function(event) {
		event.preventDefault();
		// скрываем весь контент и удаляем активный класс
		$('#tabs .restaurant-menu-list').hide();

		allTabsLink.removeClass(nameActiveClass);

		$( this ).addClass(nameActiveClass);

		// получаем по которому кликнули контент и показываем
		getId = $( this ).attr('href');
		$(getId).show(500).css('display', 'flex');
	});
	// -------------------------

	// Высота fixed блока нужна для скролов ниже
	var fixedHeight = $('#fixed').outerHeight();

	// Плавный скролл при клике по меню

	$('.header__menu .menu__link').click(function(e){
		e.preventDefault();
		var anchor = $( this ).attr('href');
		var body = $("html, body");
		var positionPage = $( anchor ).offset().top - fixedHeight; // получаем позицию страницы по id и отменяем Fixed высоту
		body.stop().animate({scrollTop: positionPage}, 500, 'swing'); // делаем прокрутку
	});

	// -----------------

	// подставляет активный класс в меню если находимся на контенте

	var sections = [];
	var id = false;
	var anchor = $( '.header__menu .menu__link' );
	anchor.each(function(){
		sections.push($($( this ).attr('href')));
	});

	$(window).scroll(function(){
		var getScroll = $(window).scrollTop();
		for (var i in sections) {
			var section = sections[i];
			if (getScroll >= section.offset().top -fixedHeight-1) { // fixedHeight это высота блока fixed
				var scrolled_id = section.attr('id');
			}
		}
		if (scrolled_id !== id) {
			id = scrolled_id;
			anchor.removeClass('menu__link_active');
			$('a[href="#' + id + '"]').addClass('menu__link_active');
		}
	});

	// ---------------------

});