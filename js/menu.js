let level = document.querySelectorAll(".menu_level");
// let level_items = document.querySelector(".menu_level_items");
let menu_stage = document.querySelector('.menu_stage');

for (let i = 0; i < level.length; i++) {
	level[i].addEventListener('click', function () {
		level[i].querySelector(".menu_level_items").classList.toggle('hide');
	});
}