import btn from "../for_button.js";
import arr from "../random_array.js";
import remove_dpl from "../remove_duplicate.js";

function l2S1T3() {
	let num = +document.querySelector("#inp_l2s1t3").value;
	let array = remove_dpl(arr(1, 100, 8));
	
	console.log(num + " || " + typeof num);
}

btn(l2s1t3, l2S1T3);