import arr from "../../random_array.js";
import btn from "../../for_button.js";

let array = arr(1, 100, 10);
let span = document.querySelector("#spn_l1s10t3");


function l1S10T3() {
	let result;
	console.log(array);
	for (let i = 0; i < array.length; i++) {
		if (i % 2 !== 0) {
			result = array.slice(i - 1, i + 1); 
			console.log(result);
		}
	}
}

/* function printArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (i !== 0) {
			arr[i] = " " + arr[i]
		}
	}
	return "[" + arr + "]";
} */
btn(l1s10t3, l1S10T3)
// span.innerHTML = printArray(array);
