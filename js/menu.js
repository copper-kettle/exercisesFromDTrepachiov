let level = document.querySelectorAll(".menu_level");
// let level_items = document.querySelector(".menu_level_items");
let menu_stage = document.querySelector('.menu_stage');

for (let i = 0; i < level.length; i++) {
	level[i].addEventListener('click', function () {
		level[i].querySelector(".menu_level_items").classList.toggle('hide');
	});
}

// подсветка пункта меню текущей страницы
let item = document.querySelectorAll(".menu_level");
let bod = document.querySelector("body");
for (let i = 0; i < item.length; i++) {
	// let attr = item[i].childNodes[1].getAttribute('href');
	// console.log(item[i].childNodes[1].hasAttribute('href'));
	if (item[i].childNodes[1].hasAttribute('href')) {
		menu_stage.classList.add('hide');
	}

	if (item[i].dataset.page == bod.dataset.page) {
		item[i].classList.toggle("black");
		// console.log(item[i].childNodes[1]);
		item[i].childNodes[1].removeAttribute('href');
	}
	
}