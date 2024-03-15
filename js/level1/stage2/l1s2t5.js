function l1S2T5() {
	let num_first = prompt("Enter first number", "");
	let num_second = prompt("Enter second number", "");
	if (Number(num_first.toString()[0]) == Number(num_second.toString()[0])) {
		alert("Coincide");
	} else {
		alert("Not coincode");
	}
}

function executeButton(some_id, some_func) {
	some_id.addEventListener('click', some_func);
}

executeButton(l1s2t5, l1S2T5);