// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

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
})