function l1S3T2() {
	let num_first = prompt("Enter first number", "");
	let num_second = prompt("Enter second number", "");
	if (num_first % num_second ==0 || num_second % num_first == 0) {
		alert("The numbers are multiples");
	} else {
		alert("The numbers are not multiples");
	}
	
}

import btn from "../../for_button.js";
btn(l1s3t2, l1S3T2);