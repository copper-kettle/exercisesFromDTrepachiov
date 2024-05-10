import btn from "../for_button.js";
import arr from "../random_array.js";
import remove_dpl from "../remove_duplicate.js";

function l2S1T2() {
	let array = remove_dpl(arr(1, 1001, 1000));

	function toStr() {
		let str;
		let str_arr = [];
		for (let i = 0; i < array.length; i++) {
			str = String(array[i]);
			str_arr[i] = str;
		}
		return str_arr;
	}

	let string_arr = toStr();
	for (let j = 0; j < string_arr.length; j++) {
		if (Number(string_arr[j][0]) + Number(string_arr[j][1]) == 5) {
			console.log(string_arr[j]);
		}
		
	}
}

btn(l2s1t2, l2S1T2);