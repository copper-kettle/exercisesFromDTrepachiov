let burger = document.querySelector(".burger__menu");
let menu = document.querySelector(".main_menu");
let menu_mobile = document.querySelector(".menu_mobile");
let menu_items = document.querySelector(".menu_level_items").children;
let screen_width = window.innerWidth;

if (screen_width <= 576) {
	menu.classList.remove('main_menu');
	menu.classList.add('menu_mobile');
	menu_mobile.classList.add('hide');
	burger.classList.remove('hide');

	burger.addEventListener('click', () => {
	burger.classList.toggle('cross');
	menu_mobile.classList.toggle('hide');
});

for (const key in menu_items) {
	menu_items[key].addEventListener('click', () => {
		menu_mobile.classList.toggle('hide');
		burger.classList.toggle('cross');
	}
	);
}
} else {
	menu.classList.remove('menu_mobile');
	burger.classList.add('hide');
}



