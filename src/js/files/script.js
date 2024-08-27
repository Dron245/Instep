// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


// Подключение галереи Fancybox
Fancybox.bind('[data-fancybox]', {
	//
 });
window.addEventListener("DOMContentLoaded", () => {

	const inputs = document.querySelectorAll('input')
	inputs.forEach(element => {
		element.addEventListener('invalid', () => {
			// element.closest('.popup__form-item').classList.add('error')
		})
		element.addEventListener('focus', () => {
			// element.closest('.popup__form-item').classList.remove('error')
		})

		element.addEventListener('input', () => {
			if(element.value == '') {
				element.closest('.popup__form-item').classList.remove('succes')
			 }else{
				element.closest('.popup__form-item').classList.add('succes')
			 }
		})
	});
	document.addEventListener("click", documentActions);
	
	function documentActions(e) {
		const targetElement = e.target;
	}

	const inrb = document.querySelector('.in-rb');
	const inlt = document.querySelector('.in-lt');
	setInterval(function(){inrb.classList.add('_view')},2000)
	setInterval(function(){inrb.classList.remove('_view')},4000,2000)
	setInterval(function(){inlt.classList.add('_view')},2000)
	setInterval(function(){inlt.classList.remove('_view')},4000,2000)
})