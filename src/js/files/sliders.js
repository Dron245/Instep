/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
import "../../scss/base/swiper.scss";
//Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
//Полный набор стилей с node_modules
// import 'swiper/css';

//Инициализация слайдеров
function initSliders() {
//Список слайдеров
//Проверяем, есть ли слайдер на странице
	if (document.querySelector('.slider__slider')) { //Указываем класс нужного слайдера
//Создаем слайдер
		new Swiper('.slider__slider', { //Указываем класс нужного слайдера
            //Подключаем модули слайдера
            //для конкретного случая
			modules: [Pagination,Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			autoplay: {
				delay: 3000
			},
			// loop: true,

			/*
			// Эффекты
			
			*/
			navigation: {
				prevEl: '.slider__arrow_left',
				nextEl: '.slider__arrow_right',
			},
			// Пагинация
			
			pagination: {
				el: '.slider__pagination',
				clickable: true,
			},
		});
	}

	if (document.querySelector('.reviews__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
				new Swiper('.reviews__sliderr', { //Указываем класс нужного слайдера
						//Подключаем модули слайдера
						//для конкретного случая
					modules: [Pagination],
					observer: true,
					observeParents: true,
					slidesPerView: 1,
					spaceBetween: 0,
					// autoHeight: true,
					speed: 800,
		
					// loop: true,
					// Пагинация
					
					pagination: {
						el: '.reviews__pagination',
						clickable: true,
					},
					
		
				
				});
	}

	if (document.querySelector('.sertificates__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
				new Swiper('.sertificates__slider', { //Указываем класс нужного слайдера
						//Подключаем модули слайдера
						//для конкретного случая
					modules: [Pagination, Navigation, Autoplay],
					observer: true,
					observeParents: true,
					slidesPerView: 3,
					spaceBetween: 20,
					// autoHeight: true,
					speed: 800,
		
					// loop: true,
					autoplay: {
						delay: 3000
					},
					navigation: {
						prevEl: '.certificates__arrow_left',
						nextEl: '.certificates__arrow_right',
					},
					// Пагинация
					
					pagination: {
						el: '.sertificates__pagination',
						clickable: true,
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						600: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						
					},
				});
	}
}
//Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

//========================================================================================================================================================



window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	
	if(document.querySelector('.confidence__slider')){
		const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
		let swiper;
	
		breakpoint = window.matchMedia(breakpoint);
	
		const enableSwiper = function(className, settings) {
		swiper = new Swiper(className, settings);
	
		  if (callback) {
			 callback(swiper);
		  }
		}
	
		const checker = function() {
		  if (breakpoint.matches) {
			 return enableSwiper(swiperClass, swiperSettings);
		  } else {
			 if (swiper !== undefined) swiper.destroy(true, true);
			 return;
		  }
		};
	
		breakpoint.addEventListener('change', checker);
		checker();
	 }
	
	 resizableSwiper(
		'(max-width: 1170.02px)',
		'.confidence__slider',
		{
			modules: [Pagination],
			observer: true,
			observeParents: true,
			// slidesPerView: 1,
			spaceBetween: 20,
			// autoHeight: true,
			speed: 800,
			
			// Пагинация
			
			pagination: {
				el: '.confidence__pagination',
				clickable: true,
			},
			
			// Брейкпоинты
			breakpoints: {
				360: {
					slidesPerView: 1,
					// spaceBetween: 20,
					// autoHeight: true,
				},
				500: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 1.2,
					// spaceBetween: 20,
					// autoHeight: true,
				},
				
			},
		},
		// someFunc
	  );
	}

	if(document.querySelector('.videos__slider')){
		const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
		let swiper;
	
		breakpoint = window.matchMedia(breakpoint);
	
		const enableSwiper = function(className, settings) {
		swiper = new Swiper(className, settings);
	
		  if (callback) {
			 callback(swiper);
		  }
		}
	
		const checker = function() {
		  if (breakpoint.matches) {
			 return enableSwiper(swiperClass, swiperSettings);
		  } else {
			 if (swiper !== undefined) swiper.destroy(true, true);
			 return;
		  }
		};
	
		breakpoint.addEventListener('change', checker);
		checker();
	 }
	
	 resizableSwiper(
		'(max-width: 991.96px)',
		'.videos__slider',
		{
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.7,
			spaceBetween: 20,
			// autoHeight: true,
			speed: 800,
			// loop: true,
			// Пагинация
			
			pagination: {
				el: '.videos__pagination',
				clickable: true,
			},
			
			// Брейкпоинты
			breakpoints: {
				0: {
					slidesPerView: 1,
					slidesPerGroup: 1
				},
				600: {
					slidesPerView: 2,
					slidesPerGroup: 2
				}
				
			},
		},
		// someFunc
	  );
	}

	if(document.querySelector('.vk__slider')){
		const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
		let swiper;
	
		breakpoint = window.matchMedia(breakpoint);
	
		const enableSwiper = function(className, settings) {
		swiper = new Swiper(className, settings);
	
		  if (callback) {
			 callback(swiper);
		  }
		}
	
		const checker = function() {
		  if (breakpoint.matches) {
			 return enableSwiper(swiperClass, swiperSettings);
		  } else {
			 if (swiper !== undefined) swiper.destroy(true, true);
			 return;
		  }
		};
	
		breakpoint.addEventListener('change', checker);
		checker();
	 }
	
	 resizableSwiper(
		'(max-width: 991.92px)',
		'.vk__slider',
		{
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.7,
			spaceBetween: 20,
			// autoHeight: true,
			speed: 800,
			
			// Пагинация
			
			pagination: {
				el: '.vk__pagination',
				clickable: true,
			},
			
			// Брейкпоинты
			breakpoints: {
				0: {
					slidesPerView: 1,
					slidesPerGroup: 1
				},
				600: {
					slidesPerView: 2,
					slidesPerGroup: 2
				}
				
			},
		},
		// someFunc
	  );
	}
	//Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});