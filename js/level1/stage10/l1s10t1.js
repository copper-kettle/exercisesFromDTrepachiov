import btn from "../../for_button.js";

let lght = document.querySelector("#inp_l1s10t1").value;
lght = Number(lght);

function randomNumber(min, max) {
	return (Math.random()*(max - min) + min);
}

function l1S10T1() {
	let arr = [];
	console.log(lght + " || " + typeof lght);

	if (lght > 20 || lght < 5) {
		alert("Длина массива не более 20 и не менее 5");
	} else {
		for (let i = 0; i < lght; i++) {
			arr.push(randomNumber(1, 100).toFixed(1));
			if (i !== 0) {
				arr[i] = "  " + arr[i];
			}
		}
		alert("[" + arr + "]" + `\n` + "lenght:  " + arr.length);
		window.location.reload();
	}
	



}

btn(l1s10t1, l1S10T1);
