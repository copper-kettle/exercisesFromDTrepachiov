import arr from "../../random_array.js";
import btn from "../../for_button.js";

function l1S10T4() {
	let first = document.querySelector("#inp_l1s10t4_1").value;
	let second = document.querySelector("#inp_l1s10t4_2").value;
	let first_arr_lenght = Number(first);
	let second_arr_lenght = Number(second);
	let first_arr = arr(1, 50, first_arr_lenght);
	let second_arr = arr(1, 50, second_arr_lenght);
	console.log(first_arr + " || " + second_arr);
	alert("[" + first_arr + "]" + `\n` + "[" + second_arr + "]" +`\n` +
		"[" + first_arr.concat(second_arr) + "]");
	window.location.reload();
}

 btn(l1s10t4, l1S10T4);
