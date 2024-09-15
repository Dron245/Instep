/** @format */

// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Подключение галереи Fancybox
Fancybox.bind('[data-fancybox]', {
	//
});
window.addEventListener('DOMContentLoaded', () => {
	const inputs = document.querySelectorAll('input');
	inputs.forEach((element) => {
		element.addEventListener('invalid', () => {
			// element.closest('.popup__form-item').classList.add('error')
		});
		element.addEventListener('focus', () => {
			// element.closest('.popup__form-item').classList.remove('error')
		});

		element.addEventListener('input', () => {
			if (element.value == '') {
				element.closest('.popup__form-item').classList.remove('succes');
			} else {
				element.closest('.popup__form-item').classList.add('succes');
			}
		});
	});
	document.addEventListener('click', documentActions);
	let flag = true;
	let flags = 0;
	function documentActions(e) {
		const targetElement = e.target;
		// console.log(targetElement);
		if (
			!targetElement.closest('.menсu__icon') &&
			!targetElement.closest('.menu__body') &&
			flag == true
		) {
			flag = false;
		} else if (
			!targetElement.closest('.menсu__icon') &&
			!targetElement.closest('.menu__body') &&
			flag == false
		) {
			flag = true;
			document.querySelector('.menu-open')
				? document.documentElement.classList.remove('lock')
				: null;
			document.querySelector('.menu-open')
				? document.documentElement.classList.remove('menu-open')
				: null;
		}

		if (targetElement.closest('.services__filter') && flags == 0) {
			flags = 1;
			// console.log(1);
			const nav = targetElement.closest('.services__top').querySelector('nav');
			nav.classList.add('_menu-open');
		} else {
			if (
				flags == 1 &&
				targetElement.closest('.services__close-menu') &&
				targetElement
					.closest('.services__top')
					.querySelector('nav')
					.classList.contains('_menu-open')
			) {
				flags = 0;
				const nav = targetElement.closest('.services__top').querySelector('.services__navigation');
				nav.classList.remove('_menu-open');
			}

			if (
				!targetElement.closest('.services__close-menu') &&
				!targetElement.closest('.services__navigation') &&
				document.querySelector('._menu-open') &&
				flags == 1
			) {
				// console.log(2);
				flags = 0;
				const nav = document.querySelector('.services__navigation');
				nav.classList.remove('_menu-open');
			}
		}
	}

	const mainSlider = document.querySelector('.page__slider')
	setTimeout(() => {
		mainSlider.style.visibility = 'visible'
	}, 300);
});
