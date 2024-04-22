let item = document.querySelectorAll(".menu_level");
let bod = document.querySelector("body");
for (let i = 0; i < item.length; i++) {
	if (item[i].dataset.page == bod.dataset.page) {
		item[i].classList.toggle("black");
		console.log(item[i].childNodes[1]);
		item[i]
	}
	
}